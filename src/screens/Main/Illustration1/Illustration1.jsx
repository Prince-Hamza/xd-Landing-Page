import Ellipse from '../Ellipse/Ellipse'
import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import Headphone from '../../../images/Landing-Page/illustration1/headphone.png'
import mobileLeft from '../../../images/Landing-Page/illustration1/mobileLeft.png'
import mobileRight from '../../../images/Landing-Page/illustration1/mobileRight.png'
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import $ from 'jquery'
import '../styles.css'

export default function Illustration1() {

    var animateOnce = true

    useEffect(() => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100 && animateOnce == true) {
                // alert(animateOnce)
                animateOnce = false
                animation()
            }
        });
    })


    const animation = () => {
        for (let i = 1; i <= 4; i++) {
            animateItem('+=15px', i, i)
        }

        setTimeout(() => {
            for (let i = 4; i >= 1; i--) {
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

    return (
        <div style={styles.firstSection} >
            <div className="textContainer"  >

                <p style={styles.title} >
                    Shop Brand
                </p>

                <div>
                    <p style={styles.para}>
                        Explore the hottest brands from growing entrepreneurs within our platform
                    </p>
                </div>


                <div>
                    <button className={"transparentButton"}>
                        Explore
                    </button>
                </div>

            </div>
            <div className={"illuswrap"}  >
                <Ellipse top={"5%"} left={"5%"} />
                <img style={styles.illustrate} src={Illustration} alt={Illustration} />
                {/* <img style={styles.headphone} src={Headphone} alt={Headphone} /> */}
                <img style={styles.mobileLeft} src={mobileLeft} alt={mobileLeft} />
                <img style={styles.mobileRight} src={mobileRight} alt={mobileRight} />

                {/* <img style={styles.mobileLeft} src = {require('../../../images/Landing-Page/illustration1/i1FlexItem2.png').default} /> */}


                <div style={styles.imagesFlexbox}>
                    {imageInfo.map((item) => {
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
        // border: 'dashed white',
    },
    // illustrationContainer: {
    //     position: 'absolute',
    //     top: '0%',
    //     left: '50%',
    //     width: '50%',
    //     height: '100%',
    //     border: 'dashed blue'
    // },
    // textContainer: {
    //     position: 'absolute',
    //     top: '0%',
    //     left: '0%',
    //     width: '50%',
    //     height: '100%',
    //     border: 'dashed cyan',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    illustrate: {
        position: 'absolute',
        left: '22%',
        top: '8%',
        width: '55%',
        height: '80%',
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
        color: 'white'
    },
    transparentButton: {
        border:'none',
        width: '25%',
        height:'100%'
        

       
    }

})


const imageInfo = [
    { id: 1, urlNum: 2, position: 'absolute', top: '4%', left: '0%', width: '35%', height: '22%' },
    { id: 2, urlNum: 2, position: 'absolute', top: '5%', left: '60%', width: '35%', height: '25' },
    { id: 3, urlNum: 3, position: 'absolute', top: '42%', left: '5%', width: '35%', height: '25%' },
    { id: 4, urlNum: 4, position: 'absolute', top: '42%', left: '41%', width: '68%', height: '23%' },

]