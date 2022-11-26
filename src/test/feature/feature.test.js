import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
jest.useFakeTimers().setSystemTime(new Date("2023-09-01"));

describe("Bank Program", () => {
  test("it should be able to get and empty statement", () => {
    const bankBack = new BankBackEnd
    const bankFront = new BankFrontEnd(bankBack);
    expect(bankFront.printStatement()).toBe(
      "date || credit || debit || balance"
    );
  });
  test("it should be able to make a deposit of 1000 and get a bank statement with transaction in it", () => {
    const bankBack = new BankBackEnd
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(1000);
    expect(bankFront.printStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 1000.00 || || 1000.00\n"
    );
  });
  test("it should be able to make a deposit of 500 and get a bank statement with transaction", () => {
    const bankBack = new BankBackEnd
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(500);
    expect(bankFront.printStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 500.00 || || 500.00\n"
    );
  });
  test("it should be able to make a deposit, then a withdrawal and get a back statement with all transactions", () => {
    const bankBack = new BankBackEnd
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(500);
    bankFront.withdrawal(500);
    expect(bankFront.printStatement()).toBe(
      "date || credit || debit || balance\n01/09/2023 || 500.00 || || 500.00\n01/09/2023 || || 500.00 || 0.00\n"
    );
  });
});