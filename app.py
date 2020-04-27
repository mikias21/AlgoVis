# imports
from flask import Flask, render_template, request, jsonify
from model.Model import Model

# create app
app = Flask(__name__)
model = Model()


@app.route('/', methods=['GET'])
def index():
    return render_template("dashboard.html")


@app.route('/linkedlist', methods=['get'])
def linkedlist():
    return render_template("./dstemplates/linkedlist.html")


@app.route('/circular', methods=['get'])
def circular():
    return render_template("./dstemplates/circularqueue.html")


@app.route('/doublended', methods=['get'])
def doublended():
    return render_template("./dstemplates/doubleended.html")


@app.route('/getdetails', methods=['GET', 'POST'])
def getInfo():
    info = []
    if request.method == 'POST':
        request_data = request.form['id']
    if request_data is not None:
        info.append(model.get_algorithm_info(request_data))
    return jsonify(info)


@app.route('/getLinkedListInfo', methods=['GET', 'POST'])
def getLinkedListInfo():
    info = []
    if request.method == 'POST':
        type = request.form['type']
    if type is not None:
        if type == 'Single Linked List' or type == 'linked_list':
            info.append(model.get_linkedlist_info('linked_list'))
        elif type == 'Double Linked List':
            info.append(model.get_linkedlist_info('double_linked_list'))
        else:
            info.append(model.get_linkedlist_info('linked_list'))
    return jsonify(info)


@app.route('/getStackInfo', methods=['GET', 'POST'])
def getStackInfo():
    info = []
    if request.method == 'POST':
        type = request.form["type"]
    if type is not None:
        info = model.get_stack_info(type)
    return jsonify(info)


@app.route('/getStackCode', methods=['GET', 'POST'])
def getStackCode():
    filepath = "static/codeexamples/stack/"
    code_html = ""
    if request.method == 'POST':
        request_data = request.form['type'] + ".txt"
    if request_data is not None:
        filepath += request_data
    with open(filepath, 'r', encoding="utf-8") as codefile:
        lines = codefile.readlines()
    for line in lines:
        code_html += line
    return code_html


@app.route('/getQueueInfo', methods=['POST', 'GET'])
def getQueueInfo():
    info = []
    if request.method == 'POST':
        type = request.form['type']
    if type is not None:
        info = model.get_queue_info(type)
    return jsonify(info)


@app.route('/getMoreQueueInfo', methods=['POST', 'GET'])
def getMoreQueueInfo():
    info = []
    if request.method == 'POST':
        type = request.form['type']
    if type is not None:
        info = model.get_more_queue_info(type)
    return jsonify(info)


@app.route('/getQueueCode', methods=['GET', 'POST'])
def getQueueCode():
    filepath = "static/codeexamples/queue/"
    code_html = ""
    if request.method == 'POST':
        request_data = request.form['type'] + ".txt"
    if request_data is not None:
        filepath += request_data
    with open(filepath, 'r', encoding="utf-8") as codefile:
        lines = codefile.readlines()
    for line in lines:
        code_html += line
    return code_html

@app.route('/getCirQueueCode', methods=['GET', 'POST'])
def getCirQueueCode():
    filepath = "static/codeexamples/cirqueue/cirqueue.txt"
    code_html = ""
    if request.method == 'POST':
        with open(filepath, 'r', encoding="utf-8") as codefile:
            lines = codefile.readlines()
        for line in lines:
            code_html += line
        return code_html

@app.route('/getcode', methods=['GET', 'POST'])
def getCode():
    filepath = "static/codeexamples/sorting/"
    code_html = ""
    if request.method == 'POST':
        request_data = request.form['id'] + ".txt"
    if request_data is not None:
        filepath += request_data
    with open(filepath, 'r', encoding="utf-8") as codefile:
        lines = codefile.readlines()
    for line in lines:
        code_html += line
    return code_html


@app.route('/getlistcode', methods=['GET', 'POST'])
def getListCode():
    filepath = "static/codeexamples/linkedlist/insertintolist.txt"
    code_html = ""
    with open(filepath, 'r') as file:
        lines = file.readlines()
    for line in lines:
        code_html += line
    return code_html


@app.route('/getoperationcode', methods=['POST', 'GET'])
def getOperationCode():
    filepath = "static/codeexamples/linkedlist/"
    code_html = ""
    if request.method == 'POST':
        title = request.form['title'].lower()
        operation = request.form['operation'].lower()
    if title is not None and operation is not None:
        if title.find("single") == 0 or title.find("linked") == 0:
            filepath += "single/" + operation + ".txt"
        elif title.find("double") == 0:
            filepath += "double/" + operation + ".txt"

    with open(filepath, "r") as file:
        lines = file.readlines()
    for line in lines:
        code_html += line
    return code_html

@app.route('/getTreeInfo', methods=['POST', 'GET'])
def getTreeInfo():
    if request.method == 'POST':
        data = model.getTreeInfo()
        return jsonify(data)

@app.route('/getTreeCode', methods=['GET', 'POST'])
def getTreeCode():
    filepath = "static/codeexamples/Tree/tree.txt"
    code_html = ""
    with open(filepath, 'r') as file:
        lines = file.readlines()
    for line in lines:
        code_html += line
    return code_html


if __name__ == "__main__":
    app.debug = True
    app.static_folder = "static"
    app.config["CACHE_TYPE"] = "null"
    app.run()
    # getCode()
