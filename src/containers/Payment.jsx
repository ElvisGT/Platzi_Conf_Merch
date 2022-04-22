import React,{ useContext } from 'react';
import '../styles/components/Payment.css';
import {AppContext} from '../context/AppContext';
import {useSumTotal} from '../hooks/useSumTotal';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
    const {state} = useContext(AppContext);
    const {cart} = state;
    const navigate = useNavigate();
    const sumatoria = useSumTotal(cart);

    const handleClick = () => {
        navigate('/checkout/success');
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>{`$ ${item.price}`}</span>
                            
                        </div>
                    </div>

                ))
                }
                <div className="Payment-button">
                    <h4>{`Total: $ ${sumatoria}`}</h4>
                    <button type="button" onClick={handleClick}>Pagar</button>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export {Payment};