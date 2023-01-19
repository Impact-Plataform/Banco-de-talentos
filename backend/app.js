import * as dotenv from "dotenv";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./src/docs/swagger.json" assert { type: "json" };

import { app } from "./server.js";

dotenv.config()

const port = process.env.PORT || 3000

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`)
})




