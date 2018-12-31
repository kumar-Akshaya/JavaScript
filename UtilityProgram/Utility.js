var readline = require('readline-sync');

module.exports = {

    /*
    *@purpose : To get user input value 
    *@description : call this method whenever we want take input from user
                    and return the value.
    */
    input() {
        const readline = require('readline');

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return rl;
    },

    /*
    *@purpose : To generate the Array 
    *@description : this method is used to generate the array of user choice elements
                    and return the resultant array
    *@param : empty array.
    */
    arrayCall(arr) {
        var number = readline.question("Enter total number of array elements");
        console.log("Enter your Array elements");
        //store elements by elements in array.
        for (let index = 0; index < number; index++) {
            arr[index] = readline.question("")

        }
        return arr;
    },
    /*@purpose : To generate the Array of number type
    *@description : this method is used to generate the array of user choice elements
                    and return the resultant array
    *@param : empty array.
   */
    insertArray(arr) {
        var number = readline.question("Enter total number of array elements");
        console.log("Enter your Array elements");
        // stores elements by elements in array 
        for (let index = 0; index < number; index++) {
            arr[index] = Number(readline.question(""));

        }
        return arr;
    },

    /* 
     * @purpose : By taking power values as input and display the given power value 
     *            is a leapyear or not , the given power value doesnt exceed 31
     */

    /*
     * @description : Declaring a function and giving power value N as argument  
     * @function : power function takes the value N,checks the given number is less than 31 
     *             and prints the given value is a leap year or not
     */
    pow(res, res1) {
        var pw = 1;
        while (res1 > 0) {
            pw = pw * res;
            res1--;
        }
        return pw;
    },

  

    /*
     * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
     *             and print the string.
     */

    /*
     *  @descriptipn: Declaring the function and passing the userinput as argument.
     *  @function: diplayname takes the userinput and print it with some sentence.
     */
    replace(answer) {
        if (answer.length >= 3) {
            var string = "Hello <<UserName>>, How are you?";
            // take one empty string
            var temp = "";
            var a1 = string.substring(0, 6);
            temp = temp + a1;

            temp = temp + answer;
            var a2 = string.substring(18, 32);
            temp = temp + a2;
            console.log(temp);
        }
        else {
            console.log("name should have atleat 3 character !");
        }
    },
    /*
 * @purpose : By using random function flip the coin no of times from user input
 *            and print the percentage of head vs tails
 */

    /*
     * @description : Declaring a function and passing the userinput for fliping the coin
     *                no of times
     * @function: coinflip takes the no of times to flip coin and print the percentage of
     *            head and tail
     */
    coinFlip(flips) {
        var head = 0; var tail = 0;
        // loop for generating random number upto number of flip.
        for (let index = 0; index < flips; index++) {
            var rn = Math.random();
            // if random number is greater than 0.5, increament head count.
            if (rn > 0.5) {
                head++;
            }
            // if lesser then increment tail count.
            else {
                tail++;
            }
        }
        //percentage of head and tail 
        var res = (head / flips) * 100;
        console.log("percentage of head" + res);
        var res1 = (tail / flips) * 100;
        console.log("percentage of tail" + res1);

    },
    /*
      * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
      *            or not. 
      */

    /*
     * @description : Declaring the function and passing a four digit number from userinput
     * @function:  Function compares the length of given number and prints the number 
     *             is a leap year or not 
     */
    leapYear(year) {
        // ensure year is of four digit
    
            //condition for checking leap 
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
               return true;
            }
            else{
                return false;
            }
        },
        

    /*
    *@purpose : generate the power of two values 
    *@param   : user input value
    *@description : it prints the two's power value 
    * */
    power(number) {
        // ensure user input should be less than 31
        if (number < 31) {
            //loop for generate two's power value upto given user input
            for (let index = 1; index <= number; index++) {
                var res = Math.pow(2, index);
                console.log(res);
            }
        }
        else {
            console.log("Please, Enter the number below 31")
        }

    },

    /* 
     * @purpose : To genarate harmonic numbers according to the userinput
     *@param    : input from user
     * @description : To generate the sum of harmonic numbers by taking input from user
     * @function : Harmonic function takes user input and sum it no of times that user given
     */
    harmonic(number) {
        if (number == 0) {
            console.log("Number Should be greater than 0")
        }
        else {
            var sum = 0;
            // loop for generate the Nth Harmonic value
            for (let index = 1; index <= number; index++) {
                sum = sum + 1 / index;
            }
            console.log("The " + number + "th Harmonic value is " + sum);

        }
    },
    /* 
   * @purpose : To genarate primeFactor numbers according to the userinput
   */

    /* @description : Finding the primefactors of a given number */
    primeFactor(number) {
        if (number > 0) {
            //loop for checking how many times the number is devided by two 
            while (number % 2 == 0) {
                console.log("2 ");
                number = number / 2;
            }
           // loop for checking which numbers devides the given number completly
            for (let index = 3; index * index <= number; index = index + 2) {
                while (number % index == 0) {
                    console.log(index + "");
                    number = number / index;
                }
            }
            // if number is greater than 2 then print that value.
            if (number > 2) {
                console.log(number);
            }
        }
    },
    /*GAMBLER*/
    /*
    * @purpose : is to calculate the total number of wins and percentage of wins and loss
    * @param   : stack- amount that player have 
    * @param   : goal - amount that player want to win 
    * @param   : totaltime -no of times he wants to play 
    * @description : the game continue upto, if player reached his goal,
    *               or he lost all his money or he lost his total number of times he want play.
    */
    gambler(stack, goal, totalTime) {
        var win = 0; var noOfTime = 0;
        //loop upto win and lost his all stack and upto total number of times he wants play 
        while (stack != 0 && goal != stack && noOfTime < totalTime) {
            // genearate the random number to check weather he wins or lost
            var ran = Math.round(Math.random());
            if (ran == 1) {
                stack++;
                win++;
            }
            else {
                stack--;
            }
            noOfTime++;
        }
        // calculating the total percentage 
        var wining = (win / totalTime) * 100;
        var loosing = 100 - wining;
        console.log("Number of wins " + win)
        console.log("wining percentage " + wining);
        console.log("lossing percentage " + loosing);

    },
