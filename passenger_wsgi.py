import os
import sys

# Add project directory to Python path
sys.path.insert(0, os.path.dirname(__file__))

# Set Django settings module
os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "realestate.settings"
)

# Load Django WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
