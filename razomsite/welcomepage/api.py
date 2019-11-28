from .models import InfoDiv
from rest_framework import viewsets, permissions
from .serializers import InfoDivSerializer

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
