import "./header.css";
const Header = () => {
    return (
        <>
            <div className="Headerbar-container">
                <div className="header_left">
                    <div>
                        <h1 className="title">E'GP</h1>
                        <h3 className="banner_text">
                            E-Grievance Portal
                        </h3>
                    </div>
                    <div>
                        <h4 className="help">

                            We are here to help you!
                        </h4>
                    </div>

                </div>
                <div className="header_right">
                    <img src="./images/headerim.jpg" />
                </div>
            </div>
        </>
    )
}
export default Header;