import { BankBackEnd } from "../../lib/bankBackEnd";
jest.useFakeTimers().setSystemTime(new Date("2023-09-01"));

describe("processTransaction method", () => {
  it("should accept an object as a argument", () => {
    const bank = new BankBackEnd();
    expect(() => {
      bank.processTransaction({ type: "deposit", amount: 1000 });
    }).not.toThrow();
  });
  it("should not accept an number as a argument", () => {
    const bank = new BankBackEnd();
    expect(() => {
      bank.processTransaction(1);
    }).toThrow();
  });
  it("should not accept an string as a argument", () => {
    const bank = new BankBackEnd();
    expect(() => {
      bank.processTransaction("string");
    }).toThrow();
  });
  it("should not accept an array as a argument", () => {
    const bank = new BankBackEnd();
    expect(() => {
      bank.processTransaction([]);
    }).toThrow();
  });
  it("should return a error if withdrawal transaction exeeds the balance", () => {
    const bank = new BankBackEnd();
    expect(
      bank.processTransaction({ type: "withdrawal", amount: 1 })
    ).toEqual({
      status: "error",
      message:
        "Cannot compleate this transaction, withdrawal amount exeeds account balance!",
    });
  });
});

describe("createStatement method", () => {
  it("should return a statement with nothing", () => {
    const bank = new BankBackEnd();
    expect(bank.createStatement()).toBe("date || credit || debit || balance");
  });
  it("should return a statement with 1000 credit and 1000 balance", () => {
    const bank = new BankBackEnd();
    bank.processTransaction({ type: "deposit", amount: 1000 });
    expect(bank.createStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 1000.00 || || 1000.00\n"
    );
  });
});
