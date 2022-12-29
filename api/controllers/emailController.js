const nodemailer = require("nodemailer")
// email y key de EMME-3D
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env

async function info(name, email) {
    //creacion y configuracion del envio de mail
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
        html: `Bienvenidos ${name}. este es un mensaje de prueba <a href='http://127.0.0.1:5173/products'>Ingresa aqui para regresar al sitio</a>`, // html body
    })
    return informacion
}

module.exports = {
    info,
}
