import $ from 'jquery'
import './Slideshow.css'

export default function Slideshow() {

    var current = 0
    const movefadeOut = (num) => {

        if (num == current) {
            return
        }   // same number


        $(`#${animativeObjectsArray[current]}`).animate({
            left: '-=200px',
            opacity: '-=1',
            //transform: 'rotateY(-45deg)'
        }, 100)

        $(`#${animativeObjectsArray[current]}`).addClass('rotate');



        $(`#${animativeObjectsArray[current + 1]}`).css({ display: 'block', opacity: 0 } , 0)
        $(`#${animativeObjectsArray[current + 1]}`).addClass('rotateIn');
        $(`#${animativeObjectsArray[current + 1]}`).animate({ opacity: 1 }, 0)
        $(`#${animativeObjectsArray[current + 1]}`).addClass('rotateInAgain');


        current = num // pre existing

        // reset 


            $(`#${animativeObjectsArray[current + 1]}`).removeClass('rotateInAgain');
            $(`#${animativeObjectsArray[current]}`).removeClass('rotate');

            animativeObjectsArray.map((item) => {
                $('#' + item).css({ left: '57%' })
            })




    }

    return (
        <div>
            <div className={"sliderRoundsContainer"}>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(0) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(1) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { movefadeOut(2) }} >  </div>
            </div>
            <div className={"hidCircle"} ></div>
        </div>
    )
}


const animativeObjectsArray = ["illusWrap1", "sm1", "sm2"]