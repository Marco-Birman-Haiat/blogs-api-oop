import { ResponseTypeError } from './reponse';

type ValidationSuccessData<T> = '' | T; 

type ValidationResponseSuccess<T> = {
  type: null,
  data: T,
}

export type ValidationResponseError = {
  type: ResponseTypeError,
  data: {
    message: string,
  }
}

export type ValidationResponse<T> = ValidationResponseError | ValidationResponseSuccess<T>;
