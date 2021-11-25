import Ellipse from '../Ellipse/Ellipse'
import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import Headphone from '../../../images/Landing-Page/illustration1/headphone.png'
import mobileLeft from '../../../images/Landing-Page/illustration1/mobileLeft.png'
import mobileRight from '../../../images/Landing-Page/illustration1/mobileRight.png'
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import $ from 'jquery'

export default function Illustration1() {




    useEffect(() => {
        for (let i = 1; i <= 4; i++) {
            animateItem('+=15px', i, i)
        }

        setTimeout(() => {
            for (let i = 4; i >= 1; i--) {
                console.log(i)
                animateItem('-=15px', i, i)
            }
        }, 3500)



    })

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
        <div>
            <Ellipse top={"103%"} />
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
    )
}

const styles = ({
    illustrate: {
        position: 'absolute',
        left: '50%',
        top: '105%',
        width: '30%',
        height: '75%',
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
        left: '45%',
        top: '132%',
        width: '10%',
        height: '26%'
    },
    mobileRight: {
        position: 'absolute',
        left: '75%',
        top: '132%',
        width: '10%',
        height: '26%'
    },
    imagesFlexbox: {
        position: 'absolute',
        top: '122.5%',
        left: '56.5%',
        width: '17%',
        height: '50%',
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        // border: 'dashed white',
    },
    flexItem: {
        width: '25%',
        height: '35%'
    }
})


const imageInfo = [
    { id: 1, urlNum: 2, position: 'absolute', top: '5%', left: '5%', width: '35%', height: '22%' },
    { id: 2, urlNum: 2, position: 'absolute', top: '5%', left: '60%', width: '35%', height: '25' },
    { id: 3, urlNum: 3, position: 'absolute', top: '42%', left: '5%', width: '35%', height: '25%' },
    { id: 4, urlNum: 4, position: 'absolute', top: '40%', left: '41%', width: '70%', height: '25%' },

]