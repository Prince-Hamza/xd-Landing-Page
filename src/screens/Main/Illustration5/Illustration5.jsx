import Illustration from '../../../images/Landing-Page/illustration5/illustration.png'
import yourBrandEllipse from '../../../images/Landing-Page/illustration5/yourBrandEllipse.png'
import Ellipse from '../Ellipse/Ellipse'
import '../styles.css'

export default function Illustration4() {
    return (
        <div className={"Section"} id="fifthSection" >
            {/* <Ellipse top={"480%"} /> */}
            <img id={"lastIllustrate"} src={Illustration} alt={Illustration} />

            <img id={"yourBrand"} style={styles.brandEllipse} src={yourBrandEllipse} alt={yourBrandEllipse} />
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
        top: '0%',
        width: '8%',
        height: '16%'
    },
    brandText: {
        position: 'absolute',
        left: '50%',
        top: '620%',
        font: 'italic 12px times new roman',
        color: 'white'
    }
})