/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Christopher Phan
      Date:   9/7/2025

      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 let menuItems = document.getElementsByClassName("mentItem")

 for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal);
 }

 function canlTotal() {
  let orderTotal = 0;
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
 }