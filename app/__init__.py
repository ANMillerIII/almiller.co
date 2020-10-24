from flask import Flask
from config import Config

app = Flask(__name__)

app.debug = True
app.config.from_object(Config)
app.config['TEMPLATES_AUTO_RELOAD'] = True

from app import routes