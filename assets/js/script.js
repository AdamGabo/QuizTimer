var highscorebutton = document.querySelector("#high-score-button");
var timer = document.querySelector("#timer-display");
var questions = document.querySelector("#questions-text");
var answers = document.querySelector("#answer-list");
var pageContentEl = document.querySelector("#page-content");




var question1 = "Commonly used datatypes do NOT include?"; 
var question2 = "The condition of an if/else statement is enclosed with?";
var question3 = "Where is the correct place to insert a JavaScript in HTML file?";

var answerset1 = ["strings", "booleans", "alerts", "numbers"];
var answerset2 = ["commas", "quotes", "curly brackets", "parenthesis"];
var answerset3 = ["scripting", "script", "js", "javascript"];
var answersetArray = [answerset1,answerset2,answerset3]; 

var qCounter = 0; 
var score = 0; 
var highscores = []; 
var answerids =[];



var questionContent = document.getElementById("#question-text");
var aList = document.getElementById("#answer-list");
//function for first page, with event handler to proceed to the TaskActions function 
//add paragraph
//add button 
//add timer and start timer 
    

    var firstPrompt = function (){
 
        var promptQ = document.createElement("h2");
        promptQ.className = "prompt";
        promptQ.id = "prompt"; 
        promptQ.innerHTML = "<h2> Code Quiz Challenge </h2>";
        pageContentEl.appendChild(promptQ);

        var supportingText = document.createElement("p");
        supportingText.className = "suppoting-text";
        supportingText.id = "suppoting-text"; 
        supportingText.innerHTML = "<p> Answer Javascript questions in the allowed time. Good Luck! </p>";
        pageContentEl.appendChild(supportingText);

        var startBtn = document.createElement("button");
        startBtn.className = "btn";
        startBtn.id = "btn";
        startBtn.textContent = "Start";
        pageContentEl.appendChild(startBtn);
        

    }
    var QuestionEventHandler = function (event) {
        event.preventDefault();
        var btnInput = document.querySelector(".btn");
        //var taskTypeInput = document.querySelector("select[name='task-type']").value;
      
        // check if inputs are empty (validate)
        if (!btnInput) {
          alert("Try Again");
          return false;
        }

        if (btnInput.id === "btn" || btnInput.id === "btnA")
            addAnwserElements();
    }

    var addAnwserElements = function () {
    // create container to hold elements
        
        removeElements(); 
        var setSelected; 
        var question; 
        if (qCounter === 0)
        {
            setSelected = answerset1; 
            question = question1; 
        }
        else if (qCounter === 1)
        {
            setSelected = answerset2; 
            question = question2; 
        }
        else if (qCounter === 2)
        {
            setSelected = answerset3; 
            question = question3; 
        }
        
        //Create Question
        var promptQ = document.createElement("h2");
        promptQ.className = "prompt";
        promptQ.id = "prompt"; 
        promptQ.innerHTML = "<h2>" + question + "</h2>";
        pageContentEl.appendChild(promptQ);

        //Create Ul list 
        var Ul = document.createElement("ul");
        Ul.className = "answers";
        Ul.id = "answers"; 
        pageContentEl.appendChild(Ul);

        for (var j = 0; j < setSelected.length; j++)
        {
            // create buttons button
            var abtn = document.createElement("button");
            abtn.textContent = setSelected[j];
            abtn.className = "btnA";
            abtn.id = "btn" + j;
            //abtn.setAttribute(j.toString, answerids);
            Ul.appendChild(abtn);
            //console.log(setSelected[j]); 
        }
        

        //create answer list 
        
        var element = document.querySelector(".btnA");

        element.onclick = function(event) {
            var promptOutcome = document.createElement("h2");
            promptOutcome.className = "prompt";
            promptOutcome.id = "prompt"; 
            if (qCounter === 0)
            {
                if (element.id === "btn2")
                {
                promptOutcome.innerHTML = "<h2> Right </h2>";
                score += 10; 
                }
                else 
                {
                promptOutcome.innerHTML = "<h2> Wrong </h2>";
                //subtract time from counter
                }
            }
            else if (qCounter === 1)
            {
                if (element.id === "btn3")
                {
                promptOutcome.innerHTML = "<h2> Right </h2>";
                score +=10;
                }
                else 
                {
                promptOutcome.innerHTML = "<h2> Wrong </h2>";
                //subtract time from the counter
                }
            }
            else if (qCounter === 2)
            {
                if (element.id === "btn1")
                {
                promptOutcome.innerHTML = "<h2> Right </h2>";
                score += 10; 
                }
                else 
                {
                promptOutcome.innerHTML = "<h2> Wrong </h2>";
                //subtract score
                }
            }
            pageContentEl.appendChild(promptOutcome);
            console.log(event);
            if (qCounter >= 3)
            {
                //highscore function page f
            }
            else 
            {
                qCounter++; 
                QuestionEventHandler("click"); 
            }

            
            
        }
        //var btns = document.querySelector(".btn"); 
        //btns.addEventListener("click", QuestionEventHandler);
        
    }
    function removeElements() {

        var e = document.querySelector("p");
        if (e)
        e.remove(); 
        var ee = document.querySelector("h2");
        if (ee)
        ee.remove();
        var ul = document.querySelector("ul")
        if (ul)
        ul.remove();
        var eee = document.querySelector(".btn");
        if(eee)
        eee.remove();
        
        
    }

    function addHighscore(){

    }

    

    

    //embedded for loop for answers 
  
    

    //event handler for when item was clicked would remove items in question and answers 
    //event handler that would determine if a question was correct, using if eles statements. i.e what question are they on? did they pick this one if not limit timer. add to score and store it in local storage using the DOM, JSON 
    //event handler that would proceed to the next question by adding to the counter within the for loop for questions, counter would only be added to during the event of a button submission 

    //once counter reaches 3 or the time runs out, event listener for determining if timer is up proceed to completetion page, remove items and display content for that page 

    //create button to submit score, once clicked the score will be saved to the local storage 

    //a high score viewer can be viewed via the highschore button at all times, which displays a list of the highscore attempts by users, everything stored in the local storage, go back button restarts the process (event handler for button click)

    //add generic CSS elements to ad pizzaz 

// Create a new task
//formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
//pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
//pageContentEl.addEventListener("change", taskStatusChangeHandler);

firstPrompt();
var btns = document.querySelector(".btn"); 
btns.addEventListener("click", QuestionEventHandler,true);






//loadHighscores();
