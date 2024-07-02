// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeeArr = [];

  let addEmp = true
  while (addEmp) {
    employee = {
      firstName: "",
      lastName: "",
      salary: 0,
    }
    employee.firstName = prompt ("Please enter employee's first name.");
    employee.lastName = prompt ("Please enter employee's last name.");
    employee.salary = parseFloat(prompt ("Please enter employee's salary."));
    if (isNaN(employee.salary)) {
      alert ("Please enter a number. Use digits only.");
      continue;
    }
    //push the object into the array Hint: How do I push a string into an array
    employeeArr.push(employee);
    
    //set object back to orignial empty quotes and 0 for salary
    let addAgain = confirm("Would you like to add another employee") 
    if(addAgain === false) {
      // got to next step, to display employees, consider using an array of objects
      displayEmployees(employeeArr);
      break;

    }
  }
  return employeeArr;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let averageSal = 0
  let totalSal = 0
  //for loop starts to add salaries
  for (i = 0; i < employeesArray.length; i++){
    totalSal += employeesArray[i].salary; 
    //finish for loop
  }
  //divide by total number of employees
  averageSal = totalSal / employeesArray.length;
  console.log(totalSal);
  console.log(`The average employee salary between our ${employeesArray.length} employees is ${averageSal}.`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Employee array.length in math.random to choose a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, random drawing winner!`);
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
