const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation Form';
h1.setAttribute('id','title');

const paragraph = document.createElement('p');
paragraph.textContent = 'This form contains Name, Address, Pin-code, Gender, Food, State, Country';
paragraph.setAttribute('id','description');



function addData() {
    var formData = document.getElementById('form');
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow(table.rows.length);
  
    var cells = [];
    for (var i = 0; i <=7; i++) {
      cells.push(newRow.insertCell(i));
    }

    
  
    cells[0].innerHTML = formData.elements["firstName"].value;
    cells[1].innerHTML = formData.elements["lastName"].value;
    cells[2].innerHTML = formData.elements["address"].value;
    cells[3].innerHTML = formData.elements["pincode"].value;
    cells[4].innerHTML = formData.elements["gender"].value;
    cells[5].innerHTML = formData.elements["food"].value;
    cells[6].innerHTML = formData.elements["state"].value;
    cells[7].innerHTML = formData.elements["country"].value;
  
    formData.reset();
  }
  
