import emailjs from "emailjs-com"
const apiKey = import.meta.env.VITE_API_KEY

export const sendMail = (name, asunto, mail, msg, setName, setAsunto, setMail, setMsg) => {
    emailjs.send("service_hosal24", "template_9huakp7", {
        title: asunto,
        name,
        message: msg,
        email: mail,
    }, apiKey).then((response) => {
        return response
    })
    setName("")
    setAsunto("")
    setMail("")
    setMsg("")
}