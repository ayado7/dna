
import sqlite3

# setup DB connection
db_connection = sqlite3.connect('mainDB.db')
db_cursor = db_connection.cursor()

# add new user
def newUser():
    db_cursor.execute ("INSERT INTO users VALUES () ")

# Get user by name for autheticate 
 

# then check for password match 

# main page: Get all posts 
def get_all_posts():
    db_cursor.execute("SELECT * from posts")
    result = db_curser.fetchall()
    db_connection.close()
    return result

# Profile page: Get all posts from one user
def get_all_user_posts():
    db_cursor.execute("SELECT * from posts WHERE userId = {}".format(userId))
    return db_cursor.fetchall()

"""# method to get a student for a specific class with a specific name
def get_posts_for_user(class_name):

    query = "SELECT Student.id, Student.name, Student.email "
    query +=    "FROM "
    query +=        "(Student INNER JOIN Participation ON Student.id = Participation.student_id) " 
    query +=            "INNER JOIN Classes	on Participation.class_id = Classes.id " 
    query +=    "WHERE Classes.name = '{}'"

    db_cursor.execute(query.format(class_name))
    return db_cursor.fetchall()
"""

def close():
    db_connection.close()
