from flask import Flask, request, jsonify, send_file, jsonify, abort
import json
import openpyxl
import requests
import random
from os import listdir
from os.path import isfile, join, exists


# https://peps.python.org/pep-0328/#rationale-for-parentheses


app = Flask(__name__)
DATA_FOLDER = '/Users/robzeeman/surfdrive/Documents/DI_code/DATA/grid_editor/'


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


@app.route("/excels", methods=['GET'])
def get_files():
    files = [f for f in listdir(DATA_FOLDER) if isfile(join(DATA_FOLDER, f))]
    return jsonify(files)

@app.route("/get_excel/<fn>", methods=["GET"])
def get_excel(fn):
    try:
        print(join(DATA_FOLDER, fn))
        wb = openpyxl.reader.excel.load_workbook(join(DATA_FOLDER, fn))
        sheet = wb.active
        print(sheet.dimensions)
        return jsonify({"status": "OK"})
    except:
        return jsonify({"status": "error"})





#Start main program

if __name__ == '__main__':
    app.run()

