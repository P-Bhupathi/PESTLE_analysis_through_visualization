# Generated by Django 5.0 on 2023-12-27 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project_data',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('end_year', models.CharField(blank=True, max_length=10, null=True)),
                ('start_year', models.CharField(blank=True, max_length=10, null=True)),
                ('intensity', models.IntegerField(blank=True, null=True)),
                ('impact', models.IntegerField(blank=True, null=True)),
                ('relevance', models.IntegerField(blank=True, null=True)),
                ('likelihood', models.IntegerField(blank=True, null=True)),
                ('sector', models.CharField(blank=True, max_length=50, null=True)),
                ('topic', models.CharField(blank=True, max_length=50, null=True)),
                ('insight', models.TextField(blank=True, null=True)),
                ('url', models.URLField(blank=True, null=True)),
                ('region', models.CharField(blank=True, max_length=50, null=True)),
                ('added', models.CharField(blank=True, max_length=10, null=True)),
                ('published', models.CharField(blank=True, max_length=10, null=True)),
                ('country', models.CharField(blank=True, max_length=50, null=True)),
                ('pestle', models.CharField(blank=True, max_length=100, null=True)),
                ('source', models.CharField(blank=True, max_length=50, null=True)),
                ('title', models.TextField(blank=True, null=True)),
            ],
        ),
    ]