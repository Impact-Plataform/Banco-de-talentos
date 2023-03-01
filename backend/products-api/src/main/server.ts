import { MongoHelper } from "../repositories/mongodb/helper/mongoHelper";
import { client } from "../repositories/redis/client/redisClient";


MongoHelper.connect("mongodb://db:27017/api-products")
  .then(async () => {
    await client.connect()
    const app = (await import("./config/app")).default;
    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));
