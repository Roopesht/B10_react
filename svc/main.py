from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)

class Item(BaseModel):
    name: str
    price: float

@app.get("/name")
def get_name():
    return {"name": "Roopesh's Bot"}

@app.post("/items")
def create_item(item: Item):
    logging.info(f"1. Received request for item: {item.name}")
    
    # Validation already done by FastAPI!
    logging.info("2. Validation passed")
    
    # Processing
    logging.info("3. Processing item...")
    item_dict = {"id": 123, **item.dict()}
    
    # Response
    logging.info("4. Sending response")
    return item_dict
    