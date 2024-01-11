// Function to convert a number to a letter (e.g., 0 to 'A', 1 to 'B', etc.)
function numberToLetter(number) {
    return String.fromCharCode('A'.charCodeAt(0) + number);
}

// Function to handle cell click event
function cellClickHandler(i, j) {
    console.log('Clicked on cell:', '(' + i + ', ' + j + ')');
}

// Create the first table element and assign ID "table1"
var table1 = document.createElement('table');
table1.id = 'table1';

// Create rows and cells for the first table
for (var i = 0; i < 11; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < 11; j++) {
        var cell = document.createElement('td');

        // Set content for the first cell in the first row
        if (i === 0 && j === 0) {
            cell.textContent = '';
        }
        // Set content for the first column (excluding the first cell)
        else if (j === 0) {
            cell.textContent = numberToLetter(i - 1);
        }
        // Set content for the first row (excluding the first cell)
        else if (i === 0) {
            cell.textContent = j;
        }

        cell.addEventListener('click', (function (i, j) {
            return function () {
                cellClickHandler(i - 1, j - 1);
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

        // Set content for the first cell in the first row
        if (i === 0 && j === 0) {
            cell.textContent = '';
        }
        // Set content for the first column (excluding the first cell)
        else if (j === 0) {
            cell.textContent = numberToLetter(i - 1);
        }
        // Set content for the first row (excluding the first cell)
        else if (i === 0) {
            cell.textContent = j;
        }

        cell.addEventListener('click', (function (i, j) {
            return function () {
                cellClickHandler(i - 1, j - 1);
            };
        })(i, j));

        row.appendChild(cell);
    }

    table2.appendChild(row);
}

// Append the first table to the "table1" div
document.getElementById('table2').appendChild(table2);
