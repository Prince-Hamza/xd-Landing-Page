import Illustration from '../../../images/Landing-Page/illustration5/illustration.png'
import yourBrandEllipse from '../../../images/Landing-Page/illustration5/yourBrandEllipse.png'

import Ellipse from '../Ellipse/Ellipse'

export default function Illustration4() {
    return (
        <div  >
            {/* <Ellipse top={"480%"} /> */}
            <img style={styles.illustrate} src={Illustration} alt={Illustration} />
           
            <img style={styles.brandEllipse} src={yourBrandEllipse} alt={yourBrandEllipse} />
            {/* <p style={styles.brandText} > Your Brand </p> */}



        </div>
    )
}



const styles = ({
    illustrate: {
        position: 'absolute',
        left: '20%',
        top: '620%',
        width: '60%',
        height: '55%'
    },
    brandEllipse: {
        position: 'absolute',
        left: '50%',
        top: '620%',
        width: '5.5%',
        height: '10%'
    },
    brandText: {
        position: 'absolute',
        left: '50%',
        top: '620%',
        font:'italic 12px times new roman',
        color:'white'
    }
})