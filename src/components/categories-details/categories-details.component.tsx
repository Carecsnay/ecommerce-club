import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converter/firestore.converter";
import Category from "../../types/category.type";
import LoadingComponent from "../loading/loading.component";
import ProductItem from "../product-item/product-item.component";
import { CategoryHeader, CategoryTitle, Container, IconContainer, ProductsContainer } from "./categories-details.style";


interface CategoriesDetailsProps {
    categoryId: string;
}

const CategoriesDetailsComponent = ({ categoryId }: CategoriesDetailsProps) => {
    const navigate = useNavigate();
    const handleIconClick = () => {
        navigate("/");
    };
    const [category, setCategory] = useState<Category | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setIsLoading(true);

                const querySnapshot = await getDocs(
                    query(collection(db, "categories").withConverter(categoryConverter), where("id", "==", categoryId)),
                );
                const category = querySnapshot.docs[0]?.data();

                setCategory(category);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategory();
    }, [categoryId]);
    return (
        <>
            {isLoading && <LoadingComponent />}
            <Container>
                <CategoryHeader>
                    <IconContainer
                        onClick={() => {
                            handleIconClick();
                        }}
                    >
                        <FaChevronLeft size={20} />
                    </IconContainer>

                    <CategoryTitle>
                        <p>Explorar {category?.displayName}</p>
                    </CategoryTitle>
                </CategoryHeader>

                <ProductsContainer>
                    {category?.products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ProductsContainer>
            </Container>
        </>
    );
};

export default CategoriesDetailsComponent;
