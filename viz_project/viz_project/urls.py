
from django.contrib import admin
from django.urls import path
from viz_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/',home,name='home'),
    # path('home_json/',home_json,name='home_json'),
    #path('insert_data/',insert_data,name='insert_data')
    # path('time_vs_intensity/<str:year>/',time_vs_intensity,name='time_vs_intensity_of_oil'),
    # path('time_vs_all_of_oil/',time_vs_all_of_oil,name='time_vs_all_of_oil'),
    #path('organize/',organize,name='organize'),
    # path("get_regions_by_sector/<str:sector>",get_regions_by_sector,name="get_regions_by_sector"),
    #path('strip_source/',strip_source,name="strip_source")
    path("get_list_by/<str:element>",get_list_by,name='get_list_by'),
    path("all/",get_all,name="all"),
]
