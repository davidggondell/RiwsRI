# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from elasticsearch import Elasticsearch


class RiwsscraperPipeline:
    def __init__(self):
        self.es = Elasticsearch(['http://localhost:9200'])
        # ignore 400 cause by IndexAlreadyExistsException when creating an index
        self.es.indices.create(index='products', ignore=400)
        self.count = 0
        self.es.indices.put_mapping(
            index='products',
            body={
                "properties": {
                    "name": {
                        "type": "text"
                    },
                    "subcategories": {
                        "type": "text"
                    },
                    "price": {
                        "type": "float"
                    },
                    "glutenLess": {
                        "type": "boolean"
                    },
                    "kj": {
                        "type": "float"
                    },
                    "kcal": {
                        "type": "float"
                    },
                    "fats": {
                        "type": "float"
                    },
                    "satFat": {
                        "type": "float"
                    },
                    "carbs": {
                        "type": "float"
                    },
                    "sugar": {
                        "type": "float"
                    },
                    "protein": {
                        "type": "float"
                    },
                    "salt": {
                        "type": "float"
                    },
                    "gymRatio": {
                        "type": "float"
                    }
                }
            }
        )

    def process_item(self, item, spider):
        self.count += 1
        self.es.create(index='products', id=item['url'], document=item['product'])
        return item
