# run me with: 
#    export FLASK_APP=main.py
#    flask run


from flask import Flask, jsonify, send_file
from flask_cors import CORS 
import DB_connector

app = Flask(__name__)

# enable the api to be accessed by frontend running on localhost
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1"}})


# intro site
@app.route('/')
def index():
    return send_file("static/html/index.html")

# one API method
@app.route('/api/students',  methods=['GET'])
def api_restaurants_names():
    # get all students from DB 
    database_students = DB_connector.get_all_students()

    # convert into actual objects (because tuples are stupid)
    students = []
    for database_student in database_students:
        student = convertStudent(database_student)
        students.append(student)

    print("answering students " + str(students))
    return jsonify(students)

# this method converts from a database tuple to a python map
# Example input: (2, 'Aya', 'Aya.Douba@code.berlin')
# Example output: { "studentId":"2", "name": Aya, "mail": "Aya.Douba@code.berlin"}
def convertStudent(database_student):
    student = {}
    student["studentId"] =  database_student[0]
    student["name"] = database_student[1]
    student["mail"] = database_student[2]
    return student

