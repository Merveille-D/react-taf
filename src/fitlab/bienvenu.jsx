/**
 * 
 * @returns 
 */
import '../fitlabcss/bienvenue.css'
import google from '../photo/Google Play Store 1.jpg'
import egoogle from '../photo/egoogle.png';
import { Cadre } from './cadre';
import education from '../photo/education.jpg'
import app from '../photo/Vector.jpg'
import eapp from '../photo/eap.png'

export function Bienvenu() {

     
      const style= {backgroundImage: `url(${education})`};  


      const ser={
         display:'flex',
         justifyContent:'center',
         width:'100%',
         maxWidth: '800px',
         margin: 'auto',
         color:'#624097 '
      }
      const cadre={
         display:'flex',
         gap:'40px',
         justifyContent:'center',
         margin: 'auto',
        
      }

    return <section style={style} className=" pt-5">

       <div className="text-center" >

            <h1 id='box1' style={{color:'#624097 ' ,fontSize:'60px',paddingTop:'20px'}}>BIENVENUE SUR </h1>

            <div className="mot">
             <h1 className='finanfa'>FINANFA</h1>
            </div>

            <p className="fs-1 "style={{color:'#624097'}}> Votre <strong>plateforme </strong> intégrée de <strong>services digitaux</strong></p>
           
            <div className="" style={ser}>
               
            <p>Tous vos services financiers et non financiers digitaux <br />réunis en un seul endroit. 
            Désormais tout est à votre <br /> portée. Economisez du temps, de l'argent gràce à <br /> cette apllication</p>

            </div  >
            <div className='pb-2' style={cadre} >   
                <Cadre image={google} imag={egoogle}/>
                <Cadre image={app} imag={eapp}/>
             </div>

            
       </div>
    </section>
}