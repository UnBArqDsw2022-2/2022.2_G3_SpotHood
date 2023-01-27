from rest_framework import routers

from .views import PessoaViewSet, CondominioViewSet, AvisoViewSet, ImovelViewSet

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)
router.register(r'condominio', CondominioViewSet)
router.register(r'aviso', AvisoViewSet)
router.register(r'imovel', ImovelViewSet)
