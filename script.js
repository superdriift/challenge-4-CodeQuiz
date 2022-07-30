// ** VARIABLES ** //
var button = document.querySelector("#button");
var timer = 120;
var timerEl = document.querySelector('#timer');
var question1 = ['Which of the following is your preferred type of pizza?', 'Cheese', 'Pepperoni', 'Meat Lovers', 'Vegetarian']



// Let's Make 'QBOX'
var main = document.querySelector("#main");
var qboxEl = document.createElement('div');
var qslotEl = document.createElement('h3');
var olEl = document.createElement('ol');
var li0El = document.createElement('li');
var li1El = document.createElement('li');
var li2El = document.createElement('li');
var li3El = document.createElement('li');
//A visual representation of Qbox 
qslotEl.textContent = question1[0]
li0El.textContent = question1[1]
li1El.textContent = question1[2]
li2El.textContent = question1[3]
li3El.textContent = question1[4]




// ** FUNCTIONS ** //
// START Timer
function starttimer() { 
    setInterval(todo, 1000)
}

// Timer- setinterval function
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