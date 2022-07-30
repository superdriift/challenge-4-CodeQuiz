// ** VARIABLES ** //
var button = document.querySelector("#button");
var timer = 10;
var timerEl = document.querySelector('#timer');



// Let's Make 'QBOX'
var main = document.querySelector("#main");
var qboxEl = document.createElement('div');
var qslotEl = document.createElement('h2');
var olEl = document.createElement('ol');
var li0El = document.createElement('li');
var li1El = document.createElement('li');
var li2El = document.createElement('li');
var li3El = document.createElement('li');
// A visual representation of Qbox 
// qslotEl.textContent = `Hey there! what's your name?`;
// li0El.textContent = 'Matthew';
// li1El.textContent = 'Joseph';
// li2El.textContent = 'Mary';
// li3El.textContent = 'Kate';




// ** FUNCTIONS ** //
// START Timer
function starttimer() { 
    setInterval(todo, 1000)
}

// Timer- what to do function
function todo() {
    if (timer >= 0){
     console.log(timer);

        var h2El = document.createElement('h2');
        h2El.textContent = `There are ${timer} seconds remaining.`;
        timerEl.innerHTML = ' ';
        timerEl.appendChild(h2El);

     timer--;
    }
}



// Make QBOX 
function makeqbox() {
    olEl.appendChild(li0El);
    olEl.appendChild(li1El);
    olEl.appendChild(li2El);
    olEl.appendChild(li3El);
    qboxEl.appendChild(qslotEl);
    qboxEl.appendChild(olEl);
    main.appendChild(qboxEl);
}






// ** ACTION ** // 
// On click start, start timer and add 'qbox' to main
button.addEventListener('click', starttimer);





button.addEventListener('click', makeqbox);


