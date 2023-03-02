from django.db import models

# Create your models here.
class Member(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(("string"), max_length=254)
    mobile = models.IntegerField("13")

class Meta:
    db_table = "tbl_member"