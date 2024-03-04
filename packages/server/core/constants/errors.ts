const ERRORS = {
  not_found: {
    code: 404,
    msg: "Not found",
  },
  unexpected: {
    code: 500,
    msg: "Un expected error has occured, please try again later",
  },
  content_not_json: {
    code: 415,
    msg: "Content-Type must be application/json",
  },
};

export default ERRORS;
