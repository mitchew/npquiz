(function () {

    var quiz = {

        // for keeping track of currentQuestion
        currentQuestionCounter: 0,
        // for keeping track of how many questions we get right
        correctQuestions: 0,
        // for keeping track of how many questions we get wrong
        wrongQuestions: 0,
        // stores the question element for ease of use
        questionDisplay: document.getElementById('question'),
        // stores the question counter element for ease of use
        questionCounterDisplay: document.getElementById('question-counter'),
        // stores the correct-answer element for ease of use
        correctAnswerDisplay: document.getElementById('correct-answer'),
        // stores the chapter element for ease of use
        chapterDisplay: document.getElementById('chapter'),
        // stores the user answer input for ease of use
        userAnswerDisplay: document.getElementById('user-answer'),
        // stores the submit button to add events later
        submit: document.getElementById('submit'),
        // where the questions will reside as an object
        questions: {
            chapter6: [
                {
                    np: "capaq'oynay'í",
                    en: "pancake"
                }, {
                    np: "capaq'oynay'íiki",
                    en: "with pancake"
                }, {
                    np: "qáhas",
                    en: "milk"
                }, {
                    np: "qáhaski",
                    en: "with milk"
                },{
                    np: "qahasnim wéy'ikt",
                    en: "butter"
                },{
                    np: "qahasnim wéy'iktki",
                    en: "with butter"
                },{
                    np: "lalx",
                    en: "coffee"
                },{
                    np: "laláxki",
                    en: "with coffee"
                },{
                    np: "písqu",
                    en: "tea"
                },{
                    np: "pisqúuki",
                    en: "with tea"
                },{
                    np: "temisquywéeku's",
                    en: "syrup"
                },{
                    np: "temisquywéeku'ski",
                    en: "with syrup"
                },{
                    np: "táam'am",
                    en: "egg"
                },{
                    np: "táam'amki",
                    en: "with egg"
                },{
                    np: "lapatáat",
                    en: "potato"
                },{
                    np: "lapatáatki",
                    en: "with potato"
                },{
                    np: "máymay",
                    en: "hot dog"
                },{
                    np: "maymáyki",
                    en: "with hot dog"
                },{
                    np: "'óykala híiwes siis",
                    en: "all is gravy/mush/stew"
                },{
                    np: "'óykala híiwes 'iyéqt",
                    en: "all is broth/juice"
                },{
                    np: "kii híiwes mímqasnim 'iyéqt",
                    en: "this is orange juice"
                },{
                    np: "k'usmise",
                    en: "I am frying"
                },{
                    np: "k'úsmise táam'am",
                    en: "I am frying egg"
                },{
                    np: "yeqikéecese",
                    en: "I am pouring"
                },{
                    np: "yeqikéecese lalx",
                    en: "I am pouring coffee"
                },{
                    np: "síiwise",
                    en: "I am spreading"
                },{
                    np: "síiwise 'ipéex̣ qahásnim wé'iktki",
                    en: "I am spreading bread with butter"
                },{
                    np: "haníisa",
                    en: "I am making"
                },{
                    np: "haníisa hipt.",
                    en: "I am making food"
                },{
                    np: "heyéeqce",
                    en: "I am hungry"
                },{
                    np: "'iníise",
                    en: "I am giving"
                },{
                    np: "hipt",
                    en: "food"
                },{
                    np: "hipíse",
                    en: "I am eating"
                },{
                    np: "'itúu 'ee hipíse",
                    en: "What are you eating"
                },{
                    np: "hipíse 'ipéex",
                    en: "I am eating bread"
                },{
                    np: "'itúu Caan hiipíse",
                    en: "What is Jon eating"
                },{
                    np: "Caan hiipíse táam'am",
                    en: "Jon is eating egg"
                },{
                    np: "'itúu 'eetx hipsíix",
                    en: "What are they eating"
                },{
                    np: "nuun hipsíix máymay",
                    en: "We (exclusive) are eating hot dog"
                },{
                    np: "'itúu hahácwal hiipsíix",
                    en: "What are the boys eating"
                },{
                    np: "hahácwal hiipsíix siis",
                    en: "The boys are eating soup"
                },{
                    np: "tewqiséeqce",
                    en: "I am yawning"
                },{
                    np: "Caan hitewqiséeqce",
                    en: "Jon is yawning"
                },{
                    np: "méeytipt",
                    en: "breakfast"
                },{
                    np: "méeytipse",
                    en: "I am having breakfast"
                },{
                    np: "hálx̣patipt",
                    en: "lunch"
                },{
                    np: "halx̣patípsa",
                    en: "I am having lunch"
                },{
                    np: "kulewíitipt",
                    en: "Dinner"
                },{
                    np: "nex̣ce'éce hikulewíitipsix hipinwéespe",
                    en: "Family is eating dinner at the table"
                },{
                    np: "'inikíse",
                    en: "I am putting"
                },{
                    np: "Toni hi'nikíse t'ayct'ác hipinwéespe",
                    en: "Tony is putting the plate on the table"
                },{
                    np: "'itúuki 'ee méeytipse",
                    en: "What are you having for breakfast"
                },{
                    np: "méeytipse tam'áamki",
                    en: "I am having breakfast with egg"
                },{
                    np: "'itúuki Caan himéeytipse",
                    en: "What is Jon having for breakfast"
                },{
                    np: "Caan himéeytipse síiski",
                    en: "Jon is having breakfast with gravy/mush/stew"
                },{
                    np: "'itúuki 'ee halx̣patípsa",
                    en: "What are you having for lunch"
                },{
                    np: "halx̣patípsa cepéepyux̣ti'ski",
                    en: "I am having lunch with sandwich"
                },{
                    np: "'itúuki Méeli hahalx̣patípsa",
                    en: "What is Mary having for lunch"
                },{
                    np: "Méeli hahalx̣patípsa maymáyki",
                    en: "Mary is having lunch with hot dog"
                },{
                    np: "'itúuki 'ee kulewíitipse",
                    en: "What are you having for dinner"
                },{
                    np: "kulewíitipse cuy'éemki",
                    en: "I am having dinner with fish"
                },{
                    np: "'itúuki Seem hikulewíitipse",
                    en: "What is Sam having for dinner"
                },{
                    np: "Seem hikulewíitipse nukt kaa lapatáatki",
                    en: "Sam is having dinner with meat and potato"
                },{
                    np: "'éy'sce",
                    en: "I am happy"
                },{
                    np: "Séemi he'éy'sce",
                    en: "Sammy is happy"
                },{
                    np: "taaqc híiwes halx̣pawit'áasx",
                    en: "Today is Saturday"
                },{
                    np: "píke haaníisa méeytipt",
                    en: "Mother is making breakfast"
                },{
                    np: "pist hi'nikíse t'ayct'ayc hipinwéespe",
                    en: "Father is putting plate on the table"
                },{
                    np: "mamáy'ac Tóninm hinéesmuce mamáy'asna, \"mamáy'ac! waaqitx! wáaqo kíye méeytipsix!",
                    en: "Tony is calling the children, \"Children! Wake up! Now we are having breakfast!"
                },{
                    np: ""
                }
            ]
        },

        // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        shuffleArray: function(array) {

            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },

        // updates the question display
        updateQuestionDisplay: function() {

            quiz.questionDisplay.innerText = quiz.questions.chapter6[quiz.currentQuestionCounter].np;

        },

        // this will count the number of questions in our array and display it as 'question # of #'
        updateQuestionCountDisplay: function() {

            var currentQuestionNumber = quiz.currentQuestionCounter + 1;
            // for storing the number of questions in the lesson
            var questionCount = 0;
            // loops through the lesson to get the number of questions
            for (var i = 0; i < quiz.questions.chapter6.length; i++) {

                questionCount = questionCount + 1;

            }

            quiz.questionCounterDisplay.innerHTML = 'Question ' + currentQuestionNumber + ' of ' + questionCount;

        },

        // this will put the correct answer on the page
        updateAnswerDisplay: function(question) {

            var correctAnswer = quiz.questions.chapter6[question].en;
            console.log('Displaying correct answer. '+ correctAnswer);
            quiz.correctAnswerDisplay.innerText = correctAnswer;

        },

        // this will update which chapter we are currently studying
        updateChapterDisplay: function(chapter) {

            quiz.chapterDisplay.innerHTML = chapter;
        },

        // this will check if the answer is correct and do stuff
        checkAnswer: function() {

            // get the current questions correct answer
            var correctAnswer = quiz.questions.chapter6[quiz.currentQuestionCounter].en;
            console.log('Checking answer ...');

            // if user hasn't entered anything, tell them so.
            if (quiz.userAnswerDisplay.value === '') {

                console.log('You must enter an answer!');
                alert('You must enter an answer!');

            }

            // if the question is the last question in the array, say so
            if ((quiz.currentQuestionCounter + 1) === quiz.questions.chapter6.length) {

                console.log('End of the questions!');
                alert('End of the questions ...');

            }

            // if the answer is correct do stuff here
            if (quiz.userAnswerDisplay.value.toLowerCase() === correctAnswer.toLowerCase()) {

                // increment correct question variable
                quiz.correctQuestions = quiz.correctQuestions +1;
                // reset user input value to ''
                quiz.userAnswerDisplay.value = '';
                // reset the correct answer if it is showing
                quiz.correctAnswerDisplay.innerHTML = '';
                // increment our question tracker
                quiz.currentQuestionCounter = quiz.currentQuestionCounter + 1;
                // update display with new question
                quiz.questionDisplay.innerHTML = quiz.questions.chapter6[quiz.currentQuestionCounter].np;
                //update our question # of # display
                quiz.updateQuestionCountDisplay();

                console.log('Correct!');
                console.log('quiz.currentQuestionCounter is now ' + quiz.currentQuestionCounter);
                alert('Correct');
                // put the cursor back on the user input
                quiz.userAnswerDisplay.focus();

            // if the answer is wrong the else will do stuff
            } else {

                console.log('Incorrect!');
                console.log('quiz.currentQuestionCounter is now ' + quiz.currentQuestionCounter);
                quiz.updateAnswerDisplay(quiz.currentQuestionCounter);

            }
        },

        // http://stackoverflow.com/questions/25262300/javascript-function-after-pressing-enter-key-on-text-box
        watchKeyboard: function(event) {

            if(event.keyCode === 13) {

                quiz.checkAnswer();

            }

        }
    }; // end of the quiz object

    // passes the quiz object to the window for debug purposes
    // window.quiz = quiz;
    // focus the user input on initial load
    console.log('Setting input focus');
    quiz.userAnswerDisplay.focus();
    // shuffle our questions on initial load
    console.log('Shuffling questions');
    quiz.shuffleArray(quiz.questions.chapter6);
    // calls our method from the quiz object and pushes our first question to the page on initial load
    console.log('Displaying first question.');
    quiz.updateQuestionDisplay();
    // updates our question # of # display with the correct information on initial load
    console.log('Updating question count display');
    quiz.updateQuestionCountDisplay();
    // updates our chapter # display currently not working
    // quiz.updateChapterDisplay();
    // adds click function to our submit button
    quiz.submit.onclick = quiz.checkAnswer;
    quiz.userAnswerDisplay.onkeyup = quiz.watchKeyboard;

// passes the window and document from the browser to our javascript allowing use of both within our IIFE
})(window, document);