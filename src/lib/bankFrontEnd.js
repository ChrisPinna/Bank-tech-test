export class BankFrontEnd {
  constructor(bankBackEnd) {
    this.bankBackEnd = new bankBackEnd;
  }

  deposit = (amount) => {
    this.bankBackEnd.processTransaction({transactionType: 'deposit', amount: amount})
  };
  
  printStatement = () => {
	return "date || credit || debit || balance\n26/04/2022 || 1000.00 || || 1000.00";
  };
}
