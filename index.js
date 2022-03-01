// the code below is used to create a method for returning an alert when the method is being called
// function onClick(){
//     // the code below is to use the alert() method for showing an alert when the method is called
//     alert("Button Clicked");
// }


// the code below is to use the getElementsByTagName to get the button tags from the index.html then getting 
// access to the button at the 0th index and then using the addEventListener() method to get access to the 
// method for listening to the events that occur on the  webpage

// the addEventListener() method below takes two inputs first one is the String containing the event type and
// the other input is the method that we need to call for performing a particular function when the user clicks 
// the button
// document.getElementsByTagName("button")[0].addEventListener("click",onClick);



// the code below is to use the getElementsByTagName to get the button tags from the index.html then getting 
// access to the button at the 0th index and then using the addEventListener() method to get access to the 
// method for listening to the events that occur on the  webpage

// the addEventListener() method below takes two inputs first one is the String containing the event type and
// the other input is the method that we need to call for performing a particular function when the user clicks 
// the button

// in the code below for the second input rather than passing the name of the method we are passing an anonymous
// function as input
// document.getElementsByTagName("button")[0].addEventListener("click",function (){
//     // the code below is to use the alert method for showing an alert when the button gets clicked
//     alert("Button Clicked");
// });


/*
    NOTE:- The syntax of anonymous method is as follows
    function (){
        
    }
*/


// // the code below is used to create a code for calling the alert method on all the button tags in the index.html
// // when the buttons is clicked 

// // the code below is used to get the list of all the button tags in the index.html in an array

// // in the line of code below we are using the getElementsByClassName() method for getting all the button tags
// // in the array Named buttonTagArray
// let buttonTagArray = document.getElementsByClassName("drum");  

// // the code below is to get the length of the buttonTagArray using the length method
// let buttonTagArrayLength = buttonTagArray.length;

// for(let index = 0; index < buttonTagArrayLength; ++index){
//     // the code below is to use the getElementsByClassName() method to get the list of all the button tags
//     // in the index.html file into an array and then calling the addEventListener() method on all the tags
//     // in the array for showing the alert() method when the button is clicked
//     document.getElementsByClassName("drum")[index].addEventListener("click", function (){
//     // the code below is to use the alert method for showing an alert when the button gets clicked
//     // alert("Button at index "+index+" Clicked");

//     // the code below is used to create an instance of the audio class and then passing the path of 
//     // the tom-1.mp3 file to play tom-1.mp3 sound
//     // var drum1Audio = new Audio('./sounds/tom-1.mp3');
//     // // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//     // // file whose path we have passed as input to the Audio instance
//     // drum1Audio.play();

//     // the below line of code is for debugging purpose to print the tag on which the user clicks by 
//     // getting the identity of the tag using the this keyword
//     console.log(this);

//     // using the this keyword for getting access to the current tag on which the user clicks and then using
//     // the style.color property to change the color of the button clicked to white
//     // this.style.color = "white";

//     // the code below is used to create a variable for getting the inner text content of the tag associted
//     // with the drum class
//     let drumButtonLetter = this.textContent;

//     // the below line of code is for debugging purpose
//     console.log("The value of drumButtonLetter is: "+drumButtonLetter);

