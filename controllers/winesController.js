import { dbPromise } from "../database/db.js";

export const getWines = async (req, res) => {
  try {
    const db = await dbPromise;
    const wines = await db.all("SELECT * FROM wines");
    return res.json(wines);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao buscar vinhos");
  }
};
