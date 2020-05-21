var allUsers= [
    {
       userName: "Tester",
       password: "pass",
       userId: "1",
    },
 
    {
       userName: "TesterTwo",
       password: "passtwo",
       userId: "2",
    },
 
    {
       userName: "TesterThree",
       password: "passthree",
       userId: "3",
    }
 ]

 var allPosts= [
     {
         userId: "1",
         input: "Story Text",
         postId: "11",
         counter: "0",
     },
     {
        userId: "2",
        input: "Second Story Text",
        postId: "12",
        counter: "0",
     },
     {
        userId: "1",
        input: "Third Story Text",
        postId: "13",
        counter: "0",
    },
    
 ]

 function loadResults(array) {
   array.forEach(videoObject => {
     let videoData =  videoObject.snippet;
     let video = {
        title : videoData.title,
        img : videoData.thumbnails.default.url,
        description : videoData.description
     };
     let div = document.createElement("DIV");
     let img = document.createElement("IMG");
     img.src = video.img;
     let h4 = document.createElement("h4");
     let title = document.createTextNode(video.title);
     h4.appendChild(title);
     let p = document.createElement("p");
     let desc = document.createTextNode(video.description);
     p.appendChild(desc);
 
     div.appendChild(img);
     div.appendChild(h4);
     div.appendChild(p);
     document.getElementById('results')
       .appendChild(div);
   });
 }

