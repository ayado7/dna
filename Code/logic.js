

//This function takes inputs from the user and stores them into the database then allows the user in.
function register(userName, password) 
{ 
   document.getElementById("sign-up").onclick;
   // > call server 
   console.log ("You are registered")
}



//This function takes inputs from user and checks them against the DB information, if there is a match the user is allowed in, if not, the user can try again.
function authenticate(userName, password) 
{
   document.getElementById("sign-in").onclick;

   for (i=0; i<test.length; i++)
   {
      if (userName==allUsers[i].userName && password==allUsers[i].password)
      { 
        console.log (userName+'is here!') 
      }
      else 
      { console.log ("wrong password") 
      }
   }
}

//This function loads all the content of the mainpage when a user visits the website
function loadMain (postId) {
 // > call server (get all posts by postId)
}

//This function loads all posts and updates them when a user visits the website (is it repetitive?)
//function loadPosts () {}


//function addPost(userId, input) {
  // new_post = {}
   //new_post.post_id = postCounter++;
   // all_posts[all_posts.length] = new_post;}


//This function adds a post, saves it, shows the moderation dialoge
function newPost () {
   // get data from UI
   var storyContent = document.getElementById("userStory").value;
   // call server 
   server_stub_addPost(storyContent);
   // updateUI
   document.getElementById("invisible").classList.remove("invisible");
   console.log ("got your message")
}

// This function returns the post, places it in a div in the main page
function publish () {
   // get data from UI
   // call server 
   // updateUI
}

// This function takes userId and returns all posts made by the same user to the profile page.
function userPosts () 
{
   if(userId == 1) return allPosts (userId == 1);
   if(userId == 2) return allPosts (userId == 2);

   console.log("user id " + userId + " not found" );
   return null;
}


// This function takes postId and returns it with its properties to the post page.
function postPage (postId) 
{
   for (let index = 0; index < allPosts.length; index++) 
   {
      if(allPosts[index].postId == postId)  
      {
          return allPosts[index]
      }
   }
}