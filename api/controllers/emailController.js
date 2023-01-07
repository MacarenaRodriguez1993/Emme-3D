const nodemailer = require("nodemailer")
// email y key de EMME-3D
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env

async function pago(name, email) {
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

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
        from: `"Emme3D-Diseños e impresión en 3D 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "PAGO EXITOSO ", // Subject line
        html: `Hola ${name} 🛒. Muchas gracias por tu compra. Estaremos en contacto cuando tu pedido este listo 👌. <a href='http://127.0.0.1:5173/products'>Ingresa aqui para regresar al sitio</a>`, // html body
    })
    return informacion
}
async function newUser(name, email) {
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

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
        from: `"Emme3D-Diseños e impresión en 3D 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: " BIENVENID@ AL MUNDO DE LA IMPRESION 3D ", // Subject line
        html: `Hola ${email} . Muchas gracias por sumarte a Emme-3D 👏. <br></br> Te invitamos a recorrer nuestra pagina y encontrar el producto ideal para regalar
         o regalarte.<br></br> Recordá que tambien podes hacer tus pedidos personalizados ✍️📉 <br></br>
         <a href='http://127.0.0.1:5173/products'>Ingresa aqui para regresar al sitio</a> - <br></br>
         Nuestras redes <a href='http://www.instagram.com/emme.3d'>Instagram</a>`, // html body
    })
    return informacion
}

async function contacto(data) {
    console.log(data)
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
    let informacion = await transporter.sendMail({
        from: `"Emme3D-Diseños e impresión en 3D 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: GMAIL_ADMIN, // list of receivers
        subject: `Hola , soy ${data.name}`, // Subject line
        html: `Hola ${GMAIL_ADMIN} <br/> 
            Mi mail de contacto es <b> ${data.email}  </b> y quisiera hacer ${data.reason}
            Acontinuacion adjunto  mi consulta  con los datos y mi informacion personal para que podamos mantener contacto <br/>
            <a href='${data.file}'>ARCHIVO ADJUNTO </a><br/>
            <a href='${data.link}'>Link directo  </a><br/>
            Celular = ${data.phone}<br/>
            Muchas gracias. Espero una pronta respuesta
            
        `,
    })
    return informacion
}
module.exports = {
    pago,
    newUser,
    contacto,
}
