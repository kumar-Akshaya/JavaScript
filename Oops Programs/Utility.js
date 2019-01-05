var filestream = require('fs');
module.exports = {
    inventory(object) {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;

        for (var key in rice) {
            console.log(rice[key]);
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }

        for (var key in wheat) {
            console.log('\n\n');
            console.log(wheat[key]);
            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }

        for (var key in pulses) {
            console.log('\n\n');
            console.log(pulses[key]);
            console.log("the total price of ", pulses[key].pulses_name, " is ", pulses[key].weight * pulses[key].price);
        }
    },

    regexExpression(name, fullname, contact, answer) {
       
        var content = filestream.readFileSync('Regex.txt', 'utf8');

        content = content.replace(/<<name>>/g, name);
        content = content.replace(/<<full name>>/g, fullname);
        content = content.replace("xxxxxxxxxx", contact);
        content = content.replace("xx/xx/xxxx", answer);

        filestream.writeFileSync("Regex.txt", content);

    },
   
    stockExpression(data)
    {
        var stock=data.stock;

        for( var key in stock)   
        {
            console.log(stock[key]);
            console.log("The total value of "+stock[key].stock_name+" is "+stock[key].Number_of_shares*stock[key].share_price);
            console.log('\n');
        }
        var newstock=0;
        for(var key in stock)
        {
           newstock=parseInt(newstock)+parseInt(stock[key].Number_of_shares*stock[key].share_price);
        }    
        console.log("The total value of all stocks are  "+newstock); 

    }

}