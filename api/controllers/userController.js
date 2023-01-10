const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const User = require("../models/User")

async function getUsers() {
    try {
        const users = await User.find()
        if (users.length < 1)
            throw new Error("NO HAY USUARIOS EN LA BASE DE DATOS")
        return users
    } catch (err) {
        throw err
    }
}

async function usersId(uid) {
    console.log('uid back', uid)
    try {
        const userId = await User.findOne({uid:uid}).exec()
            return userId
        
    } catch (err) {
        throw err
    }
}

async function createUser(user) {
    const { uid, name, email, img, phone, surname, city, province, address } = user
    try {
        // verifico si el usuario ya existe
        const emailExist = await User.findOne({
            email,
        }).exec()
        if (emailExist)
            return false
        const createdUser = await User.create({
           uid: uid, 
           email:email, 
           img: img, 
           phone: phone, 
           surname: surname, 
           city: city, 
           province: province, 
           address: address , 
           name: name
        })
        return createdUser
    } catch (err) {
        throw err
    }
}


async function deletedUser(id) {
    try {
        const deleteUser = await User.updateOne({ uid: id }, { deleted: true })
        return deleteUser
    } catch (err) {
        throw err
    }
}

async function userUpdate(uid, user) {
    try {
        const update = await User.findOneAndUpdate(
            { uid },
            {
                username: user.username,
                email: user.email,
                name: user.name,
                surname: user.surname,
                address: user.address,
                city: user.city,
                province: user.province,
                cp: user.cp,
                phone: user.phone,
                img: user.img,
            }
        )
        if (update) return update
    } catch (err) {
        throw err
    }
}

module.exports = {
    createUser,
    getUsers,
    deletedUser,
    userUpdate,
    usersId,
}
