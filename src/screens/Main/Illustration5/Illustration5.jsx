import Illustration from '../../../images/Landing-Page/illustration5/illustration.png'
import yourBrandEllipse from '../../../images/Landing-Page/illustration5/yourBrandEllipse.png'
import Ellipse from '../Ellipse/Ellipse'
import brandLogo from '../../../images/Landing-Page/illustration5/yourBrandLogo.png'
import SideText from './SideText'
import '../styles.css'

export default function Illustration5() {
    return (
        <div>

            <SideText />

            <Ellipse />
            <div className={"Section"} id="fifthSection" >
                {/* <Ellipse top={"480%"} /> */}
                <img style={styles.illustrate} src={Illustration} alt={Illustration} />

                <img style={styles.brandEllipse} src={yourBrandEllipse} alt={yourBrandEllipse} />
                <p style={styles.brandText} > Your Brand </p>
                <img style={styles.brandLogo} src={brandLogo} alt={brandLogo} />

            </div>



        </div>
    )
}



const styles = ({
    illustrate: {
        position: 'absolute',
        left: '25%',
        top: '0%',
        width: '70%',
        height: '75%'
    },
    brandEllipse: {
        position: 'absolute',
        left: '58%',
        top: '32%',
        width: '12%',
        height: '24%'
    },
    brandText: {
        position: 'absolute',
        left: '61%',
        top: '45%',
        font: 'italic 16px times new roman',
        color: 'white'
    },
    brandLogo: {
        position: 'absolute',
        left: '60%',
        top: '37%',
        width: '8%',
        height: '8%',
        color: 'white'
    }
})