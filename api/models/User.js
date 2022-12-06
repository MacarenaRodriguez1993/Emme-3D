const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        // Nombre de usuario (nick)
        username: {
            type: String,
            required: true,
            unique: true,
        },

        // Correo electrónico
        email: {
            type: String,
            required: true,
            unique: true,
        },

        // Contraseña, se encripta al recibirla
        password: {
            type: String,
            required: true,
        },

        // Nombre del cliente
        name: {
            type: String,
            required: true,
        },

        // Apellido/s del cliente
        surname: {
            type: String,
            required: true,
        },

        // Dirección de envío
        address: {
            type: String,
            required: true,
        },

        // Número de teléfono
        phone: {
            type: String,
            required: true,
        },

        // Control para las cuentas admin
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
