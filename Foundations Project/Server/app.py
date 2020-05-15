
from flask import Flask, jsonify, send_file, request, make_response
from flask_login import current_user, login_user
from flask_cors import CORS 

app = Flask (__name__)
import DBconnector

CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1"}})

@app.route('/')
def index():
    return send_file("static\html\sign-up.html",conditional=True)


@app.route('/api/signup', methods= ['POST'])
def signup(): 
    app.logger.debug("request is:", request, "data is", request.form)
    data = str(request.data) # "uname=Aya&pw=stuff"
    args = data.split("&") # args[] = "uname=Aya" ...
    username = args[0].split("=")[1]
    pw = args[1].split("=")[1]

    DBconnector.newUser (username, pw)

    response = make_response("it worked!")
    return response
    
    
@app.route('/api/signin', methods= ['POST'])
def api_signin():
    if authenticate == True:
        return redirect("..\Pages\main.html",conditional=True)


@app.route('/api/main',  methods=['GET'])
def api_all_posts():

    database_posts = DBconnector.get_all_posts()
    posts = []
    for database_post in database_posts:
        post = convertPost(database_post)
        posts.append(post)

    print("Here are the posts " + str(posts))
    return jsonify(posts)




  




if __name__ == "__main__":
    app.run(debug=True)