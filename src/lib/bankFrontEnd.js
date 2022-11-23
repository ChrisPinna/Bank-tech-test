export class BankFrontEnd {
  constructor(bankBackEnd) {
    this.bankBackEnd = new bankBackEnd;
  }

  deposit = (amount) => {
    this.bankBackEnd.processTransaction({transactionType: 'deposit', amount: amount})
  };
  
  printStatement = () => {
	return this.bankBackEnd.createStatement();
  };
}
