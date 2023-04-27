import pymongo
import certifi

connection_str = "mongodb+srv://kternity:surfstore@surfstore.pxaabcv.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(connection_str, tlsCAFile=certifi.where() )
db = client.get_database("surfstore")