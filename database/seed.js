import { dbPromise } from "./db.js";

const wines = [
    {
        name: "Cabana do Vale Reserva",
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3607.webp",
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
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3607.webp",
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
        imageUrl: "../src/img/photos/vale05-2025-0186.webp",
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
        imageUrl: "../src/img/photos/vale05-2025-0189.webp",
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
        imageUrl: "../src/img/photos/vale05-2025-0185.webp",
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
        imageUrl: "../src/img/photos/VinhosValeDasColinas-3591.webp",
        location: "Garanhuns, PE - Brasil",
        temperature: "16ºC a 18ºC",
        type: "Vinho Nobre Tinto Seco",
        grape: "Malbec (50%) <br> Cabernet Sauvignon (50%)",
        aging: "25% com 24 meses em barricas de carvalho francês de primeiro uso e 75% com 12 meses em barrica de carvalho francês de segundo uso.",
        description: "Apresenta coloração púrpura intensa, límpido e brilhante. Grande complexidade aromática, ressaltando frutas negras, noz-moscada, cocada, especiarias e delicado toque de chocolate, tostado e defumado. Em boca apresenta taninos maduros, acidez alta, amplo corpo, macio e equilibrado, com leve picância. Retrogosto prolongado.",
        harmonization: "Harmoniza com carne de caça, carnes vermelhas com molhos encorpados, churrasco, queijos curados e embutidos."
    }
];

