const mongoose = require("mongoose")

/*
 * Un User es cualquier usuario de la web.
 * Pueden ser tanto clientes (en su mayoría) como administradores.
 * Contiene varios pedidos y valoraciones
 */

const UserSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
            unique: true,
        },
        // Nombre de usuario (nick)
        username: {
            type: String,
        },

        // Correo electrónico
        email: {
            type: String,
            required: true,
            unique: true,
        },

        // Foto de perfil
        photo: {
            type: String,
        },

        // Contraseña, se encripta al recibirla
        password: {
            type: String,
        },

        // Nombre del cliente
        name: {
            type: String,
        },

        // Apellido/s del cliente
        surname: {
            type: String,
        },

        // Dirección de envío
        address: {
            type: String,
        },

        // Ciudad del usuario
        city: {
            type: String,
        },

        // Provincia del usuario
        province: {
            type: String,
        },

        // Codigo postal del usuario
        cp: {
            type: String,
        },

        // Número de teléfono
        phone: {
            type: String,
        },

        // Imagen de perfil
        img: {
            type: String,
        },

        // Carrito del usuario de perfil
        cart: {
            type: Object,
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
        img: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
