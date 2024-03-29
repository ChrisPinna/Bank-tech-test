import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
jest.mock("../../lib/bankBackEnd");

describe("deposit method", () => {
  it("should take numbers as argument", () => {
    const bankBack = new BankBackEnd();
    console.log("Here", bankBack);
    const bankFront = new BankFrontEnd(bankBack);
    expect(() => {
      bankFront.deposit(1);
    }).not.toThrow();
  });
  it("should throw if passed string as argument", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    expect(() => {
      bankFront.deposit("string");
    }).toThrow();
  });
  it("should call processTransaction method from the backEnd", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(1000);
    expect(bankBack.processTransaction).toHaveBeenCalled();
  });
  it("should throw an error if given a negative number", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    expect(() => {
      bankFront.deposit(-1000);
    }).toThrow();
  });
  it("should throw if given 0", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    expect(() => {
      bankFront.deposit(0);
    }).toThrow();
  });
});
describe("printStatement method", () => {
  it("should call createStatement method from the backEnd", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.printStatement();
    expect(bankBack.createStatement).toHaveBeenCalledTimes(1);
  });
});
describe("withdrawal method", () => {
  it("should call processTransaction method from the backEnd", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(1);
    bankBack.processTransaction.mockResolvedValue({
      status: "success",
      message: "Success, transaction compleated!",
    });
    bankFront.withdraw(1);
    expect(bankBack.processTransaction).toHaveBeenCalledTimes(2);
  });
  it("should throw an error if given a negative number", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(1000);
    expect(() => {
      bankFront.withdraw(-1000);
    }).toThrow();
  });
  it("should throw if given 0", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    bankFront.deposit(1000);
    expect(() => {
      bankFront.withdraw(0);
    }).toThrow();
  });
  it("should throw if withdrawal exeeds balance", () => {
    const bankBack = new BankBackEnd();
    const bankFront = new BankFrontEnd(bankBack);
    expect(() => {
      bankFront.withdraw(1);
    }).toThrow();
  });
});
