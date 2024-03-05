from django.shortcuts import render
from django.http import HttpResponse, request, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .models import *
from .serializer import *
from django.db import connection
from pymongo import MongoClient
import json

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

# @api_view(['GET'])
# def home_json(request):
#     if request.method == 'GET':
#         cursor = connection.cursor()
#         cursor.execute("select count(*) as avg from viz_app_project_data where sector='energy';")
#         data = dictfetchall(cursor)
#         print(data)
#         serializer = Project_data_serializer_avg(data,many=True)
#         return Response(serializer.data)

def home(request):
    return render(request,'home.html')


# def insert_data(request):
#     #data = Project_data.objects.all()
#     client = MongoClient("mongodb://localhost:27017/")
#     db = client["practice"]
#     collection = db["gdp"]
#     result = collection.find({},{'_id':0})
#     for document in result:
#         data = Project_data()
#         if document['end_year']:
#             data.end_year = str(document['end_year'])
#         else:
#             data.end_year = None
#         if document['start_year']:
#             data.start_year = str(document['start_year'])
#         else:
#             data.start_year = None
        
#         if document['intensity']:
#             data.intensity = int(document['intensity'])
#         else:
#             data.intensity = None
#         if document['impact']:
#             data.impact = int(document['impact'])
#         else:
#             data.impact = None
#         if document['relevance']:
#             data.relevance = int(document['relevance'])
#         else:
#             data.relevance = None
#         if document['likelihood']:
#             data.likelihood = int(document['likelihood'])
#         else:
#             data.likelihood=None
#         data.sector = str(document['sector'])
#         data.topic = str(document['topic'])
#         data.insight = str(document['insight'])
#         data.url = str(document['url'])
#         data.region = str(document['region'])

#         data.added = str(document['added'])
#         data.published = str(document['published'])

#         data.country = str(document['country'])
#         data.pestle = str(document['pestle'])
#         data.source = str(document['source'])
#         data.title = str(document['title']) 
#         data.save()


# def insert(request):
#     project_data_instances = Project_data.objects.all()

# # Iterate through the instances and create corresponding instances in Project_data1
#     for project_data_instance in project_data_instances:
#         project_data1_instance = Project_data1(
#         end_year=project_data_instance.end_year,
#         start_year=project_data_instance.start_year,
#         intensity=project_data_instance.intensity,
#         impact=project_data_instance.impact,
#         relevance=project_data_instance.relevance,
#         likelihood=project_data_instance.likelihood,
#         sector=project_data_instance.sector,
#         topic=project_data_instance.topic,
#         insight=project_data_instance.insight,
#         url=project_data_instance.url,
#         added=project_data_instance.added,
#         published=project_data_instance.published,
#         country=project_data_instance.country,
#         pestle=project_data_instance.pestle,
#         source=project_data_instance.source,
#         title=project_data_instance.title,
#         )
#         project_data1_instance.save()

# def lower(request):
#     data = Project_data.objects.all()
#     for i in data:
#         i.topic = i.topic.strip().lower() if i.topic else None
#         i.country = i.country.strip().lower() if i.topic else None
#         i.sector = i.sector.strip().lower() if i.sector else None
#         i.region = i.region.strip().lower() if i.region else None
#         i.pestle = i.pestle.strip().lower() if i.pestle else None
#         i.title = i.title.strip() if i.title else None
#         i.save()
#     return 

# @api_view(['GET'])
# def time_vs_intensity(request,year):
#     cursor = connection.cursor()
#     query = f"select end_year, sum(intensity) as intensity from viz_app_project_data where end_year <= {year} group by end_year having end_year is not null and intensity is not null order by end_year ASC;"
#     cursor.execute(query)
#     data = dictfetchall(cursor)
#     serializer = Time_vs_intensity(data,many=True)
#     return Response(serializer.data)



# @api_view(['GET'])
# def time_vs_all_of_oil(request):
#     cursor = connection.cursor()
#     cursor.execute("select end_year, avg(intensity) as intensity, avg(likelihood) as likelihood, avg(relevance) as relevance from viz_app_project_data group by topic, end_year having topic = 'oil' and end_year is not null and intensity is not null and likelihood is not null and relevance is not null order by end_year ASC;")
#     data = dictfetchall(cursor)
#     serializer = Time_vs_all_of_oil(data,many=True)
#     return Response(serializer.data)

# def organize(request):
#     cursor = connection.cursor()
#     cursor.execute("select sector,topic,pestle from viz_app_project_data group by sector,topic,pestle having topic is not null and sector is not null and pestle is not null;")
#     data = dictfetchall(cursor)
#     for i in data:
#         print(i)

# @api_view(['GET'])
# def get_regions_by_sector(request,sector):
#     cursor = connection.cursor()
#     cursor.execute("select distinct region from viz_app_project_data where sector=%s and (region != '' and region is not null) order by region;",[sector])
#     data = dictfetchall(cursor)
#     serializer = Get_regions_by_sector(data,many=True)
#     return Response(serializer.data)

# def strip_source(request):
#     data = Project_data.objects.all()
#     for i in data:
#         i.source = i.source.strip() if i.source else None
#         i.save()
#     print("SUCCESS-------------------------------------------------------------")
#     return 

@api_view(['GET'])
def get_list_by(request,element):
    cursor = connection.cursor()
    query = f"select distinct {element} as list_data from viz_app_project_data where {element} != '' and {element} is not null order by {element};"
    cursor.execute(query)
    data = dictfetchall(cursor)
    serializer = Get_list_by(data,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_all(request):
    cursor = connection.cursor()
    cursor.execute("select * from viz_app_project_data;")
    data = dictfetchall(cursor)
    serializer = Get_all(data,many=True)
    return Response(serializer.data)
