import '../fitlabcss/icon.css'
import { FaFacebook,FaWhatsapp,FaYoutube } from "react-icons/fa"
export function Icon() {
    return (
    <div  className="dive pt-3" >
        <span className="circle"><FaFacebook className="icon facebook mx-1 "/></span>
        <span className="circle mx-2"><FaWhatsapp className="icon whatsape "/></span>
        <span className="circle"><FaYoutube className="icon youtube mx-1 "/></span>
    </div>
    ) 
}