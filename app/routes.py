from flask import render_template, redirect, url_for, request
from app import app
import os

'''
---------------------------------------Index----------------------------------
'''

@app.route("/")
def index():
    return render_template("index.html")