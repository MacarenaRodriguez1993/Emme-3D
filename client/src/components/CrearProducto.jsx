import { Formik } from "formik"

const CrearProducto = () => {
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
                    nombre: "",
                    precio: 0,
                    categorias: [],
                    stock: 0,
                    descripcion: "",
                }}
                validate={(data) => {
                    if (!data.nombre) {
                        console.log("Ingresa un nombre")
                    }
                }}
                onSubmit={(data) => {
                    console.log(data)
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Ingresa el nombre del producto"
                            />
                        </div>
                        <div>
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="text"
                                name="precio"
                                value={values.precio}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Ingresa el nombre del producto"
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria">Categoria</label>
                            <select name="categorias" onChange={handleChange}>
                                <option disabled value="">
                                    Seleccionar categoria
                                </option>
                                {categoriasArray.map((c) => {
                                    return (
                                        <option value={c.name}>{c.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="stock">Stock</label>
                            <input
                                type="text"
                                name="stock"
                                value={values.stock}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Cantidad de productos disponibles"
                            />
                        </div>
                        <div>
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea
                                name="descripcion"
                                rows="5"
                                cols="33"
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                Descripcion del producto
                            </textarea>
                        </div>
                        <button type="submit">Crear producto</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default CrearProducto
