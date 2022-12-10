import { useDispatch } from "react-redux"
import { postCategory } from "../../redux/actions/actions"
import { useState } from "react"
import "./CreateCategory.css"

const CreateCategory = () => {
    const dispatch = useDispatch()

    const [category, setCategory] = useState({
        name: "",
    })

    const handleSubmitCategory = (e) => {
        e.preventDefault
        dispatch(postCategory(category))
    }

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
