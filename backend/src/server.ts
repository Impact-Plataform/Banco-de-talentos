import app from "./app";
import "dotenv/config";

app.listen(process.env.API_PORT || process.env.PORT || 3030);
