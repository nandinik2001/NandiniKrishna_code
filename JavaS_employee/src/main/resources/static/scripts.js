document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Document is loaded");
    fetchEmployees();
});

function fetchEmployees() {
    console.log("Fetching employees...");
    fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            console.log("Employees fetched", data);
            let employeeList = document.getElementById('employee-list');
            employeeList.innerHTML = '';
            data.forEach(employee => {
                employeeList.innerHTML += `
                    <div>
                        <span>${employee.firstName} ${employee.lastName}</span>
                        <button onclick="deleteEmployee(${employee.id})">Delete</button>
                    </div>
                `;
            });
        });
}

function createEmployee() {
    console.log("Creating employee...");
    let employee = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        department: document.getElementById('department').value
    };

    fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Employee created", data);
        fetchEmployees();
    });
}

function deleteEmployee(id) {
    console.log("Deleting employee...", id);
    fetch(`/api/employees/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log("Employee deleted");
        fetchEmployees();
    });
}
