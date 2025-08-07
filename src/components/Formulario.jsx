import { useState } from "react"
import { sendMail } from "../utils/sendMail"
import { useSiteConfig } from "../hooks/useSiteConfig"
import "../styles/formulario.css"

export const Formulario = () => {
    const { contactForm, logos, siteInfo } = useSiteConfig();
    const [formData, setFormData] = useState({
        name: "",
        asunto: "",
        mail: "",
        msg: ""
    });
    const [send, setSend] = useState(false);
    
    const handleInputChange = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };
    
    const resetForm = () => {
        setFormData({
            name: "",
            asunto: "",
            mail: "",
            msg: ""
        });
    };
    
    return (
        <section className="form-section">
            <form>
                <h2 className="contact-h2">
                    {contactForm.title.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < contactForm.title.split('\n').length - 1 && <br/>}
                        </span>
                    ))}
                </h2>
                <img className="logo-form" src={logos.withText} alt={`Logo de ${siteInfo.name}`} />
                
                {contactForm.fields.map((field) => (
                    <div key={field.name} className="form-content">
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === "textarea" ? (
                            <textarea 
                                className="input-form" 
                                name={field.name} 
                                id={field.name} 
                                placeholder={field.placeholder}
                                value={formData[field.name]} 
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                required={field.required}
                            ></textarea>
                        ) : (
                            <input 
                                className="input-form" 
                                type={field.type} 
                                name={field.name} 
                                id={field.name} 
                                placeholder={field.placeholder}
                                value={formData[field.name]} 
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                required={field.required}
                            />
                        )}
                    </div>
                ))}
                
                <button className="send-button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    sendMail(formData.name, formData.asunto, formData.mail, formData.msg, 
                           () => setFormData(prev => ({...prev, name: ""})),
                           () => setFormData(prev => ({...prev, asunto: ""})),
                           () => setFormData(prev => ({...prev, mail: ""})),
                           () => setFormData(prev => ({...prev, msg: ""})))
                    setSend(true)
                    setTimeout(() => {
                        setSend(false)
                    }, 3000)
                }}>{contactForm.submitText}</button>
                {send && <p className="confirmation-message">{contactForm.successMessage}</p>}
            </form>
            <div className="video">
                <video src={contactForm.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    title="Video de fondo de un bosque"
                >Video de fondo</video>
            </div>
        </section>
    )
}

//{send ? <Sended /> : ""}