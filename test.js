// 1. Declare a number called myNumber that is equal to your age and print it

let myNumber = 15
console.log(myNumber)


// 2. Declare a string called myName that contains your name and print it

let myName = "Darius"
console.log(myName)


// 3. Declare an array named myArray that contains your age, your first name, and if it's true or false that you're a student

let myArray = ["15", "Darius" ]

// 4. Write and call a function called printHello that prints your name to the console by accessing myArray
function printHello(){
    return myArray[1]
}

printHello

/* 5.
1)create a function called area that takes in two parameters, width and length
2) the function, area should return width times length
3) call the function and give two values for the parameters */

function are(l,w){
    return l * w
}

/* 6. Use conditional statements to write fizzBuzz
1) if num is divisble by BOTH 3 and 5, console.log "FizzBuzz"
2) if num is divisible by 3, console.log "Fizz"
3)  if num is divisible by 5, console.log "Buzz"  */

var if
if(number % 3 == 0 && number % 5 == 0){
    console.log("FizzBuzz")
}

else if(number % 3 == 0){
    console.log("Fizz");
}

else if(number % 5 == 0){
    console.log("Buzz");
}

else{
    console.log("Error: Please Provide an input of a number divisible by 3 and/or 5");
}



// 7. Write a loop that prints hello to the console 4 times



//8. write a nested for loop that reads the array and console.log each element
let nestedArray = [
    [2,1],[5,8],[3,9]
]


//9. Command line problems (MAKE SURE TO ANSWER THESE IN THE COMMENTS)

//9a. make a directory called test

// write answer here: 

//9b. move to your test directory that you just created

// write answer here: 

//9c. make a file called test.js

// write answer here: 

//9d. what is the command to open a file to vscode? 

// write answer here: 

//9e. So you already did "git add ." and then you did git commit -m
// What is the last step of the process to push everything to github?

// write answer here: 