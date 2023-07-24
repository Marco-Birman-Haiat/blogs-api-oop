import { ResponseTypeError, ResponseTypeSuccess } from './reponse';

type ServiceResponseSuccess<T> = {
  type: ResponseTypeSuccess,
  data: T,
}

type ServiceResponseError = {
  type: ResponseTypeError,
  data: {
    message: string,
  }
}

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>
