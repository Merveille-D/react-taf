import motif from '../photo/Motif.jpg'
import { Entete } from './entete'
import '../fitlabcss/utilisateur.css'
export function Utilisateur() {
    return <section  className="" style={{color:'#624097',backgroundImage: `url(${motif})`,paddingTop:'60px'}} >
      <Entete textu=' Finanfa est utilisé par des dizaines de milliers d’utilisateurs fidèles répartis dans plus de 03 pays de l’Afrique' />
      <div className='row rounded-3 align-items-center  case'>
            <div className='col text-center'>Comptes actifs <br />+1322</div>
            <div  className='vertical'></div>
            <div className='col text-center'> Agents actifs<br />+1322</div>
            <div className='vertical' ></div>
            <div className='col text-center'> Agences<br />+1322</div>
      </div>
     </section>
}