import TransactionFanctory from "../../transactionFactory";
jest.useFakeTimers().setSystemTime(new Date("2023-01-14"));

describe("TransactionFactory", () => {
  test("it should return a transaction object", () => {
    const transactionFactory = new TransactionFanctory();
    expect(transactionFactory.createTransaction(1000, 0)).toEqual({
      date: "14/01/2023",
      credit: 0,
      debit: 1000,
      balance: 1000,
    });
  });
});
