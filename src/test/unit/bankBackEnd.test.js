import expect from "expect";
import { BankBackEnd } from "../../lib/bankBackEnd";

describe("processTransaction method", () => {
  it("should accept an object as a argument", () => {
    const bank = new BankBackEnd;
    expect(()=>{bank.processTransaction({transactionType: 'deposit', amount: 1000})}).not.toThrow();
  });
  it("should not accept an int as a argument", () => {
    const bank = new BankBackEnd;
    expect(()=>{bank.processTransaction(1)}).toThrow();
  });
});
