# Despliegue (Ubuntu + Docker + Cloudflare Tunnel)

- Sitio: https://d4nthi.com (`www` redirige al apex). Contenedor `d4nthi-landing` (nginx).
- Repo en el servidor: `/home/d4nthi/d4nthi-setup`
- Reutiliza el tunel de Notes (`notes-setup-cloudflared-1`) y su red Docker `notes-setup_default`.
  No se publican puertos.

## 1. Primera vez

```bash
git clone git@github.com:MichaelHernandezNaranjo/d4nthi.git ~/d4nthi-setup
cd ~/d4nthi-setup
docker compose up -d --build
```

Edita `/opt/notes/cloudflared/config.yml` (haz copia `config.yml.bak`) y agrega antes de la regla 404:

```yaml
  - hostname: d4nthi.com
    service: http://d4nthi-landing:80
  - hostname: www.d4nthi.com
    service: http://d4nthi-landing:80
```

```bash
docker restart notes-setup-cloudflared-1
docker exec notes-setup-cloudflared-1 cloudflared tunnel route dns <TUNNEL_ID> d4nthi.com
docker exec notes-setup-cloudflared-1 cloudflared tunnel route dns <TUNNEL_ID> www.d4nthi.com
```

## 2. Actualizar

```bash
bash ~/d4nthi-setup/deploy/deploy.sh
```

Hace `git pull` y `docker compose up -d --build`. El workflow `.github/workflows/deploy.yml`
hace lo mismo en cada push a `main`, pero necesita un runner self-hosted (ver
`notes/deploy/README.md`, seccion 2). Mientras no exista, usa `deploy.sh`.

## Comandos utiles

```bash
docker compose ps
docker compose logs -f landing
```
