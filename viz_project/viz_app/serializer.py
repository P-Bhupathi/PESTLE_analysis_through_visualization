from rest_framework import serializers
from .models import *


class Project_data_serializer_all(serializers.ModelSerializer):
    class Meta:
        model = Project_data
        fields = '__all__'
        
class Project_data_serializer_avg(serializers.Serializer):
    avg = serializers.IntegerField()
    #id = serializers.CharField()

class Time_vs_intensity(serializers.Serializer):
    end_year = serializers.IntegerField()
    intensity = serializers.FloatField()

class Time_vs_all_of_oil(serializers.Serializer):
    end_year = serializers.IntegerField()
    intensity = serializers.FloatField()
    likelihood = serializers.FloatField()
    relevance = serializers.FloatField()

class Get_regions_by_sector(serializers.Serializer):
    region = serializers.CharField()

class Get_list_by(serializers.Serializer):
    list_data = serializers.CharField()

class Get_all(serializers.ModelSerializer):
    class Meta:
        model = Project_data
        fields = '__all__'