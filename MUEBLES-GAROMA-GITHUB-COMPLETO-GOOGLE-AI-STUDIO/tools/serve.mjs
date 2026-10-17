import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(fileURLToPath(new URL('../', import.meta.url)));
const dist = process.argv.includes('--dist');
const port = Number(process.env.PORT || 5173);
const host = '0.0.0.0';
const typeByExt = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2'
};

createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const rel = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    const root = dist ? join(repo, 'dist') : (rel.startsWith('media/') || rel === 'robots.txt') ? join(repo, 'public') : repo;
    const target = resolve(root, rel);
    if (target !== root && !target.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    const info = await stat(target);
    if (!info.isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': typeByExt[extname(target).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(await readFile(target));
  } catch { res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'}).end('Archivo no encontrado'); }
}).listen(port, host, () => console.log(`Muebles Garoma: http://localhost:${port} (${dist ? 'producción' : 'desarrollo'})`));
