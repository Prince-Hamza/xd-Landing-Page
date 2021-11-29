import Illustration from '../../../images/Landing-Page/Illustration2/secondIllustration.png'
import CardOver from '../../../images/Landing-Page/Illustration2/cardover.png'
import CardBehind from '../../../images/Landing-Page/Illustration2/cardbehind.png'
import Elipse from '../Ellipse/Ellipse'
import '../styles.css'
import './styles.css'
import $ from 'jquery'
import { useEffect } from 'react'

export default function Illustration2() {

    var animateOnce = true

    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= percentScreen(180) && animateOnce == true) {
                    animateOnce = false
                    animateTextContainer(2)
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
        <div className={"Section"} id={"secondSection"} >

            <div className={"textContainer"} id={"textContainer2"}>


                <div className={"title"}>
                    <p  >
                        Book Services
                    </p>

                </div>


                <div className={"para"}>
                    <p>
                        Locate and schedule your own opportunities with their services in your area
                    </p>
                </div>

                <div>
                    <button className={'transparentButton'}>
                        Book Now
                    </button>
                </div>



            </div>

            <div className={"illuswrap"} id={"illusWrap2"} >
                <Elipse top={"5%"} left={"5%"} />
                <img className={"illustrate"} id={"illustrate2"} src={Illustration} alt={Illustration} />
                <img id="cardBehind" src={CardBehind} alt={CardBehind} />
                <img id="cardOver" src={CardOver} alt={CardOver} />
            </div>


        </div>
    )
}

const styles = ({

    secondSection: {
        position: 'absolute',
        top: '250%',
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
        left: '22%',
        top: '10%',
        width: '55%',
        height: '80%',
    },
    cardBehind: {
        position: 'absolute',
        left: '80%',
        top: '36%',
        width: '22%',
        height: '28%'
    },
    cardOver: {
        position: 'absolute',
        left: '26%',
        top: '28%',
        width: '24%',
        height: '23%'
    },

    title: {
        color: 'white',
        font: 'bold 22px times new roman',
        marginBottom: '0%'
    },
    para: {
        color: 'white',
        marginBottom: '0%',
        marginLeft: '39%',
        textAlign: 'left',
        width: '40%'
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