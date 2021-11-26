import Illustration from '../../../images/Landing-Page/illustration3/illustration.png'
import iphone from '../../../images/Landing-Page/illustration3/iPhone12.png'
import gamepad from '../../../images/Landing-Page/illustration3/gamepad.png'
import Ellipse from '../Ellipse/Ellipse'
import '../styles.css'

export default function Illustration3() {
    return (
        <div style={styles.thirdSection}>


            <div className={"illuswrap"}  >


                <Ellipse top={"5%"} left={"5%"} />

                <img style={styles.illustrate} src={Illustration} alt={Illustration} />
                <img style={styles.iPhone} src={iphone} alt={iphone} />
                <img style={styles.gamepad} src={gamepad} alt={gamepad} />

            </div>


            <div className={"textContainer"}>

                <p style={styles.title} >
                    Enter Raffles
                </p>

                <div>
                    <p style={styles.para}>
                        Enter Raffles to win lucky draw
                    </p>
                </div>

                <div>
                    <button className={"transparentButton"}>  Enter Draw   </button>
                </div>



            </div>

        </div>
    )
}

const styles = ({

    thirdSection: {
        position: 'absolute',
        top: '360%',
        left: '0%',
        width: '99%',
        height: '90%',
        // border: 'dashed white',
    },
    illustrationContainer: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '50%',
        height: '100%',
        border: 'dashed blue'
    },
    textContainer: {
        position: 'absolute',
        top: '0%',
        left: '50%',
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
        left: '22%',
        top: '10%',
        width: '55%',
        height: '80%'
    },
    iPhone: {
        position: 'absolute',
        top: '37%',
        left: '25%',
        width: '13%',
        height: '20%'
    },
    gamepad: {
        position: 'absolute',
        top: '38%',
        left: '60%',
        width: '16%',
        height: '20%'
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