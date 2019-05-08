/**
 * Created by Lucas on 2019/5/8.
 */
let fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');
jsdoc2md.clear();
jsdoc2md.render({ files: 'src/cookie_operator.js' }).then(res => {
    fs.writeFile('./doc/index.md', res, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    });
});