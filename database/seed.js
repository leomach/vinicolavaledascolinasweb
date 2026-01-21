import { dbPromise } from "./db.js";

const wines = [
    {
        name: "Cabana do Vale Reserva",
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3607.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "16ºC a 18ºC",
        type: "Vinho Nobre Tinto Seco",
        grape: "Cabernet Sauvignon",
        aging: "12 meses em barricas de Carvalho francês de primeiro uso",
        description: "Apresenta coloração vermelho rubi, límpido e brilhante. Grande complexidade aromática, ressaltando frutas maduras como cassis, cacau e ameixa preta, delicado toque de especiarias e notas elegantes de baunilha, café e chocolate. Em boca, apresenta taninos maduros, amplo corpo, macio e equilibrado. Retrogosto prolongado.",
        harmonization: "Harmoniza com carnes como cordeiro, filé mignon com molho encorpado, carne de caça, churrasco, pratos à base de cogumelo como risoto funghi, queijos maduros e de meia cura, também harmoniza com embutidos."
    },
    {
        name: "Cabana do Vale",
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3607.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "16ºC a 18ºC",
        type: "Vinho Nobre Tinto Seco",
        grape: "Cabernet Sauvignon",
        aging: "12 meses em barricas de Carvalho francês de primeiro uso",
        description: "Límpido e brilhante, de coloração rubi intenso e densas lágrimas. Aroma de média intensidade, porém complexo, com notas de especiarias, pimenta preta, cacau e leve toque frutado de amora. O aroma evolui na taça, revelando novas nuances durante a experiência sensorial. em boca, apresenta taninos médios, persistência longa, com equilíbrio e corpo que promovem ótimo volume de boca.",
        harmonization: "Carnes vermelhas, queijos maduros, embutidos e carnes de caça."
    },
    {
        name: "DONA ELISA",
        imageUrl: "../src/img/photos/vale05-2025-0186.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "16ºC a 18ºC",
        type: "Vinho Nobre Tinto Seco",
        grape: "Malbec",
        aging: null,
        description: "Coloração vermelha intensa com reflexos violáceos, brilhante e límpido. Aroma intenso de frutas vermelhas maduras, framboesa e ameixa. Em boca, leve adstringência, taninos marcantes, média acidez e toque de frutas negras maduras.",
        harmonization: "Massas ao molho de tomate, pizzas, queijos e carnes vermelhas."
    },
    {
        name: "DONA CECÍLIA",
        imageUrl: "../src/img/photos/vale05-2025-0189.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "6ºC a 8ºC",
        type: "Vinho Fino Branco Seco",
        grape: "Muscat Petit Grain",
        aging: null,
        description: "Coloração amarelo palha com reflexos esverdeados e brilhante. Alta intensidade aromática, notas florais remetendo a flor de laranjeira, toques de graviola e abacaxi maduro. Acidez e álcool equilibrados, revelando toda a intensidade da fruta. É leve, macio e refrescante.",
        harmonization: "Frutos do mar, saladas, pães e queijos leves."
    },
    {
        name: "CIRANDA",
        imageUrl: "../src/img/photos/vale05-2025-0185.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "6ºC a 8ºC",
        type: "Vinho Fino Branco Seco",
        grape: "Sauvignon Blanc",
        aging: null,
        description: "Apresenta coloração amarelo palha com reflexos esverdeados, límpido e brilhante. Alta intensidade aromática, notas de frutas tropicais maduras como maracujá e abacaxi, também remete a um leve toque floral. Em boca, apresenta acidez equilibrada, média persistência e corpo leve",
        harmonization: "Ideal como vinho de entrada, harmoniza bem com frutos do mar, carne branca grelhada, saladas, pães, queijos brancos e culinária japonesa."
    },
    {
        name: "CLAIÔ",
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3591.jpg",
        location: "Garanhuns, PE - Brasil",
        temperature: "16ºC a 18ºC",
        type: "Vinho Nobre Tinto Seco",
        grape: "Malbec (50%) <br> Cabernet Sauvignon (50%)",
        aging: "25% com 24 meses em barricas de carvalho francês de primeiro uso e 75% com 12 meses em barrica de carvalho francês de segundo uso.",
        description: "Apresenta coloração púrpura intensa, límpido e brilhante. Grande complexidade aromática, ressaltando frutas negras, noz-moscada, cocada, especiarias e delicado toque de chocolate, tostado e defumado. Em boca apresenta taninos maduros, acidez alta, amplo corpo, macio e equilibrado, com leve picância. Retrogosto prolongado.",
        harmonization: "Harmoniza com carne de caça, carnes vermelhas com molhos encorpados, churrasco, queijos curados e embutidos."
    }
];

async function tablePopulate(wineList) {
    const db = await dbPromise;

    await db.run("DELETE FROM wines");

    for (const wine of wineList) {
        await db.run(
            `INSERT INTO wines (name, imageUrl, location, temperature, type, grape, aging, description, harmonization) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [wine.name, wine.imageUrl, wine.location, wine.temperature, wine.type, wine.grape, wine.aging, wine.description, wine.harmonization]
        );
    }
}

tablePopulate(wines).then(() => {
    console.log("Tabela alimentada com sucesso");
});
