import Illustration from '../../../images/Landing-Page/illustration4/illustration.png'

import Ellipse from '../Ellipse/Ellipse'

export default function Illustration4() {
    return (
        <div>
            <Ellipse top={"480%"} />
            <img style={styles.illustrate} src={Illustration} alt={Illustration} />



        </div>
    )
}



const styles = ({
    illustrate: {
        position: 'absolute',
        left: '48.5%',
        top: '492%',
        width: '32%',
        height: '55%'
    },
})