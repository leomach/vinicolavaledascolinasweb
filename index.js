import e from "express";
import cors from "cors";
import { dbPromise } from "./database/db.js";
import winesRouter from "./routes/wines.js";
import visitsRouter from "./routes/visits.js";

const app = e();
const PORT = 3000;

app.use(e.json());
app.use(cors());
app.use(e.static('frontend/'));

app.use("/api/wines", winesRouter);
app.use("/api/visits", visitsRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});