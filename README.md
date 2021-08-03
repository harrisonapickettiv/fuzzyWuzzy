# Fuzzy Wuzzy

A JavaScript coding exercise using loops. Write a program that displays the numbers 0 to 100. Display the even numbers in BOLD.

---

## Description

The code is structured as several functions with a primary controller exported to the application.

### Get Values

A function that gets startValue and endValue from the user interface. Returns the values and whether they are valid input.

### Gen Numbers

A function that generates a series of numbers from a start and end value. Returns an array containing the series.

### Display Numbers

A function that takes an array of numbers and generates HTML table row markup. Numbers are displayed one per row ordered by array index. Each number is marked with a class indicating whether it is even or odd. The markup is inserted into the table element with id "results".

### Display Error

A function that inserts an error message into the element with id "results". The message indicates that inputs must be positive integers in white text on a red background.

### Fuzzy Wuzzy

The main application function. Calls getValues to get and validate user input. Then displays an error if getValues finds an error in input. Otherwise, calls genNumbers followed by displayNumbers to generate and display a table to the user.
