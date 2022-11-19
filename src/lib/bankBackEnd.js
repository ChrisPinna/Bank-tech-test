export class BankBackEnd {
  constructor () {
    
  };
  processTransaction(req) {
    if(Object.prototype.toString.call( req ) !== '[object Object]' ) {
      throw 'Argument is not an Object!';
    } 
  }
};