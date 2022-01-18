import Image from "next/image"

const Contact = () => {
    return (
        <div className="contact">

            <section className="contact-section">
                <div className="contact-bg">
                    <h3>Get in Touch with Us</h3>
                    <h2>contact us</h2>
                    <div className="line">
                        <div />
                        <div />
                        <div />
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
                        facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
                        quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
                    </p>
                </div>
                <div className="contact-body">
                    <div className="contact-info">
                        <div>
                            <span>
                                <i className="fas fa-mobile-alt" />
                            </span>
                            <span>Phone No.</span>
                            <span className="text">1-2392-23928-2</span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-envelope-open" />
                            </span>
                            <span>E-mail</span>
                            <span className="text">mail@company.com</span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-map-marker-alt" />
                            </span>
                            <span>Address</span>
                            <span className="text">
                                2939 Patrick Street, Vicotria TX, United States
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-clock" />
                            </span>
                            <span>Opening Hours</span>
                            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" className="form-control" placeholder="E-mail" />
                                <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Message"
                                className="form-control"
                                defaultValue={""}
                            />
                            <input type="submit" className="send-btn" defaultValue="send message" />
                        </form>
                        <div>
                            <Image src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640341733/contact-png_gohkpk.png" width={400} height={400} alt="New Image" />
                        </div>
                    </div>
                </div>
                <div className="map">
                <iframe src="https://www.google.com.qa/maps/d/u/1/embed?mid=115oQeUnjG2xWnAy_P2PVGr9NASKvkXPk&ehbc=2E312F&hl=en"  frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                        width="100%"
                        height={650} />
                        
                </div>
            </section>
        </div>

    )
}

export default Contact
