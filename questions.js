export const questionData =
  [
    {
      "question": "What is a callback function?",
      "options": [
        {
          "text": "A function that is invoked when an error occurs during the execution of another function.",
          "correct": false
        },
        {
          "text": "A function that is passed to another function as an argument and is invoked after the completion of that function.",
          "correct": true
        },
        {
          "text": "A function that handles asynchronous operations by repeatedly polling the server until a response is received.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the difference between == and === operators?",
      "options": [
        {
          "text": "The `===` operator takes the type of variable into consideration, while the `==` operator performs type conversion if necessary.",
          "correct": true
        },
        {
          "text": "Both operators compare values without considering the type of the variables.",
          "correct": false
        },
        {
          "text": "The `==` operator is used for comparing objects, while `===` is used for comparing primitive values.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is a higher-order function?",
      "options": [
        {
          "text": "A function that returns the value of another function.",
          "correct": false
        },
        {
          "text": "A function that is passed to another function as an argument and is executed after some operation has been completed.",
          "correct": false
        },
        {
          "text": "A function that accepts another function as an argument or returns a function as a return value or both.",
          "correct": true
        }
      ]
    },
    {
      "question": "What is the Temporal Dead Zone?",
      "options": [
        {
          "text": "A specific time when variables are locked from being accessed.",
          "correct": false
        },
        {
          "text": "A period between the creation of a variable with `let` or `const` and its initialization, during which the variable cannot be accessed.",
          "correct": true
        },
        {
          "text": "A feature in JavaScript that automatically assigns default values to uninitialized variables.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the purpose of the 'use strict' directive in JavaScript?",
      "options": [
        {
          "text": "Allows the use of more advanced language features that are not available in regular mode.",
          "correct": false
        },
        {
          "text": "Enforces stricter parsing and error handling in your JavaScript code, catching common mistakes and preventing unsafe actions.",
          "correct": true
        },
        {
          "text": "Automatically optimizes the performance of JavaScript code by applying advanced compiler techniques.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the difference between var, let, and const?",
      "options": [
        {
          "text": "`var` is function-scoped, while `let` and `const` are block-scoped. `const` is used for variables that should not be reassigned.",
          "correct": true
        },
        {
          "text": "`var` and `let` are used for declaring variables that can be reassigned, while `const` is used for declaring constants that cannot be reassigned.",
          "correct": false
        },
        {
          "text": "`var` is used for global variables, `let` is for local variables, and `const` is for function-specific variables.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is event delegation?",
      "options": [
        {
          "text": "The process of binding event listeners directly to each individual element.",
          "correct": false
        },
        {
          "text": "A technique that allows a single event listener to handle events for multiple child elements by leveraging event bubbling.",
          "correct": true
        },
        {
          "text": "Involves assigning event handlers to the parent element to ensure that all events are captured and handled immediately.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the difference between null and undefined?",
      "options": [
        {
          "text": "Null represents the intentional absence of any object value, while undefined means a variable has been declared but has not yet been assigned a value.",
          "correct": true
        },
        {
          "text": "Null is used to indicate that a variable has a value of zero, while undefined means the variable has no value.",
          "correct": false
        },
        {
          "text": "Null and undefined are interchangeable and represent the same concept in JavaScript.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the purpose of closures in JavaScript?",
      "options": [
        {
          "text": "Closures are used to create new objects in JavaScript.",
          "correct": false
        },
        {
          "text": "Closures allow access to an outer function's scope from an inner function, even after the outer function has returned.",
          "correct": true
        },
        {
          "text": "Closures are a method of preventing variables from being accessed globally.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is hoisting in JavaScript?",
      "options": [
        {
          "text": "Hoisting is the process by which variable and function declarations are moved to the top of their containing scope during the compilation phase.",
          "correct": true
        },
        {
          "text": "Hoisting describes the process where JavaScript code is executed in the reverse order of its appearance.",
          "correct": false
        },
        {
          "text": "Hoisting is the technique of importing modules dynamically at runtime.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the spread operator (...) in JavaScript?",
      "options": [
        {
          "text": "The spread operator provides a way to create deep copies of objects and arrays.",
          "correct": false
        },
        {
          "text": "The spread operator is used to concatenate multiple strings into a single string.",
          "correct": false
        },
        {
          "text": "The spread operator allows an iterable (like an array or object) to be expanded into individual elements or properties.",
          "correct": true
        }
      ]
    },
    {
      "question": "What is a promise in JavaScript?",
      "options": [
        {
          "text": "An object that represents the eventual result of an asynchronous operation, whether it's successful or fails.",
          "correct": true
        },
        {
          "text": "A mechanism for executing tasks in parallel using multiple threads for improved performance.",
          "correct": false
        },
        {
          "text": "An object used to delay the execution of a function until a later time.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is asynchronous programming in JavaScript?",
      "options": [
        {
          "text": "A technique in JavaScript for ensuring that functions execute one after another in a strict sequence.",
          "correct": false
        },
        {
          "text": "Allows JavaScript to run multiple threads simultaneously to perform tasks in parallel.",
          "correct": false
        },
        {
          "text": "Allows JavaScript to handle tasks without blocking the main thread",
          "correct": true
        }
      ]
    },
    {
      "question": "How does JavaScript's prototype-based inheritance work?",
      "options": [
        {
          "text": "Objects inherit properties and methods from other objects through a prototype chain.",
          "correct": true
        },
        {
          "text": "Involves creating new classes using the `class` keyword, which then inherit methods and properties from a parent class.",
          "correct": false
        },
        {
          "text": "Inheritance is managed by copying all properties and methods from one object to another at the time of creation.",
          "correct": false
        }
      ]
    },
    {
      "question": "What is the `this` keyword in JavaScript, and how does its value change?",
      "options": [
        {
          "text": "`this` is a reserved keyword that always refers to the global object regardless of the context in which it is used.",
          "correct": false
        },
        {
          "text": "`this` refers to the object that is currently executing the code.",
          "correct": true
        },
        {
          "text": "`this` refers to the last object created by a constructor function and remains constant throughout the code execution.",
          "correct": false
        }
      ]
    }
  ]
