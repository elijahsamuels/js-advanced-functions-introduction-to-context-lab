// populates a record from an Array

function createEmployeeRecord(array) {
	return {
		'firstName': array[0],
		'familyName': array[1],
		'title': array[2],
		'payPerHour': array[3],
		'timeInEvents': [],
		'timeOutEvents': []
	}
}

// process an Array of Arrays into an Array of employee records

function createEmployeeRecords(arrayOfEmployees) {
	let employeeRecords = []
    arrayOfEmployees.forEach((array) => {employeeRecords.push(createEmployeeRecord(array))
		})
    return employeeRecords
}

// familyName,
// title,
// payPerHour,
// timeInEvents,
// timeOutEvents



function createTimeInEvent() {

};

function createTimeOutEvent() {

};

function wagesEarnedOnDate() {

};

function allWagesFor() {

};

function calculatePayroll() {

};

function findEmployeeByFirstName() {

};

function calculatePayroll() {

};
