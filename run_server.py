import http.server
import socketserver
import os
from urllib.parse import urlparse, unquote

PORT = 4325
DIST_DIR = os.path.abspath(r'C:\Users\AMMAR\.gemini\antigravity-ide\scratch\dairy-queen-astro\dist')

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

    def translate_path(self, path):
        # Decode and parse path
        parsed = urlparse(path)
        clean_path = unquote(parsed.path)

        # Normalize /index to /
        if clean_path in ['/index', '/index.html']:
            return os.path.join(DIST_DIR, 'index.html')

        # Default translated path
        translated = super().translate_path(path)

        # If file exists, return directly
        if os.path.exists(translated):
            return translated

        # Check if path + .html exists
        if os.path.exists(translated + '.html'):
            return translated + '.html'

        # Check if path/index.html exists
        if os.path.exists(os.path.join(translated, 'index.html')):
            return os.path.join(translated, 'index.html')

        return translated

    def list_directory(self, path):
        # Never expose raw directory listings to users
        self.send_response(302)
        self.send_header('Location', '/#full-menu')
        self.end_headers()
        return None

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('', PORT), CleanUrlHandler) as httpd:
        print(f"Serving {DIST_DIR} on http://localhost:{PORT}")
        httpd.serve_forever()
