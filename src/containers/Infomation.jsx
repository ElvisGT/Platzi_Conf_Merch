import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import {Link, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Information = ({history}) => {
    const {state,addToBuyer} = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const {cart} = state;

    const handleSubmit = () =>{
        const formData = new FormData(form.current);

        const buyer = {
            'name':formData.get('name'),
            'email':formData.get('email'),
            'address':formData.get('address'),
            'apto':formData.get('apto'),
            'city':formData.get('city'),
            'country':formData.get('country'),
            'state':formData.get('state'),
            'cp':formData.get('cp'),
            'phone':formData.get('phone'),
        }

        addToBuyer(buyer);
        navigate('/checkout/payment')
    }
 
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="texto" placeholder="Nombre completo" name="name"></input>
                        <input type="text" placeholder="Correo electronico" name="email"></input>
                        <input type="texto" placeholder="Direccion" name="address"></input>
                        <input type="texto" placeholder="Apto" name="apto"></input>
                        <input type="texto" placeholder="Ciudad" name="city"></input>
                        <input type="texto" placeholder="Pais" name="country"></input>
                        <input type="texto" placeholder="Estado" name="state"></input>
                        <input type="texto" placeholder="Codigo Postal" name="cp"></input>
                        <input type="texto" placeholder="Telefono" name="phone"></input>
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(item =>(
                    <div className="Information-item" key={item.id}>
                        <div className="Information-element" >
                            <h4>{item.title}</h4>
                            <span>{`$ ${item.price}`}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export {Information};