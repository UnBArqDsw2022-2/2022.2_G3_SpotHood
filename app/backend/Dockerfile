FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

# copy from the current directory of the Dockerfile to /backend in the image
COPY . .

RUN pip install django django-cors-headers

EXPOSE 8000
