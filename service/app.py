from flask import Flask, request, jsonify, send_file, jsonify, abort
import json
from openpyxl import Workbook
import requests
import random
import os
from os.path import isfile, join, exists


# https://peps.python.org/pep-0328/#rationale-for-parentheses


app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = '/data'





@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    response.headers['Content-type'] = 'application/json'
    return response


@app.route("/")
def hello_world():
    retStruc = {"app": "Grid Editor service", "version": "0.1"}
    return jsonify(retStruc)


#Start main program

if __name__ == '__main__':
    app.run()

