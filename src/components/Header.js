import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='#CD5C5C' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header
