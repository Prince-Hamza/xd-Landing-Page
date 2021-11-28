import $ from 'jquery'
import './Slideshow.css'

export default function Slideshow() {

    var current = 0
    const movefadeOut = (num) => {

        if (num == current) {
            alert("same")
            return
        }   // same number

        $(`#${animativeObjectsArray[current]}`).animate({
            left: '-=25%',
            opacity: '-=1'
        }, 1000);

        // num = (num == 0) ? 2 : num

        //if (num == 2) num = -1
        // alert(`in ${num}`)

        // var next = (num == 2) ? 0 : num

        $(`#${animativeObjectsArray[current + 1]}`).animate({ left: "99%", opacity: "1" })
        $(`#${animativeObjectsArray[current + 1]}`).animate({
            left: '-=37.5%',
        }, 1000);

        current = num // pre existing


    }

    return (
        <div>
            <div className={"sliderRoundsContainer"}>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(0) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(1) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(2) }} >  </div>
            </div>
        </div>
    )
}


const animativeObjectsArray = ["illusWrap1", "hid1", "hid2"]