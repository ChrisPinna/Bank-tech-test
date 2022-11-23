import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
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
