from django.db import models

ESTADOS = (
    ('AC','Acre'),
    ('AL','Alagoas'),
    ('AP','Amapá'),
    ('AM','Amazonas'),
    ('BA','Bahia'),
    ('CE','Ceará'),
    ('DF','Distrito Federal'),
    ('ES','Espírito Santo'),
    ('GO','Goiás'),
    ('MA','Maranhão'),
    ('MT','Mato Grosso'),
    ('MS','Mato Grosso do Sul'),
    ('MG','Minas Gerais'),
    ('PA','Pará'),
    ('PB','Paraíba'),
    ('PR','Paraná'),
    ('PE','Pernambuco'),
    ('PI','Piauí'),
    ('RJ','Rio de Janeiro'),
    ('RN','Rio Grande do Norte'),
    ('RS','Rio Grande do Sul'),
    ('RO','Rondônia'),
    ('RR','Roraima'),
    ('SC','Santa Catarina'),
    ('SP','São Paulo'),
    ('SE','Sergipe'),
    ('TO','Tocantins')
)

class Pessoa(models.Model):
    cpf = models.CharField(primary_key=True, max_length=14, null=False)
    nome  = models.CharField(max_length=150, null=False)
    email = models.CharField(max_length=75, null=False)
    telefone = models.CharField(max_length=15, null=False)
    senha = models.CharField(max_length=250, null=False)
    sexo = models.CharField(max_length=1,choices=(('M', 'Masculino'),('F', 'Feminino')))
    data_nascimento = models.DateField(null=False)

class Condominio(models.Model):
    cnpj = models.CharField(primary_key=True, max_length=18, null=False) 
    cpf = models.ForeignKey(Pessoa, on_delete=models.RESTRICT, verbose_name=('cpf'))
    nome_fantasia = models.CharField(max_length=150, null=False)

    cep = models.CharField(max_length=9,null=False) 
    numero = models.IntegerField(null=False)
    rua = models.CharField(max_length=250, null=False)
    bairro = models.CharField(max_length=250, null=False)
    cidade = models.CharField(max_length=150, null=False)
    estado = models.CharField(max_length=2,choices=ESTADOS)

class Aviso(models.Model):
    idAviso = models.AutoField(primary_key=True) 
    cnpj = models.ForeignKey(Condominio, on_delete=models.RESTRICT, verbose_name=('cnpj'))

    titulo = models.CharField(max_length=75, null=False)
    descricao = models.CharField(max_length=500, null=False)
    data_cadastro = models.DateTimeField(auto_now_add=True,null=False)

class Imovel(models.Model):
    idImovel = models.AutoField(primary_key=True) 
    cpf = models.ForeignKey(Pessoa, on_delete=models.RESTRICT, verbose_name=('cpf'))
    cnpj = models.ForeignKey(Condominio, on_delete=models.RESTRICT, verbose_name=('cnpj'))

    informacao_complementar = models.CharField(max_length=500, null=False)


class EspacoHabitacional(models.Model):
    idEspacoHabitacional = models.AutoField(primary_key=True)  
    nome = models.CharField(max_length=75, null=False)
    descricao = models.CharField(max_length=500, null=False)
    cnpj = models.ForeignKey(Condominio, on_delete=models.RESTRICT, verbose_name=('cnpj'))
    reserva = models.ManyToManyField("Pessoa" ,through='ReservaEspacoHabitacional', related_name='pessoas')


class ReservaEspacoHabitacional(models.Model):
    pessoa = models.ForeignKey(Pessoa, on_delete=models.RESTRICT)
    espaco_habitacional = models.ForeignKey(EspacoHabitacional, on_delete=models.RESTRICT)
    data = models.DateField()
    
