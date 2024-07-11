
# Employee Payroll Tracker

  

## Technology Used

  

| Technology Used | Resource URL |

| ------------- |:-------------:|

| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |

| CSS | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |

| Git | [https://git-scm.com/](https://git-scm.com/) |

  

## Description

  

[Visit the Deployed Site](https://youtu.be/BFyeuLhjcPY)

  

I was required to use different JavaScript fundamentals such as, loops, arrays, functions, and objects to insure this projects success. Mathematical methods were useful in adding length based arrays to calculate varies inputs of employee's and salaries. 
  
I created a Employee Payroll Tracker which logged the average salary between all employees, along with a random employee winner. This project showcases clean code, a strong understanding of JavaScript fundamentals using methods, functions, and objects, with acute problem solving skills in calculating quantitative ideas . The importance of using console.log while figuring out what data is being passed through an argument is monumentally helpful in creating good code. I had to console the outcome multiple times when my functions were giving unexpected outcomes, which helped reusable code. This project is a testament to clean and readable code. It utilizes arranged JavaScript technologies to solve complicated questions and serves as a solid foundation to solving future coding project requirements. 
  

Link to the deployed application here:
https://keithamadeus.github.io/module_3_challenge/


![https://keithamadeus.github.io/module_3_challenge/](./Assets/employee-tracker.gif)

  
  

## Code Refactor Example

  

Following is an example of the collectEmployees function, it is the object along with prompts to get the employees information. 

  
  

```js
let  addEmp  =  true

while (addEmp) {

employee = {

firstName:  "",

lastName:  "",

salary:  0,

}

employee.firstName =  prompt ("Please enter employee's first name.");

employee.lastName =  prompt ("Please enter employee's last name.");

employee.salary =  parseFloat(prompt ("Please enter employee's salary."));

if (isNaN(employee.salary)) {

alert ("Please enter a number. Use digits only.");

continue;

}

```

  

The following is an example of the displayAverageSalary, which proved to be quite challenging to get to calculate correctly. Using a for loop along with the length of the array, ended up being very helpful in solving this argument. 

  

```js

for (i =  0; i <  employeesArray.length; i++){

totalSal  +=  employeesArray[i].salary;

//finish for loop

}

//divide by total number of employees

averageSal  =  totalSal  /  employeesArray.length;

```



  

## Usage

  

Provide instructions and examples for use. Include screenshots as needed.

  

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

  

```md

![alt text](assets/images/screenshot.png)

```

  
  

## Learning Points


  In creating this application, I learned the importance of using console.log through the design process. It proved to be very useful while I was creating the function that displayed the average salary. I ran into roadblocks because the average salary was calculating incorrectly. When I started to log my code incrementally, I was able to pinpoint my error and correct the code. 

Using objects is important to parse multiple of the same inputs. It was very helpful to create my function that can have an unlimited amount of inputs and maintain its integrity, because the information is passing through the same object. 

## Author Info
  ### Keith A. Williams

```md
* [LinkedIn](https://www.linkedin.com/in/keith-williams-7841b022/)

* [Github](https://github.com/keithamadeus)
* [Portfolio}(https://keithamadeus.github.io/Module-2-Challenge/)