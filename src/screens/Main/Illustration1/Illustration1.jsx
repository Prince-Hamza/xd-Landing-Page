import Ellipse from '../Ellipse/Ellipse'
import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import Illustration2 from '../../../images/Landing-Page/Illustration2/secondIllustration.png'
import Illustration3 from '../../../images/Landing-Page/illustration3/illustration.png'
import Headphone from '../../../images/Landing-Page/illustration1/headphone.png'
import mobileLeft from '../../../images/Landing-Page/illustration1/mobileLeft.png'
import mobileRight from '../../../images/Landing-Page/illustration1/mobileRight.png'
import { useState, useEffect } from "react";
import $ from 'jquery'
import '../styles.css'
import './styles.css'
import '../illustrations.css'
import Slideshow from './Slideshow/Slideshow'
import EllipseSlideshow from '../EllipseSlideshow/Ellipse'

export default function Illustration1() {

    const [animages, setAnimages] = useState(imageInfo)

    var animateOnce = true

    useEffect(() => {
        mobileAnime()

        $(document).ready(() => {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= percentScreen(65) && animateOnce == true) {
                    animateOnce = false
                    animateMobileItems()
                    animateTextContainer(1)
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

    const animateMobileItems = () => {
        for (let i = 1; i <= 6; i++) {
            animateItem('+=15px', i, i)
        }

        setTimeout(() => {
            for (let i = 6; i >= 1; i--) {
                console.log(i)
                animateItem('-=15px', i, i)
            }
        }, 3500)

    }

    const animateItem = (scale, itemNum, time) => {
        setTimeout(() => {
            animateSize(scale, itemNum)
        }, time * 500)
    }

    const animateSize = (scale, itemNum) => {
        $(`#flexAnime${itemNum}`).animate({
            height: scale,
            width: scale
        });
    }

    const mobileAnime = () => {
        if (detectMob()) {
            setAnimages(mobileImageInfo)
        }
    }

    const detectMob = () => {


        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }


    return (
        <div className={"Section"} id={'firstSection'} >
            <div className="textContainer" id={"textContainer1"}  >

                <p className={"title"} >
                    Shop Brand
                </p>

                <div className={"para"} >
                    <p >
                        Explore the hottest brands from growing entrepreneurs within our platform
                    </p>
                </div>


                <button className={"transparentButton"}>
                    Explore
                </button>

            </div>

            <div className={"illuswrap"} id={"illusWrap1"}  >
                <Ellipse id={"Ellipse1"} />
                <img className={"illustrate"} id={"illustrate1"} src={Illustration} alt={Illustration} />
                {/* <img style={styles.headphone} src={Headphone} alt={Headphone} /> */}
                <img id={"mobileLeft"} src={mobileLeft} alt={mobileLeft} />
                <img id={"mobileRight"} src={mobileRight} alt={mobileRight} />

                {/* <img style={styles.mobileLeft} src=require('../../../images/Landing-Page/illustration1/i1FlexItem2.png').default} /> */}


                <div style={styles.imagesFlexbox}>
                    {animages.map((item) => {
                        return (
                            <img id={`flexAnime${item.id}`} style={{
                                position: item.position,
                                top: item.top,
                                left: item.left,
                                width: item.width,
                                height: item.height
                            }} src={require(`../../../images/Landing-Page/illustration1/i1FlexItem${item.urlNum}.png`).default} />
                        )
                    })}

                </div>


            </div>

            <Slideshow />

            <div className={"slideShowMobile"} id ={"sm1"} style={{ opacity: '1' }} >
                <img className={"slideshowMobileLeft"} src={mobileLeft} alt={mobileLeft} />
                <img className={"slideshowMobileRight"} src={mobileRight} alt={mobileRight} />
                <EllipseSlideshow />
                <img className={"hidIllustrate"} id={"hid1"} src={Illustration2} alt={Illustration2} />
            </div>

            <div className={"slideShowMobile"} id={"sm2"} style={{ opacity: '1' }}>
                <img className={"slideshowMobileLeft"} src={mobileLeft} alt={mobileLeft} />
                <img className={"slideshowMobileRight"} src={mobileRight} alt={mobileRight} />
                <EllipseSlideshow />
                <img className={"hidIllustrate"} id={"hid2"} src={Illustration3} alt={Illustration3} />
            </div>




        </div>
    )
}



const styles = ({
    firstSection: {
        position: 'absolute',
        top: '113%',
        left: '0%',
        width: '99%',
        height: '90%',
        border: 'dashed white',
    },

    headphone: {
        position: 'absolute',
        left: '57%',
        top: '123%',
        width: '5%',
        height: '12%'
    },
    mobileLeft: {
        position: 'absolute',
        left: '-2.5%',
        top: '35%',
        width: '18%',
        height: '25%'
    },
    mobileRight: {
        position: 'absolute',
        left: '82%',
        top: '35%',
        width: '18%',
        height: '25%'
    },
    imagesFlexbox: {
        position: 'absolute',
        top: '27%',
        left: '34%',
        width: '30%',
        height: '50%',
        // border: 'dashed black',
    },
    flexItem: {
        width: '25%',
        height: '35%'
    },
    title: {
        color: 'white',
        font: 'bold 22px times new roman'
    },
    para: {
        color: 'white',
        marginBottom: '0%',
        marginLeft: '41%',
        textAlign: 'left',
        width: '40%',
        height: '20%'
    },
    transparentButton: {
        border: 'none',
        width: '25%',
        height: '100%'
    }

})


const imageInfo = [
    { id: 1, urlNum: 2, position: 'absolute', top: '4%', left: '0%', width: '35%', height: '22%' },
    { id: 2, urlNum: 2, position: 'absolute', top: '5%', left: '60%', width: '35%', height: '25' },
    { id: 3, urlNum: 3, position: 'absolute', top: '42%', left: '5%', width: '35%', height: '25%' },
    { id: 4, urlNum: 4, position: 'absolute', top: '42%', left: '41%', width: '68%', height: '23%' },
    { id: 5, urlNum: 5, position: 'absolute', top: '80%', left: '2%', width: '45%', height: '20%' },
    { id: 6, urlNum: 6, position: 'absolute', top: '82%', left: '55%', width: '43%', height: '23%' },

]

const mobileImageInfo = [
    { id: 1, urlNum: 2, position: 'absolute', top: '-10%', left: '3%', width: '40%', height: '15%' },
    { id: 2, urlNum: 2, position: 'absolute', top: '-10%', left: '60%', width: '40%', height: '16' },
    { id: 3, urlNum: 3, position: 'absolute', top: '17%', left: '5%', width: '40%', height: '20%' },
    { id: 4, urlNum: 4, position: 'absolute', top: '16%', left: '50%', width: '70%', height: '17%' },
]


const illusZones = [1, 2, 3]

const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
];
