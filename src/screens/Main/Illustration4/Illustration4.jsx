import Illustration from '../../../images/Landing-Page/illustration4/illustration.png'
import Ellipse from '../Ellipse/Ellipse'
import '../styles.css'
import $ from 'jquery'
import { useEffect } from 'react'

export default function Illustration4() {

    var animateOnce = true

    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= percentScreen(390) && animateOnce == true) {
                    animateOnce = false
                    animateTextContainer(4)
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
        <div className={"Section"} id={"fourthSection"}>
            <div className={"textContainer"} id={"textContainer4"}>

                <p className={"title"} >
                    Contact Us
                </p>

                <div className={"para"} >
                    <p >
                        Locate and schedule your own opportunities with their services in your area
                    </p>

                </div>


                <div>
                    <button className={"transparentButton"}>
                        Contact Us
                    </button>
                </div>

            </div>


            <div className={"illuswrap"} id={"illusWrap4"}>

                <Ellipse top={"5%"} left={"5%"} />
                <img className={"illustrate"} id={"illustrate4"} src={Illustration} alt={Illustration} />

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
        color: 'white',
        marginBottom: '0%',
        marginLeft: '30%',
        textAlign: 'left',

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