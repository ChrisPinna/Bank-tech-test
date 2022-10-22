export default class TransactionFanctory {
  constructor (transaction) {
    this.transaction = transaction;
  };
  createTransaction() {
    return {
      date: "14/01/2023",
      credit: 0,
      debit: 1000,
      balance: 1000,
    };
  };
};