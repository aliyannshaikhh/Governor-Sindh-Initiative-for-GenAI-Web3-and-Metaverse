import inquirer from "inquirer";

// Bank Account Interface
interface BankAccount {
  accountNumber: number;
  balance: number;
  withdraw(account: number): void;
  deposit(account: number): void;
  checkBalance(): void;
}

// Bank Account Class
class BankAccount implements BankAccount {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
    
  // Debit money
  withdraw(account: number): void {
    if (this.balance >= account) {
      this.balance -= account;
      console.log(
        `\nWithdrawal of $${account} successful. Remaining balance: $${this.balance}\n`
      );
    } else {
      console.log("\nInsufficient balance!\n");
    }
  }
  deposit(account: number): void {
    if (account > 100) {
      account -= 1; // $1 fees charged if more than $100 is deposited
    }
    this.balance += account;
    console.log(
      `\nDeposit of $${account} successful. New balance: $${this.balance}\n`
    );
  }
  checkBalance(): void {
    console.log(`\nCurrent balance: $${this.balance}\n`);
  }
}
// customer class
class Customer {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  mobileNumber: number;
  account: BankAccount;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobileNumber: number,
    account: BankAccount
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.account = account;
  }
}
// Create bank accounts
let accounts: BankAccount[] = [
  new BankAccount(1001, 500),
  new BankAccount(1002, 750),
  new BankAccount(1003, 1000),
];
// create customers
let customers: Customer[] = [
    new Customer('Muhammad', 'Ali', 'Male', 25, 9876543210, accounts[0]),
    new Customer('Hamza', 'khan', 'Male', 30, 9876543211, accounts[1]),
    new Customer('Asma', 'Bano', 'Female', 28, 9876543212, accounts[2])
]

// Function to interface with bank account

async function service() {
    do{
       const accountNumberInput = await inquirer.prompt({
        name: "accountNumber",
        type: "number",
        message: "\nEnter your account number:\n"
       })

       const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
       if(customer){
        console.log(`\nWelcome ${customer.firstName} ${customer.lastName}\n`);
        const ans = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "\nSelect an option:\n",
            choices: [
                "Deposit",
                "Withdraw",
                "Check Balance", 
                "Exit"
            ]
        });
        switch(ans.action){
             case "Deposit":
                const depositAmount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "\nEnter the amount you want to deposit:\n"
        })
        customer.account.deposit(depositAmount.amount);
        break;
        case "Withdraw":
                const withdrawAmount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "\nEnter the amount you want to withdraw:\n"
        })
        customer.account.withdraw(withdrawAmount.amount);
        break;
        case "Check Balance":
            customer.account.checkBalance();
            break;
        case "Exit":
            console.log("\nExiting bank program...\n")
            console.log("\n\tThank you for using our bank services. Have a great day!\n\t");
            return;
        }
      }
      else{
        console.log("\nInvalid account number. Please try again...\n");
      }
    }while(true)
}
service();