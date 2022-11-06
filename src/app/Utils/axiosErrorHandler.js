export const axiosErrorHandler = (error) => {
  if (
    ["ERR_BAD_REQUEST", "ERR_NETWORK", "ERR_BAD_RESPONSE"].includes(error.code)
  ) {
    if (
      typeof error.response.data == "undefined" ||
      !error.response.data.message
    ) {
      return { message: error.message };
    }
  }
  return error.response.data;
};
