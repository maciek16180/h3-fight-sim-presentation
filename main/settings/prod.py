from .devel import *

DEBUG = False

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

SECRET_KEY = '3mpy=8ht#mvhpl!!==35ss)=_2f6j%cfuo53+hzzbb==!t$&78'

ADMINS = [('Maciej', 'pawlikowski.maciek@gmail.com')]
MANAGERS = ADMINS

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

CONN_MAX_AGE = 30