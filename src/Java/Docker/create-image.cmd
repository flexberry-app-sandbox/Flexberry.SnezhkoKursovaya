docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhko_kursovaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhko_kursovaya-java/app ../../..
