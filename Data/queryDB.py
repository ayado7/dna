import sqlite3

db_connection = sqlite3.connect('mainDB.db')
db_cursor = db_connection.cursor()

db_cursor.execute("SELECT * from posts")

list_posts = db_cursor.fetchall()

print("list_posts contents:")
print(list_posts)

db_connection.close()
