import { MongoHelper } from "../repositories/mongodb/helper/mongoHelper";

MongoHelper.connect("mongodb://localhost:27017/api-products")
  .then(async () => {
    const app = (await import("./config/app")).default;
    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  })
  .catch((err) => console.log(err));
