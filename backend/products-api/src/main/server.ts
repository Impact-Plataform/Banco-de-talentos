import { MongoHelper } from "../repositories/mongodb/helper/mongoHelper";

MongoHelper.connect(process.env.MONGODB_URL)
  .then(async () => {
    const app = (await import("./config/app")).default;
    app.listen(5000, () => {
      console.log("Server running at https://leonardo-cabral67-friendly-invention-w44vrj4grqph5vv-5000.preview.app.github.dev/");
    });
  })
  .catch((err) => console.log(err));
