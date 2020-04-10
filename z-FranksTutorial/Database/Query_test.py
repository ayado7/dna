## simple demo script for showing how to connect to an sqlite DB 
# from Python, and run a simple SQL query 
# This is basically Adams sample file just adapted to the DB I was playing around with.

# import the python library for SQLite 
import sqlite3

# connect to the database file, and create a connection object
db_connection = sqlite3.connect('classes.db')

# create a database cursor object, which allows us to perform SQL on the database. 
db_cursor = db_connection.cursor()

# run a first query 
db_cursor.execute("SELECT * from Student")

# store the result in a local variable. 
# this will be a list of tuples, where each tuple represents a row in the table
list_students = db_cursor.fetchall()

print("list_students contents:")
print(list_students)

db_connection.close()
