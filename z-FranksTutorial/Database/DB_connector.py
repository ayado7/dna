# This is a file that shows how a database connection could look.
# It converts the function call into a database query, executes that query and returns the answer.
# The result is a tuple of attribute values. There are ways to improve this to return an actual hash map. But let's ignore those for now!

import sqlite3

# setup DB connection
db_connection = sqlite3.connect('classes.db')
db_cursor = db_connection.cursor()

# method to get all students
def get_all_students():
    db_cursor.execute("SELECT * from Student")
    return db_cursor.fetchall()

# method to get all classes
def get_all_classes():
    db_cursor.execute("SELECT * from Classes")
    return db_cursor.fetchall()

# method to get a student for a specific class with a specific name
def get_students_for_class(class_name):

    query = "SELECT Student.id, Student.name, Student.email "
    query +=    "FROM "
    query +=        "(Student INNER JOIN Participation ON Student.id = Participation.student_id) " 
    query +=            "INNER JOIN Classes	on Participation.class_id = Classes.id " 
    query +=    "WHERE Classes.name = '{}'"

    db_cursor.execute(query.format(class_name))
    return db_cursor.fetchall()


def close():
    db_connection.close()
