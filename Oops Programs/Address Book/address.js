var utility=require('../../Oops Programs/Utility');
var filestream=require('fs');
var content=filestream.readFileSync('address.json');
var data=JSON.parse(content);

function address()
{
  utility.address_book(data);
}
address();