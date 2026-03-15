import os
import sys

sys.path.insert(1, os.path.expanduser('~/public_html/'))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'metalcraft.settings')

application = get_wsgi_application()
