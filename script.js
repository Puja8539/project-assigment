var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["EmployeeId"] = document.getElementById("EmployeeId").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Salary"] = document.getElementById("Salary").value;
    formData["Birthdate"] = document.getElementById("Birthdate").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.EmployeeId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Gender;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Salary;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Birthdate;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("EmployeeId").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("Birthdate").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("EmployeeId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Salary").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Birthdate").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.EmployeeId;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Address;
    selectedRow.cells[3].innerHTML = formData.Gender;
    selectedRow.cells[4].innerHTML = formData.Salary;
    selectedRow.cells[5].innerHTML = formData.Birthdate;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("EmployeeId").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}