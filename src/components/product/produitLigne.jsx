/**
 * Creer une ligne du tableau
 * @param {[]} produit 
 * @returns 
 */


export function ProduitLigne({produit}) {
    const style= produit.stocked ? undefined : {color: 'red'}
    return <tr>
        <td style={style}>{produit.name}</td>
        <td>{produit.price}</td>
    </tr>
    
}