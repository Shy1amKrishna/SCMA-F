const collection = require("../config");
const bcrypt = require("bcrypt");

exports.handler = async (event) => {
  try {
    const { username, password } = JSON.parse(event.body);
    const user = await collection.UserModel.findOne({ name: username });

    if (!user) {
      return { statusCode: 404, body: "User not found" };
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      return { statusCode: 200, body: "Login successful" };
    } else {
      return { statusCode: 401, body: "Incorrect password" };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { statusCode: 500, body: "Internal server error" };
  }
};
