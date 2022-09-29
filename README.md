# RiwsRI

## Crawler
Para la ejecución del crawler se necesita instalar scrapy y la API de python de elasticsearch. Una vez instalados, desde el directorio riwsScraper/riwsScraper se ejecuta el comando "scrapy crawl dia" con un servicio de ElasticSearch corriendo en el puerto 9200.

## React
La ejecución de de la aplicación web se hace desde el directorio Reactapp con los comandos "yarn" (la primera vez) y "yarn start" teniendo yarn instalado.
Si se obtiene un error de CORS es posible sortearlo añadiendo las siguientes líneas al fichero de configuración "elasticsearch.yml":

```
http.cors.enabled : true
http.cors.allow-origin: "*"
http.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length
http.cors.allow-credentials: true
```
