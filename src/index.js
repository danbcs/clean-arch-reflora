import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./swagger.json" assert { type: "json" };

import itemRoutes from "./presentation/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});