/*
*@purpose : to get the time in seconds 
*@Description : create object of Date and get time in seconds by using inbuild function
*/
    getCurrentTime: function () {
        var date = new Date();
        var n = date.getSeconds();
        return n;
    },
/*
*@purpose : to get the time in seconds 
*@param : start-when execution start
*@param : stop - when execution stop
*@Description : create object of Date and get time in seconds by using inbuild function
*/
    elapsedTime: function (start, stop) {
        var elapsed = (stop - start);
        return elapsed;
    },
/*
*@purpose : to calculate the distance between two point.
*@param   : n1-first distance 
*@param   : n2 -Second distance 
*@description : use distance formula and calculate the result 
*/
    distance(n1, n2) {
        var r1 = Math.pow(n1, 2);
        var r2 = Math.pow(n2, 2);
        var res = Math.pow((r1 + r2), 0.5);
        console.log("Distance is =", res);
    },
/*
*@purpose : To calculate the Quadartic roots using user input value.
*@param   : a-first element
            b-second element
            c-third element
*@description : calculate the roots by using the formula and
                prints all possible roots.
*
*/
    quadratic(a, b, c) {
        //ensure first element should not be zero
        if (a == 0) {
            console.log("Not a Quadratic Equation")
        }
        else {
            // calculate the delta(variable) value
            var delta = (b * b) - (4 * a * c);
            //check delta value 
            if (delta == 0) {
                // roots are real and equal
                var root = -b / (2 * a);
                console.log("roots are same : ", root);
            }
            // check delta value 
            else if (delta > 0) {
                //calculate the roots 
                var root1 = (-b + Math.sqrt(delta)) / 2 * a;
                var root2 = (-b - Math.sqrt(delta)) / 2 * a;
                // roots are real and unequal
                console.log("First root : ", root1);
                console.log('Second root : ', root2);
            }
            //check delta value
            else if (delta < 0) {
                //roots are real and imaginary
                var root1 = -b / (2 * a);
                var root2 = (Math.sqrt(-delta)) / 2 * a;
                console.log("Frist root : ", root1, "i", root2);
                console.log("second root : ", root1, "-i", root2);
            }
            else {
                console.log("Invalid input ")
            }
        }
    },
    /*
    *@purpose :to find the windchill, by using user input temperature and volume
    * @param  : temp-temperature from the user input
    *           vol-volume from the user input 
    *  @description :first check the input for temperture is in range 
    *   and for the volume range, and prints the results
    * */
    windChill(temp, vol) {
        //cheking condition for the required range 
        if (temp <= 50) {
            if (vol > 3 && vol < 120) {
                var volume = Math.pow(vol, 0.16);
                //Formula for the Windchill calculation 
                var result = 35.74 + (0.6215 * temp) + ((0.4275 * temp) - 35.75) * (volume);
                console.log("The total windchill for Temperature ", temp, " and Volume ", vol, " is = ", result);
            }
            else {
                console.log("Invalid volume Range ");
            }
        }
        else {
            console.log("Invalid Temperature ");
        }
    },
    /*
    *@purpose :to find triplets from user input array elements
    *@param   :array elements
    * @description :if sum of 3 array elemets equals to zero its called triplet
    *prints the total triplets formed and also no of triplets 
    */
    triplet(res) {
        count = 0;
        for (let index = 0; index < res.length; index++) {
            for (let index1 = index + 1; index1 < res.length; index1++) {
                for (let index2 = index1 + 1; index2 < res.length; index2++) {
                    // check sum of three elements are equals to zero
                    if (Number(res[index]) + Number(res[index1]) + Number(res[index2]) == 0) {
                        count++;
                        console.log("[" + res[index] + "," + res[index1] + "," + res[index2] + "]");
                    }

                }
            }

        }
        console.log("Number of triplets found is ", count);
    },
    /*
    *@purpose :to find the permutation of given string and prints all combination
    *@param   : string-empty 
                str-user input string 
                first-first index
                last-last index
    *@description :check all possible combination of string 
    *use recursion method to find possible combination
    *prints the all combination
    */
    permutation(string, str, first, last) {
        if (first == last) {
            console.log(str);
            string = string + str;
        }
        else {
            for (let index = first; index <= last; index++) {
                //call swapstring method swap the characters 
                str = this.swapString(str, first, index);
                // recursion method 
                string = this.permutation(string, str, first + 1, last);
                str = this.swapString(str, first, index);
            }
        }
        return string;
    },
    // swap method for swaping the string character
    swapString(str, first, last) {
        var as = '';
        //empty array
        var ch = [];
        //split string into the character
        ch = str.split('');
        // temporary variable
        var temp = ch[first];
        ch[first] = ch[last];
        ch[last] = temp;
        for (let index = 0; index < str.length; index++) {
            as = as + ch[index];
        }
        return as;
    },
    /*
        *@purpose :to print Two Dimensional Array,from user input elements 
        *@param   : row-number of rows 
                    column-number of columns
        *@description :ask user to enter total number of column and row
        *convert into two Dimenstional array format and prints 
        */
    twoDarry(row, col) {
        var arr = [];
        console.log("enter elements ");
        //to generate the multi-dimensional array
        for (let index = 0; index < row; index++) {
            arr.push([]);
        // adding elements by elements in generated array
            for (let index2 = 0; index2 < col; index2++) {
                arr[index][index2] = readline.question('');
            }
        }
        return arr;
    },
    /*
    *@purpose :
    */

   coupan(l) {

    var arr = new Array(l);
    var h = 0;
    var count = 0;
    var flag = true;
    while (l > 0) {
      flag = true;
      var n = Math.floor((Math.random() * 10000) + 1000);//geting randomNumber between 0 to Highest value;
      if (n > 9999) {
        n = Math.floor(n / 10);
      }
      count++;//counting of random number.
      for (let index = 0; index < (h + 1) && flag; index++) {
        if (arr[index] == n) {
          flag = false;
        }

      }
      if (flag == true) {
        arr[h++] = n;
        l--;
      }
    }
    this.display2dArray(arr);//display distinct coupan number.
   },

   display2dArray(array) {
    for (let index = 0; index < array.length; index++) {
      console.log(array[index]);

    }
  },


    //Algorithm Programs
    /*
    *@purpose : to find day falls on the given user input date format
    *@param   : day-take date from command line of user choice 
    *           month-take month from command line of user choice
    *           year- take year from command line of user choice
    *@description : use formula and calculate the day 
    */
    dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;
        
        
    },
    /*
    *@purpose: convert the celsius to fahrenheit and vice versa of user choice conversion
    *@param  : number-user choice 
    *@description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
    *and convert according to his wish and prints the results.
    */
    tempConversion(number) {
        //ensuring user value 
        if (number == 1) {
            //ask user to enter the celsius value 
            var num = readline.question("Enter your celsius value :");
            //convert into fahrenheit using formaula
            var res = (num * (9 / 5) + 32);
            console.log("The converted value is ", res);
        }
        //ensuring user value
        else if (number == 2) {
            //ask user to enter the fahrenheit value 
            var num1 = readline.question("Enter your fahrenheit value :");
            //convert into celsius using formaula
            var res1 = (num1 - 32) * (5 / 9);
            console.log("The converted value is ", res1);
        }
        else {
            console.log("Invalid key ")
        }
    },
    /*
    *@purpose: to find the monthly-payment and prints the results 
    *@param  : principle-principle value from commandline
    *          year-year value from command line
    *          rate- rate value from command line
    *@description : take command line input of principle and year and rate 
    *and find the monthly payment 
    */
    payment(principle, year, rate) {
        //formula to calculate the result
        var R = rate / (12 * 100);
        var n = 12 * year;
        var rs = Math.pow((1 + R), (-n));
        var calculation = (principle * R) / (1 - (rs));
        console.log("The monthly payment " + calculation);
    },
    /*
        *@purpose :to find square root for non negative number by using the newton method 
        *@param : num-user input value
        *@description :take value from the user and calculate the square of that number 
        *and prints the result.
        */
    sqrt(num) {
        if (num > 0) {
            //formula 
            var t = num;
            var epsilon = 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Squre root of non negative number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
    },
    /*
        *@purpose :convertion of decimal value to the binary 
        *@param   :num-decimal value from user 
        *@description: take decimal value from user and conver it into the binary form
        *swap the generated nibbles and by using that binary value convert it into decimal form
        */
    toBinary(num) {
        // take empty string 
        var str = "";
        //loop get binary value 
        while (num > 0.99) {
            var a = Math.floor(num % 2);
            //adding bytes one by one 
            str = (a + str);
            num = num / 2;
        }
        console.log(str);
        //condition for checking 8 bit 
        while (str.length < 8) {
            str = '0' + str;     // if not the add upto reqired bit. 
        }
        console.log("nibble", str);
        var ab = str.substring(0, 4);  //First nibble 
        var bc = str.substring(4, 8);  // second nibble
        console.log("first nibble", ab);
        console.log("second nibble", bc);
        var res = bc + ab;               // swaping of nibbles 
        console.log("after the nibble swap", res);
        var rs = this.binaryToDecimal(res);  // call this method to get decimal value 
        console.log(rs);
    },
    /*
    *@purpose:to convert the binary value to the decimal 
    *@param  : res-binary value 
    *@description :convert binary value into the decimal value and return the result
    */
    binaryToDecimal(res) {
        var sum = 0;
        for (let i = 0; i < res.length; i++) {
            //condition to check binary 1 value 
            if (res[res.length - (i + 1)] === '1') {
                // calculate the 2's power value
                sum = sum + 2 ** i;
            }
        }
        return sum;

    },
/*
*@purpose : check the two strings are same or not
*@param   : str-first string of user input 
*           str1-second string of user input 
*@description : take two string from user and compare those, and prints the message 
               wheather they are anagram or not.
*/
    anagram(str, str1) {
        //checking the length of the both string 
        if (str.length != str1.length) {
            console.log("String is not a Anagram");
        }
        else {
            //create two array
            var arr = [26];
            var arr1 = [26];
            for (let index = 0; index < str.length; index++) {
                //converting into ascii value 
                arr[str.charAt(index) - 97]++;
                arr1[str1.charAt(index) - 97]++;
            }
            var flag = true;
            for (let i = 0; i < 26; i++) {
                //comparing the ascii values 
                if (arr[i] != arr1[i]) {
                    console.log("Not an anagram");
                    flag = false;
                    break;
                }

            }
            if (flag) {
                console.log("String is anagaram")
            }
        }
    },

    prime(res) {
        for (let index = 2; index < res; index++) {
            if (this.isPrime(index)) {
                console.log(index); 
            }
        }
    },
// method to check the prime numbers 
    isPrime(index) {
        var n = 2;
        while (n <= index / 2) {
            if (index % n == 0) {
                return 0;
            }
            n++;
        }
        return index;
    },
    /*
    *@purpose : To check the number wheather its palindrome or not 
    *@param   : num-user input number 
    *@description : take number from user input and check its palindrome or not 
    * */
    palindrome(num) {
        var temp = num;
        var rem = 0, rev = 0;
        //loop untill num is not equal to zero
        while (num != 0) {
            //take reminder of the number 
            rem = num % 10;
            //keep on adding element 
            rev = rev * 10 + rem;
            //devide the number to get next digit of given number  
            num = Math.floor(num / 10);
        }
        // check both number are equal and return result
        if (temp == rev) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    *@purpose : generate the binary search for given array
    *@param   : res-array
                low-initial value of array
                high-final value of array
                ele-elements wants to find in array
    *@description: take array, calculate the mid value,compare with elements,use recursion method to search element  
    * */

    binarySearch(res, low, high, ele) {
        var mid;
        while (high >= low) {
            // calculate mid value 
            mid = Math.floor(low + (high - low) / 2);
            // check mid with ele
            if (res[mid] == ele) {
                return mid;
            }
            //check mid with ele 
            if (res[mid] > ele) {
                //assign decremented mid to high 
                high = mid - 1;
            }
            else {
                //assign inremented mid to low
                low = mid + 1;
            }
        }
        // if not found return -1
        return -1;
    },
    /*
    *@purpose : generate the bubble sort array  for given array
    *@param   : res-array
    *@description: take array,arrange elements according size using bubble sort,and return the result
    * */

    bubbleSort(res) {
     // compare first and next elements in array and arrange 
        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length; j++) {
                if (res[i] > res[j]) {
                    var temp = res[i];
                    res[i] = res[j];
                    res[j] = temp;

                }
            }

        }
        return res;
    },
 /*
    *@purpose : generate the insertion sort array for given array
    *@param   : res-array
    *@description: take array,arrange elements according size using insertion sort,and return the result
    * */
    insertion(res) {
        for (let i = 1; i < res.length; i++) {
            var point = res[i];
            var j = i - 1;
            while (j >= 0 && res[j] > point) {
                res[j + 1] = res[j];
                j = j - 1;
            }
            res[j + 1] = point;
        }
        return res;
    },
