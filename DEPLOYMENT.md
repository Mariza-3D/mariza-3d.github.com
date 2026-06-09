# Mariza 3D Deployment

## Build

```bash
npm install
npm run build
```

The static production files are generated in `dist/`.

## Simple Server Upload

Upload the contents of `dist/` to the web root of the server, for example:

```text
/var/www/mariza3d/
```

For an SPA, configure the server to return `index.html` for unknown routes.

## Nginx Example

```nginx
server {
  listen 80;
  server_name example.com www.example.com;

  root /var/www/mariza3d;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~* \.(js|css|png|jpg|jpeg|svg|webp|glb|woff|woff2)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
    try_files $uri =404;
  }
}
```

After DNS points to the server, enable HTTPS with Certbot:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

## Domain Checklist

1. Buy a domain from Namecheap, Cloudflare Registrar, Reg.ru, Timeweb, GoDaddy, or another registrar.
2. Point `A` record to the server IP.
3. Add `www` as `CNAME` to the root domain or another `A` record to the same IP.
4. Install the production build on the server.
5. Enable HTTPS.
6. Update `index.html` canonical and Open Graph URL from `https://mariza-3d.github.io/` to the final domain.
