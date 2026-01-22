import { dbPromise } from "../database/db.js";

export const getAllVisits = async (req, res) => {
    try {
        const db = await dbPromise;
        const visits = await db.all("SELECT * FROM visits");
        res.json(visits);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar visitas", error });
    }
};

export const getVisitById = async (req, res) => {
    const { id } = req.params;
    try {
        const db = await dbPromise;
        const visit = await db.get("SELECT * FROM visits WHERE id = ?", [id]);
        
        if (!visit) {
            return res.status(404).json({ message: "Visita não encontrada" });
        }
        
        res.json(visit);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar visita", error });
    }
};
