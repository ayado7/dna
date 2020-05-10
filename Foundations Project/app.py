
from flask import Flask, jsonify, send_file
from flask_login import current_user, login_user
from flask_cors import CORS 
app = Flask (__name__)


CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1"}})

@app.route('/')
def index():
    return send_file("server\static\html\index.html",conditional=True)

@app.route('/api/main',  methods=['GET'])
def api_all_posts():
    # get all posts from DB 
    database_posts = DBconnector.get_all_posts()

    # convert into actual objects (because tuples are stupid)
    posts = []
    for database_post in database_posts:
        post = convertPost(database_post)
        posts.append(post)

    print("Here are the posts " + str(posts))
    return jsonify(posts)


@app.route('/api/signin', methods= ['POST'])
def api_signin():
    if authenticate == True:
        return redirect("..\Pages\main.html",conditional=True)

@app.route('/signup')
def signup():
    return send_file("..\Pages\sign-up.html",conditional=True)


  




if __name__ == "__main__":
    app.run(debug=True)
