type ControllerResponseError = {
  message: string,
}

export type ControllerResponse<T> = T | ControllerResponseError;
