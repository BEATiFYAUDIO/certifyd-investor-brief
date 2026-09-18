# Certifyd Investor Brief

Static GitHub Pages site for Certifyd's private investor portal.

Target domain:

```text
investor.certifyd.me
```

## Files

- `index.html` — investor ecosystem and product overview.
- `investment.html` — investment thesis, economics, proof of execution, use of funds and ask.
- `assets/data/ecosystemProperties.js` — typed public property data used by the homepage.
- `assets/screenshots/` — local screenshots captured from verified public URLs.
- `CNAME` — custom GitHub Pages domain.
- `README.md` — deployment notes.

## Deployment

Pushes to `main` trigger `.github/workflows/pages.yml`. The workflow installs dependencies, builds the password-protected site into `dist`, and deploys that artifact to GitHub Pages.

## Configure DNS for `investor.certifyd.me`

At the DNS provider for `certifyd.me`, create a CNAME record:

```text
Type:  CNAME
Name:  investor
Value: BEATiFYAUDIO.github.io
```

Keep the repository `CNAME` file set to:

```text
investor.certifyd.me
```

GitHub Pages uses that file to bind the custom domain to the site.

## Private investor password

Create a GitHub Actions repository secret named `INVESTOR_PAGE_PASSWORD`.

Push to `main` to deploy the encrypted GitHub Pages site. The workflow builds the static site into `dist`, encrypts the HTML pages with StatiCrypt, and uploads only the protected artifact.

Changing `INVESTOR_PAGE_PASSWORD` and redeploying changes the shared investor password. Do not commit the password to the repository.

## Enforce HTTPS

After DNS resolves:

1. Open repository **Settings**.
2. Go to **Pages**.
3. Confirm the custom domain shows `investor.certifyd.me`.
4. Wait for GitHub to issue the TLS certificate.
5. Enable **Enforce HTTPS**.

If the HTTPS checkbox is disabled, wait for DNS and certificate provisioning to complete, then refresh the Pages settings page.
