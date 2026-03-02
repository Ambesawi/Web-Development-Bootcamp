/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
var qr = require('qr-image');

inquirer
    .prompt([{
        "message": "Type in your URL:",  /* Pass your questions in here */
        "name": "URL"
    }])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        var qr_svg = qr.image('I love QR!');
        qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });