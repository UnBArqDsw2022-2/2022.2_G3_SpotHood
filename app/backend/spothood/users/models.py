from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.

class Imovel(models.Model):
    imovel_id = models.IntegerField(primary_key=True)
    qtd_morador = models.IntegerField(null=True)
    bloco = models.CharField(max_length=101,null=True)
    numero = models.IntegerField(null=True)
    nome = models.CharField(max_length=101,null=True)
    descricao = models.TextField(null=True)

class EspacoHabitacional(models.Model):
    espaco_habitacional_id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=101,null=True)
    descricao = models.TextField(null=True)

class Aviso(models.Model):
    aviso_id = models.IntegerField(primary_key=True)
    data_envio = models.DateField(null=True)
    titulo = models.CharField(max_length=30,null=True)
    descricao = models.TextField(max_length=300,null=True)
    anexo = models.BinaryField(null=True)


class Pessoa(models.Model):
    cpf = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=80,null=True)
    email = models.CharField(max_length=80,null=True)
    senha = models.CharField(max_length=20,null=True)
    sexo = models.CharField(max_length=1,null=True)
    data_nascimento = models.DateField(null=True)

class Sindico(Pessoa):
    condominio_id = models.IntegerField(null=True)

class Morador(Pessoa):
    condominio_id = models.IntegerField(null=True)
    imovel_id = models.IntegerField(null=True)

class Condominio(models.Model):
    cnpj = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=101,null=True)
