import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import ellipse from '../../../images/Landing-Page/Ellipse.png'
export default function Elipse(props) {
    return (
        <div>
            <img style={{
                ...styles.Ellipse,
                top: props.top,
                left: props.left ? props.left : styles.Ellipse.left
            }}
                src={ellipse}
                alt={ellipse} />
        </div>
    )
}

const styles = ({
    Ellipse: {
        position: 'absolute',
        top: '103%',
        left: '43%',
        width: '550px',
        height: '550px',
        color: 'white'
    }
})