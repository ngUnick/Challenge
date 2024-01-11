// Function to handle cell click event
function cellClickHandler(i, j) {
    console.log('Clicked on cell:', '(' + i + ', ' + j + ')');
}

// Create a reference to the body element
var body = document.body;

// Create the first table element and assign ID "table1"
var table1 = document.createElement('table');
table1.id = 'table1';

/// Create rows and cells for the first table
for (var i = 0; i < 11; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < 11; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', (function (i, j) {
            return function () {
                cellClickHandler(i, j);
            };
        })(i, j));
        row.appendChild(cell);
    }

    table1.appendChild(row);
}

// Append the first table to the "table1" div
document.getElementById('table1').appendChild(table1);

// Create the second table element and assign ID "table2"
var table2 = document.createElement('table');
table2.id = 'table2';

// Create rows and cells for the second table
for (var i = 0; i < 11; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < 11; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', (function (i, j) {
            return function () {
                cellClickHandler(i, j);
            };
        })(i, j));
        row.appendChild(cell);
    }

    table2.appendChild(row);
}

// Append the first table to the "table1" div
document.getElementById('table2').appendChild(table2);

// Append the parent table to the body
body.appendChild(parentTable);