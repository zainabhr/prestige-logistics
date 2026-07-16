import ManagerImg from '../assets/Admin photo.jpg'

function Header(){

    function toggleMenue(){
        if(document.querySelector(".sidebar").style.display === "none"){
        document.querySelector(".sidebar").style.display = "block"
    }else{
        document.querySelector(".sidebar").style.display = "none"    }
    }

    return(
        <header>
            <h1>Prestige Logistics</h1>
            <div className='img-container'>
                <img src={ManagerImg} alt="" />
                <div>
                    <h2 className="name">System Manager</h2>
                    <p>Main Administrator</p>
                </div>
            </div>
            <i className="far fa-bell icon"></i>
            <i className="fas fa-cog icon"></i>
            <i className="fas fa-search icon"></i>
            <input type='search' name='search' placeholder='Search by operations, drivers, or orders...'/>
            <div className="menubar" onClick={toggleMenue} >
                    <div className="bars">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
        </header>
    )
}

export default Header;