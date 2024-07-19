import CustomAPIError from "./CustomAPIError.js"
import {StatusCodes } from "http-status-codes"
class NotFound extends CustomAPIError{
    constructor(message)
    {
      super(message)
      this.StatusCodes=StatusCodes.NOT_FOUND;
    }
}
export default NotFound