//     // the code below is to use the switch statement for choosing the sound based on the button pressed
//     switch(drumButtonLetter){
//         case "w":     
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum1Audio = new Audio('./sounds/tom-1.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum1Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "a":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum2Audio = new Audio('./sounds/tom-2.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum2Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "s":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum3Audio = new Audio('./sounds/tom-3.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum3Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "d":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum4Audio = new Audio('./sounds/tom-4.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum4Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "j":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var snareAudio = new Audio('./sounds/snare.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             snareAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "k":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var crashAudio = new Audio('./sounds/crash.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             crashAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "l":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var kickAudio = new Audio('./sounds/kick-bass.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             kickAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         // the code below is used to create the default case
//         default: 
//             // the code below is used to print the button pressed if the button is not from the above cases
//             console.log("The button pressed is: "+drumButtonLetter);
//     }

//     });
// }



// /*
//     NOTE:- the keydown event Listener can be used with the whole document because we do not know which key
//     is pressed by the user
// */


// // the code below is used to add an eventListener() to the document for getting access to the key pressed by
// // the user

// // the code below is used to pass the keypress as the type to the addEventListener() method since we want to 
// // get access to the key pressed by the user from the keyboard

// // the addEventListener() method also takes an anonymous function as input which is used to tell the eventListener
// // what it needs to do when a particular event is being triggered in our case this event is the keyPress event

// // the anonymous function below takes an event as input 
// document.addEventListener('keydown',function(event) {
//     // the below line of code is for debugging purpose to print the value of event to the console
//     console.log("The value of event is: ");
//     console.log(event);

//     // the code below is used to create a variable to store the value of key event pressed by the user
//     // on the keyboard
//     let keyEventPressedByTheUser = event.key;

//     // the code below is to use the switch code to check the key pressed by the user and then play the sound
//     // accordingly
//     switch(keyEventPressedByTheUser){
//         case "w":     
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum1Audio = new Audio('./sounds/tom-1.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum1Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "a":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum2Audio = new Audio('./sounds/tom-2.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum2Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "s":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum3Audio = new Audio('./sounds/tom-3.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum3Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "d":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var drum4Audio = new Audio('./sounds/tom-4.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             drum4Audio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "j":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var snareAudio = new Audio('./sounds/snare.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             snareAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "k":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var crashAudio = new Audio('./sounds/crash.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             crashAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         case "l":
//             // the code below is used to create an instance of the audio class and then passing the path of 
//             // the tom-1.mp3 file to play tom-1.mp3 sound
//             var kickAudio = new Audio('./sounds/kick-bass.mp3');
//             // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
//             // file whose path we have passed as input to the Audio instance
//             kickAudio.play();

//         // the code below is to use the break keyword to break out of switch
//         break;

//         // the code below is used to create the default case
//         default: 
//             // the code below is used to print the button pressed if the button is not from the above cases
//             console.log("The button pressed is: "+drumButtonLetter);
//     }
// });

// the code below is used to create a method that takes the key press or the click made by the user and then
// uses the switch statement to select which sound file to play
function playSoundFileBasedOnKeyPressedAndMouseClick(keyORClickByUser) {
    switch (keyORClickByUser) {
        case "w":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var drum1Audio = new Audio('./sounds/tom-1.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            drum1Audio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "a":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var drum2Audio = new Audio('./sounds/tom-2.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            drum2Audio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "s":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var drum3Audio = new Audio('./sounds/tom-3.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            drum3Audio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "d":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var drum4Audio = new Audio('./sounds/tom-4.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            drum4Audio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "j":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var snareAudio = new Audio('./sounds/snare.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            snareAudio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "k":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var crashAudio = new Audio('./sounds/crash.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            crashAudio.play();

            // the code below is to use the break keyword to break out of switch
            break;

        case "l":
            // the code below is used to create an instance of the audio class and then passing the path of 
            // the tom-1.mp3 file to play tom-1.mp3 sound
            var kickAudio = new Audio('./sounds/kick-bass.mp3');
            // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
            // file whose path we have passed as input to the Audio instance
            kickAudio.play();

            // the code below is to use the break keyword to break out of switch
            break;

            // the code below is used to create the default case
        default:
            // the code below is used to print the button pressed if the button is not from the above cases
            console.log("The button pressed is: " + keyORClickByUser);
    }
}


/*
    NOTE:- the keydown event Listener can be used with the whole document because we do not know which key
    is pressed by the user
*/


// the code below is used to add an eventListener() to the document for getting access to the key pressed by
// the user

// the code below is used to pass the keypress as the type to the addEventListener() method since we want to 
// get access to the key pressed by the user from the keyboard

// the addEventListener() method also takes an anonymous function as input which is used to tell the eventListener
// what it needs to do when a particular event is being triggered in our case this event is the keyPress event

// the anonymous function below takes an event as input 
document.addEventListener('keydown', function (event) {
    // the below line of code is for debugging purpose to print the value of event to the console
    console.log("The value of event is: ");
    console.log(event);

    // the code below is used to create a variable to store the value of key event pressed by the user
    // on the keyboard
    let keyEventPressedByTheUser = event.key;

    // the code below is used to call the function playSoundFileBasedOnKeyPressedAndMouseClick and then
    // pass the value stored in the keyEventPressedByTheUser variable to the function so as to play the 
    // correct sound file corresponding to the key pressed
    playSoundFileBasedOnKeyPressedAndMouseClick(keyEventPressedByTheUser);

    // the code below is used to call the buttonAnimation method and passing the class associated with
    // the key as input to the method for animating the button when the button is pressed
    buttonAnimation(keyEventPressedByTheUser);
});


// the code below is used to create a code for calling the alert method on all the button tags in the index.html
// when the buttons is clicked 

// the code below is used to get the list of all the button tags in the index.html in an array

// in the line of code below we are using the getElementsByClassName() method for getting all the button tags
// in the array Named buttonTagArray
let buttonTagArray = document.getElementsByClassName("drum");

// the code below is to get the length of the buttonTagArray using the length method
let buttonTagArrayLength = buttonTagArray.length;

for (let index = 0; index < buttonTagArrayLength; ++index) {
    // the code below is to use the getElementsByClassName() method to get the list of all the button tags
    // in the index.html file into an array and then calling the addEventListener() method on all the tags
    // in the array for showing the alert() method when the button is clicked
    document.getElementsByClassName("drum")[index].addEventListener("click", function () {
        // the code below is to use the alert method for showing an alert when the button gets clicked
        // alert("Button at index "+index+" Clicked");

        // the code below is used to create an instance of the audio class and then passing the path of 
        // the tom-1.mp3 file to play tom-1.mp3 sound
        // var drum1Audio = new Audio('./sounds/tom-1.mp3');
        // // the code below is used to call the play() method on the drumAudio instance to play the sound in the 
        // // file whose path we have passed as input to the Audio instance
        // drum1Audio.play();

        // the below line of code is for debugging purpose to print the tag on which the user clicks by 
        // getting the identity of the tag using the this keyword
        console.log(this);

        // using the this keyword for getting access to the current tag on which the user clicks and then using
        // the style.color property to change the color of the button clicked to white
        // this.style.color = "white";

        // the code below is used to create a variable for getting the inner text content of the tag associted
        // with the drum class
        let drumButtonLetter = this.textContent;

        // the below line of code is for debugging purpose
        console.log("The value of drumButtonLetter is: " + drumButtonLetter);


        // the code below is used to call the function playSoundFileBasedOnKeyPressedAndMouseClick and then
        // pass the value stored in the drumButtonLetter variable to the function so as to play the 
        // correct sound file corresponding to icon clicked on the screen
        playSoundFileBasedOnKeyPressedAndMouseClick(drumButtonLetter);


        // the code below is used to call the buttonAnimation method and passing the class associated with
        // the key as input to the method for animating the button when the button is pressed
        buttonAnimation(drumButtonLetter);

    });
}


// the code below is used to create a method for getting the name of the class for the from the user when
// the user presses the button on the keyboard or when the user clicks the key on the screen using the mouse
// click and then add an animation to the button by adding a css class

// the button below takes the name of the class as input
function buttonAnimation(currentKeyClassName) {
    // the code below is used to get access to the tag associated with the class that we pass as input 
    // and save this in a variable named active button
    let activeButton = document.querySelector("."+currentKeyClassName);
    // the code below is to use the classList property and then using the add method and then adding the
    // name of the class as input that we want to apply when the particular button is pressed

    // the code below is used to pass the pressed css class as input
    activeButton.classList.add("pressed");

    // the code below is to use the setTimeout() method and then passing the function that we want to execute 
    // as well as the delay in milliseconds to the method for the delay that we want to create

    // the method below takes an anonymous function as input and this function will be used to write the 
    // functionality that we want to perform after 200 milliseconds i.e. 2 seconds
    setTimeout(function (){
        // the code below is used to get access to the html tag saved inside the activeButton variable and
        // then using the classList.remove() method and passing the name of the css class that we want to 
        // remove from the tag present inside the activeButton variable
        activeButton.classList.remove("pressed");
    },200); 
}