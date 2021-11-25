import Illustration from '../../../images/Landing-Page/illustration3/illustration.png'
import iphone from '../../../images/Landing-Page/illustration3/iPhone12.png'
import gamepad from '../../../images/Landing-Page/illustration3/gamepad.png'
import Ellipse from '../Ellipse/Ellipse'

export default function Illustration3() {
    return (
        <div>
            <Ellipse top={"355%"} left={"1%"} />

            <img style={styles.illustrate} src={Illustration} alt={Illustration} />
            <img style={styles.iPhone} src={iphone} alt={iphone} />
            <img style={styles.gamepad} src={gamepad} alt={gamepad} />


        </div>
    )
}

const styles = ({
    illustrate: {
        position: 'absolute',
        left: '7.8%',
        top: '357%',
        width: '30%',
        height: '76%'
    },
    iPhone: {
        position: 'absolute',
        top:'375%',
        left:'8%',
        width:'10%',
        height:'20%'
    },
    gamepad:{
        position: 'absolute',
        top:'382%',
        left:'32.5%',
        width:'10%',
        height:'20%'
    }
})