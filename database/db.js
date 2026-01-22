import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const dbPromise = await open({
    filename: "./vinicola.db",
    driver: sqlite3.Database,
});

async function newTable() {
    const db = await dbPromise;
    await db.exec(`
        CREATE TABLE IF NOT EXISTS wines (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            imageUrl TEXT,
            location TEXT,
            temperature TEXT,
            type TEXT,
            grape TEXT,
            aging TEXT,
            description TEXT,
            harmonization TEXT
        )
    `);
    await db.exec(`
        CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            includesHtml TEXT,
            description TEXT
        )
    `);
}

newTable().then(() => {
    console.log("Tabelas criadas com sucesso");
});