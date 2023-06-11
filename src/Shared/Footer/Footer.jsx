import { Link } from 'react-router-dom';
import img1 from '../../assets/logo_150x.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const companyInfo = {
        name: 'Toy Sports Cars',
        address: 'Mirpur-2, Dhaka, Bangladesh',
        phone: '123-456-7890',
        email: 'info@gamil.com',
    };
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content rounded-md">
                <div>
                    <img src={img1} alt="" />
                    <p>Toy Sports Cars.</p>
                </div>
                <div>
                    <span className="footer-title">Contract Info</span>
                    <p>{companyInfo.address}</p>
                    <p>Phone: {companyInfo.phone}</p>
                    <p>Email: {companyInfo.email}</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/'> <a className="link link-hover">Home</a></Link>
                    <Link to='/blogs'> <a className="link link-hover">Blogs</a></Link>
                    <Link to='/showToy'> <a className="link link-hover">My Toys</a></Link>
                    <Link to='/addToy'> <a className="link link-hover">Add Toys</a></Link>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/login'>
                        <button>
                           LogIn
                        </button>
                    </Link>

                </div>
            </footer>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>
                        &copy; {currentYear} - All rights reserved by Toy Sports Cars
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;