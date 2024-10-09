# Generated by Django 5.1.2 on 2024-10-09 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_drink_alcohol_percentage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='drink',
            old_name='category_id',
            new_name='category',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='is_authenticated',
            new_name='is_active',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_superuser',
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]
