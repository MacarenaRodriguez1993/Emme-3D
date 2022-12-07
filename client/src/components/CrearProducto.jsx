import { Formik, Form, Field } from "formik"
import { useState } from "react"

const CrearProducto = () => {
    const [created, setCreated] = useState(false)
    //este arreglo hace de db por ahora
    let productos = []

    //reemplazar esta constante con las categorias que vienen del back
    const categoriasArray = [
        {
            id: 1,
            name: "mates",
        },
        {
            id: 2,
            name: "lamparas",
        },
        {
            id: 3,
            name: "vasos",
        },
    ]

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    price: 0,
                    categorias: [],
                    stock: 0,
                    description: "",
                    img: "",
                }}
                validate={(data) => {
                    let errors = {}
                    //validacion de nombre
                    if (!data.name) {
                        errors.nombre = "Ingresa un nombre"
                    }
                    //validaciones de precio
                    if (!data.price) {
                        errors.precio = "El producto debe tener un precio"
                    } else if (data.price < 1) {
                        errors.precio = "El precio debe ser mayor a 1"
                    } else if (typeof data.price !== "number") {
                        errors.precio = "El precio debe ser un numero"
                    }
                    //validacion de categoria
                    if (!data.categorias) {
                        errors.categorias = "Elige una categoria"
                    }
                    //validacon de stock
                    if (!data.stock) {
                        errors.stock = "Ingresa las unidades disponibles"
                    } else if (data.stock < 0) {
                        errors.stock = "El stock no puede ser negativo"
                    } else if (typeof data.stock !== "number") {
                        errors.stock = "El stock debe ser un numero"
                    }
                    //validacion de descripcion
                    if (!data.description) {
                        errors.description = "Describe el producto"
                    }
                    //validacion de iamgen
                    if (!data.img) {
                        errors.img = "Ponle una imagen al producto"
                    }

                    return errors
                }}
                onSubmit={(data, { resetForm }) => {
                    //reemplazar este push por el metodo post
                    productos.push(data)
                    console.log(productos)
                    //este metodo sirve para dejar el form en blanco cuando se hace submit
                    resetForm()
                    //seteo este estado para mostrar un mensaje cuando se crea un producto
                    setCreated(true)
                    //seteo de nuevo el estado para eliminar el mensaje
                    setTimeout(() => {
                        setCreated(false)
                    }, 3000)
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Ingresa el nombre del producto"
                            />
                            {touched.name && errors.nombre && (
                                <p>{errors.nombre}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="precio">Precio</label>
                            <Field
                                type="number"
                                name="price"
                                placeholder="Ingresa el nombre del producto"
                            />
                            {touched.price && errors.precio && (
                                <p>{errors.precio}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="categoria">Categoria</label>
                            <select name="categorias" onChange={handleChange}>
                                <option disabled selected>
                                    Seleccionar categoria
                                </option>
                                {categoriasArray.map((c) => {
                                    return (
                                        <option value={c.name}>{c.name}</option>
                                    )
                                })}
                            </select>
                            {touched.categorias && errors.categorias && (
                                <p>{errors.categorias}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="stock">Stock</label>
                            <Field
                                type="number"
                                name="stock"
                                placeholder="Cantidad de productos disponibles"
                            />
                            {touched.stock && errors.stock && (
                                <p>{errors.stock}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="description">Descripcion</label>
                            <textarea
                                style={{ resize: "none" }}
                                name="description"
                                rows="5"
                                cols="33"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                Descripcion del producto
                            </textarea>
                            {touched.description && errors.description && (
                                <p>{errors.description}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="imagen">Imagen</label>
                            <Field
                                type="text"
                                name="img"
                                placeholder="Url de la imagen"
                            />
                            {touched.img && errors.img && <p>{errors.img}</p>}
                        </div>
                        <button type="submit">Crear producto</button>
                        {created && <p>Producto creado con exito!</p>}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default CrearProducto
