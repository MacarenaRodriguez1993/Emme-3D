import * as yup from "yup"

export let validationsuser = yup.object().shape({
    username: yup.string(),
    surname: yup.string(),
    address: yup.string(),
    city: yup.string(),
    province: yup.string(),
    name: yup.string(),
    cp: yup.number().positive().integer().max(4), //maximo 4 digitos, .min indica caracteres minimos
    phone: yup.number().positive().integer(),
    email: yup.string().email(),
    img: yup.string().url(),
})

/* check validity
schema.isValid(userData).then(function (valid) {
    valid // => true
})

// you can try and type cast objects to the defined schema
schema.cast({
    name: "jimmy",
    age: "24",
    createdOn: "2014-09-23T19:25:25Z",
})
// => { name: 'jimmy', age: 24, createdOn: Date }
*/
