var factList = [
  "30 to 50 percent of species are going extinct by mid-century",/*0*/
  "An endangered species is when the number of organisms in a species alive is so minuscule that it might go extinct",/*1*/
  "Peacock Tarantula is dying out",/*2*/
  "Human activities are the cause of risk for 99% of endangered species due to global warming, destruction of habitat, and introduction of exotic species",/*3*/
  "The WWF Organization works towards protecting big cats, rhinos, pandas, whales, marine turtles, primates, and polar bears",/*4*/
  "Franklin's Bumblebee is currently endangered",/*5*/
  "Due to pollution, freshwater ecosystems are one of the most endangered habitats", /*6*/
  "Wooly Spider Monkey is going extinct", /*7*/

  
  ];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
