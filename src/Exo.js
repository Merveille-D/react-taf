import { useState } from "react";
import { Checkbox } from "./components/form/checkbox";
import { Input } from "./components/form/input";
import { ProduitCategory } from "./components/product/produitCategorie";
import { ProduitLigne } from "./components/product/produitLigne";

const PRODUCTS =[
    {category:"Fruits",price:"$1", stocked:true, name:"Apple"},
    {category:"Fruits",price:"$1", stocked:true, name:"Dragonfruit"},
    {category:"Fruits",price:"$2", stocked:false, name:"Passionfruit"},
    {category:"Vegetables",price:"$2", stocked:true, name:"Spinach"},
    {category:"Vegetables",price:"$4", stocked:false, name:"Pumpkin"},
    {category:"Vegetables",price:"$1", stocked:true, name:"Peas"}
  ]

  function Main() {

            const [check, setCheck]=useState(false)
            const [search, setSearch]=useState('')
            let visibleProducts= PRODUCTS.filter(product => {

                if (check && !product.stocked) return false
          

                if (search && !product.name.includes(search)) return false

                 else return true
            })
            
           
    return <div className="container mt-3">
         <BarRecherche check={check} WhosetCheck={setCheck} search={search} WhosetSearch={setSearch} />
         <Mytable PRODUCT={visibleProducts}/>
    </div>
  }


        function BarRecherche({check, WhosetCheck,search,WhosetSearch }) {
            return <form>
                <Input  value={search} placeholder='' onChange={WhosetSearch}/>
                <Checkbox checked={check}  label="N'afficher aue les produits en stock" onChange={WhosetCheck} />
            </form>
        }



        function Mytable({PRODUCT}) {
             const tab=[];
             let nouveauCateg='null';
             for(let produit of PRODUCT){
                if (nouveauCateg !== produit.category ){
                       tab.push( <ProduitCategory key={produit.category} name={produit.category}/>)
                }
                tab.push(<ProduitLigne key={produit.name} produit={produit}/>)
                nouveauCateg= produit.category
             }
            
            return <table className="table mt-5">
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {tab}
                </tbody>
            </table>
        }
  export default Main;