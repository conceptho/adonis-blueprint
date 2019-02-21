/*  eslint-disable */
const { LogicalException } = require('@adonisjs/generic-exceptions');

const ErrorCodes = use('App/Errors');

class ErrorCode extends LogicalException {
  constructor(code, payload, message) {
    // default args: message, status, code
    super(undefined, undefined, code);

    this.payload = payload;
    this.message = message || ErrorCodes[code];
  }

  handle({ code, message, payload }, { response }) {
    return response.status(code).send({ message, payload });
  }
}

module.exports = ErrorCode;
