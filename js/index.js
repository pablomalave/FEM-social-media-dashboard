//Declaracion de Variables
var Button = document.querySelector("input");
Button.checked = true;
//Añadir eventos
//Toogle Button
Button.addEventListener("change", ButtonChange);

//Función del Evento ButtonChange
function ButtonChange() {
    if (Button.checked === true) {
        lightModeOn();
    } else{
        darkModeOn();
    }
}

// Cambia a modo Dark
function darkModeOn() {
    // Bakground and font-color
    document.querySelector("body").classList.add("darkModeBG", "darkModeColor");
    //Top BG Pattern
    document.querySelector(".topBG").classList.add("darkModeTopBG");
    //Font color in header main title
    document.querySelector("h2").classList.add("darkModeMainText");
    //Main Cards BG & Main Text
    var MainCard = document.querySelectorAll(".mainCard");
    var MainNumber = document.querySelectorAll(".mainNumber");
    for (let index = 0; index < MainCard.length; index++) {
        MainCard[index].classList.add("darkModeBGCard");
        MainNumber[index].classList.add("darkModeMainText");
    }
    //Small Cards
    var SmallCard = document.querySelectorAll(".smallCard");
    var TodayNumber = document.querySelectorAll(".todayNumber");
    for (let index = 0; index < SmallCard.length; index++) {
        SmallCard[index].classList.add("darkModeBGCard");
        TodayNumber[index].classList.add("darkModeMainText");
    }
    //Attribution Link
    var AttributionLink =  document.querySelectorAll(".attribution a");
    console.log(AttributionLink);
    AttributionLink[0].classList.add("darkModeAttributionLink");
    AttributionLink[1].classList.add("darkModeAttributionLink");
}

// Cambia a modo Light
function lightModeOn() {
    // Bakground and font-color
    document.querySelector("body").classList.remove("darkModeBG", "darkModeColor");
    //Top BG Pattern
    document.querySelector(".topBG").classList.remove("darkModeTopBG");
    //Font color in header main title
    document.querySelector("h2").classList.remove("darkModeMainText");
    //Main Cards BG & Main Text
    var MainCard = document.querySelectorAll(".mainCard");
    var MainNumber = document.querySelectorAll(".mainNumber");
    for (let index = 0; index < MainCard.length; index++) {
        MainCard[index].classList.remove("darkModeBGCard");
        MainNumber[index].classList.remove("darkModeMainText");
    }
    //Small Cards
    var SmallCard = document.querySelectorAll(".smallCard");
    var TodayNumber = document.querySelectorAll(".todayNumber");
    for (let index = 0; index < SmallCard.length; index++) {
        SmallCard[index].classList.remove("darkModeBGCard");
        TodayNumber[index].classList.remove("darkModeMainText");
    }
    //Attribution Link
    var AttributionLink =  document.querySelectorAll(".attribution a");
    console.log(AttributionLink);
    AttributionLink[0].classList.remove("darkModeAttributionLink");
    AttributionLink[1].classList.remove("darkModeAttributionLink");
}

