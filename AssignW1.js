//Assignment 1:Primitive Data Types in JavaScript
let firstName='subha' ;
    console.log(firstName);
    console.log(typeof firstName);
let companyName="BIW Pvt Ltd";
    console.log(companyName);
    console.log(typeof companyName);    
let mobileNumber=9876545678;
    console.log(mobileNumber);
    console.log(typeof mobileNumber);   
let isAutomation=true;
    console.log(isAutomation);
    console.log(typeof isAutomation);   
let hasPlaywright;
    console.log(hasPlaywright);
    console.log(typeof hasPlaywright);   
let xyz=null;
    console.log(xyz);
    console.log(typeof xyz);

//Assignment 2:OddorEven Number

function OddorEven(number)
{
    if(number%2===0)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}
let num=29;
OddorEven (num);

//Assignment 3:Number Types in JavaScript
function numberTypes(num)
{
    if(num>0)
    {
        console.log("Number is Positive");  
    }
    else if(num<0)
    {
        console.log("Number is Negative");  
    }
    else
    {
        console.log("Number is Zero");  
    }
}
let number=-9;
numberTypes(number);

//Assignment 4:Conditional Statements
function launchBrowser(browser)
{
    if(browser==="Chrome")
    {
        console.log("Chrome Browser Launched");     
    }
    else
    {
        console.log("Invalid Browser");
    }
}
let browserName="Chrome";
launchBrowser(browserName);
//Switch Case Statement
function runtests(value)
{
switch(value)
{
    case"smoke":
        console.log("smoke Test Cases Executed");
        break;  
    case"sanity":
        console.log("sanity Test Cases Executed");
        break;  
    case"regression":
        console.log("regression Test Cases Executed");
        break;
    default:
        console.log("No Test Cases Executed");  
}
}
let testname="sanidty";
runtests(testname);

//Assignment 5: Understanding JavaScript Scoping (var vs let vs global)
var gendertype='female'; //global variable
function printgender()
{
    let color='brown';
    if(gendertype.startsWith('female'))
    {
        var age=30;
        let color='pink';
        console.log(color);
    }
    console.log(age);
}
printgender(gendertype);
gendertype='male';
printgender(gendertype);