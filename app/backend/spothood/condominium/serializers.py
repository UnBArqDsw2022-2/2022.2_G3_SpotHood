from rest_framework import serializers
from .models import Pessoa, Condominio, Aviso, Imovel

from .validacao import Validador

class PessoaSerializer(serializers.HyperlinkedModelSerializer):
    def validate_nome(self,value):
        value = value.strip()

        if Validador.possui_digito(value):
            raise serializers.ValidationError("Nome inválido, não devem existir números em nomes.")
        
        return value

    def validate_cpf(self,value):
        value = value.strip()

        if not Validador.cpf_valido(value):
            raise serializers.ValidationError("Cpf inválido, formato aceito: [XXX.XXX.XXX-XX].")
        
        return value

    def validate_email(self,value):
        value = value.strip()

        if not Validador.email_valido(value):
            raise serializers.ValidationError("E-mail inválido, formato  aceito: [algo@dominio_sem_numero.palavra_sem_numero].")
        
        return value

    def validate_telefone(self,value):
        value = value.strip()

        if not Validador.telefone_valido(value):
            raise serializers.ValidationError("Telefone inválido, formato aceito:[(XX) XXXXX-XXXX].")
        
        return value

    def validate_data_nascimento(self,value):
        value = value.strftime("%Y-%m-%d")

        if not Validador.data_nascimento_valida(value):
            raise serializers.ValidationError("Data inválida, impossível inserir usuário que não nasceu ainda.")
        
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
    def validate_cnpj(self,value):
        value = value.strip()

        if not Validador.cnpj_valido(value):
            raise serializers.ValidationError("Cnpj inválido, formato aceito: [XX.XXX.XXX/000D-XX]. D assume 1 ou 2.")
        return value

    def validate_cep(self,value):
        value = value.strip()
        if not Validador.cep_valido(value):
            raise serializers.ValidationError("Cep inválido, formato aceito: [XXXXX-XXX].")
        return value

    def validate_numero(self,value):
        if not Validador.numero_valido(value):
            raise serializers.ValidationError("Numero inválido, digite um valor não negativo.")
        return value

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

class AvisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aviso
        fields = ( 
                'cnpj',
                'idAviso',
                'titulo',
                'descricao',
                'data_cadastro'
                )

class ImovelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imovel
        fields = ( 
                'idImovel',
                'cpf',
                'cnpj',
                'informacao_complementar',
                )
