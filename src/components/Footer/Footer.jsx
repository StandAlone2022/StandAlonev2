import Link from "next/link"
import Aos from "aos"

const Footer = () => {
    return (
        <footer className='footer' >
            <div className="footer-link">
                <Link href="/" passHref>Home</Link>
                <Link href="/about" passHref>About</Link>
                <Link href="/movies" passHref>Movies</Link>
                <Link href="/upcoming" passHref>Upcoming Events</Link>
                <Link href="/awards" passHref>Awards</Link>
                <Link href="/gallery" passHref>Gallery</Link>
            </div>
            <div className="footer-detail">
                <div className="footer-detail-icon">
                    <a href="https://www.facebook.com/100073168740628/posts/114609317654693/?sfnsn=mo" target="_blank" rel="noreferrer">
                        <div className="footer-detail-icon-item">
                            <i className="fab fa-facebook"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/sffa_usa/?utm_medium=copy_link" target="_blank" rel="noreferrer">
                        <div className="footer-detail-icon-item">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div className="footer-detail-icon-item">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div className="footer-detail-icon-item">
                            <i className="fab fa-twitter"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div className="footer-detail-icon-item">
                            <i className="fab fa-youtube"></i>
                        </div>
                    </a>
                </div>

                <div className="footer-detail-title">
                    <h3>STANDALONE FILM FESTIVAL & AWARDS</h3>
                </div>
                <div className="footer-detail-address">
                    <p>9607 Business Center Dr. Suite - G , Rancho Cucamonga CA - 91730 , USA </p>
                </div>
                <div className="footer-detail-number">
                    <a href="tel:+13104998483">+13104998483</a>
                </div>
            </div>
            <div className="footer-copyright">
                <h4>COPYRIGHT ©2021 STANDALONE FILM FESTIVAL & AWARDS - ALL RIGHTS RESERVED.</h4>
                <h4>POWERED BY CONNECTIXX </h4>
            </div>
        </footer>
    )
}

export default Footer