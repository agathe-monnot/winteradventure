/* 

1 - LOCALSTORAGE (setItem and getItem)
2 - WEATHER API
    a - La Tania
    b - Morzine
    c - Tignes
3 - DISPLAY DATE IN FOOTER

*/



// 1 -  LOCALSTORAGE ///////////////////////////////////////////////////

/* call function when button clicked */
$("#submit").click(function() {
    storeUserName();
    feedbackNewsletter();
});

/* function to store the user name */
function storeUserName(){
    /* name input */
    let username = $("#userName").val();
    /* email input */
    let useremail = $("#userEmail").val();
    /* sets both in the localstorage */
    localStorage.setItem("stored_username", username);
    localStorage.setItem("stored_useremail", useremail);
};

/* function to display newsletter feedback */
function feedbackNewsletter(){
    /* gets both from localstorage */
    let myUsername = localStorage.getItem("stored_username");
    let myUserEmail = localStorage.getItem("stored_useremail");
    /* displays name with condition both fields have been filled */
    if(myUsername =='' || myUserEmail == ''){
        $('#displayName').text('Please enter both your name and email'); 
    }else{
        $('#displayName').text(`Thanks for subscribing ${myUsername}!`);
        welcome();
        console.log(myUsername);
    }
} 

/* function to diplay stored name in the homepage */
function welcome() {
    let myUsername = localStorage.getItem("stored_username");
    if(myUsername == null){
        $(`#welcome`).html('');
    } else {
        $(`#welcome`).html(`Welcome ${myUsername}!`)
    }
}
welcome();


/* 2-  WEATHER API ///////////////////////////////////////////////////////////////*/


/* a - LA TANIA WEATHER */
/* text */
let titleTania = document.querySelector('#titleTania');
/* weather*/
let tempTania = document.querySelector('#tempTania');
let descTania = document.querySelector('#descTania');
let citynameTania = document.querySelector('#citynameTania');


function displayTania() {
    /* get data from weatehr api */
    fetch('https://api.openweathermap.org/data/2.5/weather?q=la tania&units=metric&appid=49488e56d47c4ec375c83e2c56e5e14a')
    .then(response => response.json())
    .then(data => {
        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];

        /* get name from localstorage */
        let myUsername = localStorage.getItem("stored_username");
        if (myUsername == null) {
            titleTania.innerHTML= ('');
        } else {
            titleTania.innerHTML= (`Hello ${myUsername}!`);
        }
        /* display weather data and date */
        citynameTania.innerHTML = nameValue;
        descTania.innerHTML = descValue;
        tempTania.innerHTML =`${tempValue} °C`;
    })
};
displayTania()


/* b - MORZINE WEATHER */
/* text */
let titleMorzine = document.querySelector('#titleMorzine');
/* weather */
let tempMorzine = document.querySelector('#tempMorzine');
let descMorzine = document.querySelector('#descMorzine');
let citynameMorzine = document.querySelector('#citynameMorzine');

function displayMorzine() {
    /* get data from weatehr api */
    fetch('https://api.openweathermap.org/data/2.5/weather?q=morzine&units=metric&appid=49488e56d47c4ec375c83e2c56e5e14a')
    .then(response => response.json())
    .then(data => {
        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
    
        /* get name from localstorage */
        let myUsername = localStorage.getItem("stored_username");
        if (myUsername == null) {
            titleMorzine.innerHTML= ('');
        } else {
            titleMorzine.innerHTML= (`Hello ${myUsername}!`);
        }
        /* display weather data and date */
        citynameMorzine.innerHTML = nameValue;
        descMorzine.innerHTML = descValue;
        tempMorzine.innerHTML =`${tempValue} °C`;
    })
};
displayMorzine()


/* c - TIGNES WEATHER */
/* text */
let titleTigne = document.querySelector('#titleTigne');
/* weather */
let tempTignes = document.querySelector('#tempTignes');
let descTignes = document.querySelector('#descTignes');
let citynameTignes = document.querySelector('#citynameTignes');

function displayTignes() {
    /* get data from weatehr api */
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tignes&units=metric&appid=49488e56d47c4ec375c83e2c56e5e14a')
    .then(response => response.json())
    .then(data => {
        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
    
        /* get name from localstorage */
        let myUsername = localStorage.getItem("stored_username");
        if (myUsername == null) {
            titleTigne.innerHTML= ('');
        } else {
            titleTigne.innerHTML= (`Hello ${myUsername}!`)
        }
        /* display weather data and date */
        citynameTignes.innerHTML = nameValue;
        descTignes.innerHTML = descValue;
        tempTignes.innerHTML =`${tempValue} °C`;
    })
};
displayTignes()


/* 3 - DISPLAY DATE ////////////////////////////////////////////////////////////// */
function displayDate() {
    let weatherTop = document.querySelector("#today");
    let weatherFooter = document.querySelector("#today2");
    let today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    weatherTop.innerHTML = date;
    weatherFooter.innerHTML = date;
}
displayDate()


