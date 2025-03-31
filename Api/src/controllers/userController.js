import { object, string } from "yup";

import { HEADER } from "../constants.js";

const registerBodySchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  image: string().url(),
})
  .noUnknown(true)
  .strict();

class UserController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "email and password are required" });
    }
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
      res.status(400).json({ error: error.message });
    }
  };

  // ...extend with your code
}

export default UserController;
