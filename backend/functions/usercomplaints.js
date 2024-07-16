const collection = require("../config");

exports.handler = async (event) => {
  try {
    const usercomplaints = await collection.ComplaintModel.find().sort({
      Status: -1,
    });
    return { statusCode: 200, body: JSON.stringify(usercomplaints) };
  } catch (error) {
    console.error("Error fetching user complaints:", error);
    return { statusCode: 500, body: "Internal server error" };
  }
};
