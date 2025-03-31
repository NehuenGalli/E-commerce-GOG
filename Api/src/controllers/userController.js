import { object, string } from "yup";

import { HEADER } from "../constants.js";

const registerBodySchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  image: string().url(),
  backgroundImage: string().url(),
})
  .noUnknown(true)
  .strict();

const loginBodySchema = object({
  email: string().email().required(),
  password: string().required(),
})
  .noUnknown(true)
  .strict();

class UserController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  login = async (req, res) => {
    const { email, password } = await loginBodySchema.validate(req.body);
    const user = this.service.users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      res.status(400).json({ error: "Invalid credentials" });
    }
    const token = this.tokenController.generateToken(user.id);
    res.header(HEADER, token).json({ user: { id: user.id, email } });
  };

  register = async (req, res) => {
    try {
      const newUser = await registerBodySchema.validate(req.body);
      const user = this.service.addNewUser(newUser);
      const token = this.tokenController.generateToken(user.id);
      res
        .header(HEADER, token)
        .json({ user: { id: user.id, email: user.email } });
    } catch (error) {
      res.status(400).json({
        error: "Invalid data / User already exists and other errors.",
      });
    }
  };

  // ...extend with your code
}

export default UserController;
