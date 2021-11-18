from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

process = CrawlerProcess(get_project_settings())

proccess.crawl('dia')
#process.crawl("alcampoSupermarket")
#process.crawl("alcampo")
process.start()