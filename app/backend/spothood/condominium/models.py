from django.db import models


class Pessoa(models.Model):
    cpf = models.CharField(primary_key=True, max_length=14, null=False)
    nome  = models.CharField(max_length=150, null=False)
    email = models.CharField(max_length=75, null=False)
    telefone = models.CharField(max_length=15, null=False)
    senha = models.CharField(max_length=250, null=False)
    sexo = models.CharField(max_length=1,choices=(('M', 'Masculino'),('F', 'Feminino')))
    data_nascimento = models.DateField(null=False)
