#!/bin/bash

export POSTGRES_USER=postgres;
export POSTGRES_PASSWORD=password;
export POSTGRES_DB=spothood-dev;
export POSTGRES_PORT=5431;
export POSTGRES_HOST=localhost;
export SPOTHOOD_SECRET_KEY=some-random-stuff;
export ENVIRONMENT=development;
export ALLOWED_HOSTS=*;
export LIMIT_FILTER=1440;
export API_KEY=server_api_key_firebase;

function_postgres_ready() {
python << END
import socket
import time
import os

port = int(os.environ["POSTGRES_PORT"])
host = os.environ["POSTGRES_HOST"]

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(('localhost', port))
s.close()
END
}

until function_postgres_ready; do
  >&2 echo "======= POSTGRES IS UNAVAILABLE, WAITING"
  sleep 1
done

echo "======= POSTGRES IS UP, CONNECTING"

echo '======= MAKING MIGRATIONS'
python3 $(pwd)/backend/spothood/manage.py makemigrations
python3 $(pwd)/backend/spothood/manage.py makemigrations condominium

echo '======= RUNNING MIGRATIONS'
python3 $(pwd)/backend/spothood/manage.py migrate

echo '======= RUNNING SERVER'
python3 $(pwd)/backend/spothood/manage.py runserver 0.0.0.0:8001