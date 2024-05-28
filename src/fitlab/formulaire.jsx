import { Input } from "../components/form/inpu";
import motif from '../photo/Motif.jpg'
import finanfa from '../photo/Rectangle 93.jpg'
import vector from '../photo/Vector.png' 
import { FaFacebook,FaWhatsapp} from "react-icons/fa"
import'../fitlabcss/formulaire.css';
const style={
    width:'100%', height:'50px', border:'2px solid rgb(105, 31, 74)',fontSize:'20px'
}
export function Formulaire({valeur1,funct1}) {
    return(
        <div className="" style={{color:'#624097',backgroundImage: `url(${motif})`,paddingTop:'60px',paddingBottom:'100px', }}>
            <div className="row  justify-content-center ">
                <div className=" col-5 col-md-3 col-lg-3  ">
                        <img src={finanfa} className="rounded mx-auto d-block im1" alt="..." />
                        <img src={vector} className="rounded mx-auto d-block im2" alt="..." />
                        <div className="p1"><p>Besoin d'aide?</p></div>
                        <div className="div pt-3 p2" >
                            <span className="circle "><FaFacebook className="icon facebook mx-1 "/></span>
                            <span className="circle mx-2"><FaWhatsapp className="icon whatsape "/></span>
                        </div>
                </div>
                <div className=" col-7 col-md-7 col-lg-7  f " >
                <Input placeholder='  Nom complet' value={valeur1} onChange={funct1} type='text' style={style} />
                    <div className="row">
                        <div className="col-12 col-lg-7">
                        <Input placeholder='Email' value='' onChange={null} type='email'  style={style}  />
                        </div>
                        <div className="col-12 col-lg-5">
                        <Input placeholder='Telephone' value='' onChange={null} type='text'  style={style} />
                        </div>
                    </div>
                <Input placeholder='Nom complet' value='' onChange={null} type='password'  style={style}/>
                <button className="btn bg" style={{ width:'100px',background: 'linear-gradient(to right, rgb(101, 50, 118), rgb(105, 31, 74),rgb(111, 13, 29)', color:'white', fontSize:'20px'}}  type="submit">Envoyer</button>
                 </div>
            </div>
        </div>
    )
}