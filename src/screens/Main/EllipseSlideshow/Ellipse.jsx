import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import ellipse from '../../../images/Landing-Page/Ellipse.png'
import './styles.css'

export default function EllipseSlideshow(props) {
    return (
        <div>
            <img className={"slideEllipse"}
                src={ellipse}
                alt={ellipse} />
        </div>
    )
}

