export class GroceriesAppException extends Error {
  constructor(name, message = '') {
    super(message);
    this.name = name;
  }
}
