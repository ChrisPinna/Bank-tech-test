import BankFrontEnd from "../../lib/bankFrontEnd";
import BankBackEnd from "../../lib/bankBackEnd";

describe("Bank Program", () => {
  test("it should be able to make a deposit of 1000 and get a bank statement with transaction in it", () => {
    const bank = new BankFrontEnd();
    bank.deposit(1000);
    expect(processTransaction).toHaveBeenCalledTimes(1);
  });
});
