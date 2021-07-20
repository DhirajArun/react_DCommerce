import Joi from "joi";

function validate(data, schema, options = {}) {
    const result = Joi.object(schema).validate(data, options);
    return getErrorMsg(result);
}

function getErrorMsg(errorResult) {
    if (!errorResult.error) return;
    const errors = errorResult.error.details.map((item) => {
      const error = {};
      switch (item.type) {
        case "string.empty":
          error.message = `Enter your ${item.context.label}`;
          break;
        case "string.pattern.base":
          error.message = `The ${item.context.label} you entered does not seem to be valid`;
          break;
        case "string.min":
          error.message = `${item.context.label} must be at least ${item.context.limit} characters.`;
          break;
        case "string.max":
          error.message = `${item.context.label} must not be more than ${item.context.limit} characters.`;
          break;
        case "string.length":
          error.message = `${item.context.label} must be of ${item.context.limit} characters.`;
          break;
        default:
          error.message = "";
      }
      error.path = item.path;
      return error;
    });
    return errors;
}



const dJoi = {
    validate
};

export default dJoi;
