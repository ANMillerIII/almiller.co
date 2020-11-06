from flask import Flask, render_template, redirect, url_for, request, make_response, after_this_request
from app import app
import os

'''
---------------------------------------Index----------------------------------
'''

@app.route("/")
def index():
    '''Goto Index and set cookie to not animate if already animated tree'''
    response = make_response(render_template("index.html"))

    # @after_this_request
    # if not request.cookies.get('executedAnimation'):
    #     response.set_cookie('executedAnimation', 'executed', max_age = 60*60*24*365*2)
    return response
    

# @app.route('/cookie/')
# def cookie():
#     if not request.cookies.get('foosdfsdf'):
#         res = make_response("Setting a cookie")
#         res.set_cookie('foosdfsdf', 'bar', max_age=60*60*24*365*2)
#     else:
#         res = make_response("Value of cookie foo is {}".format(request.cookies.get('foosdfsdf')))
#     return res


# #...
# @app.route('/delete-cookie/')
# def delete_cookie():
#     res = make_response("Cookie Removed")
#     res.set_cookie('foo', 'bar', max_age=0)
#     return res
# #...