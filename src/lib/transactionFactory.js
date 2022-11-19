export class TransactionFanctory {
  constructor () {

  };
  createTransaction(date, credit, debit, balance) {
    return {
      date: date,
      credit: credit,
      debit: debit,
      balance: (credit + balance - debit),
    }
  };
};