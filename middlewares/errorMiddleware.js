// its a middle ware to appply error and send 
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || " Internal Server error";
  err.status = err.status || 500;

  return res.status(err.status).json({
    message: err.message,
    success: false,
  });
};
