// Node API
//cmd : node inddex.js
/*console.log("Spencer");

//Import Chalk
//ES6(semantically makes sense)
import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));

const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.cyanBright(`
    Spencer 
    was 
    here
`
));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);*/
//Common JS/ old JS
//const chalk = require('chalk');


//figlet
import figlet from 'figlet';


figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
