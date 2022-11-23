import { closeSync } from "graceful-fs";

export class BankBackEnd {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  processTransaction(req) {
    if (Object.prototype.toString.call(req) !== "[object Object]") {
      throw "Argument is not an Object!";
    } else if (req.transactionType === "deposit") {
      this.balance += req.amount;
      this.transactions.push({
        date: new Date(),
        credit: req.amount,
        debit: 0,
        balance: this.balance,
      });
    }
  }
  createStatement() {
    if (this.transactions.length !== 0) {
      const rows = [];
      this.transactions.forEach((transaction) => {
        rows.push(
          `${transaction.date.toLocaleDateString("en-GB") + " "}||${
            transaction.credit === 0
              ? " "
              : " " + transaction.credit.toFixed(2) + " "
          }||${
            transaction.debit === 0
              ? " "
              : " " + transaction.debit.toFixed(2) + " "
          }||${" " + transaction.balance.toFixed(2)}\n`
        );
      });
      return `date || credit || debit || balance\n` + rows.join();
    } else {
      return "date || credit || debit || balance";
    }
  }
}
