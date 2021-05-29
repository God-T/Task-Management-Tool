import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    /**
     * Handle button click 
     */
    const handleClick = () => {
        console.log('Clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button BGcolor='green' text='Add' onClick={handleClick} />
        </header>
    )
}
/**
 * Set default title 
 */
Header.defaultProps = {
    title: 'Task Tracker',
}
/**
 * Set title type
 */
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
/**
 * CSS style of title in js 
 */
// const titleStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header
