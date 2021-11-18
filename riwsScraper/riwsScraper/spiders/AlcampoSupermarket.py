import scrapy


class AlcamposupermarketSpider(scrapy.Spider):
    name = 'alcampoSupermarket'
    allowed_domains = ['google.es']
    start_urls = ['https://www.google.es/']

    def parse(self, response):
        print("alcampo supermarket")
