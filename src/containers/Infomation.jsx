import React from 'react';
import '../styles/components/Information.css';
import {Link} from 'react-router-dom';


const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form action="">
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
                        Regresar
                    </div>
                    <div className="Information-next">
                        <Link to="/checkout/payment">
                            Pagar
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>Item name</h4>
                        <span> $10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Information};