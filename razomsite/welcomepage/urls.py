# from django.urls import path
# from . import views

from rest_framework import routers
from .api import InfoDivViewset

router = routers.DefaultRouter()
router.register('api/welcomepage', InfoDivViewset, 'welcomepage')

# urlpatterns = [
#     path('', views.index, name='index'),
# ]  + router.urls

urlpatterns = router.urls