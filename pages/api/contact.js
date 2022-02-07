import nodemailer from 'nodemailer'

export default async (req,res)=>{
    const {name,lname,email,phone,message}=req.body

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: "standalonefilmfestival@gmail.com",
            pass:"Khullargroup2021!"
        },
        
    })

    try {
        const emailRes=await transporter.sendMail({
            from: email,
            to:"standalonefilmfestival@gmail.com",
            subject:`Contact Form from ${name} ${lname}`,
            html:   `<p>
                ${message}
            </p>`
        })
        console.log("Message",emailRes.messageId)
        res.status(200).json({email})
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }

}