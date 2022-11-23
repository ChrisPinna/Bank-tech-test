import { BankFrontEnd } from "../../lib/bankFrontEnd";
import { BankBackEnd } from "../../lib/bankBackEnd";
jest.mock("../../lib/bankBackEnd");

describe("deposit method", () => {
  it("should take numbers as argument", () => {
    const bankBack = new BankBackEnd;
    const bankFront = new BankFrontEnd(BankBackEnd);

    expect(bankFront.deposit(1)).not.toThow();
  });
});
