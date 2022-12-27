const nodemailer = require("nodemailer")
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env

async function info(name, email) {
    //creacion y consiguracion del envio de mail

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: GMAIL_ADMIN, // generated ethereal user
            pass: PASSWORD_ADMIN, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    })

    //

    let informacion = await transporter.sendMail({
        from: `"Emme3D-Diseños e impresión en 3D 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "MENSAJE DE PRUEBA ", // Subject line
        text: `Bienvenidos ${name}. este es un mensaje de prueba`,
        html: `<b>Prueba html</b> <a href='http://www.google.com.ar'>Ingresa aqui</a>`, // html body
    })
    return informacion
}

module.exports = {
    info,
}
