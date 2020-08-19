import { CustomError } from './custom-error';

export class InvalidParamsError extends CustomError {
  public statusCode = 400;

  constructor(key: string) {
    super(`[${key}] is Invalid Params`);
  }
}
