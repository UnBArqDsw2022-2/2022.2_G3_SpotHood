from django.contrib import admin
from django.urls import path, include
from condominium import urls as condominium_routes
from rest_framework_nested.routers import DefaultRouter


router = DefaultRouter()

router.registry.extend(condominium_routes.router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('condominium/', include(condominium_routes.router.urls)),
]
