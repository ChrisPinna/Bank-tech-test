import BankFrontEnd from '../../bankFrontEnd'

describe('Bank Program', () => {
    test('it should be able to make a deposit of 1000 and get a bank statement with transaction in it', () => {
     const bank = new BankFrontEnd;
     bank.deposit(1000);
     expect(bank.printStatement())
     .toBe('date || credit || debit || balance\n26/04/2022 || 1000.00 || || 1000.00');
    });
});