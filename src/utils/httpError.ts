import { ServiceResponseTypeError } from "../repositories/types/serviceResponse";


const mapHttpStatus: Record<ServiceResponseTypeError, number> = {
  INVALID_DATA: 400,
  NOT_FOUND: 404,
  UNATHORIZED: 401,
  UNPROCESSABLE_DATA: 422,
};

const getErrorCode = (type: ServiceResponseTypeError): number => mapHttpStatus[type];

export default getErrorCode;
