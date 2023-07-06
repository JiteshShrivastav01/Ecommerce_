import {useParams} from 'react-router-dom'

const ProductDetails=()=>{
    const param=useParams()
    return(
        <>
         <h1>here is a details of {param.productID}</h1>
        </>
    )
}

export default ProductDetails