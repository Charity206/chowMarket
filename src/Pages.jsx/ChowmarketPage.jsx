
import Hero from "../component2.jsx/Hero"
import Foodgrid from "../component2.jsx/Foodgrid"
import Menu from "../component2.jsx/menu"
import FoodPage from "../component2.jsx/FoodPage"



function Chowmarket({ addToCart }){
    return(
        <div>
            <Hero/>
            <Menu/>
            <Foodgrid
            addToCart={addToCart} />
        <FoodPage/>
            
            


        </div>
    )
}
export default Chowmarket