import emailjs from "emailjs-com"
const apiKey = import.meta.env.VITE_API_KEY

// guillo revisa esta vaina porfa
// le cambié la estructura para que maneje los errores
// y para que limpie los campos del formulario después de enviar el correo
// parece que se estaban limpiando antes de confirmar que todo fue exitoso
export const sendMail = (name, asunto, mail, msg, setName, setAsunto, setMail, setMsg) => {
    try {
        const response = emailjs.send("service_hosal24", "template_9huakp7", {
            title: asunto,
            name,
            message: msg,
            email: mail,
        }, apiKey)
        response.then(() => {
            console.log("Email enviado correctamente.");
            setName('');
            setAsunto('');
            setMail('');
            setMsg('');
        });
        return response;
    } catch (error) {
        console.error("Error enviando el email:", error);
        throw new Error("Fallo al enviar el email.");   
    }
}
