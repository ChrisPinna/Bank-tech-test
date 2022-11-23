import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
jest.useFakeTimers().setSystemTime(new Date("2023-09-01"));

describe("Bank Program", () => {
  test("it should be able to make a deposit of 1000 and get a bank statement with transaction in it", () => {
    const bank = new BankFrontEnd(BankBackEnd);
    bank.deposit(1000);
    expect(bank.printStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 1000.00 || || 1000.00\n"
    );
  });
  test("it should be able to make a deposit of 500 and get a bank statement with transaction in it", () => {
    const bank = new BankFrontEnd(BankBackEnd);
    bank.deposit(500);
    expect(bank.printStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 500.00 || || 500.00\n"
    );
  });
});
