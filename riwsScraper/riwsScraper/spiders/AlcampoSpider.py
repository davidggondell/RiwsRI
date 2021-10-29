import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor


class AlcampoSpider(CrawlSpider):
    name = "alcampo"
    allowed_domains = ['alcampo.es']
    start_urls = [
        'https://www.alcampo.es/compra-online/alimentacion/c/WC10',
        'https://www.alcampo.es/compra-online/frescos/c/W2112',
        'https://www.alcampo.es/compra-online/frio-y-congelados/c/W20022018',
        'https://www.alcampo.es/compra-online/bebidas/c/WC11'
    ]

    rules = (
        # Extract links matching 'item.php' and parse them with the spider's method parse_item
        Rule(LinkExtractor(
            allow=(r'c/W.*Arelevance&page=[0-9]*$')), follow=True),
        Rule(LinkExtractor(allow=(r'.+/p/[0-9]+$', ),
             deny=(r'.*compra-online/ver-mas.*',
                   r'.*compra-online/electrodomesticos.*', r'.*compra-online/tecnologia.*', r'.*compra-online/cuidado-personal.*',
                   r'.*compra-online/drogueria.*', r'.*compra-online/hogar.*')), callback='parse_item_page', follow=True),
    )

    def parse_item_page(self, response):
        item = scrapy.Item()
        name = response.css(
            '#containerDescription > h1:nth-child(1)::text').get()
        category = response.css(
            'li.migaPanLi:nth-child(2) > a:nth-child(1)::text').get()
        subCategories = response.css(
            '#breadcrumb > ul > li.migaPanLi > a::text').getall()[2:-2]
        price = response.css(
            '#content > div.detalleDeProducto.caja.caja-reposo > div.productDetailsPanel > div > div.orderItemsContainer > div.addToCartDetailContainer > div.flex-container.product-price-info > div:nth-child(1) > div > span::text').get()
        littlePrice = response.css(
            '#content > div.detalleDeProducto.caja.caja-reposo > div.productDetailsPanel > div > div.orderItemsContainer > div.addToCartDetailContainer > div.flex-container.product-price-info > div:nth-child(1) > div > span > strong::text').get()
        country = response.css(
            '#tabSabiasQue > div > div.productNutritionalInformation.valoresNutricionalesTabla.tablaInformacionAdicional > div > table > tbody > tr:nth-child(4) > td > span.tablaValorContenido > div::text').get()
        kJ = response.css(
            'div.itemFood:nth-child(1) > span:nth-child(2)::text').get()
        kcal = response.css(
            'div.itemFood:nth-child(1) > div:nth-child(3) > span:nth-child(1)::text').get()
        fats = response.css(
            'div.itemFood:nth-child(2) > span:nth-child(2)::text').get()
        fatPercent = response.css(
            'div.itemFood:nth-child(2) > div:nth-child(3) > span:nth-child(1)::text').get()
        satFat = response.css(
            'div.itemFood:nth-child(3) > span:nth-child(2)::text').get()
        satFatPercent = response.css(
            'div.itemFood:nth-child(3) > div:nth-child(3) > span:nth-child(1)::text').get()
        carbs = response.css(
            'div.itemFood:nth-child(4) > span:nth-child(2)::text').get()
        carbPercent = response.css(
            'div.itemFood:nth-child(4) > div:nth-child(3) > span:nth-child(1)::text').get()
        sugar = response.css(
            'div.itemFood:nth-child(5) > span:nth-child(2)::text').get()
        sugarPercent = response.css(
            'div.itemFood:nth-child(5) > div:nth-child(3) > span:nth-child(1)::text').get()
        protein = response.css(
            'div.itemFood:nth-child(6) > span:nth-child(2)::text').get()
        proteinPercent = response.css(
            'div.itemFood:nth-child(6) > div:nth-child(3) > span:nth-child(1)::text').get()
        salt = response.css(
            'div.itemFood:nth-child(7) > span:nth-child(2)::text').get()
        saltPercent = response.css(
            'div.itemFood:nth-child(7) > div:nth-child(3) > span:nth-child(1)::text').get()

        priceString = price + '.' + littlePrice[1:-1]
        totalPrice = float(priceString)
        return {
            'name': name,
            'category': category,
            'subcategories': subCategories,
            'price': totalPrice,
            'url': response.url,
            'kj': kJ,
            'kcal': kcal,
            'fats': fats,
            'fatPercent': fatPercent,
            'satFat': satFat,
            'satFatPercent': satFatPercent,
            'carbs': carbs,
            'carbPercent': carbPercent,
            'sugar': sugar,
            'sugarPercent': sugarPercent,
            'protein': protein,
            'proteinPercent': proteinPercent,
            'salt': salt,
            'saltPercent': saltPercent
        }
