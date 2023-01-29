from rest_framework import viewsets
from rest_framework import permissions
from .models import Pessoa, Condominio, Aviso, Imovel, EspacoHabitacional, ReservaEspacoHabitacional
from .serializers import PessoaSerializer, CondominioSerializer, AvisoSerializer,\
                         ImovelSerializer, EspacoHabitacionalSerializer, ReservaEspacoHabitacionalSerializer

class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    permission_classes = (permissions.AllowAny,)

class CondominioViewSet(viewsets.ModelViewSet):
    queryset = Condominio.objects.all()
    serializer_class = CondominioSerializer
    permission_classes = (permissions.AllowAny,)

class AvisoViewSet(viewsets.ModelViewSet):
    queryset = Aviso.objects.all()
    serializer_class = AvisoSerializer
    permission_classes = (permissions.AllowAny,)

class ImovelViewSet(viewsets.ModelViewSet):
    queryset = Imovel.objects.all()
    serializer_class = ImovelSerializer
    permission_classes = (permissions.AllowAny,)

class EspacoHabitacionalViewSet(viewsets.ModelViewSet):
    queryset = EspacoHabitacional.objects.all()
    serializer_class = EspacoHabitacionalSerializer
    permission_classes = (permissions.AllowAny,)

class ReservaEspacoHabitacionalViewSet(viewsets.ModelViewSet):
    queryset = ReservaEspacoHabitacional.objects.all()
    serializer_class = ReservaEspacoHabitacionalSerializer
    permission_classes = (permissions.AllowAny,)