const visits = [
    {
        name: "Visita Simples",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado Sugerido"></i>
                    
                                        <i class="fa-solid fa-calendar-check" title="Agendamento Recomendado"></i>
                    
                                        <i class="fa-solid fa-ban-smoking" title="Proibido Consumo de Álcool para Menores"></i>
                    
                                        <i class="fa-solid fa-tree-city" title="Acesso à Área Verde Livre"></i>
                    
                                        <i class="fa-solid fa-basket-shopping" title="Permitido Piquenique"></i>
                    
                                        <i class="fa-solid fa-sailboat" title="Uso de Pedalinhos"></i>
                    
                                        <i class="fa-solid fa-wine-glass" title="Disponibilidade do 'Trio Vale'"></i>
                    
                                        <i class="fa-solid fa-ticket" title="Taxa de Acesso (Meia Entrada)"></i>
                    
                                        <i class="fa-solid fa-children" title="Menores de Idade Não Pagam"></i>`,
        description: `Na visita simples você tem  acesso à nossa imensa
                    área verde (exceto a área do parreiral,  onde só é permitido com guia), 
                    pode fazer piquenique; pode utilizar nossos pedalinhos, optar pelo
                    nosso “Trio Vale” ou simplesmente sentar e apreciar a natureza.
                    A visita simples dura o tempo que você desejar ficar em nosso espaço,
                    sugerimos que seja agendada e com pagamento antecipado (veja em agendamentos) e
                    atualmente com desconto de meia entrada, custa 25,00 reais para maiores de 18 anos. 
                    Menores  de idade acompanhados de responsáveis podem participar e não pagam taxa de acesso,
                    sendo entretanto terminantemente proibido o consumo de bebida alcoólica por estes jovens.`
    },
    {
        name: "Visita Guiada",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado Obrigatório"></i>
    
                        <i class="fa-solid fa-calendar-check" title="Agendamento Obrigatório"></i>
    
                        <i class="fa-solid fa-ban-smoking" title="Proibido Consumo de Álcool para Menores"></i>
    
                        <i class="fa-solid fa-tree-city" title="Acesso à Área Verde Livre"></i>
    
                        <i class="fa-solid fa-basket-shopping" title="Piquenique Disponível"></i>
    
                        <i class="fa-solid fa-sailboat" title="Pedalinhos Disponíveis"></i>
    
                        <i class="fa-solid fa-wine-glass" title="Disponibilidade do 'Trio Vale'"></i>
    
                        <i class="fa-solid fa-leaf" title="Visita ao Parreiral"></i>
    
                        <i class="fa-solid fa-wine-bottle" title="Visita à Cantina e Processo de Vinificação"></i>
    
                        <i class="fa-solid fa-person-walking" title="Visita com Guia Especializado"></i>
    
                        <i class="fa-solid fa-video" title="Apresentação em Vídeo Institucional"></i>
    
                        <i class="fa-solid fa-wine-glass-empty" title="Degustação de Vinhos (Três Rótulos)"></i>
    
                        <i class="fa-solid fa-child-combatant" title="Não Permitido Crianças Menores de 12 Anos"></i>`,
        description: `Consiste em visita com especialista como guia, com duração prevista de uma hora e quinze minutos. Inicia-se com a apresentação de vídeo institucional, visita ao parreiral com explicações sobre o processo de produção e peculiaridades das videiras, continuando em nossa cantina, mostrando todo o processo de vinificação, envase e rotulagem,  e se encerra com a degustação e análises de três dos nossos rótulos. Ocorre nas sextas (14h, 15h30 e 17h) e aos sábados e domingos (10h15, 11h45, 14h, 15h30 e 17h) a custo de 45,00 reais por pessoa (deve-se somar a este valor os 25,00 reais (meia entrada) da taxa de acesso, totalizando assim 70,00 reais).  Jovens entre 12 e 17 anos podem acompanhar seus responsáveis  durante a visita e não pagam taxa adicional, não sendo entretanto permitido o consumo de bebida alcoólica por estes jovens. Para um melhor aproveitamento da visita NÃO permitimos o acompanhamento de crianças com idade  inferior a 12 anos ( inclusive crianças de colo ). NÃO HAVERÁ EXCEÇÃO.  Caso o adulto não disponha de responsável  para deixar as crianças sob seus cuidados em outras dependências da vinícola,  sugerimos que opte por uma visita simples. Antes ou após a visita guiada você pode usufruir do nosso imenso espaço o tempo que desejar, podendo optar também pelo piquenique, pedalinhos, Trio Vale ou simplesmente sentar e apreciar a natureza. A visita guiada deve ser agendada e com pagamento antecipado (veja em “agendamentos”).`
    },
    {
        name: "Visita Técnica",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado do Grupo"></i>
    
                        <i class="fa-solid fa-calendar-days" title="Agendamento Exclusivo (Segunda a Quarta)"></i>
    
                        <i class="fa-brands fa-whatsapp" title="Agendamento via WhatsApp"></i>
    
                        <i class="fa-solid fa-leaf" title="Visita ao Parreiral"></i>
    
                        <i class="fa-solid fa-wine-bottle" title="Visita à Cantina"></i>
    
                        <i class="fa-solid fa-user-graduate" title="Guia Técnico (Agronomia/Enologia)"></i>
    
                        <i class="fa-solid fa-flask" title="Foco em Processos de Plantio e Processamento"></i>
    
                        <i class="fa-solid fa-users" title="Mínimo de 20 Participantes"></i>`,
        description: `Direcionada para alunos ou grupos de instituições de pesquisa e ensino. Consiste em visita com nosso técnico na área de agronomia e/ou enologia como guia, com visita ao parreiral e à nossa cantina, destrinchando peculiaridades do plantio e do processamento da uva.  Tem duração média de uma hora. Ocorrem exclusivamente em dias em que não estamos abertos ao público (de segunda à quarta-feira), no período da manhã, a custo de R$ 40,00 (atualmente estamos com promoção de meia entrada  a custo de R$ 20,00) por pessoa. O pagamento da reserva do grupo deverá  ser efetuado até 48 horas antes. Não haverá devolução de qualquer valor pago, independente do motivo,  se parte do grupo, independente da quantidade,  estiver presente na visita. No caso de impossibilidade do grupo estar presente no dia agendado será dada a opção de outra data para a visita. No caso de desistência da visita de todo o grupo, independente do motivo, será devolvido 50% do valor pago se a vinícola  for avisada até 24 horas antes do agendamento. Esta visita só ocorrerá com o mínimo de 20 ( vinte ) participantes. O agendamento deverá ser feito em nosso whatsapp (87 99933-4052).`
    },
    {
        name: "Visita Técnica Exclusiva",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado"></i>
    
                        <i class="fa-solid fa-calendar-check" title="Agendamento Obrigatório"></i>
    
                        <i class="fa-brands fa-whatsapp" title="Agendamento via WhatsApp"></i>
    
                        <i class="fa-solid fa-user-tie" title="Guia Agrônomo Exclusivo"></i>
    
                        <i class="fa-solid fa-handshake-simple" title="Direcionado a Empresários e Investidores"></i>
    
                        <i class="fa-solid fa-hourglass-half" title="Duração Prevista de 1h30"></i>
    
                        <i class="fa-solid fa-users-between-lines" title="Grupo Máximo de 4 Pessoas"></i>`,
        description: `A visita técnica exclusiva (para no máximo quatro pessoas) é direcionada para empresários e investidores do segmento da vitivinicultura. Tem nosso(a) agrônomo(a) como guia e duração prevista de uma hora e meia. Deve ser agendada e pagamento antecipado, até 48 horas antes, no valor de um mil reais. O agendamento deverá ser feito em nosso whatsapp (87 99933-4052).`
    },
    {
        name: "Excursões e Grupos",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado Obrigatório"></i>
    
                        <i class="fa-solid fa-calendar-check" title="Agendamento Prévio Obrigatório"></i>
    
                        <i class="fa-solid fa-bus" title="Guia e Motorista Isentos de Taxa de Acesso"></i>
    
                        <i class="fa-solid fa-file-invoice-dollar" title="Política de Cancelamento Aplicável"></i>`,
        description: `É obrigatório o agendamento prévio e pagamento antecipado. Não é cobrada do guia e motorista qualquer taxa de acesso. Se houver desistência pontual de algum cliente no grupo agendado, restituiremos integralmente o valor pago, sendo descontados apenas as taxas de administração ( 0,99% para pix e 4,99 para cartão ). Entretanto se houver desistência do grupo por inteiro, independente do motivo, será observada nossa política de cancelamento. Solicitamos às agências de turismo pontualidade nos agendamentos para se evitar a visita simultânea de dois ou mais grupos, trazendo assim transtornos a todos.`
    },
    {
        name: "Ensaios Fotográficos",
        includesHtml: `<i class="fa-solid fa-money-bill" title="Pagamento Antecipado Obrigatório"></i>
    
                        <i class="fa-solid fa-calendar-check" title="Agendamento Obrigatório"></i>
    
                        <i class="fa-brands fa-whatsapp" title="Agendamento via WhatsApp"></i>
    
                        <i class="fa-solid fa-user-graduate" title="Restrição para Turmas de Formatura (Segunda a Quinta)"></i>
    
                        <i class="fa-solid fa-camera-retro" title="Espaço Disponível para Ensaios Fotográficos"></i>
    
                        <i class="fa-solid fa-mountain-sun" title="Paisagismo Exuberante e Diversos Ambientes"></i>
    
                        <i class="fa-solid fa-clock" title="Período Reservado (Manhã ou Tarde)"></i>`,
        description: `Devem ser agendados e com pagamento antecipado. Oferecemos nosso espaço (não dispomos de fotógrafos) para eternizar seus mais belos momentos com um paisagismo exuberante em diversos ambientes, ficando reservado um período (manhã ou tarde), ensaios poderão acontecer de segunda a Domingo , com exceção para turmas de formatura , estas só poderão ser agendadas de  segunda a quinta . Marcações de ensaios através do WhatsApp 87 - 99625-8710.
                    <br>
                    ​<br>
                    Valores: <br>
                    1. Até 4 pessoas: R$ 100,00; <br>

                    2. Acima de 4 pessoas será cobrada uma taxa de R$ 25,00 por pessoa.`
    }
]

async function tablePopulate(wineList, visitList) {
    const db = await dbPromise;

    // Verificar e popular tabela de vinhos
    const rowWine = await db.get(`SELECT COUNT(*) as count FROM wines`);
    if (rowWine.count > 0) {
        console.log("Tabela de vinhos já populada, pulando inserção.");
    } else {
        // Inserir vinhos na tabela
        for (const wine of wineList) {
            await db.run(
                `INSERT INTO wines (name, imageUrl, location, temperature, type, grape, aging, description, harmonization) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [wine.name, wine.imageUrl, wine.location, wine.temperature, wine.type, wine.grape, wine.aging, wine.description, wine.harmonization]
            );
        }
        console.log("Vinhos inseridos com sucesso.");
    }

    // Verificar e popular tabela de visitas
    const rowVisit = await db.get(`SELECT COUNT(*) as count FROM visits`);
    if (rowVisit.count > 0) {
        console.log("Tabela de visitas já populada, pulando inserção.");
    } else {
        // Inserir visitas na tabela
        for (const visit of visitList) {
            await db.run(
                `INSERT INTO visits (name, includesHtml, description) 
                VALUES (?, ?, ?)`,
                [visit.name, visit.includesHtml, visit.description]
            );
        }
        console.log("Visitas inseridas com sucesso.");
    }
}

tablePopulate(wines, visits).then(() => {
    console.log("Tabelas alimentadas com sucesso");
});
