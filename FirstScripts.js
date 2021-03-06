var placeHolder = '27.2'; x = 2;

var placeHolder = Math.pow(x,3);
var students = ["Ali","Ayse","Can"]; //This is a JS array (arrays are 0-indexed).
var y = {firstName:"Ozan", 
        lastName:"Aygun"
        }; //This is a JavaScript object

//Declare a more complicated object that also has method (a function)
// this keyword refers to the owner of the method, in this case it is the object 'person'
// inside the object person, this.firstName is equivalent to person.firstName

var person = {
    firstName:"John",
    lastName:"Smith",
    ID:654,
    fullName: function(){return this.firstName + " " + this.lastName} //Note that the last property is a function (method)
}

//geneate an array with some random numbers 
var my_numbers =[], i;
for (i = 0; i<4; i++){
    my_numbers.push(Number(Math.random().toPrecision(4))); //toPrecision(4) gets 4 significant figures but as a string, this needs to be converted to Number() by using this wrap.
}


//document.getElementById("demo").innerHTML = 
//    y.firstName +" "+ y['lastName'] + " "+ students[2]; //Notice how we can access array/object elements in various ways

// Define a function that uses some variables defined earlier
function myFunction(an_object,an_array){
    return an_object.firstName + " " + an_array[2] //Function uses variables locally
}

document.getElementById("demo").innerHTML = myFunction(an_object = y, an_array = students)
//document.getElementById("demo").innerHTML = myFunction //Note that if invoked without () function definition is returned

// Window alert will only pop up if the button is clicked 
function myAlert(){
    window.alert(placeHolder == 8);
}

// To practice calling object method (note that Date() is a builtin function that returns system timestamp as string.)
function objectlearning(){
    document.getElementById("dynamic-demo").innerHTML = person.fullName() + Date()
}

// Let's practice looping around an array to create HTML content
// This function will create an unordered HTML list upon call
function createListContent(an_array = students){
    var txt, i, alen;
    alen = an_array.length;
    txt = "<ul>"; //Opening tag for an unordered HTML list
    for (i = 0; i<alen; i++) {     
        txt += '<li>' + an_array[i]+'</li>'; // concatenate array contents into HTML list
    }
    txt += '</ul>'; // Closing tag for an unordered HTML list
    txt = txt.concat(txt,txt,txt); // Concatenate the same string 3 times
    document.getElementById("dynamic-demo").innerHTML = txt; //Change the pointed HTML content
}

// Practice ArrayforEach() 

function calculateSumContent(a_numeric_array = my_numbers){
    var sum = 0;
    //sum function
    function mySum(value){
        sum += value;
    }

    //apply mySum to each element of a_numeric_array, note that variable sum's value is changed
    // without assigning the result to it (forEach works 'inPlace')
    // compare this behaviour with the .map() method below
    a_numeric_array.forEach(mySum);

    //Prepare to present sum along with array itself
    result = "The array: " + a_numeric_array.toString() + "<br>" +
             "The sum: " + sum;   

    //Change the relevant document content using HTML id
    document.getElementById("dynamic-demo").innerHTML = result;

}

// Practice Array.map() method (More intuitive for someone used to R and Python)

function calculateDouble(a_numeric_array = my_numbers){
    
    function myDouble(value){
        return value * 2; //Note that this function returns double of a given value
    }

    // .map() method applies function to each element of the array
    var result_array = a_numeric_array.map(myDouble) // The result is a new array variable    

    //Prepare to present sum along with array itself
    result = "The array: " + a_numeric_array.toString() + "<br>" +
             "The doubled array: " + result_array.toString();
             
    //Change the relevant document content using HTML id
    document.getElementById("dynamic-demo").innerHTML = result;         
}

// Practice Array.filter() method

// We want to filter array based on probabilities being higher or smaller from
// a threshold, 0.5 
function probTest(a_numeric_array = my_numbers){

    var result_array = a_numeric_array.filter(function(value){
            return value >= 0.5; // Note that the inner function has to return a boolean result
        }
    );
    var len = result_array.length;

    //Prepare to present sum along with array itself
    var result = "The probabilities: " + a_numeric_array.toString() + "<br>" +
             "The results: " + result_array.toString() + "<br>" +
             len + " probabilities passed the threshold.";
             
    //Change the relevant document content using HTML id
    document.getElementById("dynamic-demo").innerHTML = result; 

}

// Practice Array.reduce() method

// We want to calculate the sum of array in two ways:
// 1. using the .reduce() method
// 2. using a for loop

function calculateArraySum(a_numeric_array = my_numbers){

    //callback function
    function myTotal(total,value){
        return total + value; // per .reduce() definition, the call backfunction has 2 arguments
                              // one aggregated value passed to next iteration, and one new value  
    }

    var sum_reduce = a_numeric_array.reduce(myTotal);

    //perform the same operation using a for loop
   
    var i; sum_for = 0;

    for (i = 0; i < a_numeric_array.length; i++){
        sum_for += a_numeric_array[i];
    }

    //Prepare the result
    var result = "The array: " + a_numeric_array.toString() + "<br>";
    result += "The sum calculated using Array.reduce() method: "+ sum_reduce + "<br>";
    result += "The sum calculated using a for loop: "+ sum_for + "<br>";

    if(sum_for == sum_reduce) {
        result += "Results seem to be equal!";
    } else {
        result += "There could be some difference in results!";
    }

    //Change the relevant document content using HTML id
    document.getElementById("dynamic-demo").innerHTML = result; 
}

// Practice Array.every() and .some()

