const employee = {
    name: "Tiffany",
    streetAddress: "160 W 96TH ST",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };

    newObj[key] = value;
  
    return newObj;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};

function deleteFromEmployeeByKey (employee, key, value) {
    const newObj = {employee};

    newObj[key] = value;

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    const newObj = {employee};
    employee[key] = value;

    return employee;
}
