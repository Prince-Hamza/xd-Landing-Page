import Header from '../Header/Header.jsx'
import Illustration1 from './Illustration1/Illustration1'
import Illustration2 from './Illustration2/Illustration2'
import Illustration3 from './Illustration3/Illustration3'
import Illustration4 from './Illustration4/Illustration4'
import Illustration5 from './Illustration5/Illustration5'

import shoppingTrolley from '../../images/Landing-Page/shopping-trolley-background.png'
import darkTheme from '../../images/Landing-Page/darkTheme.png'

import './styles.css'

export default function Main() {
	return (
		<div>
			<div style={styles.Theme} >
				<Header />

				<img style={styles.shoppingTrolley} src={shoppingTrolley} alt="" />

				<div style={styles.pageHeading} >
					<p> The Future Of </p>
					<p>	 Comerce Is Yours </p>
				</div>

				<p style={styles.subtitle} > A new and improved way to help your brand reach its full potential</p>

			</div>



			<img src={darkTheme} style={styles.darkTheme} alt="" />
			<Illustration1 />
			<Illustration2 />
			<Illustration3 />
			<Illustration4 />
			<Illustration5 />

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
	darkTheme: {
		position: 'absolute',
		top: '90%',
		left: '0%',
		width: '100%',
		height: '600%',
	},
	pageHeading: {
		position: 'absolute',
		left: '10%',
		top: '20%',
		font: 'bold 48px times new roman'
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