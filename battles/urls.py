from django.conf.urls import url

from .views import CombatView, BalanceView, IndexView

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^combat/$', CombatView.as_view(), name='combat'),
    url(r'^balance/$', BalanceView.as_view(), name='balance'),
]
