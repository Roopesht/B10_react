import requests
url = "http://127.0.0.1:8000/items"
body = {"name": "Chikki", "price": "Five"}
response = requests.post(url, json=body)
print (response.status_code)
print (response.json())
