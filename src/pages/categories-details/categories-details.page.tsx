import { useParams } from "react-router-dom";
import CategoriesDetailsComponent from "../../components/categories-details/categories-details.component";

const CategoriesDetailsPage = () => {
    const { id } = useParams(); //mesmo nome do parametro passado no APP.tsx no caso ":id".
    if (!id) return null;

    return (
        <>
            <CategoriesDetailsComponent categoryId={id} />
        </>
    );
};

export default CategoriesDetailsPage;
 