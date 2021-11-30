import $ from 'jquery'
import Velocity from 'velocity-animate'
import './Slideshow.css'

export default function Slideshow() {


    var preExisting = 0
    const slideShowMotion = (num) => {
        let $clickedItem = $(`#${animativeObjectsArray[num]}`)
        let $previousItem = $(`#${animativeObjectsArray[preExisting]}`)


        // preExisting out
        $previousItem.animate({
            left: '-=10%',
            opacity: '-=1',
        }, 1000)
        $previousItem.addClass('leaveMotion')
        setTimeout(() => { $previousItem.removeClass('leaveMotion') }, 1000)
        // $clickedItem.velocity({transform: 'rotateY(-45deg)'})




        // this in  , second later
        setTimeout(() => {
            $clickedItem.css({ display: 'block', opacity: 0, left: '60%' })
            $clickedItem.animate({ opacity: '+=1', left: '-=5%' }, 1000)
            $clickedItem.addClass('revealMotion')
            setTimeout(() => {$clickedItem.removeClass('revealMotion')},3100)
        }, 500)

        // set current
        preExisting = num
    }

    return (
        <div>
            <div className={"sliderRoundsContainer"}>
                <div className={"sliderRounds"} onClick={() => { slideShowMotion(0) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { slideShowMotion(1) }} >  </div>
                <div className={"sliderRounds"} onClick={() => { slideShowMotion(2) }} >  </div>
            </div>
            <div className={"hidCircle"} ></div>
        </div>
    )
}


const animativeObjectsArray = ["illusWrap1", "sm1", "sm2"]