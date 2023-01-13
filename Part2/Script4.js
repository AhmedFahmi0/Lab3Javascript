var phoneBook = [];
var Sname, Snumber;
do {
    var operation = Number(prompt("Enter number of operation please:\n1.Add\n2.Search\n3.Exit"));
    switch (operation) {
        case 1: {
            let Iname = prompt("Enter name of new contact");
            let Inumber = prompt("Enter phone number of new contact");
            let contact = { name: Iname, number: Inumber };
            phoneBook.push(contact); break;
        }
        case 2: {
            let searchBy = Number(prompt("You want to search by: \n1.Name\n2.Phone Number"));
            if (searchBy == 1) {
                Sname = prompt("Enter name"); Snumber = null;
            }
            if (searchBy == 2) {
                Snumber = prompt("Enter phone number"); Sname = null;
            }
            if (phoneBook.length == 0) {
                alert("Phonebook is empty");
            } else {
                for (const cont of phoneBook) {
                    if (cont.name == Sname || cont.number == Snumber) console.log(cont);
                }

            }
            break;
        }
        case 3: break;
        default: alert("Enter a valid choice");
    }
} while (operation!=3)




var contact = { "name": "Ahmed", "number": "01144633648" };
var cm = [];
cm.push(contact);
console.log(cm[0]);