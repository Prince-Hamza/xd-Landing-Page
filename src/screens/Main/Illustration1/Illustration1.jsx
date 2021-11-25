import Ellipse from '../Ellipse/Ellipse'
import Illustration from '../../../images/Landing-Page/illustration1/full length mock.png'
import Headphone from '../../../images/Landing-Page/illustration1/headphone.png'
import mobileLeft from '../../../images/Landing-Page/illustration1/mobileLeft.png'
import mobileRight from '../../../images/Landing-Page/illustration1/mobileRight.png'
import flexItem1 from '../../../images/Landing-Page/illustration1/i1FlexItem2.png'

export default function Illustration1() {
    return (
        <div>
            <Ellipse top={"103%"} />
            <img style={styles.illustrate} src={Illustration} alt={Illustration} />
            <img style={styles.headphone} src={Headphone} alt={Headphone} />
            <img style={styles.mobileLeft} src={mobileLeft} alt={mobileLeft} />
            <img style={styles.mobileRight} src={mobileRight} alt={mobileRight} />

            {/* <img style={styles.mobileLeft} src = {require('../../../images/Landing-Page/illustration1/i1FlexItem2.png').default} /> */}


            {/* <div style={styles.imagesFlexbox}>
                {imageInfo.map((item) => {
                    if (item.view) {
                        return (
                            <img style={styles.flexItem} src={require(`../../../images/Landing-Page/illustration1/i1FlexItem2.png`).default} />
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }

                })}

            </div> */}



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
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'dashed white',
    },
    flexItem: {
        width: '25%',
        height: '35%'
    }
})


const imageInfo = [
    { view: false, urlNum: -1 },
    { view: true, urlNum: 2 },
    { view: true, urlNum: 3 },
    { view: true, urlNum: 4 },
    { view: true, urlNum: 5 },
    { view: true, urlNum: 6 }
]