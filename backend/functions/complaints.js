const collection = require("../config");

exports.handler = async (event) => {
  try {
    const { UserName, Lab, SystemName, Complaint, Date } = JSON.parse(
      event.body
    );

    const newComplaint = {
      UserName,
      Lab,
      SystemName,
      Complaint,
      Date,
      Status: "Waiting",
    };

    await collection.ComplaintModel.create(newComplaint);
    return { statusCode: 200, body: "Complaint recorded successfully" };
  } catch (error) {
    console.error("Complaint handling error:", error);
    return { statusCode: 500, body: "Internal server error" };
  }
};
