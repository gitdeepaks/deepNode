const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

// console.log(url);

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("User");

  //   Insert

  const data = {
    firstName: "Ranveer",
    lastName: "Kumar",
    city: "Mumbai",
    phoneNumber: 9604444444,
  };

  const insertResult = await collection.insertMany([data]);

  console.log("Inserted documents =>", insertResult);

  //   Read

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //   Update

  //   const updateResult = await collection.updateOne(
  //     { firstName: "John" },
  //     { $set: { city: "New York" } }
  //   );
  //   console.log("Updated documents =>", updateResult);

  //   Delete

  //   const deleteResult = await collection.deleteOne({
  //     firstName: "John",
  //   });
  //   console.log("Deleted documents =>", deleteResult);

  //   const countResult = await collection
  //     .find({ name: "Deepak" })
  //     .countDocuments();
  //   console.log("Count documents =>", countResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
