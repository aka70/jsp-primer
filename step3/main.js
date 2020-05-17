const program   = require("commander");
const fs        = require("fs");
const md2html    = require("./mk2html");

program.option("--gfm","GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
    gfm: false,
    ...program.opts(),
};

fs.readFile(filePath,{ encoding:"utf-8"} ,(err,file) => {
    if (err) {
        console.log(err);
        process.exit(1);
        return;
    }
    const html = md2html(file,cliOptions);
    console.log(html);
});