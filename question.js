// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "Which of the following is true about return type of functions in C?",
    answer: "Functions can return any type",
    options: ["Functions can return any type", "Niger", "Congo", "Limpopo"],
  },
  {
    numb: 2,
    question: "Which of the following is a valid identifier in C?",
    answer: "myVariable",
    options: ["my-variable", "my variable", "myVariable", "my.variable"],
  },
  {
    numb: 3,
    question:
      'What is the output of the following C code?#include <stdio.h>int main() {int i;for (i = 0; i < 5; i++) {printf("%d ", i);}return 0;}',
    answer: "0 1 2 3 4",
    options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
  },
  {
    numb: 4,
    question: "Which of the following is a correct syntax for a function in C?",
    answer: "int myFunction(int x) {}",
    options: [
      "int myFunction(int x) {}",
      "myFunction(int x) {}",
      "function myFunction(int x) {}",
      "int myFunction x {}",
    ],
  },
  {
    numb: 5,
    question:
      'What is the output of the following C code? \n#include<stdio.h> \nint main() { \n    int x = 5, y = 2; \n    printf("%d", x % y); \n    return 0; \n}',
    answer: "2",
    options: ["2", "2.5", "2.0", "Error"],
  },
  {
    numb: 6,
    question:
      "Which of the following is the correct syntax to declare a variable in C?",
    answer: "myVar = 10;",
    options: ["var myVar;", "myVar = 10;", "int myVar;", "myVar := 10;"],
  },
];