// bubble sort method for the string 
    bubbleString(str) {
        var ch = str;
        for (let i = 0; i < ch.length; i++) {
            for (let j = 0; j < ch.length; j++) {
                if (ch[j] > ch[j + 1]) {
                    var temp = ch[j];
                    ch[j] = ch[j + 1];
                    ch[j + 1] = temp;
                }
            }
        }
        return ch;
    },
    //insertion sort method for string 
    insertionString(str) {
        var ch = str;
        for (let i = 0; i < ch.length; i++) {
            var point = ch[i];
            var j = i - 1;
            while (j >= 0 && ch[j] > point) {
                ch[j + 1] = ch[j];
                j = j - 1;
            }
            ch[j + 1] = point;
        }
        return ch;
    },
   // binary search method for string 
    binaryString(res, low, high, ele) {
        var mid;

        while (high >= low) {
            mid = Math.floor(low + (high - low) / 2);
            if (res[mid] == ele) {

                return mid;
            }
            else if (res[mid] > ele) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        return -1;
    },
// method to calculate time taken to execute each sorting methods
    timeElapsed() {
        var arr = [];
        var start = 0, stop = 0;
        arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        start = this.getNanoSec();
        this.binarySearch(arr);
        stop = this.getNanoSec();
        var binarySearch = stop - start;
        console.log("Time required for binarySearch ", binarySearch, " nanosec");

        var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        start = this.getNanoSec();
        this.bubbleSort(arr);
        stop = this.getNanoSec();
        var bubbleSort = stop - start;
        console.log("Time required for bubbleSort ", bubbleSort, "nanosec");

        var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        start = this.getNanoSec();
        this.insertion(arr);
        stop = this.getNanoSec();
        var insertionSort = stop - start;
        console.log("Time required for insertionsort ", insertionSort, " nanoseconds");

        var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
        start = this.getNanoSec();
        this.bubbleString(arr);
        stop = this.getNanoSec();
        var bubbleString = stop - start;
        console.log("Time required for bubblesort for String ", bubbleString, " nanosecond");

        var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
        start = this.getNanoSec();
        this.insertionString(arr);
        stop = this.getNanoSec();
        var insertion = stop - start;
        console.log("Time required for insertion sort for String ", insertion, " nanosecond");

        var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
        start = this.getNanoSec();
        this.binaryString(arr);
        stop = this.getNanoSec();
        var binary = stop - start;
        console.log("Time required for bubble sort for String ", binary, " nanosecond");
// create the list and add all values and their type 
        var masterList = [{ type: "binary search ", time: binarySearch }, { type: "bubble sort ", time: bubbleSort },
        { type: "insertion sort ", time: insertionSort }, { type: "binary for String ", time: binary }, { type: "bubble for String ", time: bubbleString },
        { type: "insertion for String", time: insertion }];
        //sort the list in decending order 
        masterList.sort(function (a, b) { return b.time - a.time });

        console.log("the time in descending order is ");
        console.log("Time for " + masterList[0].type + " is " + masterList[0].time);
        console.log("Time for " + masterList[1].type + " is " + masterList[1].time);
        console.log("Time for " + masterList[2].type + " is " + masterList[2].time);
        console.log("Time for " + masterList[3].type + " is " + masterList[3].time);
        console.log("Time for " + masterList[4].type + " is " + masterList[4].time);
        console.log("Time for " + masterList[5].type + " is " + masterList[5].time);

    },
    // method to calculate the time in nanoseconds and value.
    getNanoSec() {
        var hrTime = process.hrtime();
        return hrTime[0] * 1000000000 + hrTime[1];
    },
/*
*@purpose : calculate the binary value 
*@param   : num-decimal value from user 
*@description : take decimal value from user and convert that into binary value 
*/
    tobin(num) {
        var str = "";
        while (num > 0) {
            var r = num % 2;
            var str = r + str;
            num = Math.floor(num / 2);
        }
        //padding generate 4 byte 
        while (str.length < 8) {
            str = "0" + str;
        }
        return str;
    },
    //method take file values and strings 
    fileCall() {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('File.txt', 'utf8');
        var arr = f.split(' ');
        return arr;
    },
/*
*@purpose : sort the array using the merge sort technique  
*@param   : res-array
*@description : take array,divide into two halves,and sort the elements for both right and left halves 
*/
    mergeSort(res) {
        var n = res.length;
        //if size is less than 2 return that.
        if (n < 2) {
            return;
        }
        //cal mid value 
        var mid = Math.floor(n / 2);
        var left = [mid];
        var right = [n - mid];
       //store  elements in left array which are present before the mid   
        for (let i = 0; i < mid; i++) {
            left[i] = res[i];
        }
        //store  elements in left array which are present before the mid  
        for (let j = mid; j < n; j++) {
            right[j - mid] = res[j];
        }
        //call mergesort for left halve 
        this.mergeSort(left);
         //call mergesort for left halve 
        this.mergeSort(right);
        this.merge(left, right, res);

    },

    merge(arr, brr, crr) {
        var i = 0; var j = 0;
        var k = 0;
        //merge elements into crr[]
        while (i < arr.length && j < brr.length) {
            if (arr[i] <= brr[j]) {
                crr[k] = arr[i]
                i++;
            }
            else {
                crr[k] = brr[j];
                j++;
            }
            k++;
        }
        // if arr[] is greater than brr[], push all arr[] into crr[]
        while (i < arr.length) {
            crr[k] = arr[i];
            i++;
            k++;
        }
         // if arr[] is lesser than brr[], push all brr[] into crr[]
        while (j < brr.length) {
            crr[k] = brr[j];
            j++;
            k++;
        }
        return crr;
    },
// method to find power 
    isPower(num) {
        if (num == 0)
            return false;
        while (num != 1) {
            if (num % 2 != 0) {
                return false;
            }
            num = num / 2;
        }
        return true;
    },
/*
*@purpose : is to find the number of user guess
*@param   : low-zer0
*           high-user input -1
*@description : ask the user to enter 2's power value,and find his guessing number,use recursion method 
* return that number
*/
    search(low, high) {
        if ((high - low) == 1) {
            return low;
        }
        var mid = low + Math.floor((high - low) / 2);
        console.log("Is it less than " + mid + " ?");

        var ans = readline.question("If YES enter 1 else 0 ");
        console.log(ans);
        if (ans == '1') {
            return this.search(low, mid);
        }
        else {
            return this.search(mid, high);
        }

    },
/*
*@purpose : is to dispence total minimum number of notes from vending machine 
*@param   : amount-user inputed value
*           i - zero
*           notes-zero
*@description : take a number from user and calculate minimum number of notes has to return vending machine
                use recursion method,and return the value  
*/

    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes);
    },
    callFile() {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('file.txt', 'utf8');
        console.log(f);
        var arr = f.split(' ');
        return arr;
}
}
