import { ResponseTypeError } from "../repositories/types/reponse";


const mapHttpStatus: Record<ResponseTypeError, number> = {
  INVALID_DATA: 400,
  NOT_FOUND: 404,
  UNATHORIZED: 401,
  UNPROCESSABLE_DATA: 422,
  CONFLICT: 409,
};

const getErrorCode = (type: ResponseTypeError): number => mapHttpStatus[type];

export default getErrorCode;
