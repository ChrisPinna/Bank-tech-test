export class BankBackEnd {
  constructor () {
    
  };
  processTransaction(req) {
    console.log(Object.prototype.toString.call( req ))
    if(Object.prototype.toString.call( req ) === '[object Number]' ) {
      throw 'Argument is  a int!';
    }
  }
};