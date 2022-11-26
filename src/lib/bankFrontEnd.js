export class BankFrontEnd {
  constructor(bankBackEnd) {
    this.bankBackEnd = bankBackEnd;
  }

  deposit = (amount) => {
    if (Object.prototype.toString.call(amount) !== "[object Number]") {
      throw "Argument is not a Number!";
    } else {
      this.bankBackEnd.processTransaction({
        transactionType: "deposit",
        amount: amount,
      });
    }
  };
  withdrawal = (amount) => {
    if (Object.prototype.toString.call(amount) !== "[object Number]") {
      throw "Argument is not a Number!";
    } else if (amount < 0) {
      throw "Amount cannot be a negative number!"
    } else {
      this.bankBackEnd.processTransaction({
        transactionType: "withdrawal",
        amount: amount,
      });
    }
  };

  printStatement = () => {
    return this.bankBackEnd.createStatement();
  };
}
