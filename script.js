window.onload = loadData;

document.getElementById('pForm').onsubmit = function(e) {
    e.preventDefault();
    let p = {
        id: "REG-" + Math.floor(1000 + Math.random() * 9000),
        n: document.getElementById('name').value,
        a: document.getElementById('age').value,
        g: document.getElementById('gender').value,
        date: new Date().toLocaleDateString()
    };
    let list = JSON.parse(localStorage.getItem('patients') || "[]");
    list.push(p);
    localStorage.setItem('patients', JSON.stringify(list));
    loadData();
    this.reset();
}

function loadData() {
    let list = JSON.parse(localStorage.getItem('patients') || "[]");
    let rows = "";
    list.forEach((p, index) => { 
        rows += `<tr>
            <td><strong>${p.id}</strong></td>
            <td>${p.n}</td>
            <td>${p.a} Yrs</td>
            <td>${p.g}</td>
            <td><span class="status-badge">Active</span></td>
            <td><button class="delete-btn" onclick="deletePatient(${index})">Remove</button></td>
        </tr>`; 
    });
    document.getElementById('pData').innerHTML = rows || "<tr><td colspan='6' style='text-align:center'>No records found</td></tr>";
}

function deletePatient(index) {
    let list = JSON.parse(localStorage.getItem('patients') || "[]");
    list.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(list));
    loadData();
}