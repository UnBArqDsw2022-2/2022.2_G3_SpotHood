from rest_framework import routers

from .views import PessoaViewSet

app_name = "pessoa"

router = routers.DefaultRouter()
router.register(r'pessoa', PessoaViewSet)