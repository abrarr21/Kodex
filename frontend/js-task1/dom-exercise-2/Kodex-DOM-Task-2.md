# Intermediate Level DOM + Math Practice Tasks

## 1. Dice Game

Create two dice images dynamically using `document.createElement()`. Use
`Math.random()` to generate numbers (1--6). Display both dice results
and show the winner based on the higher number. Render everything
dynamically using `append()` or `appendChild()`.

## 2. Random Color Card Generator

Create a card on button click. Generate a random RGB background color
using `Math.floor()` and `Math.random()`. Set a random width and height.
Assign a unique `data-id` using `setAttribute()`.

## 3. Lottery System

Take user input (1--50). Generate a random number using `Math.ceil()`.
If the number matches user input, display "You Won" otherwise "Try
Again". Update result dynamically in the DOM.

## 4. Dynamic Image Gallery

Store image URLs in an array. On button click, pick a random image using
`Math.floor()`. Create an `<img>` element dynamically and append it to a
container. Use `getAttribute("src")` to print the image source in
console.

## 5. Progress Bar Simulator

Create a progress bar dynamically. On button click, increase progress
randomly between 10--30%. Update the width style property dynamically.
Stop progress at 100%.

## 6. Random Box Remover

Create 5 boxes dynamically. Assign each box a unique `data-id` using
`setAttribute()`. On click of a box, remove only that specific box. Use
`getAttribute()` to identify which box was clicked.

## 7. Mini Gambling UI

Generate 3 random numbers between 1--9. Display all numbers dynamically.
If all three numbers are the same, show "Jackpot". Otherwise display