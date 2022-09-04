import logo from '../../logo.svg'
// import CartWidget from './components/CartWidget/CartWidget';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar= () => {
    return(
        <div className='navbar-container'>

            <div>
                <img width={'100px'} src={logo} alt="logo"/> 
            </div>

            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>   
                </ul>
            </div>
            

            <div>
                <h3><CartWidget/></h3>
            </div>

        

        </div>

    )
}

export default NavBar 