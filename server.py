from flask import Flask
import json
from mock_data import catalog

app = Flask("server")

@app.get("/")
def home():
    return "hello from flask"

@app.get("/test")
def test():
    return "this is another endpoint"

@app.get("/about")
def about():
    return "About Kenneth Chung"

@app.get("/api/version")
def version():
   version = {
        "V":"V.1.0.1",
        "name":"Candy",
        "yourzip":"your",
   }
   return json.dumps(version)




@app.get("/api/catalog")
def get_catalog():
    return json.dumps(catalog)




@app.get('/test/numbers')
def get_numbers():
   result = []
   for n in range(1,21):
       if n != 13 and n != 17:
           result.append(n)

   return json.dumps(result)

app.run(debug=True)