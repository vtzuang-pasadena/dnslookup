const dns = require('dns');
const fs = require('fs');
const lineReader = require('line-reader');

lineReader.eachLine('urls.txt', function (line, last) {
    let url = line;

    dns.lookup(url, (err, addresses, family) => {
        let text = `${url} \t ${addresses} \r\n`;
        console.log(text);

        fs.appendFile('results.txt', String(text), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});
