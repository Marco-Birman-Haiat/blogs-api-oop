type ServiceResponseTypeError = 'UNATHORIZED' | 'NOT_FOUND' | 'INVALID_DATA' | 'UNPROCESSABLE_DATA';
type ServiceResponseTypeSuccess = 'OK' | 'CREATED';

type ServiceResponseSuccess<T> = {
  type: ServiceResponseTypeSuccess,
  data: T,
}

type ServiceResponseError = {
  type: ServiceResponseTypeError,
  data: {
    message: string,
  }
}

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>
