import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarouselImgs } from "../../redux/actions/actions"
import "./Carousel.css"

const Carousel = () => {
    /* Este componente crea un carrusel con las imagenes que haya en el estado carouselImages */
    const dispatch = useDispatch()

    const carouselImages = useSelector((state) => state.carouselImages)
    console.log(carouselImages)
    /* useEffect(() => {
        dispatch(getCarouselImgs())
    }, [])
 */
    return (
        <div>
            {carouselImages &&
                carouselImages.map((i) => <img src={i.img} alt={i.name} />)}
        </div>
    )
}
export default Carousel
