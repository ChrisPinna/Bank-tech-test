export class BankFrontEnd {
  constructor(bankBackEnd) {
    this.bankBackEnd = bankBackEnd;
  }

  deposit = (amount) => {
    if (this.#amountIsNotANumber(amount)) {
      throw "Argument is not a Number!";
    } else if (amount < 0 || amount === 0) {
      throw "Amount has to be a positive number!";
    } else {
      this.#handleTransaction("deposit", amount);
    }
  };
  withdraw = (amount) => {
    if (this.#amountIsNotANumber(amount)) {
      throw "Argument is not a Number!";
    } else if (amount < 0 || amount === 0) {
      throw "Amount has to be a positive number!";
    } else {
      const res = this.#handleTransaction("withdrawal", amount);
      this.#handleResponse(res);
    }
  };

  printStatement = () => {
    return this.bankBackEnd.createStatement();
  };

  #handleTransaction(type, amount) {
    return this.bankBackEnd.processTransaction({
      transactionType: type,
      amount: amount,
    });
  }

  #handleResponse(res) {
    if (res.status === "error") {
      throw res.message;
    } else if (res.status === "success") {
      console.log(res.message);
    }
  }

  #amountIsNotANumber(amount) {
    return Object.prototype.toString.call(amount) !== "[object Number]";
  }
}
