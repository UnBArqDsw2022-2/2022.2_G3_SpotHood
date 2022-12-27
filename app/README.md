# SpotHood App
Caso queira executar a aplicação em ambiente controlado, neste documento seguem algumas instruções e dicas para tal.
## Sumário
1. [Pré-Requisítos](#pré-requisitos)
2. [Localmente](#localmente)
   1. [Backend](#backend)
   2. [Frontend](#frontend)
3. [Contêiner](#container)
4. [Troubleshooting](#troubleshooting)

## Pré-Requisitos
Caso queira rodar localmente:
- nodejs & npm
- django & django-cors-headers

Caso queira rodar em container:
- docker & docker-compose
- make (opcional)

Faça o download da aplicação, e caminhe até o diretório `app`
> git clone https://github.com/UnBArqDsw2022-2/2022.2_G3_SpotHood.git
<br>cd 2022.2_G3_SpotHood/app

***Recomendamos a execução da aplicação em container**, dessa forma assegura-se que está se desenvolvendo com as definições
de ambientes mais atualizadas, providas pela equipe `SpotHood DevOps`.

<hr>

## Localmente
Abra duas abas no terminal, ambos no diretório app.

### Backend
Em app, caminhe para o diretório backend

> cd backend

E execute o comando

> python manage.py runserver 0.0.0.0:8000

Talvez você terá que dar permissão para o React acessar o Host do backend, você pode configurar a permissão com o [Django Cors Headers](https://pypi.org/project/django-cors-headers/)

```
ALLOWED_HOSTS = ['0.0.0.0'] # this is the host that Docker uses to run application
INSTALLED_APPS = [
    'corsheaders' # this will be installed later
]
...
# this should be put at the end of the settings.py file
CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000'
]
You also need to add a middleware class to listen in on responses:

MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]
```

### Frontend
Em app, caminhe para o diretório frontend

> cd frontend

Faça o download das dependências usando:

> npm install

Agora você poderá executar o front end com:

> npm start

<hr>

## Contêiner

Para rodar no container assegure que esteja com docker e docker-compose instalado e rode os seguintes comando na pasta **/app**:

> make build

ou

> docker-compose build

Este processo irá demorar um tempo, e será abortado no processo de `RUN npm audit fix --force` não se preocupe, ele já construiu a aplicação, e agora você poderá rodar ela com o seguinte comando:

> make up

ou

> docker-compose up --remove-orphans --force-recreate --always-recreate-deps

Dentro de alguns instantes a aplicação estará rodando e você poderá acessar o back na porta [8001](http://localhost:8001) e o front na [8000](http://localhost:8000). E após rodar você poderá apagar os containers executando:

> make down

ou

> docker-compose down --volumes

***
### Troubleshooting
Ao executar a sequência de comandos: 
1) `make down` - assegurar que não existem contêineres;
2) `make build` - executar a construção das dependências;
3) `make up` - para inicializar os contêineres da aplicação.

O seu ambiente deve estar **pronto para desenvolvimento!** 

Porém, nem sempre é assim que vai ocorrer. Pensando nisso, nosso time
catalogou alguns problemas conhecidos e como você pode resolvê-los. Seguem alguns exemplos:

#### 1. Problemas com disponibilidade de portas:
```bash
docker compose up --remove-orphans --force-recreate --always-recreate-deps
[+] Running 3/0
 ⠿ Network app_default       Created                                                                                                                                                                                        0.0s
 ⠿ Container app-backend-1   Created                                                                                                                                                                                        0.0s
 ⠿ Container app-frontend-1  Created                                                                                                                                                                                        0.0s
Attaching to app-backend-1, app-frontend-1
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:8000 -> 0.0.0.0:0: listen tcp 0.0.0.0:8000: bind: address already in use
make: *** [Makefile:5: up] Error 1
```
**Solução:** Com o  comando abaixo, é possível listar todas as portas em situação de **LISTEN**.
```bash
lsof -i -P -n | grep LISTEN
```

 Com isso, podemos identificar as portas que estão atrapalhando nossos contêineres a inicializar. Conforme mostra o log
 abaixo:

```bash
sudo lsof -i -P -n | grep LISTEN
[sudo] password for user: 
systemd-r   792 systemd-resolve   14u  IPv4  20683      0t0  TCP 127.0.0.53:53 (LISTEN)
cupsd      1012            root    6u  IPv6  23499      0t0  TCP [::1]:631 (LISTEN)
cupsd      1012            root    7u  IPv4  23500      0t0  TCP 127.0.0.1:631 (LISTEN)
docker-pr  2257            root    4u  IPv4  41280      0t0  TCP *:8000 (LISTEN)
docker-pr  2263            root    4u  IPv6  41283      0t0  TCP *:8000 (LISTEN)
docker-pr  2277            root    4u  IPv4  39790      0t0  TCP *:3000 (LISTEN)
docker-pr  2283            root    4u  IPv6  35802      0t0  TCP *:3000 (LISTEN)
docker-pr  2295            root    4u  IPv4  36862      0t0  TCP *:5432 (LISTEN)
docker-pr  2301            root    4u  IPv6  43211      0t0  TCP *:5432 (LISTEN)
spotify   11706        user   92u  IPv4 135248      0t0  TCP *:57621 (LISTEN)
spotify   11706        user   97u  IPv4 130927      0t0  TCP *:48893 (LISTEN)
java      18264        user   13u  IPv6 136826      0t0  TCP 127.0.0.1:63342 (LISTEN)
java      18264        user   30u  IPv6 136822      0t0  TCP 127.0.0.1:6942 (LISTEN)
com.docke 24673        user   28u  IPv4 161621      0t0  TCP *:44725 (LISTEN)
vpnkit-br 24722        user    9u  IPv4 161621      0t0  TCP *:44725 (LISTEN)
kited     26893        user    3u  IPv4 158269      0t0  TCP 127.0.0.1:46624 (LISTEN)
```

Repare que existem outras portas, referentes ao `docker-pr`, que estão utilizando o mesmo range de portas. 
Execute o comando `kill` associado ao número do processo referente às portas que apresentaram problemas. Em nosso exemplo,
a porta foi a **8000**, portanto vamos encerrar os reespectivos processos:

```bash
sudo kill 2257
```
Seguido do comando:
```bash
sudo kill 2263
```
#### 2. Problemas de rede
Ao tentar inicializar a aplicação, após executar o processo de *build*, o seguinte erro é mostrado:

```shell
network spothood-network declared as external, but could not be found                                                                                                                                                            
make: *** [Makefile:5: up] Error 1  
```

**Solução:** Em seu terminal digite o seguinte comando:
```shell
docker network create spothood-network
```

Ao executar o `make up` deve funcionar perfeitamente.

***