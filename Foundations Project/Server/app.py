
from flask import Flask, jsonify, send_file, request, make_response
from flask_login import current_user, login_user
from flask_cors import CORS 

app = Flask (__name__)
import DBconnector

CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1"}})

@app.route('/')
def index():
    return send_file("static\html\index.html",conditional=True)


@app.route('/api/signup', methods= ['POST'])
def signup(): 
    app.logger.debug("request is:", request, "data is", request.data)
    data = str(request.data) 
    args = data.split("&") 
    username = args[0].split("=")[1]
    password = args[1].split("=")[1]
    pw = password[0:-1] 
    DBconnector.newUser (username, pw)

    response = make_response("it worked!")
    return response
    return redirect ("..\Pages\index.html",conditional=True)

    
@app.route('/api/signin', methods= ['POST'])
def api_signin():
    if authenticate == True:
        return redirect("..\Pages\index.html",conditional=True)


@app.route('/api/main',  methods=['GET'])
def api_all_posts():

    database_posts = DBconnector.get_all_posts()
    posts = []
    for database_post in database_posts:
        post = convertPost(database_post)
        posts.append(post)

    print("Here are the posts " + str(posts))
    return jsonify(posts)


@app.route ('/api/posts', methods=['POST'])
def create_post(): 
    app.logger.debug("request is:", request, "data is", request.form.to_dict())
    arg = str (request.data)
    userStory = arg[2:-1]
    DBconnector.newPost (userStory)
    app.logger.debug("data is", userStory)
    #story = request.data.storyContent
    #userId = request.data.userId
    #postId = request.data.postId
    #DBconnector.newPost (story, userId, postId)

    response = make_response("Got the story!")

    return response 




if __name__ == "__main__":
    app.run(debug=True)
