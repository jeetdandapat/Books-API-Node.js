import Joi from "joi";

const bookSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().max(2000).required(),
  author: Joi.string().required(),
  publishDate: Joi.date().iso().optional()
});

export const createBookValidation = (req, res, next) => {
  const { error } = bookSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.details.map(e => e.message)
    });
  }
  next();
};
