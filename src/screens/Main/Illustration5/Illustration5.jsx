import Illustration from '../../../images/Landing-Page/illustration5/illustration.png'
import yourBrandEllipse from '../../../images/Landing-Page/illustration5/yourBrandEllipse.png'
import Ellipse from '../Ellipse/Ellipse'
import '../styles.css'

export default function Illustration4() {
    return (
        <div className={"Section"} id="fifthSection" >
            {/* <Ellipse top={"480%"} /> */}
            <img style={styles.illustrate} src={Illustration} alt={Illustration} />

            <img id={"yourBrand"} style={styles.brandEllipse} src={yourBrandEllipse} alt={yourBrandEllipse} />
            <p style={styles.brandText} > Your Brand </p>



        </div>
    )
}



const styles = ({
    illustrate: {
        position: 'absolute',
        left: '15%',
        top: '0%',
        width: '70%',
        height: '75%'
    },
    brandEllipse: {
        position: 'absolute',
        left: '49%',
        top: '32%',
        width: '12%',
        height: '24%'
    },
    brandText: {
        position: 'absolute',
        left: '52%',
        top: '43%',
        font: 'italic 16px times new roman',
        color: 'white'
    }
})