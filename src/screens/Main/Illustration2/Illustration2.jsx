import Illustration from '../../../images/Landing-Page/Illustration2/secondIllustration.png'
import CardOver from '../../../images/Landing-Page/Illustration2/cardover.png'
import CardBehind from '../../../images/Landing-Page/Illustration2/cardbehind.png'
import Elipse from '../Ellipse/Ellipse'

export default function Illustration2() {
    return (
        <div>
            <Elipse top={"223%"} />
            <img style={styles.illustrate} src={Illustration} alt={Illustration} />
            <img style={styles.cardBehind} src={CardBehind} alt={CardBehind} />
            <img style={styles.cardOver} src={CardOver} alt={CardOver} />

        </div>
    )
}

const styles = ({
    illustrate: {
        position: 'absolute',
        left: '50%',
        top: '225%',
        width: '30%',
        height: '75%'
    },
    cardBehind: {
        position: 'absolute',
        left: '81%',
        top: '250%',
        width: '10%',
        height: '26%'
    },
    cardOver: {
        position: 'absolute',
        left: '52%',
        top: '240%',
        width: '13%',
        height: '21%'
    }
})