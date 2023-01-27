from rest_framework import routers

from .views import PessoaViewSet, CondominioViewSet

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)
router.register(r'condominio', CondominioViewSet)
