from flask import Flask
import json


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

app.run(debug=True)