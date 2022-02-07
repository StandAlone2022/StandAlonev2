import Image from "next/image"
import {useRouter} from 'next/router'
import { useForm } from "react-hook-form"
import axios from "axios"
import emailjs from 'emailjs-com'


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const router=useRouter()

    // const onSubmit = async (value) => {
    //     let config = {
    //         method: "post",
    //         url: `/api/contact`,
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: value
    //     }

    //     try {
    //         const response = await axios(config)
    //         console.log(response)

    //         if (response.data.status === 200) {
    //             console.log("Success")
    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_ype9yqg", "template_6teqpwf", e.target, "user_C0PK3Dl0lsa7cIMjqxUpK").then((res) => {
            alert("Message Sent Successfully")
            router.push("/")
        }, (err) => {
            console.log("Failed", err)
        }
        )
    }
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
                    {/* <p className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
                        facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
                        quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
                    </p> */}
                </div>
                <div className="contact-body">
                    <div className="contact-info">
                        <div>
                            <span>
                                <i className="fas fa-mobile-alt" />
                            </span>
                            <span>Phone No.</span>
                            <span className="text">+13104998483</span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-envelope-open" />
                            </span>
                            <span>E-mail</span>
                            <span className="text">standalonefilmfestival@gmail.com </span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-map-marker-alt" />
                            </span>
                            <span>Address</span>
                            <span className="text">
                                9607 Business Center Dr. Suite - G , Rancho Cucamonga CA - 91730 , USA
                            </span>
                        </div>
                        {/* <div>
                            <span>
                                <i className="fas fa-clock" />
                            </span>
                            <span>Opening Hours</span>
                            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
                        </div> */}
                    </div>
                    <div className="contact-form">
                        <form onSubmit={sendEmail}>
                            <div>
                                <input
                                    type="text"
                                    {...register('name', { required: true })}
                                    className="form-control"
                                    name="name"
                                    placeholder="First Name"
                                />
                                <input type="text" name="lname"  {...register('lname', { required: true })} className="form-control" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" name="email" {...register('email', { required: true })} className="form-control" placeholder="E-mail" />
                                <input type="text" name="phone" {...register('phone', { required: true })} className="form-control" placeholder="Phone" />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Message"
                                name="message"
                                className="form-control"
                                {...register("message", { required: true })}
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
                    <iframe src="https://www.google.com.qa/maps/d/u/1/embed?mid=115oQeUnjG2xWnAy_P2PVGr9NASKvkXPk&ehbc=2E312F&hl=en" frameBorder={0}
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
