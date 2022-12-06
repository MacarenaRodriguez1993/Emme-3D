const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        // Id del usuario
        id: {
            type: UUID,
            required: true,
            unique: true,
        },

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

        // País del usuario
        country: {
            type: String,
            required: true,
        },

        // Número de teléfono
        phone: {
            type: String,
            required: true,
            // unique: true, Debería ser único?
        },

        // Control para las cuentas admin
        isAdmin: {
            type: Boolean,
            default: false,
        },

        // Pedidos del usuario
        orders_ids: [
            {
                order_id: mongoose.Types.ObjectId,
            },
        ],

        // Valoraciones del usuario
        reviews_ids: [
            {
                review_id: mongoose.Types.ObjectId,
            },
        ],

        // "Flag" para el borrado lógico
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
