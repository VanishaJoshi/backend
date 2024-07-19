import CustomAPIError from "./CustomAPIError.js"
import {StatusCodes } from "http-status-codes"
class Unauthorized extends CustomAPIError{
    constructor(message)
    {
      super(message)
      this.StatusCodes=StatusCodes.UNAUTHORIZED;
    }
}
export default Unauthorized