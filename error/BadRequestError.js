import CustomAPIError from "./CustomAPIError.js"
import {StatusCodes } from "http-status-codes"

class BadRequestError extends CustomAPIError{
    constructor(message)
    {
      super(message)
      this.StatusCodes=StatusCodes.BAD_REQUEST;
    }
}
export default BadRequestError