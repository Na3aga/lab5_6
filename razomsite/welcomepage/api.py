from .models import InfoDiv
from rest_framework import viewsets, permissions
from .serializers import InfoDivSerializer, UserInfoSerializer, AppMediaSerializer

# InfoDiv viewset


class InfoDivViewset(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = InfoDivSerializer

    def get_queryset(self):
        return self.request.user.pages.all()

    def perform_create(self, serializer):
        serializer.save(publicator=self.request.user)


class UserInfoViewset(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = UserInfoSerializer

    def get_queryset(self):
        return self.request.user.user.all()

    def perform_create(self, serializer):
        serializer.save(publicator=self.request.user)


class AppMediaViewset(viewsets.ModelViewSet):

    serializer_class = AppMediaSerializer

    def get_queryset(self):
        return self.request.user.user.all()

    def perform_create(self, serializer):
        serializer.save(publicator=self.request.user)