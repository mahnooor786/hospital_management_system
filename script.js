window.onload = loadData;
document.getElementById('pForm').onsubmit = function(e) {
    e.preventDefault();
    let p = {
        id: Math.floor(Math.random()*100),
        n: document.getElementById('name').value,
        a: document.getElementById('age').value,
        g: document.getElementById('gender').value
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
    list.forEach(p => { rows += `<tr><td>${p.id}</td><td>${p.n}</td><td>${p.a}</td><td>${p.g}</td></tr>`; });
    document.getElementById('pData').innerHTML = rows;
}