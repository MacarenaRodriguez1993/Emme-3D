import { useDispatch, useSelector } from "react-redux"
import { postCategory, getCategories } from "../../redux/actions/actions"
import { useState, useEffect } from "react"
import validations from "../../validations/validations-form.js"
import "./CreateCategory.css"

const CreateCategory = () => {
    const dispatch = useDispatch()

    const [category, setCategory] = useState({
        name: "",
    })
    /* Este estado sirve para mostrar un mensaje cuando se crea un producto */
    const [categoryCreated, setCategoryCreated] = useState(false)
    /* Este estado sirve para guardar los erroresd de las validaciones */
    const [categoryError, setCategoryError] = useState({})

    const handleSubmitCategory = (e) => {
        e.preventDefault
        dispatch(postCategory(category))
    }
    //console.log(types);
    useEffect(() => {
        //setCategoryError(validations(category))
        dispatch(getCategories())
    }, [category, dispatch])

    const handleChangeCategory = (e) => {
        setCategory({
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <form
                onSubmit={(e) => handleSubmitCategory(e)}
                className="form-create-category"
            >
                <label className="crear-producto-title">Crear categoria</label>
                <input
                    type="text"
                    name="name"
                    id=""
                    className="inputs"
                    value={category.name}
                    onChange={(e) => handleChangeCategory(e)}
                    placeholder="Nombre de la categoria"
                />
                <button type="submit" className="btn-crear-producto">
                    Crear categoria
                </button>
            </form>
        </div>
    )
}
export default CreateCategory
