/* ////////////////////////////// PREVIOUS CODE FROM HNC - 2020 ///////////////////////////  

1 - RANDOM IMAGE HEADER GENERATOR
2 - ON/OFF MUSIC ONCLICK
3 - STATIONS PRESENTATION with SELECT MENU

*/



 /* 1 - HEADER RANDOM IMAGE GENERATOR //////////////////////*/

 let randomImage = ['../media/ski-page/09.jpg', '../media/ski-page/12.jpg',
 '../media/ski-page/13.jpg', '../media/ski-page/14.jpg', '../media/ski-page/15.jpg', '../media/ski-page/16.jpg',
 '../media/ski-page/18.jpg', '../media/ski-page/19.jpg'
 ]
 
 function getRandomImage() {
 let number = Math.floor(Math.random() * randomImage.length);
 document.getElementById('random-image').src = randomImage[number];
 }
 
 getRandomImage();
 
 
// 2 - ON/OFF MUSIC ONCLICK ///////////////////////////////////////////
let audio = document.getElementById('myAudio');

function togglePlay() {
 if (audio.paused) {
     audio.play();
 } else {
     audio.pause();
 }
 audio.loop = true;
};

document.getElementById('play').addEventListener('click', togglePlay);



// 3 - STATION IMAGES CHANGE WITH SELECT MENU /////////////////////////
document.getElementById('station3').addEventListener('click', myStation);

function myStation() {
 stationChoice = document.getElementById('station3').value;
 switch (stationChoice) {
     case "morzine3":
         // changes text
         document.getElementById('title').innerHTML = "MORZINE SKIING AREA";
         document.getElementById('display').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         document.getElementById('display2').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         // changes images 
         document.getElementById("photo1").src = "media/ski-page/06-lg.jpg";
         document.getElementById("photo2").src = "media/ski-page/05-lg.jpg";
         document.getElementById("photo3").src = "media/ski-page/10-lg.jpg";
         document.getElementById("skimap").src = "media/ski-page/skimap1.jpg";
         document.getElementById("skistation").src = "media/ski-page/station1.jpg";
         break;
     case "tignes3":
         // changes text
         document.getElementById('title').innerHTML = "TIGNES SKIING AREA";
         document.getElementById('display').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         document.getElementById('display2').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         // changes images 
         document.getElementById("photo1").src = "media/ski-page/09-lg.jpg";
         document.getElementById("photo2").src = "media/ski-page/08-lg.jpg";
         document.getElementById("photo3").src = "media/ski-page/01-lg.jpg";
         document.getElementById("skimap").src = "media/ski-page/skimap2.jpg";
         document.getElementById("skistation").src = "media/ski-page/station2.jpg";
         break;
     case "tania3":
         // changes text
         document.getElementById('title').innerHTML = "LA TANIA SKIING AREA";
         document.getElementById('display').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         document.getElementById('display2').innerHTML =
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus excepturi ipsa consectetur obcaecati numquam essesequi quod dolorem, fugiat, similique magni id quis enim.";
         // changes images 
         document.getElementById("photo1").src = "media/ski-page/03-lg.jpg";
         document.getElementById("photo2").src = "media/ski-page/02-lg.jpg";
         document.getElementById("photo3").src = "media/ski-page/04-lg.jpg";
         document.getElementById("skimap").src = "media/ski-page/skimap3.jpg";
         document.getElementById("skistation").src = "media/ski-page/station3.jpg";
         break;
     default:
         // default text blank
         document.getElementById('title').innerHTML = "";
         document.getElementById('display').innerHTML = "";
         document.getElementById('display2').innerHTML = "";
         // default images blank
         document.getElementById("photo1").src = "media/ski-page/blank.jpg";
         document.getElementById("photo2").src = "media/ski-page/blank.jpg";
         document.getElementById("photo3").src = "media/ski-page/blank.jpg";
         document.getElementById("skimap").src = "media/ski-page/blank.jpg";
         document.getElementById("skistation").src = "media/ski-page/blank.jpg";
 }
};