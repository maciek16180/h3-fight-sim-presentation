from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^combat/$', views.combat, name='combat'),
    url(r'^balance/$', views.balance, name='balance'),
]
