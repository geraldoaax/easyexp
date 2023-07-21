FROM postgres

COPY scripts/init.sql /docker-entrypoint-initdb.d/

RUN usermod -u 1000 postgres
