/*
what do i need:
main function
menu
loop
conditional for challenge
--------
what is the program asking(prompting)
ask user to press 1, 2, 3, or q to quit
---------------------------------------------
Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.

- If they press 1, alert "Challenge goes here".
- If they press 2, alert "2".
- If they press 3, alert "Hello World".



CHALLENGE
- If they press 1, ask them to press a, b, or c in a different function.
If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".
 what is it asking?
 insert another function into the alert
 a function that asks the user to press a, b , or c
 does different things depending on which string is inserted
 what do i need?
 conditional
 function
 prompt
 --------------------------
 CHALLENGE 2
 - Return the values of a, b, or c to use in the main function.
 i guess i need a return?
 */

function main() {
    let menu;
    while(menu !== 'q'){
        menu = prompt(`Press 1, 2, or 3. Press q to quit`); //menu works // this is the menu code block
        if (menu === '1'){
            other(); // called function with the main function, didnt work at the bottom
        } else if (menu === '2') {
            alert("2");
        } else if (menu === '3'){
            alert("Hello World");
        }
    } // this is the menu code block
}

main();

function other() {
    var ask = prompt("Press a, b, or c");
    if(ask=== 'a'){
       return  alert("A");
    } else if (ask === 'b'){
       return  alert("B");
    } else if (ask === 'c') {
       return  alert("C");
    }

}

