from rest_framework import viewsets
from rest_framework import permissions
from .models import Pessoa
from .serializers import PessoaSerializer

class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    permission_classes = (permissions.AllowAny,)