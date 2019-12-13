from rest_framework import serializers
from .models import InfoDiv, UserInfo, AppMedia

# Lead Serializer


class InfoDivSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoDiv
        fields = '__all__'

# User Serializer


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = '__all__'


# App Media Serializer
class AppMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppMedia
        fields = '__all__'
