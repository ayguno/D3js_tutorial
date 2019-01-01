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

    if(sum_for == sum_reduce){
        result += "Results seem to be equal!";
    }else{
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