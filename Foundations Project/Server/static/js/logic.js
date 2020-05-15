

//This function takes inputs from the user and stores them into the database then allows the user in.
function register(){
   var userName = document.getElementById("email").value;
   var password = document.getElementById ("password").value;
   if (userName && password != 0)
   {
      /////Put it in the DB
      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "http://127.0.0.1:5000/api/signup");
      // define what to do when the response comes back
      xhr.onload = function () {
         
      //   window.location.href = "STATIC\index.html"
         console.log ("response! " + xhr.response)
      }
      console.log ("It's getting sent!")
      //send the request, and when it comes back, run the code above.
      xhr.send("userName="+userName+"&password="+password);
      console.log ("userName="+userName+"&password="+password);
      /////Allow user in! (only if the feilds are filled)
      
   }
   
}



//This function takes inputs from user and checks them against the DB information, if there is a match the user is allowed in, if not, the user can try again.
function authenticate(userName, password) 
{
   for (let i=0; i< allUsers.length; i++)
   {
   var outcome = " ";
   var userName = document.getElementById("email").value;
   var password = document.getElementById ("password").value;
   //Find a safer way than sending all info over the inetersnet! 
      if (userName==allUsers[i].userName && password==allUsers[i].password)
      { 
         document.getElementById ("sign-in");
         console.log (userName+' is here!');
         window.user = allUsers[i];
/////Allow user in! (only if the feilds are filled correctly)
         outcome += window.location.href = "\index.html"
         break
      } else
      { 
         outcome += alert("Wrong password, please try again");
         console.log ('wrong password');
         window.location.reload ();
         break
      }
   }
   return outcome;
} 


//This function loads all the content of the mainpage when a user visits the website
function loadMain (postId) {
 // get all posts by postId from the database

}


//Get input from User
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

//Send user input to Server
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

// retreve user input from DB with its properties and place within Div
function publish () {
   
   // Return post with properties
   // Place within Div
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
