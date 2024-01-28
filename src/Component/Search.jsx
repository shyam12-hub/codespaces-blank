
import {useSelector} from "react-redux"
export function Search(){
    const search = useSelector(state => state.productReducer.search)

const seachProduct = useSelector(state => state.prodReducer.products)
if(!seachProduct || !searchProduct.products){
    return <h1>Product not Found</h1>
}
    return(
        <div>Serach</div>
    )
}