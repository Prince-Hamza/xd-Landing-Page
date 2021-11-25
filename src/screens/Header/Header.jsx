import SearchBar from '../SearchBar/SearchBar'

export default function Header() {
    return (
        <div>
            <div style={styles.Header} >
                {ItemsLeft.map(item => {
                    return (
                        <div style={styles.headerItem}> {item} </div>
                    )
                })}
            </div>

            <SearchBar />

            <div style={styles.headerRight} >
                {ItemsRight.map(item => {
                    return (
                        <div style={styles.headerItemRight}> {item} </div>
                    )
                })}
            </div>
        </div>
    )
}

const styles = ({
    Header: {
        position: "absolute",
        top: "0%",
        left: "0%",
        height: "15%",
        width: "50%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerRight: {
        position: "absolute",
        top: "0%",
        right: "0%",
        height: "15%",
        width: "15%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerItem: {
        font: '14px times new roman',
        marginLeft: '8%'
    },
    headerItemRight: {
        font: '14px times new roman',
        marginRight: '45px',
    }

})

const ItemsLeft = ["Home", "Shop Brand", "Services", "Sell With Bilxur"]
const ItemsRight = ["Login", "Contact Us"]