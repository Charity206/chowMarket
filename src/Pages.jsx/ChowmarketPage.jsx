
import Hero from "../component2.jsx/Hero"
import Foodgrid from "../component2.jsx/Foodgrid"
import Menu from "../component2.jsx/menu"




function Chowmarket({ addToCart }){
    return(
        <div>
            <Hero/>
            <Menu/>
            <Foodgrid
            addToCart={addToCart} />
        
            
            


        </div>
    )
}
export default Chowmarket