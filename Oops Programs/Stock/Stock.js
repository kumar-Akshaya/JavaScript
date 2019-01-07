var access=require('../Oops Programs/Utility');
var filestream=require('fs');
var content=filestream.readFileSync('Stock.json');
var data=JSON.parse(content);
function stock()
{
  access.stockExpression(data);
}
stock();