import motif from '../photo/Motif.jpg'
import { Entete } from './entete'
import { Slider } from './mcarouel'

export function Quoifaire() {

    return <section className="" style={{color:'#624097',backgroundImage: `url(${motif})`,paddingTop:'60px'}}>
        <Entete textu='Que pouvez vous faire avec finanfa'/>
        <Slider/>
    </section>
}