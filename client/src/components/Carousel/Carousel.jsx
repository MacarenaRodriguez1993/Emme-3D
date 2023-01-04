import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarouselImgs } from "../../redux/actions/actions"
import "./Carousel.css"

const Carousel = () => {
    /* Este componente crea un carrusel con las imagenes que haya en el estado carouselImages */
    const dispatch = useDispatch()
    const carouselImages = useSelector((state) => state.carouselImages)
    let imgWidth = carouselImages.length * 100
    let imgSegmento = 100 / carouselImages.length
    const imgContainer = document.querySelector(".img-container")
    const imgDots = document.querySelectorAll("li")

    imgDots.forEach((dot, i) => {
        imgDots[i].addEventListener("click", () => {
            let position = i
            let op = position * -imgSegmento
            imgContainer.style.transform = `translateX(${op}%)`
            imgDots.forEach((dot, i) => {
                imgDots[i].classList.remove("img-active")
            })
            imgDots[i].classList.add("img-active")
        })
    })

    /* useEffect(() => {
        dispatch(getCarouselImgs())
    }, [])
 */
    return (
        <div className="slide-container">
            <div>
                <div
                    className="img-container"
                    style={{ width: `${imgWidth}%` }}
                >
                    {carouselImages &&
                        carouselImages.map((i) => (
                            <img
                                src={i.img}
                                alt={i.name}
                                className="carousel-imgs"
                                style={{ width: `${imgSegmento}%` }}
                            />
                        ))}
                </div>
                <ul className="img-ul">
                    {carouselImages.length &&
                        carouselImages?.map((e) => (
                            <li className="img-li img-active"></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
export default Carousel
