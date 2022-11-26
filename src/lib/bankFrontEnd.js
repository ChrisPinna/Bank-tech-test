export class BankFrontEnd {
  constructor(bankBackEnd) {
    this.bankBackEnd = bankBackEnd;
  }

  deposit = (amount) => {
    if (Object.prototype.toString.call(amount) !== "[object Number]") {
      throw "Argument is not a Number!";
    } else if (amount < 0 || amount === 0) {
      throw "Amount has to be a positive number!";
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
    } else if (amount < 0 || amount === 0) {
      throw "Amount has to be a positive number!";
    } else {
      const res = this.bankBackEnd.processTransaction({
        transactionType: "withdrawal",
        amount: amount,
      });
      if (res.status === "error") {
        throw res.message;
      } else if (res.status === "success") {
        console.log(res.message);
      }
    }
  };

  printStatement = () => {
    return this.bankBackEnd.createStatement();
  };
}
