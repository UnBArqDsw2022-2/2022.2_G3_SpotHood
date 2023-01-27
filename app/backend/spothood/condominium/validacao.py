from datetime import datetime
import re

class Validador:

    @staticmethod
    def nome_valido(nome: str) -> bool:

        quantia_digitos = len(re.findall(r'\d+',nome))

        if  quantia_digitos > 0:
            return False

        return True

    @staticmethod
    def cpf_valido(cpf: str) -> bool:

        cpf_valido = re.findall(r'^\d{3}\.\d{3}\.\d{3}-\d{2}$',cpf)

        if not cpf_valido:
            return False

        return True

    @staticmethod
    def email_valido(email: str) -> bool:
        email_valido = re.findall(r'^.+@[a-zA-Z]+\.[a-zA-Z]+$',email)

        if not email_valido:
            return False

        return True

    @staticmethod
    def telefone_valido(telefone: str) -> bool:
        telefone_valido = re.findall(r'^\(\d{2}\)\ \d{5}-\d{4}$',telefone)

        if not telefone_valido:
            return False

        return True

    @staticmethod
    def data_nascimento_valida(data_nascimento: str) -> bool:
        hoje = datetime.now().strftime("%Y-%m-%d")

        if hoje < data_nascimento:
            return False

        return True

    @staticmethod
    def cnpj_valido(cnpj: str) -> bool:
        cnpj_valido = re.findall(r'^\d{2}\.\d{3}\.\d{3}\/000[12]-\d{2}$',cnpj)

        if not cnpj_valido:
            return False

        return True
    @staticmethod
    def cep_valido(cep: str) -> bool:
        cep_valido = re.findall(r'^\d{5}-\d{3}$',cep)

        if not cep_valido:
            return False

        return True

    @staticmethod
    def numero_valido(numero: int) -> bool:

        if numero > 0:
            return True

        return False
