import CustomAPIError from "../error/CustomAPIError.js";
import { StatusCodes } from "http-status-codes";
const errorHandler=(err,req,res,next)=>
{
    if(err instanceof CustomAPIError)
    {
      return res.status(err.StatusCodes).json({msg:err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err:err.message});
    //res.send("there is something wrong");
}
export default errorHandler;