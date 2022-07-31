export default class ErrorValidation extends Error {
  constructor(message) {
    super(message);
    this.name = "Verify Drop Zone";
  }
}
