const os = require("os")
const log = require("./logger");
const { stat } = require("fs");
const { freemem, totalmem } = os;


setInterval(() => {
    const mem = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    console.clear();
    console.log(" --=== Memory Stats ===-- ");
    const stats = {
        "Free": `${mem} MB`,
        "Total": `${total} MB`,
        "Usage": `${percents}%`
    };

    console.table(stats);
    log(`${JSON.stringify(stats)}\n`)
    console.log("Rodando....")
}, 1000)