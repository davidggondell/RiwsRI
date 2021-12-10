import scrapy


class DiaSupermarketSpider(scrapy.Spider):
    name = 'diaSupermarket'
    allowed_domains = ['google.es']
    start_urls = ['https://www.google.es/']

    def parse(self, response):
        print("dia supermarket")
