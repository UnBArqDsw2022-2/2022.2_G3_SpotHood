from rest_framework import viewsets
from rest_framework import permissions
from .models import Pessoa, Condominio
from .serializers import PessoaSerializer, CondominioSerializer

class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    permission_classes = (permissions.AllowAny,)

class CondominioViewSet(viewsets.ModelViewSet):
    queryset = Condominio.objects.all()
    serializer_class = CondominioSerializer
    permission_classes = (permissions.AllowAny,)
