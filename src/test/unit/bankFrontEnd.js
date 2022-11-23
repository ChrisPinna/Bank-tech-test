import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
import { it } from "jest-circus";
import expect from "expect";
jest.mock("../../lib/bankBackEnd");

describe("deposit method", () => {
  it("should take numbers as argument", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);

    expect(bankFront.deposit(1)).not.toThow();
  });
  it("should throw if passed string as argument", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);

    expect(bankFront.deposit("string")).toThow();
  });
  it("should call processTransaction method from the backEnd", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);

    bankFront.deposit(1000);

    expect(bankBack.processTransaction).toHaveBeenCalled();
  });
});

describe("printStatement method", () => {
  it("should call createStatement method from the backEnd", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.printStatement();
    expect(bankBack.createStatement).toHaveBeenCalled();
  });
});