// We want to check probabilities being higher or smaller from a threshold: 0.5 
function someTests(a_numeric_array = my_numbers){

    var allOverThr = a_numeric_array.every(function(value){return value >= 0.5;});
    var someOverThr = a_numeric_array.some(function(value){return value >= 0.5;});

    //Prepare the result
    var result = "The array: " + a_numeric_array.toString() + "<br>";
    result += "All probabilities pass threshold? " + allOverThr + "<br>";
    result += "Some probabilities pass threshold? " + someOverThr + "<br>";

    //Change the relevant document content using HTML id
    document.getElementById("dynamic-demo").innerHTML = result; 

}

// Practice Conditional (Ternary) Operator
// ? operator in JavaScript acts like ifelse() function in R

//We want to assign a string value to array probabilities based on a threshold : 0.5
function doesPass(a_numeric_array = my_numbers ){
    
    function myPass(value){
        return (value >= 0.5) ? "Passed":"Not Passed";
    }

    var pass_array = a_numeric_array.map(myPass);

    //Prepare the result
    var  result  = "The array is: " + a_numeric_array.toString() + '<br>' +
                    "The pass profile is: "+ pass_array ;

     //Change the relevant document content using HTML id
     document.getElementById("dynamic-demo").innerHTML = result;                   
}

// Further practice HTML DOM

// Note that event handler is now carried to JavaScript code
// Upon click to content id "dynamic-demo" (a <p> element);
// The navigation bar at the top will be completely removed from document:
// Compare this behavior with changing visibility below
document.getElementById("dynamic-demo").onclick = function(){
   
        document.getElementById("hnavbar").remove();    
}

//////////////////////////////////////////////////
// Practicing  visibility of HTML elements
//////////////////////////////////////////////////

// Note the presence of HTML DOM Style Object reference at:

// https://www.w3schools.com/jsref/dom_obj_style.asp

//////////////////////////////////////////////////////////////////////////////////
// Note that we managed to put a button that can hide or display 
// a horizontal navbar upon user click, without actually removing the 
// element from the document. Note that the space occupied by the object remains 
// in the document (compare this with the display:none below)
/////////////////////////////////////////////////////////////////////////////////

document.getElementById("toolbarbtn1").onclick = function(){
    // Check the current message in the button, if "Hide Toolbar", change the visibility to 'hidden';
    if (document.getElementById("toolbarbtn1").innerHTML == "Hide ToolBar 1") {
        document.getElementById("hnavbar").style.visibility = 'hidden';
        document.getElementById("toolbarbtn1").innerHTML = "View ToolBar 1"; // Update button message to 'view'
    } else { 
    // Otherwise, change the visibility to 'visible';    
        document.getElementById("hnavbar").style.visibility = 'visible';
        document.getElementById("toolbarbtn1").innerHTML = "Hide ToolBar 1"; // Update button message to 'Hide'
    }
    
}

////////////////////////////////////////////////////////////////////////////////////////
// Notice the difference of the similar operation when performed by changing the 
// CSS style property display, using display:none
// To experiment this we add another button, Hide Toolbar 2
// Note the difference is: the space occupied by the HTML element is also removed
// but element itself remains available in the document object and can be 
// re-displayed.
// This is a key behavior for building interactive documents using JavaScript and CSS
/////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("toolbarbtn2").onclick = function(){
    // Check the current message in the button, if "Hide Toolbar", change the display to 'none'
    if (document.getElementById("toolbarbtn2").innerHTML == "Hide ToolBar 2") {
        document.getElementById("hnavbar").style.display = 'none';
        document.getElementById("toolbarbtn2").innerHTML = "View ToolBar 2"; // Update button message to 'view'
    } else { 
    // Otherwise, change the visibility to 'block' which makes it visible;    
        document.getElementById("hnavbar").style.display = 'block';
        document.getElementById("toolbarbtn2").innerHTML = "Hide ToolBar 2"; // Update button message to 'Hide'
    }
    
}

//////////////////////////////////////////////////
// Practicing Event Listeners
//////////////////////////////////////////////////

// Note the presence of HTML DOM Events reference at:

// https://www.w3schools.com/jsref/dom_obj_event.asp

// We can also attach and remove events to specific HTML elements
// using addEventListener and removeEventListenerFunctions

// This also makes possible to attach multiple events to a given element

// When user clicks to the Menu Item 10 it will hide the main content
// When user click to the Menu Item 10 again, it will display the content back

document.getElementById("menuitem10").addEventListener('click', function(){
    var dycontent = document.getElementById("dynamic-demo");
    if(dycontent.style.display != "none"){
        dycontent.style.display = "none";
    } else {
        dycontent.style.display = "block";
    }
     
})

///////////////////////////////////////////////////////////////////////
//Arrow functions
// Note that a function can be also written with arrows
// sq(x) can be defined in this way:

sq = x => x * x; 

console.log(sq(4));
///////////////////////////////////////////
//JSON stringify
// Useful when sending data in JSON format
// Converts entire objet into one JSON string
//The 3rd argument can be set to = 2 to make JSON in nicely formatted 
// works for both objects and arrays
console.log(JSON.stringify(person,null,2));
console.log(JSON.stringify(students,null,2));

// Working with JS modules
// Sometimes we want to import longer chunks of code as js modules
// Let's give an example:

// import the object people from the module in the same directory (does not currently work in Chrome)
//var people = import('people.js');
//console.log(people);
//Use a map function to extract people's First names and print them to console
//people.map(function(pers){console.log(pers.firstName + "\n")});



