from rest_framework import serializers
from .models import InfoDiv

# Lead Serializer
class InfoDivSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoDiv
        fields = '__all__'

