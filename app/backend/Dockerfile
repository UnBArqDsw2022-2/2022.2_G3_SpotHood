FROM python:3.10

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
                        libpq-dev \
                        locales \
                        tzdata \
                        gettext

RUN sed -i 's/# pt_BR.UTF-8 UTF-8/pt_BR.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen pt_BR.UTF-8

ENV LANG pt_BR.UTF-8
ENV LANGUAGE pt_BR
ENV LC_ALL pt_BR.UTF-8

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone && \
    dpkg-reconfigure -f noninteractive tzdata

WORKDIR /spothood

COPY .. /spothood

RUN chmod -R 777 /spothood

RUN pip install --upgrade pip
RUN pip install wheel
RUN pip install --no-cache-dir -r requirements.txt