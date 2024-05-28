/**
 * Creer une ligne de produit q deux colonnes (nom, prix)
 * @param {{name: string, stocked:boolean, price:string}} product 
 * @returns {JSX.Element}
 */

export function ProductRow({product}){
    const style= product.stocked ? undefined : {color:'red'};
    return <tr>
    <td style={style}>{product.name}</td>
    <td>{product.price}</td>
    </tr>
}

