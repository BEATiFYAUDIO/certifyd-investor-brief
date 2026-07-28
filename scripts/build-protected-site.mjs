#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const password = process.env.INVESTOR_PAGE_PASSWORD;
const staticryptSalt = '121336ac505e5fafdbc9aee08c6b742c';

if (!password) {
  console.error('Missing required environment variable: INVESTOR_PAGE_PASSWORD');
  process.exit(1);
}

await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });

for (const entry of await fs.readdir(root, { withFileTypes: true })) {
  if (entry.name.startsWith('.')) continue;
  if (['.git', '.github', 'node_modules', 'dist', 'scripts'].includes(entry.name)) continue;
  if (['package-lock.json', 'package.json', 'README.md'].includes(entry.name)) continue;
  const source = path.join(root, entry.name);
  const target = path.join(dist, entry.name);
  if (entry.isDirectory()) await fs.cp(source, target, { recursive: true });
  else if (entry.isFile()) await fs.copyFile(source, target);
}

const htmlFiles = await findHtmlFiles(dist);
const templatePath = await writeTemplate();
for (const htmlFile of htmlFiles) await encryptHtml(htmlFile, templatePath);
await fs.rm(path.join(dist, '.staticrypt-template.html'), { force: true });
await fs.rm(path.join(dist, '.staticrypt-output'), { recursive: true, force: true });

console.log(`Protected investor site generated in dist with ${htmlFiles.length} encrypted HTML file(s).`);

async function writeTemplate() {
  const defaultTemplate = path.join(root, 'node_modules', 'staticrypt', 'lib', 'password_template.html');
  let template = await fs.readFile(defaultTemplate, 'utf8');
  template = template.replace('<title>/*[|template_title|]*/0</title>', '<title>Certifyd Investor Access</title>');
  template = template.replace('<p class="staticrypt-title">/*[|template_title|]*/0</p>', '<p class="staticrypt-title">Private Investor Access</p>');
  const templateFile = path.join(dist, '.staticrypt-template.html');
  await fs.writeFile(templateFile, template, 'utf8');
  return templateFile;
}

async function findHtmlFiles(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.')) files.push(...await findHtmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

async function encryptHtml(htmlFile, templateFile) {
  const outDir = path.join(dist, '.staticrypt-output', path.relative(dist, path.dirname(htmlFile)));
  await fs.mkdir(outDir, { recursive: true });
  const result = spawnSync(path.join(root, 'node_modules', '.bin', 'staticrypt'), [
    htmlFile,
    '--config', 'false',
    '--directory', outDir,
    '--template', templateFile,
    '--template-button', 'Unlock',
    '--template-placeholder', 'Password',
    '--template-instructions', 'Enter the investor access password provided by Certifyd.',
    '--template-color-primary', '#ff9f1a',
    '--template-color-secondary', '#050a12',
    '--remember', '30',
    '--salt', staticryptSalt,
    '--short',
  ], {
    cwd: root,
    env: { ...process.env, STATICRYPT_PASSWORD: password },
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    console.error(result.stderr || result.stdout || `StatiCrypt failed for ${path.relative(root, htmlFile)}`);
    process.exit(result.status || 1);
  }
  const encryptedFile = path.join(outDir, path.basename(htmlFile));
  await fs.copyFile(encryptedFile, htmlFile);
}
