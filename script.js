// ** VARIABLES ** //
var button = document.querySelector("#button");
var timer = 120;
var timerEl = document.querySelector('#timer');
var liEl = document.querySelectorAll('li');
var questions = [
    ['Commonly used data types do NOT include.', 'strings', 'booleans', 'alerts', 'numbers'],
    ['The condition in an if / else statement is enclosed with _____.', 'quotes', 'curly brackets', 'parentheses', 'square brackets'],
    ['Arrays in Javascript can be used to store _________.', 'numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    ['String values must be enclosed within _______ when being assigned to variables.', 'commas', 'curly brackets', 'quotes', 'parentheses'],
    ['A very useful tool used during development and debugging for printing content to the debugger is: ', 'Javascript', 'terminal/bash', 'for loops', 'console.log']
]
var currentquestion = 0;
var correctanswers = ['alerts', 'parentheses', 'all of the above', 'quotes','console.log']



// Let's Make 'QBOX'
//var main = document.querySelector("#main");
var qboxEl = document.createElement('div');
var qslotEl = document.createElement('h3');
var olEl = document.createElement('ol');
var li0El = document.createElement('li');
var li1El = document.createElement('li');
var li2El = document.createElement('li');
var li3El = document.createElement('li');



// ** FUNCTIONS ** //
// START Timer
function starttimer() {
    setInterval(todo, 1000)
}
// Timer- setinterval function
function todo() {
    if (timer >= 0) {
        //console.log(timer);

        var h2El = document.createElement('h2');
        h2El.textContent = `There are ${timer} seconds remaining.`;
        timerEl.innerHTML = ' ';
        timerEl.appendChild(h2El);

        timer--;
    }
}


// ** RENDER QUESTION ** 
function renderquestion() {
    var main = document.querySelector("#main");
    var qboxEl = document.createElement('div');
    main.innerHTML = ' '
    var olEl = document.createElement('ol');

    for (var i = 0; i < questions[currentquestion].length-1; i++) {
        var liEl = document.createElement('li');
        var qslotEl = document.createElement('h3');
        qslotEl.textContent = questions[currentquestion][0]
        liEl.textContent = questions[currentquestion][i+1]
        liEl.addEventListener('click', checkanswer)
        liEl.addEventListener('click',cutit)
        olEl.appendChild(liEl)
    }

    qboxEl.appendChild(qslotEl);
    qboxEl.appendChild(olEl);
    main.appendChild(qboxEl);
}


// ** CHECK ANSWER FUNCTION ** //
function checkanswer(event) {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === correctanswers[currentquestion]) {
        currentquestion++;
        renderquestion();
    } else {
        timer = timer -5;
    }
}
 
function cutit(event) {
    console.log(event.target.innerHTML)
    if (currentquestion === correctanswers.length) {
        clearInterval(starttimer);
        var initials = prompt('Would you like to save your score? input your name below.');
        //Save Statistics into the local storage. add local storage display to #main
        if (initials !== '') {
            
            console.log(initials)
        }

    }
}



// // Make QBOX 
// //function makeqbox() {
//     olEl.appendChild(li0El);
//     olEl.appendChild(li1El);
//     olEl.appendChild(li2El);
//     olEl.appendChild(li3El);
//     qboxEl.appendChild(qslotEl);
//     qboxEl.appendChild(olEl);
//     main.appendChild(qboxEl);
// }

    // var li0El = document.createElement('li');
    // var li1El = document.createElement('li');
    // var li2El = document.createElement('li');
    // var li3El = document.createElement('li');
    // qslotEl.textContent = questions[currentquestion][0]
    // li0El.textContent = questions[currentquestion][1]
    // li1El.textContent = questions[currentquestion][2]
    // li2El.textContent = questions[currentquestion][3]
    // li3El.textContent = questions[currentquestion][4]
    // olEl.appendChild(li0El);
    // olEl.appendChild(li1El);
    // olEl.appendChild(li2El);
    // olEl.appendChild(li3El);



// ** ACTION ** // 
// On click start, start timer and add 'qbox' to main
button.addEventListener('click', starttimer);
button.addEventListener('click', renderquestion);