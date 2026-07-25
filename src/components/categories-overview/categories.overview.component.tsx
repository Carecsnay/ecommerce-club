import { useContext } from "react";
import { CategoryContext } from "../../context/categorie.context";
import { Container } from "./categories.overview.style";

const CategoriesOverview = () => {
    // const [isLoading, setIsLoading] = useState(false);

    const { categories } = useContext(CategoryContext);
    return (
        <>
            <Container>
                {categories.map((category) => (
                    <p key={category.id}>{category.displayName}</p>
                ))}
            </Container>
        </>
    );
};

export default CategoriesOverview;
