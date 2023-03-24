function Bank() {
    Accounts = {
        dailyDepositLimit: 50000,
        account: [
            { userName: "Mathi", password: "Mathi@2002", accountNo: 120, cardNumber: 2345777999, pin: 2304, amount: 20000 },
            { userName: "Harish", password: "Harish@2001", accountNo: 230, cardNumber: 2345777998, pin: 2233, amount: 212000 },
            { userName: "Ashok", password: "Ashok@2002", accountNo: 340, cardNumber: 2345777997, pin: 2833, amount: 203400 },
            { userName: "Krithika", password: "Krithika@2001", accountNo: 100, cardNumber: 2345777996, pin: 2033, amount: 1200 },
            { userName: "Anu", password: "Anu@2002", accountNo: 489, cardNumber: 2345777995, pin: 1234, amount: 3000 },
        ]
    }
    function deposit() {
        cardNumber = parseInt(prompt("Enter card Number"));
        user = Accounts.account.find((account) => account.cardNumber == cardNumber);
        if (user === undefined) {
            alert("Enter valid Card Number");
        } else {
            pin = parseInt(prompt("Enter pin number"));
            if (user.pin == pin) {
                depositAmount = parseInt(prompt("Enter Amount to be deposited"));

                if (Accounts.dailyDepositLimit > depositAmount) {
                    if (depositAmount < 0)
                    {
                        alert("Enter a valid amount");
                        }
                    user.amount = user.amount + depositAmount;
                    alert(
                        `Amount deposited  ${depositAmount} \n Balance Amount :${user.amount}`
                    );
                } else {
                    alert("Amount is more than daily Limit");
                }
            } else {
                alert("Invalid Pin number");
            }
        }
    }


    function withdraw() {
        cardNumber = parseInt(prompt("Enter card Number"));
        user = Accounts.account.find((account) => account.cardNumber == cardNumber);
        if (user === undefined) {
            alert("Enter valid Card Number");
        } else {
            pin = parseInt(prompt("Enter pin number"));
            if (user.pin == pin) {
                withdrawAmount = parseInt(prompt("Enter Amount to be withdraw:"));
                if (user.amount >= withdrawAmount) {
                    user.amount = user.amount - withdrawAmount;
                    alert(
                        `Amount with draw ${withdrawAmount} \n Balance Amount :${user.amount}`
                    );
                } else {
                    alert("Balance is less than the amount entered");
                }
            } else {
                alert("Invalid Pin number");
            }
        }
    }
    function login() {
        userName = prompt("Enter user Name");
        user = Accounts.account.find((account) => account.userName == userName);
        if (user === undefined) {
            alert("Invalid User Name ");
        } else {
            password = prompt("Enter password");
            if (user.password == password) {
                choice = prompt("Enter option \nWithDraw Amount\nDeposit Amount");
                if (choice == "WithDraw Amount") {
                    withdraw();
                } else if (choice == "Deposit Amount") {
                    deposit();
                }
            } else {
                alert("Enter Valid option");
            }
        }

    }
   
    login();
}
Bank();