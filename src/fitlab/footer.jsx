import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Rectangle from '../photo/Rectangle 93.jpg' ;
import { Icon } from './icon';
import '../fitlabcss/footer.css'

export function Footer() {
   
    const cercle={
    border:'1px solid white',
  width: '30px',
  height: '30px',
  borderRadius:'50%', 
  display: 'flex',
  alignItems:'center'
    }
    return <section className='a2'>

        <div className='col col-2'>
            <img src={Rectangle} className="img-thumbnail taille"  alt="..."/>
        </div>
        <div className="row align-items-center pt-5" >
                    <div className=" col-5 col-lg-4 col-md-5 mr-5 ">
                     <p>Finanfa votre plateforme intégré de services financiers digitaux: tontine, épargne+, portfeuille, credit, boutiques, assurance, services+, entreprises, sociétaires, partenaires</p>
                    </div>
                    <div className=" col-4 col-lg-4 col-md-5 mx-5 espace " >
                     <p>Nos politiques de confidentialité</p>
                     <p>Conditions générale</p>
                     </div>
                    <div className=" col-6 col-md-4 col-lg-3 end ">
                    <p>Contact</p>
                    <div className='row'>  
                        <div className='col-2 col-md-3 col-lg-2'>
                        <span className='' style={cercle}> <FaPhone style={{width:'30px', Height:'40px'}}/> </span>
                        </div>
                        <div className='col-10 col-md-9 col-lg-10'>
                        +229 60 08 27 27
                        </div>
                    </div>
                    <div className='row pt-3'>
                        <div className='col-2 col-md-3 col-lg-2'>
                        <span className='' style={cercle}> <FaEnvelope style={{width:'30px', Height:'40px'}}/> </span>
                        </div>
                        <div className=' col-10 col-md-9 col-lg-10'>
                        Info@finanfa.africa
                        </div>
                    </div>
                    </div>
        </div>
        <div className='pt-4 en'>
            <h4>Suivez-nons</h4>
            <div><Icon/></div>
        </div>
         
         <div className='py-5'>
            <p>2022 finanfa.africa</p>
         </div>

    </section>
}