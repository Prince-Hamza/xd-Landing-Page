import Illustration from '../../../images/Landing-Page/illustration3/illustration.png'
import iphone from '../../../images/Landing-Page/illustration3/iPhone12.png'
import gamepad from '../../../images/Landing-Page/illustration3/gamepad.png'
import Ellipse from '../Ellipse/Ellipse'
import { useEffect } from 'react'
import $ from 'jquery'
import '../styles.css'
import "./styles.css"

export default function Illustration3() {

    var animateOnce = true
    
    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= percentScreen(270) && animateOnce == true) {
                    animateOnce = false
                    animateTextContainer(3)
                }
            })
        })
    }) 


    const percentScreen = (input) => {
        const onePercent = screen.height / 100
        return onePercent * input
    }

    const animateTextContainer = (n) => {
        $(`#textContainer${n}`).animate({
            top: "-=10%",
            opacity: "+=1"
        })
    }

    return (
        <div className={"Section"} id={"thirdSection"}>


            <div className={"illuswrap3"} id={"illusWrap3"}>


                <Ellipse top={"5%"} left={"5%"} />

                <img className={"illustrate"} id={"illustrate2"} src={Illustration} alt={Illustration} />
                <img id={"iphone"} src={iphone} alt={iphone} />
                <img id={"gamepad"} src={gamepad} alt={gamepad} />

            </div>


            <div className={"textContainer3"} id={"textContainer3"}>

                <p className={"title"} >
                    Enter Raffles
                </p>

                <div className={"para"}>
                    <p >
                        Win differrent prizes by entering in our lucky draw
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
        color: 'white',
        marginBottom: '0%',
        marginLeft: '30%',
        textAlign: 'left',
        width: '52%'

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