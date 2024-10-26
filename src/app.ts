import express, { Request, Response } from "express";
import { client } from "./database/index";
import recRouter from "./routes/recommendationsRoutes";
import cors from "cors";

const port = 2137;
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

async function startServer() {
  try {
    await client.connect();
    console.log("DB connected!");
  } catch (error) {
    console.error(error);
  }

  app.use("/recommendations", recRouter);

  app.get("/", (req: Request, res: Response) => {
    res.sendStatus(404);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.log(error);
});
