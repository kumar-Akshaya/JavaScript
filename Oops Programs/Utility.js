var filestream = require('fs');
var readline = require('readline-sync');
module.exports = {
    inventory(object) {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;

        for (var key in rice) {
            
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }

        for (var key in wheat) {
            console.log('\n\n');
           
            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }

        for (var key in pulses) {
            console.log('\n\n');
            //console.log(pulses[key]);
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

    stockExpression(data) {
        var stock = data.stock;

        for (var key in stock) {
            console.log(stock[key]);
            console.log("The total value of " + stock[key].stock_name + " is " + stock[key].Number_of_shares * stock[key].share_price);
            console.log('\n');
        }
        var newstock = 0;
        for (var key in stock) {
            newstock = parseInt(newstock) + parseInt(stock[key].Number_of_shares * stock[key].share_price);
        }
        console.log("The total value of all stocks are  " + newstock);

    },

    deckOfCards() {
        var queue = require('../DataStructure/Queue');
        var take = require('util');
        var queue = new queue.Queue;
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = new Array();
        var n = suit.length * rank.length;
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                deck.push(temp + rank[j] + " " + suit[i]);
            }
        }

        for (let i = 0; i < n; i++) {
            var random = parseInt(Math.random() * deck.length)
           
            var temp = deck[i];
            deck[i] = deck[random];
            deck[random] = temp;
        }
        var x = 0, y = 9;
        var array = [];
        for (let i = 0; i < 4; i++) {
            var array1 = [];
            for (let j = x; j < y; j++) {
                array1.push(deck[j]);
            }
            array1 = array1.sort();
            for (let i = 0; i < array.length; i++) {
                queue.enque(i);
                queue.show();
            }
            console.log("cards distibuted to player " + (i + 1) + " is ");
            take.print("[" + array1 + "]");
            console.log('\n');
            array.push(array1);
            x = x + 9;
            y = y + 9;


        }
    },
    clinicManagement(data) {
        var doctor = data.Doctor;
        var patient = data.Patient;
        var answer = Number(readline.question("Press 1 to search doctor \n and press 2 to search patient"));
        {
            if (answer == 1) {
                let inf = readline.question("Press \n 1. to search doctor by his name \n 2. by ID ,\n 3.by Specialization ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].name == nam) {
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the ID of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Id == idn) {
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else if (inf == 3) {
                    var spc = readline.question("Enter the Specialization of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Specialization == spc) {
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else {
                    console.log("Enter valid input");
                    this.clinicManagement(data);
                }
            }
            else if (answer == 2) {
                let inf = readline.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of Patient ");
                    for (var key in patient) {
                        if (patient[key].name == nam) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    // this.appointment();
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the Id of Patient ");
                    for (var key in patient) {
                        if (patient[key].Id == idn) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    //this.appointment();
                }
                else if (inf == 3) {
                    var mob = readline.question("Enter the mobile number of Patient ");
                    for (var key in patient) {
                        if (patient[key].Contact_number == mob) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    //this.appointment();
                }
                else if (inf == 4) {
                    return;
                }
                else {
                    console.log("Enter the valid input")
                }
            }
            else {
                console.log("Enter valid input")
            }
        }

    },
    appointment(data, doctor) {

    },
    inventManagement(data) {

        var answer = Number(readline.question(" press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "));
        if (answer == 1) {
            this.add(data);
        }
        else if (answer == 2) {
            this.remove(data);
        }
        else if (answer == 3) {
            this.disp(data);
        }
        else if (answer == 4) {
            this.print(data);
        }
        else if (answer == 5) {
            this.exit(data);
        }
        else {
            console.log("Invalid key/input ");
        }
    },
    add(data) {

        var name = readline.question("Enter the name of the share    ");
        var share = readline.question("Enter the number of shares     ");
        var price = readline.question("Enter the price of your share ");
        data.stock.push({
            stockname: name,
            no_of_share: share,
            share_price: price
        })
        filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        this.inventManagement(data);

    },

    remove(data) {
        access = data.stock;
        // var content = filestream.readFileSync('inventManage.json');

        var answer = readline.question("Enter the stack name do you want delete");
        
            for (let i = 0; i < data.stock.length; i++) {
                if (data.stock[i].stockname == answer) {
                    var index = data.stock.indexOf(data.stock[i]);
                    
                    data.stock.splice(index, 1);
                }
               
            }
        
        filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        this.inventManagement(data);
        // else{
        //     console.log("Stock not found ");
        //     this.remove(data);
        // }
        

    },

    disp(data) {
        console.log(data);
        this.inventManagement(data);
    },
    print(data) {
        var res = data.stock;
        console.log("The total price of your each share is ");
        for (var key in res) {
            console.log(res[key].stockname + " -->  " + res[key].no_of_share * res[key].share_price)
        }
        this.inventManagement(data);
    },
    exit() {
        console.log(" Thank you ");
        return;
    },

    address_book(data)
    {
     var answer=readline.question("  Press \n 1.To add Person \n 2. To update Person \n 3. To delete Person \n 4. To sort the file by Zip \n 5. To sort the file by name \n 6. To display \n 7. To exit ");
     switch(answer)
     {
         case '1' : this.addPerson(data);
                    //return;
         case '2' : this.update(data);
                     //return;
         case '3' : this.deleted(data);
                     //return;
         case '4' : this.sortingZip(data);
                     //return;
         case '5' : this.sortingName(data);
                     //return;
         case '6' : this.displ(data);
                     //return; 
         case '7' : this.exited();            
     }

    },
    addPerson(data)
    {
      var firstname = readline.question(" Enter First name of person  ");
      var lastname  = readline.question(" Enter Last name of person   ");
      var contact   = readline.question(" Enter contact number of person ");
      var address   = readline.question(" Enter address of person ");
      var state     = readline.question(" Enter state of person ");
      var zip       = readline.question( " Enter zip code of person ");

      data.person.push({
          First_name : firstname,
          Last_name  : lastname,
          Contact    : contact,
          Address    : address,
          State      : state,
          Zip        : zip
      })
      filestream.writeFileSync('address.json',JSON.stringify(data));
      this.address_book(data);

    }, 
    displ(data)
    {
     console.log(data);
     this.address_book(data);
    },

   deleted(data)
   {
       var ans=readline.question("press \n1.choose name \n 2. choose contact number  ");
       if(ans==1)
       {
           for(let i=0;i<data.person.length;i++)
           {
               if(data.person[i].First_name==ans)
               {
                var index = data.person.indexOf(data.stock[i]);
                    
                data.stock.splice(index, 1);
               }
           }
           filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        this.inventManagement(data);
       }
       else if(ans==2)
       {
           for(let i=0;i<data.person.length;i++)
           {
               if(data.person[i].Contact==ans)
               {
                   var index = data.person.indexOf(data.person[i]);
                   data.person.splice(index,1);
               }
           }
           filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        this.inventManagement(data);
       }
   }

    
    
}