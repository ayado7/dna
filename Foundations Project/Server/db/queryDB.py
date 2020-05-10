import sqlite3
db_connection = sqlite3.connect('mainDB.db')


#
db_new_user = db.connection.cursor()
db_new_user.execute("INSERT INTO users VALUES ()") 


db_new_user.close()

#
db_posts = db_connection.cursor()
db_posts.execute("SELECT * FROM posts")
list_posts = db_posts.fetchall()

print("list_posts contents:")
print(list_posts)

#
db_users = db_connection.cursor()
db_users.execute("SELECT * FROM users")
list_users = db_users.fetchall()

print("list_users contents:")
print(list_users)

#
db_comments = db_connection.cursor()
db_comments.execute("SELECT * FROM comments Where postId = 11").format(postId)
list_comments = db_users.fetchall()

print("list_comments contents:")
print(list_comments)

#
db_likes = db_connection.cursor()
db_likes.execute("SELECT * FROM likes Where postId = {}").format(postId)
list_likes = db_users.fetchall()

print("list_likes contents:")
print(list_likes)

db_connection.close()


# Create user if not exists stufftoplot ()