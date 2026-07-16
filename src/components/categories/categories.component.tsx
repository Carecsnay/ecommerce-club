import { useEffect, useState } from 'react';
import Category from '../../types/category.type';
import './categories.style.css'
import axios from 'axios';
import env from '../../config/env.config';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])


    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(`${env.apiUrl}/category`)

            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    }

    console.log(categories)

    useEffect(() => { fetchCategories() }, [])

    return (
        <div className="categories-container">
            <div className="categories-content">

            </div>
        </div>
    );
}

export default Categories;