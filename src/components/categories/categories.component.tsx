import { useState } from 'react';
import Category from '../../types/category.type';
import './categories.style.css'

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])


    return (
        <div className="categories-container">
            <div className="categories-content">

            </div>
        </div>
    );
}

export default Categories;