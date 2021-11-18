import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor


class DiaSpider(CrawlSpider):
    name = "dia"
    allowed_domains = ['dia.es']
    start_urls = [
        'https://www.dia.es/compra-online/despensa/cf',
        'https://www.dia.es/compra-online/platos-preparados/cf',
        'https://www.dia.es/compra-online/frescos/cf',
        'https://www.dia.es/compra-online/bebidas/cf',
        'https://www.dia.es/compra-online/bodega/cf',
        'https://www.dia.es/compra-online/congelados/cf'
    ]

    rules = (
        # Extract links matching 'item.php' and parse them with the spider's method parse_item
        Rule(LinkExtractor(allow=(r'.+/cf.page=[0-9]+&disp=')), follow=True),
        Rule(LinkExtractor(
            allow=(r'.+/p/[0-9]+$', )), callback='parse_item_page'),
    )

    def parse_item_page(self, response):
        item = scrapy.Item()
        name = response.css(
            '#content > div.product-name.container-center > h1::text').get()
        subCategories = response.css(
            '#breadcrumb > ul > li > h3 > a > span::text').getall()
        comaPrice = response.css(
            '#productDetailUpdateable > div.product-detail-page__details.productDescription > div.price-container > p > span::text').get().split('\xa0')[0]
        separatedPrice = response.css(
            '#productDetailUpdateable > div.product-detail-page__details.productDescription > div.price-container > p > span::text').get().split('\xa0')[0].split(',')
        bigPrice = separatedPrice[0]
        littlePrice = separatedPrice[1]
        table = response.css(
            '#nutritionalinformation > div.tabs-nutritionalinfo-table-nutrients > table')

        priceString = bigPrice + '.' + littlePrice
        totalPrice = float(priceString)

        def obtenerValorNutricional(table):
            kJ = ''
            Kcal = ''
            fats = ''
            satFats = ''
            carbs = ''
            sugar = ''
            sugar = ''
            protein = ''
            salt = ''
            tablelen = len(table.css('tr').getall())

            for i in range(4, tablelen):
                row = table.css('tr:nth-child(' + str(i) +
                                ') > td > div::text').getall()
                if row[0] == 'valor energético':
                    if row[1].split(' ')[1] == 'kJ':
                        kJ = row[1].split(' ')[0]
                    else:
                        Kcal = row[1].split(' ')[0]
                if row[0] == 'grasas':
                    fats = row[1].split(' ')[0]
                if row[0] == 'ácidos grasos saturados':
                    satFats = row[1].split(' ')[0]
                if row[0] == 'hidratos de carbono':
                    carbs = row[1].split(' ')[0]
                if row[0] == 'azúcares':
                    sugar = row[1].split(' ')[0]
                if row[0] == 'proteínas':
                    protein = row[1].split(' ')[0]
                if row[0] == 'sal':
                    salt = row[1].split(' ')[0]

            return {
                'kJ': -1 if kJ == "" else float(kJ),
                'kcal': -1 if Kcal == "" else float(Kcal),
                'fats': -1 if fats == "" else float(fats),
                'satFats': -1 if satFats == "" else float(satFats),
                'carbs': -1 if carbs == "" else float(carbs),
                'sugar': -1 if sugar == "" else float(sugar),
                'protein': -1 if protein == "" else float(protein),
                'salt': -1 if salt == "" else float(salt)
            }

        nutriValue = obtenerValorNutricional(table)
        return {
            'url': response.url,
            'product': {
                'name': name,
                'subcategories': subCategories,
                'price': totalPrice,
                'kJ': nutriValue['kJ'],
                'kcal': nutriValue['kcal'],
                'fats': nutriValue['fats'],
                'satFats': nutriValue['satFats'],
                'carbs': nutriValue['carbs'],
                'sugar': nutriValue['sugar'],
                'protein': nutriValue['protein'],
                'salt': nutriValue['salt']
            }
        }
