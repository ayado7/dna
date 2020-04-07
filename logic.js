
function register(username, password) { 
   return true
   
}


var test= [
   {
      username: "Tester",
      password: "pass",
   },

   {
      username: "TesterTwo",
      password: "passtwo",
   },

   {
      username: "TesterThree",
      password: "passthree",
   }
]

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



function addPost(userID, input, timeStamp) {
   new_post = {}
   new_post.post_id = postCounter++;

   // TODO: fill in any other information you want to (and don't forget to add attributes to this function!)
   all_posts[all_posts.length] = new_post;

//function newPost ()

//function getAllPosts ()

