import { useParams } from "react-router-dom"

export const Products = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>
                Product details of id: {id}
            </h1>
        </div>
    )
}