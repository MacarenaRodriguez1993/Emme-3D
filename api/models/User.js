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
            //required: true,
            //unique: true,
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
            //required: true,
        },

        // Apellido/s del cliente
        surname: {
            type: String,
            //required: true,
        },

        // Dirección de envío
        address: {
            type: String,
            //required: true,
        },

        // Ciudad del usuario
        city: {
            type: String,
            //required: true,
        },

        // Provincia del usuario
        province: {
            type: String,
            //required: true,
        },

        // Codigo postal del usuario
        cp: {
            type: String,
            //required: true,
        },

        // Número de teléfono
        phone: {
            type: String,
            //required: true,
            // unique: true, Debería ser único?
        },

        // Imagen de perfil
        img: {
            type: String,
            //required: true,
            // unique: true, Debería ser único?
        },

        // Carrito
        cart: [
            {
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
                img: [
                    {
                        type: String,
                    }
                ],
                price: {
                    type: Number,
                },
                units: {
                    type: Number,
                },
            },
        ],

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
