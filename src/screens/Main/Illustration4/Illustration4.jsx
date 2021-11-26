import Illustration from '../../../images/Landing-Page/illustration4/illustration.png'

import Ellipse from '../Ellipse/Ellipse'
import '../styles.css'

export default function Illustration4() {
    return (
        <div style={styles.thirdSection} >
            <div className={"textContainer"}>

                <p style={styles.title} >
                    Contact Us
                </p>

                <p style={styles.para}>
                    Locate and schedule your own opportunities with their services in your area
                </p>


                <div>
                    <button className={"transparentButton"}>
                        Contact Us
                    </button>
                </div>



            </div>


            <div className={"illuswrap"}  >

                <Ellipse top={"5%"} left={"5%"} />
                <img style={styles.illustrate} src={Illustration} alt={Illustration} />

            </div>



        </div>
    )
}



const styles = ({

    thirdSection: {
        position: 'absolute',
        top: '480%',
        left: '0%',
        width: '99%',
        height: '90%',
        // border: 'dashed white',
    },
    illustrationContainer: {
        position: 'absolute',
        top: '0%',
        left: '50%',
        width: '50%',
        height: '100%',
        border: 'dashed blue'
    },
    textContainer: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '50%',
        height: '100%',
        border: 'dashed cyan',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    illustrate: {
        position: 'absolute',
        left: '16%',
        top: '18%',
        width: '68%',
        height: '60%'
    },
    title: {
        color: 'white',
        font: 'bold 22px times new roman'
    },
    para: {
        color: 'white'
    },
    transparentButton: {
        width: '22%',
        height: '5%',
        border: 'solid 0.5px',
        backgroundColor: 'black',
        borderRadius: '50px',
        color: 'white'
    }

})