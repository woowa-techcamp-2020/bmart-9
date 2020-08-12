import { CustomError } from './custom-error';

export class AuthenticateError extends CustomError {
  public statusCode = 401;

  constructor() {
    super('로그인을 해주세요');
  }
}
