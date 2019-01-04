var access = require('../DataStructure/LinkedList');
var filestream = require('fs');
var readline = require('readline-sync');
var utility = require('../DataStructure/utility');
function unorder() {
    var string = filestream.readFileSync('string.txt', 'utf8');
    var array = string.split(' ');

    var unord = new access.LinkedList;
    for (let i = 0; i < array.length; i++) {
        unord.add(array[i]);
    }
    unord.show();

    var answer = readline.question("Enter the word do you want to search  ");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        return;
    }
    else {
        if (unord.search(answer)) {
            unord.remove(answer);
        }
        else {
            unord.add(answer);
        }
    }

    // unord.show();
    var string = unord.getData();
    utility.writeFile('string.txt', string);
    console.log("Linked list elements are ");
    unord.show();
}
unorder();