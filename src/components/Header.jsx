import ManagerImg from '../assets/Admin photo.jpg'

function Header(){
    return(
        <header>
            <div className='img-container'>
                <img src={ManagerImg} alt="" />
                <div>
                    <h2 className="name">System Manager</h2>
                    <p>Main Administrator</p>
                </div>
            </div>
            <i className="far fa-bell"></i>
            <i className="fas fa-cog"></i>
            <i className="fas fa-search"></i>
            <input type='search' name='search' placeholder='Search by operations, drivers, or orders...'/>
        </header>
    )
}

export default Header;