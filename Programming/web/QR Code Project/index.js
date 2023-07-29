/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

let questionPrompt = "What is the URL you would like to turn into a QR code?";
inquirer
    .prompt([
        {"message": questionPrompt, name: "URL"}
    ])
    .then(answers => {
        const url = answers.URL;
        let qrImage = qr.image(url);

        qrImage.pipe(fs.createWriteStream("qr_image.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    });


