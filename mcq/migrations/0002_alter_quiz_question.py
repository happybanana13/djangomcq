# Generated by Django 3.2 on 2021-04-25 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcq', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='question',
            field=models.ManyToManyField(related_name='questionlist', to='mcq.Question'),
        ),
    ]
