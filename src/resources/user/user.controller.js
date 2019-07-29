import { User } from "./user.model";

export const signup = async (req, res) => {
  if (!req.body.email || !req.body.name) {
    return res.status(400).send({ message: "Need email, password and name" });
  }
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ user });
  } catch (e) {
    return res.status(500).end();
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .lean()
      .exec();
    return res.status(200).json({ users });
  } catch (e) {
    return res.status(400).end();
  }
};
