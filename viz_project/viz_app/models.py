from django.db import models


class Project_data(models.Model):
    id = models.AutoField(primary_key=True)

    end_year = models.CharField(max_length=10, blank=True, null=True)
    start_year = models.CharField(max_length=10, blank=True, null=True)

    intensity = models.IntegerField(blank=True, null=True)
    impact = models.IntegerField(blank=True, null=True)
    relevance = models.IntegerField(blank=True, null=True)
    likelihood = models.IntegerField(blank=True, null=True)

    sector = models.CharField(max_length=50, blank=True, null=True)
    topic = models.CharField(max_length=50, blank=True, null=True)
    insight = models.TextField(blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    region = models.CharField(max_length=50, blank=True, null=True)
    
    
    added = models.CharField(max_length=10,blank=True, null=True)
    published = models.CharField(max_length=10,blank=True, null=True)

    country = models.CharField(max_length=50, blank=True, null=True)
    pestle = models.CharField(max_length=100, blank=True, null=True)
    source = models.CharField(max_length=50, blank=True, null=True)
    title = models.TextField(blank=True, null=True)