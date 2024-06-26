// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let continueAdding = true;
  let employeeData = [];
  
  // {firstName:[],
  //   lastName:[],
  //   salary:[]};

  while(continueAdding){
    
    firstName = prompt("Enter first name : ");
    lastName = prompt("Enter last name : ");
    employeeSalary = prompt("Enter salary : ");
    
    if(isNaN(employeeSalary)){
      employeeSalary = 0;
    };

    let employee = {firstName:firstName,
      lastName:lastName,
      salary:parseInt(employeeSalary)};

      employeeData.push(employee);
      // past/incorrect way comment to have it in mind (the employees where not treated as an object)
    // employeeData.firstName.push(firstName);
    // employeeData.lastName.push(lastName);
    // employeeData.salary.push(employeeSalary);

    continueAdding = confirm("Do you want to add another employee?");
  }
  return employeeData
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let sumSalary=0;
  let totalEmployees = 0;

  for (let emply_i of employeesArray){
    sumSalary = sumSalary + emply_i.salary;
    totalEmployees++
  }

  let avgSalary = sumSalary / totalEmployees

  console.log(`The average employee salary between our ${totalEmployees} employee(s) is ${avgSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  let randNumber = Math.random()
  let totalEmployees = 0;

  for (let emply_i of employeesArray){
    totalEmployees++
  }

  let indexWinner = Math.floor(randNumber * totalEmployees)

  console.log(`Congrtulations to ${employeesArray[indexWinner].firstName} ${employeesArray[indexWinner].lastName}, our random drawing winner!`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

