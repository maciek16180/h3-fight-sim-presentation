from django.conf.urls import url
from django.views.decorators.cache import cache_page

from .views import CombatView, BalanceView, IndexView

cache = True

def cached_view(view):
    if not cache:
        return view.as_view()
    return cache_page(60*60)(view.as_view())

urlpatterns = [
    url(r'^$', cached_view(IndexView), name='index'),
    url(r'^combat/$', CombatView.as_view(), name='combat'),
    url(r'^balance/$', BalanceView.as_view(), name='balance'),
]
