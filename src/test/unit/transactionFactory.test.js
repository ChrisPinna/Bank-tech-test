import {TransactionFanctory} from "../../lib/transactionFactory";
jest.useFakeTimers().setSystemTime(new Date("2023-01-14"));

describe("TransactionFactory", () => {
  test("it should return a transaction object", () => {
    const transactionFactory = new TransactionFanctory();
    expect(transactionFactory.createTransaction(new Date, 1000, 0, 0)).toEqual({
      date: new Date("2023-01-14"),
      credit: 1000,
      debit: 0,
      balance: 1000,
    });
  });
});
