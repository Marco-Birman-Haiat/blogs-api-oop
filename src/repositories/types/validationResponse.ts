type ValidationResponseTypeError = 'UNATHORIZED' | 'NOT_FOUND' | 'INVALID_DATA' | 'UNPROCESSABLE_DATA';
type ValidationResponseTypeSuccess = null;

type ValidationResponseSuccess = {
  type: ValidationResponseTypeSuccess,
  data: '',
}

export type ValidationResponseError = {
  type: ValidationResponseTypeError,
  data: {
    message: string,
  }
}

export type ValidationResponse = ValidationResponseError | ValidationResponseSuccess;
