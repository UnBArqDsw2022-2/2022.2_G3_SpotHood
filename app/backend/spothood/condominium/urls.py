from rest_framework import routers
from django.urls import path
from .views import PessoaViewSet, CondominioViewSet, AvisoViewSet, LoginViewSet,\
                   ImovelViewSet, EspacoHabitacionalViewSet, ReservaEspacoHabitacionalViewSet

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)
router.register(r'login', LoginViewSet, basename='login')
router.register(r'condominio', CondominioViewSet)
router.register(r'aviso', AvisoViewSet)
router.register(r'imovel', ImovelViewSet)
router.register(r'espaco-habitacional', EspacoHabitacionalViewSet)
router.register(r'reservaespacos', ReservaEspacoHabitacionalViewSet)
