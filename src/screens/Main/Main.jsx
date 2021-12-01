import { useEffect } from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../Header/Header.jsx'
import Illustration from './Illustration1/Illustration'

import mobileImage1 from '../../images/Landing-Page/illustration1/full length mock.png'
import mobileImage2 from '../../images/Landing-Page/Illustration2/secondIllustration.png'
import mobileImage3 from '../../images/Landing-Page/illustration3/illustration.png'
import mobileImage4 from '../../images/Landing-Page/illustration4/illustration.png'

import Illustration5 from './Illustration5/Illustration5'
import shoppingTrolley from '../../images/Landing-Page/shopping-trolley-background.png'
import border from '../../images/Landing-Page/borderify.png'
import darkTheme from '../../images/Landing-Page/darkTheme.png'
import $ from 'jquery'
import './styles.css'




export default function Main() {


	useEffect(() => {


		$('.pageHeading').animate({
			left: "+=18%",
			opacity: "+=1"
		})

		$('.subtitle').animate({
			left: "-=30%",
			opacity: "+=1"
		})


	})


	return (
		<div style={{ width: '100%' }}>
			<div style={styles.Theme} >


				<Header />

				<img style={styles.shoppingTrolley} src={shoppingTrolley} alt="" />

				<div className={"pageHeading"} >
					<div className={"pageHeadingItem"} >
						<p> The Future Of </p>
					</div>
					<div className={"pageHeadingItem"} >
						<p>	 Commerce Is Yours </p>
					</div>
				</div>

				<p className={"subtitle"} style={styles.subtitle} > A new and improved way to help your brand reach its full potential</p>

			</div>


			<img src={darkTheme} alt={darkTheme} className={"darkTheme"} />


			{illustrationInfo.map((item) => {
				return (
					<Illustration
						section={item.section}
						slideshow={item.slideshow}
						textRight={item.textRight}
						mobileImage={item.mobileImage}
						text={item.text}
					/>
				)
			})}


			<Illustration5 />


			<img className={"border"} id={"border1"} src={border} alt={border} />
			<img className={"border"} id={"border2"} src={border} alt={border} />
			<img className={"border"} id={"border3"} src={border} alt={border} />
			<img className={"border"} id={"border4"} src={border} alt={border} />

		</div>
	)
}

const styles = ({
	Theme: {
		position: "absolute",
		top: "0%",
		left: "0%",
		height: "90%",
		width: "100%",
		backgroundColor: "whitesmoke",
		background: 'rgba(245,245,245,1)'
	},
	// darkTheme: {
	// 	position: 'absolute',
	// 	top: '90%',
	// 	left: '0%',
	// 	width: '100%',
	// 	height: '600%',
	// },
	pageHeading: {
		position: 'absolute',
		left: '10%',
		top: '20%',
		font: 'bold 48px times new roman',
		// display: 'none',
	},
	shoppingTrolley: {
		width: '100%',
		height: '100%'
	},
	subtitle: {
		position: 'absolute',
		top: '60%',
		left: '35%',
		opacity: 0
	},

})

const illustrationInfo = [
	{
		section: "firstSection",
		slideshow: true,
		textRight: false,
		mobileImage: mobileImage1,
		text: {
			id: 1,
			title: "Shop Brand",
			description: "Explore the hottest brands from growing entrepreneurs within our platform",
			buttonText: "Explore"
		}
	},
	{
		section: "secondSection",
		slideshow: false,
		textRight: false,
		mobileImage: mobileImage2,
		text: {
			id: 2,
			title: "Book Services",
			description: "Locate & schedule your own appointments with the services in your area.",
			buttonText: "Book Now"
		}
	},
	{
		section: "thirdSection",
		slideshow: false,
		textRight: true,
		mobileImage: mobileImage3,
		text: {
			id: 3,
			title: "Enter Raffles",
			description: "Win differrent prizes by entering in our lucky draw",
			buttonText: "Enter Draw"
		}
	},
	{
		section: "fourthSection",
		slideshow: false,
		textRight: false,
		mobileImage: mobileImage4,
		text: {
			id: 4,
			title: "Contact Us",
			description: "Just send us your questions to stay in tune with our products and services",
			buttonText: "Contact"
		}
	}
]