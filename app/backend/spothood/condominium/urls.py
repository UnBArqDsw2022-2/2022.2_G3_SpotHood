from rest_framework import routers

from .views import PessoaViewSet, CondominioViewSet, AvisoViewSet, ImovelViewSet, EspacoHabitacionalViewSet

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)
router.register(r'condominio', CondominioViewSet)
router.register(r'aviso', AvisoViewSet)
router.register(r'imovel', ImovelViewSet)
router.register(r'espaco-habitacional', EspacoHabitacionalViewSet)
