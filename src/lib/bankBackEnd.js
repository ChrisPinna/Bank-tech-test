export class BankBackEnd {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  processTransaction(req) {
    if (this.#reqIsNotAObject(req)) {
      throw "Argument is not an Object!";
    } else if (req.type === "deposit") {
      this.#createTransaction(req);
      return this.#buildMessage("success");
    } else if (req.type === "withdrawal") {
      if (req.amount > this.balance) {
        return this.#buildMessage("error");
      } else {
        this.#createTransaction(req);
        return this.#buildMessage("success");
      }
    }
  }
  createStatement() {
    if (this.transactions.length !== 0) {
      const rows = this.#createStatementRows();
      return `date || credit || debit || balance\n` + rows.join("");
    } else {
      return "date || credit || debit || balance";
    }
  }
  #buildMessage(type) {
    return {
      status: type === "success" ? "success" : "error",
      message:
        type === "success"
          ? "Success, transaction compleated!"
          : "Cannot compleate this transaction, withdrawal amount exeeds account balance!",
    };
  }
  #reqIsNotAObject(req) {
    return Object.prototype.toString.call(req) !== "[object Object]";
  }
  #createTransaction(req) {
    this.#handleBalanceChange(req);
    this.transactions.push({
      date: new Date(),
      credit: req.type === "deposit" ? req.amount : 0,
      debit: req.type === "withdrawal" ? req.amount : 0,
      balance: this.balance,
    });
  }
  #handleBalanceChange(req) {
    if (req.type === "deposit") {
      this.balance += req.amount;
    } else if (req.type === "withdrawal") {
      this.balance -= req.amount;
    }
  }
  #createStatementRows() {
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
    return rows;
  }
}
