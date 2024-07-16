const collection = require("../config");
const bcrypt = require("bcrypt");

exports.handler = async (event) => {
  try {
    const { username, password } = JSON.parse(event.body);
    const existingUser = await collection.UserModel.findOne({ name: username });

    if (existingUser) {
      return {
        statusCode: 409,
        body: "User already exists. Please try another username.",
      };
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      name: username,
      password: hashedPassword,
    };

    await collection.UserModel.create(newUser);
    return { statusCode: 200, body: "User created successfully." };
  } catch (error) {
    console.error("Signup error:", error);
    return { statusCode: 500, body: "Internal server error" };
  }
};
