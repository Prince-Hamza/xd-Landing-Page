import $ from 'jquery'
import './styles.css'
import { useEffect } from 'react'
export default function SideText() {

    var animateOnce = true

    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= percentScreen(455) && animateOnce == true) {
                    animateOnce = false
                    animateTextContainer(5)
                }
            })
        })
    })


    const percentScreen = (input) => {
        const onePercent = screen.height / 100
        return onePercent * input
    }

    const animateTextContainer = (n) => {
        // alert($("#fifthSection"))   // 
        $(`.SideText`).animate({
            top: "-=10%",
            opacity: "+=1"
        })
    }


    return (
        <div>
            <div className={"SideText"}>

                <h2 style={styles.title} > Brand Growth </h2>
                <p style={styles.subtitle} >  blixur helps to spared your brand to new customers who have never been to your store ever </p>


                <div style={styles.paraListContainer}>

                    {paras.map((para) => {
                        return (
                            <div style={styles.paraItem} >
                                <p style={styles.paraHead} >  {para.title}  </p>
                                <div style={styles.paraContainer} >
                                    <p style={styles.paraDesc} >  {para.descripton} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}


const styles = ({
    title: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        textAlign: 'left',
        width: '70%'
    },
    paraListContainer: {
        position: 'absolute',
        top: '30%',
        left: '0%',
        color: 'white'
    },
    paraItem: {
        marginBottom: '15%'
    },

    paraHead: {
        font: 'bold 18px times new roman'
    },
    paraContainer: {
        width: '60%'
    },
    paraDesc: {
        font: '14px'
    }

})


const paras = [{ title: "Growing your mailing list", descripton: "colect customer email and allow them to opt into your marketing emails when they book an appointment" },
{ title: "Stand out in any inbox", descripton: "easily create stunning emails with powerful editing tools and customizable layouts" },
{ title: "stay top-of-mind", descripton: "Build relationships with your customers by sending them a discount or letting them know about an upcoming class" }]