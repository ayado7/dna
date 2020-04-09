
function register(username, password) 
{ 
   // call server 
   return true
}




function authenticate(username, password) 
{
   document.getElementById("sign-in").onclick;

   for (i=0; i<test.length; i++)
   {
      if (username==test[i].username && password==test[i].password)
      { 
        console.log (username+'is here!') 
        
      }
      else 
      { console.log ("wrong password") 
      
      }
   }
}

function loadMain () {

}

function loadPosts () {

}

function addPost(userId, input) {
   new_post = {}
   new_post.post_id = postCounter++;
   all_posts[all_posts.length] = new_post;
}

function newPost () {
   // get data from UI
   var storyContent = document.getElementById("userStory").value;


   // call server 
   server_stub_addPost(storyContent);

   // updateUI

   document.getElementById("invisible").classList.remove("invisible");
   console.log ("got your message")
}

function publish () {
   // get data from UI
   // call server 
   // updateUI
}

function userPosts () {

}

function postPage () {

}

function addLike () {

}