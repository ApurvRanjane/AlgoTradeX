import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
         
            <Hero/>
            <CreateTicket/>
            <OpenAccount/>
        
        </>
     );
}

export default SupportPage;