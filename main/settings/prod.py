from .devel import *

DEBUG = False

# change ALLOWED_HOSTS before release
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')

ADMINS = [('Maciej', 'pawlikowski.maciek@gmail.com')]
MANAGERS = ADMINS

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

CONN_MAX_AGE = 30
