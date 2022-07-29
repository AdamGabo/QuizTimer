
var pageContentEl = document.querySelector("#page-content");
var answerContentEl = document.querySelector("#answer-outcome");
var list = document.querySelector("#answer-outcome");



var question1 = "Commonly used datatypes do NOT include?"; 
var question2 = "The condition of an if/else statement is enclosed with?";
var question3 = "Where is the correct place to insert a JavaScript in HTML file?";

var answerset1 = ["strings", "booleans", "alerts", "numbers"];
var answerset2 = ["commas", "quotes", "curly brackets", "parenthesis"];
var answerset3 = ["scripting", "script", "js", "javascript"];
var answersetArray = [answerset1,answerset2,answerset3]; 

var qCounter = 0; 
var score = 0; 
var storedhighScores = []; 
var answerids =[];

var timeleft = 60;



var questionContent = document.getElementById("#question-text");
var aList = document.getElementById("#answer-list");

    

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
    var EndPage = function (){

        removeAnswerElements(); 
        
        qCounter = 0; // set counter to 0 
        var promptQ = document.createElement("h2");
        promptQ.className = "prompt";
        promptQ.id = "prompt"; 
        promptQ.innerHTML = "<h2> All Done </h2>";
        pageContentEl.appendChild(promptQ);

        var supportingText = document.createElement("p");
        supportingText.className = "suppoting-text";
        supportingText.id = "suppoting-text"; 
        supportingText.innerHTML = "<p> Your Score was:" + score.toString() + "</p>";
        pageContentEl.appendChild(supportingText);

        var startBtn = document.createElement("button");
        startBtn.className = "btn";
        startBtn.id = "btn";
        startBtn.addEventListener("click", ImplementHighscores); 
        startBtn.textContent = "Submit";
        pageContentEl.appendChild(startBtn);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.id = "input-username"; 
        pageContentEl.appendChild(input);

        //set up local storage 
    }
    var ImplementHighscores = function (event){
        //read it from local storage 
        if(localStorage.getItem("Scores"))
        {
        storedhighScores = JSON.parse(localStorage.getItem("Scores")); 
        //var sH = JSON.parse(storedhighScores); 
        }
        if (score)
        {
            storedhighScores.push({
                username: document.querySelector("#input-username").value,
                scoreAtt: score
            }); 
        }
        localStorage.setItem("Scores" , JSON.stringify(storedhighScores));
        console.log(storedhighScores); 
        location.reload();
    }
    var DiplayHighscores = function (){

        var list = doucment.querySelector("scores-list"); 
        var localList = localStorage.getItem("Scores");
        localList = JSON.parse(localList);

        var score = document.createElement("input");
        input.setAttribute("type", "text");
        input.id = "input-username"; 
        pageContentEl.appendChild(input);

    }

    var AddTimer = function () {

        
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Finished";
        } else {
            document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;

        if (timeleft === 0)
        {
        window.alert("You Lose");
        location.reload(); 
        }

        }, 1000);


    }


    var QuestionEventHandler = function (event) {
        if (qCounter === 0)
            AddTimer(); 


        addAnwserElements();
        //removeAnswerElements();
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
        
        if (qCounter <= 2)
        {
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

            if (setSelected)
            {
                for (var j = 0; j < setSelected.length; j++)
                {
                    // create buttons button
                    var abtn = document.createElement("button");
                    abtn.textContent = setSelected[j];
                    abtn.className = "btnA";
                    abtn.id = "btn" + j;
                    Ul.appendChild(abtn);
                }
            }
        }
        //removeAnswerElements(); 
        getAnswer(); 
        
        }

        function getAnswer(){
        if (qCounter >= 3)
        {
            EndPage(); 
        }
        else
        {
            //gather all the button elements 
            var element = document.querySelector("#btn0");
            var element1 = document.querySelector("#btn1");
            var element2 = document.querySelector("#btn2");
            var element3 = document.querySelector("#btn3");

            // NEED JQUERY 
                element.onclick = function(event) {
                    var promptOutcome = document.createElement("h3");
                    promptOutcome.className = "prompt";
                    promptOutcome.id = "prompt" + qCounter.toString(); 
                    if (qCounter === 0)
                    {
                        if (element.id === "btn2")
                        {
                        promptOutcome.textContent = "Right";
                        score += 10; 
                        }
                        else 
                        {
                        promptOutcome.textContent = "Wrong";
                        score -=2; 
                        timeleft -=10;
                        //subtract time from counter
                        }
                    }
                    else if (qCounter === 1)
                    {
                        if (element.id === "btn3")
                        {
                        promptOutcome.textContent = "Right";
                        score +=10;
                        }
                        else 
                        {
                        promptOutcome.textContent = "Wrong";
                        score -=2; 
                        timeleft -=10;
                        //subtract time from the counter
                        }
                    }
                    else if (qCounter === 2)
                    {
                        if (element.id === "btn1")
                        {
                        promptOutcome.textContent = "Right";
                        score += 10; 
                        }
                        else 
                        {
                        promptOutcome.textContent = "Wrong";
                        score -=2; 
                        timeleft -=10;
                        //subtract score
                        }
                    }
                    answerContentEl.appendChild(promptOutcome);
                    console.log(event);
                    if (qCounter >= 3)
                    {
                        //highscore function page f
                        EndPage();
                    }
                    else 
                    {
                        qCounter++; 
                        QuestionEventHandler(); 
                    }
                }

                element1.onclick = function(event) {
                    var promptOutcome = document.createElement("h3");
                    promptOutcome.className = "prompt";
                    promptOutcome.id = "prompt" + qCounter.toString();
                    if (qCounter === 0)
                    {
                        if (element1.id === "btn2")
                        {
                        promptOutcome.innerHTML = "<h3> Right </h3>";
                        score += 10; 
                        }
                        else 
                        {
                        promptOutcome.innerHTML = "<h3> Wrong </h3>";
                        score -=2; 
                        timeleft -=10;
                        //subtract time from counter
                        }
                    }
                    else if (qCounter === 1)
                    {
                        if (element1.id === "btn3")
                        {
                        promptOutcome.innerHTML = "<h3> Right </h3>";
                        score +=10;
                        }
                        else 
                        {
                        promptOutcome.innerHTML = "<h3> Wrong </h3>";
                        score -=2; 
                        timeleft -=10;
                        //subtract time from the counter
                        }
                    }
                    else if (qCounter === 2)
                    {
                        if (element1.id === "btn1")
                        {
                        promptOutcome.innerHTML = "<h3> Right </h3>";
                        score += 10; 
                        }
                        else 
                        {
                        promptOutcome.innerHTML = "<h3> Wrong </h3>";
                        score -=2; 
                        timeleft -=10;
                        //subtract score
                        }
                    }
                    answerContentEl.appendChild(promptOutcome);
                    console.log(event);
                    if (qCounter >= 3)
                    {
                        //highscore function page f
                        EndPage();
                    }
                    else 
                    {
                        qCounter++; 
                        QuestionEventHandler(); 
                    }
                }

                    element2.onclick = function(event) {
                        var promptOutcome = document.createElement("h3");
                        promptOutcome.className = "prompt";
                        promptOutcome.id = "prompt" + qCounter.toString(); 
                        if (qCounter === 0)
                        {
                            if (element2.id === "btn2")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score += 10; 
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract time from counter
                            }
                        }
                        else if (qCounter === 1)
                        {
                            if (element2.id === "btn3")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score +=10;
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract time from the counter
                            }
                        }
                        else if (qCounter === 2)
                        {
                            if (element2.id === "btn1")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score += 10; 
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract score
                            }
                        }
                        answerContentEl.appendChild(promptOutcome);
                        console.log(event);
                        if (qCounter >= 3)
                        {
                            //highscore function page f
                            EndPage();
                        }
                        else 
                        {
                            qCounter++; 
                            QuestionEventHandler(); 
                        }
                    }

                    element3.onclick = function(event) {
                        var promptOutcome = document.createElement("h3");
                        promptOutcome.className = "prompt";
                        promptOutcome.id = "prompt" + qCounter.toString(); 
                        if (qCounter === 0)
                        {
                            if (element3.id === "btn2")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score += 10; 
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract time from counter
                            }
                        }
                        else if (qCounter === 1)
                        {
                            if (element3.id === "btn3")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score +=10;
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract time from the counter
                            }
                        }
                        else if (qCounter === 2)
                        {
                            if (element3.id === "btn1")
                            {
                            promptOutcome.innerHTML = "<h3> Right </h3>";
                            score += 10; 
                            }
                            else 
                            {
                            promptOutcome.innerHTML = "<h3> Wrong </h3>";
                            score -=2; 
                            timeleft -=10;
                            //subtract score
                            }
                        }
                        answerContentEl.appendChild(promptOutcome);
                        console.log(event);
                        if (qCounter >= 3)
                        {
                            //highscore function page f
                            EndPage();
                        }
                        else 
                        {
                            qCounter++; 
                            QuestionEventHandler(); 
                        }
                    }
                }

        }
        
    function removeElements() {
        while (pageContentEl.hasChildNodes()) {
            pageContentEl.removeChild(pageContentEl.lastChild);
        }
    }
    function removeAnswerElements() {

        //this function simply gets rids of the elements that depict the anwser 

        //while (answerContentEl.hasChildNodes()) {
            //answerContentEl.removeChild(answerContentEl.lastChild);
        //}

            //FOR WHATEVER REASON THIS DID NOT WORK 
            //it is likely due to my Answer function not implementing the correct order of the prompt ids to delete ,see code below

            //I ran out of time but a better solution would have been to simply overwrite the h3 element with a particular id in this case the prompt id, with the correct answer outcome, rather than removing the element each time and adding it back in 



            //if (qCounter === 1 || qCounter === 0)
            //{

            //}
            //else
            //{
                //qCounter - 1
                //console.log(qCounter); 
                //var item = document.querySelector("#prompt" + (qCounter - 1).toString());
                //console.log("#prompt" + (qCounter - 1).toString()); 
                //item.remove();  
            //}    
    }

firstPrompt();
var btns = document.querySelector(".btn"); 
btns.addEventListener("click", QuestionEventHandler,true);

