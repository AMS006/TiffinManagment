const nodemailer = require('nodemailer')
exports.sendEmail = async (options) =>{
    const emailOptions = {
        from:"anassain2002@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message

    }
    console.log(options)
    const transport = nodemailer.createTransport({
        host:'smpt.gmail.com',
        port:465,
        service:'gmail',
        auth:{
            user:"tiffinwala4@gmail.com",
            pass:"dwmpfqroidqytpio"
        }
    })
    await transport.sendMail(emailOptions);
    }