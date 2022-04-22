import React,{ useContext,useState } from 'react';
import {Product} from './Product';
import '../styles/components/Products.css';
import {AppContext} from '../context/AppContext';
import { Search } from '../components/Search';

const Products = () => {
    const {state,addToCart} = useContext(AppContext);
    const {products} = state;
    const [search,setSearch] = useState('');

        
    const FilterInitialState = products.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
    })

    const HandleAddToCart = product => () => {
        addToCart(product)
    }

    return(
        <React.Fragment>
        <Search search={search} setSearch={setSearch}/>
            <div className="Products">
                <div className="Products-items">
                    {FilterInitialState.map(product => (
                        <Product key={product.id} product={product} HandleAddToCart={HandleAddToCart}/>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};


export {Products};