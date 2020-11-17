from flask import Flask, render_template, url_for, make_response
from app import app

@app.route("/")
def index():
    response = make_response(render_template("index.html"))
    return response
