import { useEffect } from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../Header/Header.jsx'
import Illustration1 from './Illustration1/Illustration1'
import Illustration2 from './Illustration2/Illustration2'
import Illustration3 from './Illustration3/Illustration3'
import Illustration4 from './Illustration4/Illustration4'
import Illustration5 from './Illustration5/Illustration5'
import shoppingTrolley from '../../images/Landing-Page/shopping-trolley-background.png'
import border from '../../images/Landing-Page/borderify.png'
import darkTheme from '../../images/Landing-Page/darkTheme.png'
import $ from 'jquery'
import './styles.css'




export default function Main() {


	useEffect(() => {

		$(`.title`).animate({ opacity: "0" }, 0)
		$(`.title`).animate({ opacity: "+=25" }, 10000);

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
						<p>	 Comerce Is Yours </p>
					</div>
				</div>

				<p style={styles.subtitle} > A new and improved way to help your brand reach its full potential</p>

			</div>


			<img src={darkTheme} alt={darkTheme} className={"darkTheme"} />

			<Illustration1 />
			<Illustration2 />
			<Illustration3 />
			<Illustration4 />
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
		left: '5%'
	},

})