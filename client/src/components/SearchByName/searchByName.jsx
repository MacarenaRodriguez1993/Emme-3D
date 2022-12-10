import React, { useState } from "react"
import "./searchByName.css"
import { AiOutlineSearch } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { searchByName } from "../../redux/actions/actions"
const SearchByName = () => {
    const dispatch = useDispatch()
    let [state, setState] = useState({
        search: "",
    })

    const handleChange = (event) => {
        setState({
            search: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let name = state.search
        dispatch(searchByName(name))
        setState({
            search: "",
        })
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="product"
                    placeholder="Buscar producto"
                    value={state.search}
                    onChange={(event) => handleChange(event)}
                />
                <button type="submit" className="buttonSearch">
                    <AiOutlineSearch size="1.3em" />
                </button>
            </form>
        </>
    )
}

export default SearchByName
