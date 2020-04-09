/* this is a stub. meaning it implements all functions the server will offer in a simplified way so you can test without the server
* stubs usually return test data only. Don't make it sophisticated!
* when your server changes you will just substitute the include of "server_stub" for another file (e.g., server.js) that defines the same functions. So none of your other code has to change
* Authors: 
*      Frank Trollmann: Initial setup of the file and creation of initial stub functions.
*      Aya Douba:
*/

// authenticate
// we assume two test users: Aya and Frank, with password "Test1234"
function authenticate(username, password) {

    user = null;

    // get user object from our "database"
    if(username == "Aya") {
        user = user_aya;
    }

    if(username == "Frank") {
        user = user_frank;
    }

    // unknown user? return false!
    if(user == null) {
        console.log("user unknown");
        return false;
    }
    
    // known user? check password
    if(user.password == password) {
        return true;
    } else {
        console.log("password wrong");
        return false;
    }
    
}

// register
// always succeeds, but we don't actually get the list of all users
function register(username, password) { 
    return true
}

// get all posts
function getAllPosts() {
    return all_posts;
}

// get one post
function getPost(postId) {
    // go through all posts and return the one with the right id
    for (let index = 0; index < all_posts.length; index++) {
        if(all_posts[index].postId == postId)  {
            return all_posts[index]
        }
    }
    
    // if we have not found the post by now it doesn't exist
    console.log("post not found")
    return null;
}

// add post
function server_stub_addPost(text) {
    new_post = {};
    new_post.post_id = postCounter++;
    new_post.text = text;

    // TODO: fill in any other information you want to (and don't forget to add attributes to this function!)
    all_posts[all_posts.length] = new_post;

}

// get post history
function getPostHistory(userId) {
    if(userId == 1) return aya_posts;
    if(userId == 2) return frank_posts;

    console.log("user id " + userId + " not found" );
    return null;
}


// there are functions for comments missing. Consider them a bonus!
