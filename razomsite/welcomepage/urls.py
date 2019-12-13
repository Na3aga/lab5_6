# from django.urls import path
# from . import views

from rest_framework import routers
from .api import InfoDivViewset, UserInfoViewset

router = routers.DefaultRouter()
router.register('api/welcomepage', InfoDivViewset, 'welcomepage')
router.register('api/userinfo', UserInfoViewset, 'userinfo')
router.register('api/userinfo', UserInfoViewset, 'userinfo')

# urlpatterns = [
#     path('', views.index, name='index'),
# ]  + router.urls

urlpatterns = router.urls
