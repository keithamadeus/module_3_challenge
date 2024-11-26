// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let addEmployees = true;

  // while loop to collect employee information
  while (addEmployees) {
    const firstName = prompt(`Required: Employee's First Name:`);
    const lastName = prompt(`Required: Employee's Last Name:`);
    let salary = prompt(`Required: Employee's Salary:`);

    // Make sure the salary data entered is a number, or default to $0
    salary = parseFloat(salary);
    if (isNaN(salary)) {
      salary = 0;
    }

    // Add employee information to the table if first name and last name are entered
    if (firstName && lastName) {
      employees.push({ firstName, lastName, salary });
    } else {
      alert(`Please enter both a First and Last Name for the employee.`);
    }

    // Confirm to add another employee or exit to display the data
    addEmployees = confirm(`Add another employee?`);
  }

  // Return the employee data that was collected
  return employees;
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
addEmployeesBtn.addEventListener("click", trackEmployeeData);