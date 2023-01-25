from rest_framework import serializers
from .models import Pessoa, Condominio
from django.db import models

import re
from datetime import datetime

class PessoaSerializer(serializers.HyperlinkedModelSerializer):
    def validate_nome(self,value):
        value = value.strip()
        quantia_digitos = len(re.findall(r'\d+',value))

        if  quantia_digitos > 0:
            raise serializers.ValidationError("Nome inválido, não devem existir números em nomes.")
        
        return value

    def validate_cpf(self,value):
        value = value.strip()
        cpf_valido = re.findall(r'^\d{3}\.\d{3}\.\d{3}-\d{2}$',value)

        if not cpf_valido:
            raise serializers.ValidationError("Cpf inválido, formato não aceito.")
        
        return value

    def validate_email(self,value):
        value = value.strip()
        email_valido = re.findall(r'^.+@[a-zA-Z]+\.[a-zA-Z]+$',value)

        if not email_valido:
            raise serializers.ValidationError("E-mail inválido, formato não aceito.")
        
        return value

    def validate_telefone(self,value):
        value = value.strip()
        telefone_valido = re.findall(r'^\(\d{2}\)\ \d{5}-\d{4}$',value)

        if not telefone_valido:
            raise serializers.ValidationError("Telefone inválido, formato não aceito.")
        
        return value

    def validate_data_nascimento(self,value):
        hoje = datetime.now().strftime("%Y-%m-%d")
        value = value.strftime("%Y-%m-%d")

        if hoje < value:
            raise serializers.ValidationError("Data inválida, impossível criar usuário que não nasceu ainda.")
        
        return value


    class Meta:
        model = Pessoa
        fields = ('cpf',
                  'nome',
                  'email',
                  'telefone',
                  'senha',
                  'sexo',
                  'data_nascimento'
                )
        
        
class CondominioSerializer(serializers.ModelSerializer):
    #pessoa = models.ForeignKey(Pessoa, on_delete=models.SET_NULL)
    #cpf = serializers.SlugRelatedField(read_only=True, slug_field='cpf')

    class Meta:
        model = Condominio
        fields = ( 'cpf',
                   'cnpj', 
                   'nome_fantasia', 
                   'cep', 
                   'numero', 
                   'rua', 
                   'bairro', 
                   'cidade', 
                   'estado' 
                )
