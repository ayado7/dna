
import sqlite3
import time
import random

# setup DB connection
db_connection = sqlite3.connect('mainDB.db')
db_cursor = db_connection.cursor()

# add new user
def newUser(userName, password):
    db_connection = sqlite3.connect('Server/db/mainDB.db')
    db_cursor = db_connection.cursor()
    db_cursor.execute ('INSERT INTO users (userName, password) VALUES ("{}","{}")'.format(userName, password))
    
    db_connection.commit()
    db_connection.close()

# add new post
def newPost(storyContent):
    db_connection = sqlite3.connect('Server/db/mainDB.db')
    db_cursor = db_connection.cursor()
    db_cursor.execute ('INSERT INTO posts (input, userId) VALUES ("{}","1")'.format(storyContent))
    
    db_connection.commit()
    db_connection.close()

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



def close():
    db_connection.close()
