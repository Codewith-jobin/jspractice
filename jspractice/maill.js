var nodemailer=require('nodemailer');
require('dotenv').config();

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aut.jobin@gmail.com',
        pass:'ihrb vaqb xkdt mywd'
    }
});
async function main(){
    const info= await transporter.sendMail({
        from:'aut.jobin@gmail.com',
        to:'jjm10784@gmail.com',
        subject:"its working the mail is received",
        text:'hello its a elevation',
        html:"coooole james cole",
    })
    console.log("message sent",info.messageId)
}
main().catch(console.error);
