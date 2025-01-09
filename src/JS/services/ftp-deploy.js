/*
Path: src/JS/services/ftp-deploy.js
Este script se encarga de subir el build a un servidor FTP.
*/

const FtpDeploy = require("@/JS/services/ftp-deploy");
const ftpDeploy = new FtpDeploy();
require('dotenv').config();

const config = {
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/public_html/profebot/",
    include: ["*", "**/*"],
    deleteRemote: false,
};

ftpDeploy.deploy(config)
    .then(res => console.log("Deploy finalizado:", res))
    .catch(err => console.error("Error durante el deploy:", err));