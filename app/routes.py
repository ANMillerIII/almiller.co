from flask import Flask, render_template, redirect, url_for, request, make_response, after_this_request
from app import app
import os


@app.route("/")
def index():
    response = make_response(render_template("index.html"))
    return response
