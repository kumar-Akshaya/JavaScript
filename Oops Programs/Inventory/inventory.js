var filestream=require('fs');
var access=require('../../Oops Programs/Utility');
var content=filestream.readFileSync('inventory.json');
var object=JSON.parse(content);
function inventory()
{
  access.inventory(object);
}
inventory();