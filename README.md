# Certifyd Investor Brief

Static GitHub Pages site for Certifyd's $5M infrastructure raise.

Target domain:

```text
investor.certifyd.me
```

## Files

- `index.html` — single-page investor website, plain HTML/CSS only.
- `CNAME` — custom GitHub Pages domain.
- `README.md` — deployment notes.

## Enable GitHub Pages

1. Open the GitHub repository settings.
2. Go to **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch: `main`.
5. Select folder: `/ (root)`.
6. Save.

GitHub Pages will publish the static site from `index.html`.

## Configure DNS for `investor.certifyd.me`

At the DNS provider for `certifyd.me`, create a CNAME record:

```text
Type:  CNAME
Name:  infrastructure
Value: BEATiFYAUDIO.github.io
```

Keep the repository `CNAME` file set to:

```text
investor.certifyd.me
```

GitHub Pages uses that file to bind the custom domain to the site.

## Enforce HTTPS

After DNS resolves:

1. Open repository **Settings**.
2. Go to **Pages**.
3. Confirm the custom domain shows `investor.certifyd.me`.
4. Wait for GitHub to issue the TLS certificate.
5. Enable **Enforce HTTPS**.

If the HTTPS checkbox is disabled, wait for DNS and certificate provisioning to complete, then refresh the Pages settings page.
