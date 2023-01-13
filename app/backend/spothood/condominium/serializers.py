from rest_framework import serializers
from .models import Pessoa

class PessoaSerializer(serializers.HyperlinkedModelSerializer):
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
        
        
