import React from 'react';
import {HashRouter,Routes,Route} from 'react-router-dom';

import {Layout} from '../components/Layout';
import {Home} from '../containers/Home';
import {Checkout} from '../containers/Checkout';
import {Success} from '../containers/Success';
import {NotFound} from '../containers/NotFound';
import {Information} from '../containers/Infomation';
import {Payment} from '../containers/Payment';
import '../styles/components/App.css';





const App = () => {
    return (
        <React.Fragment>
            <Layout>
                <HashRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/checkout' element={<Checkout />}/>
                        <Route exact path='/checkout/information' element={<Information />}/>
                        <Route exact path='/checkout/payment' element={<Payment />}/>
                        <Route exact path='/checkout/success' element={<Success />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </HashRouter>
            </Layout>
        </React.Fragment>
    )
}

export {App};