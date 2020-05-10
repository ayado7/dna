

//This function takes inputs from the user and stores them into the database then allows the user in.
function register(userName, password) 
{ 
   var userName = document.getElementById("email").value;
   var password = document.getElementById ("password").value;
   document.getElementById("sign-up").onclick;
   // > call server 
   console.log ("You are registered")
}


//This function takes inputs from user and checks them against the DB information, if there is a match the user is allowed in, if not, the user can try again.
function authenticate(userName, password) 
{
   for (let i=0; i< allUsers.length; i++)
   {
      var userName = document.getElementById("email").value;
      var password = document.getElementById ("password").value;
      if (userName==allUsers[i].userName && password==allUsers[i].password)
      {
         authenticate == True
      }
      { 
         document.getElementById ("sign-in") = logged_in
        console.log (userName+' is here!');
        window.user = allUsers[i];
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




//This function adds a post, saves it, shows the moderation dialoge
function newPost () {
   // get data from UI
   var storyContent = document.getElementById("userStory").value;

   const payLoad = {
      storyContent,
      userId: window.user ? window.user.id : null,
      postId: Date.now(),
   }
   // call server 
   sendPost(payLoad);
}

//Read more about XMLHttpRequest
function sendPost () {
   let xhr = new XMLHttpRequest();
   xhr.open("POST", "http://127.0.0.1:5000/api/posts");
   // define what to do when the response comes back
   xhr.onerror = function (error) {
      console.log('ERROR! ', error)
   }
   xhr.onload = function () {
      console.log('Saved!')
      document.getElementById("invisible").classList.remove("invisible");
   }

   //send the request, and when it comes back, run the code above.
   xhr.send(sendPost);
}
// Server needs to process this in Flask
// create new child element in the container 
// How do you create a card for each post
// How do you delete a card?
// How do you remove it from the DOM? 
// 

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

function windowOnload() {
   window.onload = function (authenticate, newPost) {
      document.getElementById("sign-in").onclick = authenticate();
      document.getElementById("submit_button").onclick = newPost();
   }
}
