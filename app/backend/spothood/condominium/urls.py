from rest_framework import routers

from .views import PessoaViewSet, CondominioViewSet, AvisoViewSet

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)
router.register(r'condominio', CondominioViewSet)
router.register(r'aviso', AvisoViewSet)
