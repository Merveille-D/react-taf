import motif from '../photo/Motif.jpg'
import ccdi from '../photo/ccdi.png'
import friklab from '../photo/friklabel.png'
import jeny from '../photo/jeny.png'
import main from '../photo/main.png'
import poste from '../photo/post.png'
import { Entete } from './entete'
export function Partenair() {
    const ser={
        display:'flex',
        justifyContent:'center',
        margin: 'auto',
       textAligne:'center'     
     }

    return <section  className="" style={{color:'#624097',backgroundImage: `url(${motif})`,paddingTop:'60px',paddingBottom:'30px'}} >
        <Entete textu='Nos partenaire'/>
        <div className='row pt-5' style={ser}>
            <div className='col-2  col-lg-1 '>
            <img src={ccdi} className="img-thumbnail " alt="..."/>
            </div>
            <div className='col-2  col-lg-1 '>
            <img src={friklab} className="img-thumbnail " alt="..."/>
            </div>
            <div className='col-2 col-lg-1'>
            <img src={main} className="img-thumbnail " alt="..."/>
            </div>
            <div className='col-2  col-lg-1 '>
            <img src={jeny} className="img-thumbnail " alt="..."/>
            </div>
            <div className='col-4  col-lg-2'>
            <img src={poste} className="img-thumbnail" width="55%" alt="..."/>
            </div>
        </div>
         
        </section>
}