//.........31 - 34.........//

//Q1
// var dateTime = new Date();
// document.write(dateTime);

//Q2
// var monthName = ["January","February","March","April","May","June","July","August","September","October","Noverber","December"]
// var now = new Date();
// var theMonth = now.getMonth();
// document.write("Current month: "+ monthName[theMonth]);

//Q3
// var a =new Date();
// var b = a.toString();
// var c= b.slice(0,3);
// document.write(c);

// Q4
// var dayName = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var now = new Date();
// var theDay = now.getDay();
// document.write(dayName[theDay])


//Q5
// var a = new Date();
// if(new Date <= 15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }


//Q6
// var date = new Date();
// var milliSecondsSinceJan1970 = date.getTime();
// var minutesSinceJan1970 = milliSecondsSinceJan1970 / 60000;
// document.write("Current Date: "+date+"</br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+milliSecondsSinceJan1970+"</br>");
// document.write("Elapsed minutes since January 1, 1970: "+minutesSinceJan1970+"</br>");

//Q7
// var a = new Date();
// var b = a.getHours();
// if(b<=11){
//     alert("It's AM")
// }
// else if(b>=12||b<=24){
//     alert("It's PM")
// }


//Q8
// var laterDate = new Date("december 31, 2020")
// document.write("Later date: "+laterDate)


//Q9
// var ramadanDate = new Date("June 18, 2015");
// var a = new Date();
// var daysSinceRamadan = a - ramadanDate
// document.write(daysSinceRamadan+" "+"days have passed since 1st Ramadan, 2015")


//Q10
// var a = new Date("December 05, 2015");
// var b = new Date();
// var c = b - a;
// var d = c/6000
// document.write(d)

//Q12
// var a = new Date()
// var b = new Date(100-c)
// document.write("Today date is : "+a+"100 years back it was "+b)

//Q13
// var a = new Date();
// var b = a.getTime();
// var c = new Date(prompt("(month day, year)"))
// var d = c.getTime()
// var e = b-d;
// var AgeFormulae = e/(1000*60*60*24*365)
// var age = Math.floor(AgeFormulae)
// document.write("Your current age is: "+age);



//.........35 - 38.........//
// Q1
// function time() {
//     var a = new Date();
//     document.write(a)
// }
// time()

//Q2
// function greet(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     alert("Welcome Mr/Mrs "+firstName+" "+lastName)
// }
// greet()

//Q3
// function sum(){
//     var a = +prompt("Enter first num");
//     var b = +prompt("Enter second num");
//     var c = a + b;
//     alert(c);
// }
// sum();

//Q4
// function result(num1,num2,operator){
// var calc = num1*num2/operator
// document.write(calc)
//     return calc;

// }
// result(21,34,20);


//Q5
// function square(num){
// var a = num*num
// document.write(a)
// }
// square(8)


//Q6
// function factorial(num){
//     for(i=0;i>0||i<=num;i++){
//        var facNum = i*num;
//        document.write(facNum);
//     }
// }
// factorial(8)


//Q7
// function count(){
//     var a = +prompt("enter start number");
//     var b = +prompt("enter end number");
// var c = a + b;
// document.write(c)
// }
// count();


//Q8
// function calcHypotenues(){
//     var perpendicular = +prompt("Enter value of perpendicular")
//     var base = +prompt("Enter value of base")
// function calcSquare(){
//    var perpendicularSquare = perpendicular*perpendicular
//    var baseSquare = base*base
//    var Hypotenues = perpendicularSquare+baseSquare
// document.write("Hypotenuse is: "+Hypotenues)
// }
// calcSquare();
// }
// calcHypotenues();


//Q9
// function areaOfRectangle(width,height){
// var area = width*height
// alert(area)
// }
// areaOfRectangle(+prompt("Enter width: "),+prompt("Enter height: "))

//Q11
// function firstLetterUpperCase(str){
// var array = str.split(' ');
// var newArray = [];
// for(var i = 0; i < array.length(); i++){
//     newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1))
// }
// return newArray.join(' ');
// }
// document.write(firstLetterUpperCase(prompt("Enter any string")))


//Q12
// function longestWord(String){
// var a = String.split(" ")
// var word = 0;
// var longest = 0;
// for(var i = 0; i< a.length - 1; i++){
//     if(longest < a[i].length){
//         word = a[i]
//         longest = a[i].length
//     }
// }
// return word;
// }
// document.write(longestWord(prompt("Enter any string")))


//Q13
// function characterCount(str,letter){
//     var letterCount = 0;
//     for(var i =0; i < str.length; i++){
//         if(str.charAt(i)==letter){
//             letterCount += 1
//         }
//     }
//     return letterCount;
// }
// document.write(characterCount("Hypotenuse","e"))

//Q14
// function calcArea(){
//     var radius = +prompt("Enter value of radius")
// var pie = 3.142
// var area = pie*(radius*radius)
// document.write("The area is: "+area)
// }
// function calcCircumference(){
//     var radius = +prompt("Enter value of radius")
// var pie = 3.142
//     var circumference = 2*pie*radius
//     document.write(circumference)
// }
// calcArea();
// calcCircumference();


//.........38 - 42.........//
//Q1 
// function power(a,b){
//     var result = 1;
//     if(b == undefined)
//     b = 2;
//     for(var i =1; i <=b; i++){
//         result = result*a;
//     }
//     return result;
// }
// document.write(power(+prompt("Enter base value"),+prompt("enter power")))

//Q2
// function leapYear() {
//     var anyYear = +prompt("Enter year")
//     if (anyYear % 4 == 0) {
//         alert(anyYear + " It's a leap year")
//     }
//     else {
//         alert(anyYear + " It's not a leap year")

//     }
// }

//Q3
// function valueOfS(){
// var a = +prompt("Enter value of a")
// var b = +prompt("Enter value of b")
// var c = +prompt("Enter value of c")
// var sValue = (a+b+c)/2
// function area(){
//     var valueOfArea = sValue*(sValue-a)*(sValue-b)*(sValue-c);
// document.write("Area of triangle is: "+valueOfArea);
// }
// area();
// }
// valueOfS();

//Q4
// function mainFunction() {
//     var marksInSubject1 = +prompt("Marks in first subject")
//     var marksInSubject2 = +prompt("Marks in second subject")
//     var marksInSubject3 = +prompt("Marks in third subject")
//     function average() {
//         document.write("Average of subjects is: " + (marksInSubject1 + marksInSubject2 + marksInSubject3) / 3 + "</br>")
//     }
//     function percentage() {
//         var totalMarks = 300
//         var totalObtained = marksInSubject1 + marksInSubject2 + marksInSubject3
//         document.write("Percentage: " + (totalObtained / totalMarks) * 100)
//     }
//     average();
//     percentage();
// }
// mainFunction();








