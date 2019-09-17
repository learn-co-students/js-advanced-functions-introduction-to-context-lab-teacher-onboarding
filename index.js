// Your code here
function createEmployeeRecord(employeeArr) {
    const employeeObj = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeObj;
};

function createEmployees(employeesArr) {
   return employeesArr.map(employeeArr => createEmployeeRecord(employeeArr));
};

function createTimeInEvent(employeeObj, dateTimeStr) {
    const dateTimeArr = dateTimeStr.split(" ");
    const hourInt = parseInt(dateTimeArr[1]);
    const dateStr = dateTimeArr[0];
    const timeInObj = {
        type: "TimeIn",
        hour: hourInt, 
        date: dateStr
    };
    employeeObj.timeInEvents.push(timeInObj);
    return employeeObj;
};

function createTimeOutEvent(employeeObj, dateTimeStr) {
    const dateTimeArr = dateTimeStr.split(" ");
    const hourInt = parseInt(dateTimeArr[1]);
    const dateStr = dateTimeArr[0];
    const timeOutObj = {
        type: "TimeOut",
        hour: hourInt, 
        date: dateStr
    };
    employeeObj.timeOutEvents.push(timeOutObj);
    return employeeObj;
};

function hoursWorkedOnDate(employeeObj, dateStr) {
    const timeIn = employeeObj
        .timeInEvents
        .find(event => event.date == dateStr)
        .hour;
    const timeOut = employeeObj
        .timeOutEvents
        .find(event => event.date == dateStr)
        .hour;
    const hoursWorked = (timeOut - timeIn)/100;
    return hoursWorked;
};

function wagesEarnedOnDate(employeeObj, dateStr) {
    const hoursWorked = hoursWorkedOnDate(employeeObj, dateStr);
    const wages = hoursWorked * employeeObj.payPerHour;
    return wages;
};

function allWagesFor(employeeObj) {
    const dateArr = employeeObj.timeInEvents.map(event => event.date);
    const allWages = dateArr.reduce(
        (accum, date) => accum + wagesEarnedOnDate(employeeObj, date),
         0);
    return allWages;
};

function calculatePayroll(employeeArr) {
    const payroll = employeeArr.reduce(
        (accum, employee) => accum + allWagesFor(employee),
         0);
    return payroll;
};

function createEmployeeRecords(arrArr) {
    const employeeArr = arrArr.map(arr => createEmployeeRecord(arr));
    return employeeArr;
};

function findEmployeebyFirstName(srcArray, firstNameStr) {
    const employee = srcArray.find(employee => employee.firstName == firstNameStr);
    return employee;
};