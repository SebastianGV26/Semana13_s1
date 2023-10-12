import './Header.css';
export const Header = () =>{
    return(
        <header className="Container">
            <div className="Container_logo">
                <img className='logo' src="https://marcas-logos.net/wp-content/uploads/2020/03/MSI-LOGO.png" alt="" />
            </div>
            <div className="Container_nav">
                <ul className="Navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}