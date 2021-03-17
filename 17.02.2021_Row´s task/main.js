

/*(function executeScript() {
    function addRow(userObj) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
    <td>${userObj.studentNo}<td>
    <td>${userObj.Name}<td>
    <td>${userObj.Age}<td> `
        document.querySelector(`generator_t`).appendChild(newRow);
    }

})*/

/*let tbodyOfTable = document.querySelector('#generator_t tbody');
let listOfTr = tbodyOfTable.children;
// adding new row
let newTr = document.createElement('tr');
newTr.innerHTML = '<td>123</td><td>test user name</td><td>999</td>';
// Adding by `input`
document.querySelector('input').onclick = function () {
    tbodyOfTable.insertBefore(newTr, listOfTr[(listOfTr.length - 1)]);
}
*/
function executeScript() {
    var table = document.getElementById("generator_t");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "123";
    cell2.innerHTML = "test user name";
    cell3.innerHTML = "999";
}

function myDeleteFunction() {
    document.getElementById("generator_t").deleteRow(2);
}




