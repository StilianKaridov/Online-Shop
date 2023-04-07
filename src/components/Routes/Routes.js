import React from "react";

import Children from '../Children/Children';
import Women from '../Women/Women';
import Men from '../Men/Men';
import ShippingAndPayment from "../ShippingPlusPayment/ShippingPlusPayment";
import Contacts from "../Contacts/Contacts";
import AboutUs from "../AboutUs/AboutUs";
import { Routes, Route } from 'react-router-dom';

function AllRoutes() {

    return (
        // To add more Routes, for the client service tab in footer
        <Routes >
            <Route path='/products/muje' element={<Men />} />
            <Route path='/products/jeni' element={<Women />} />
            <Route path='/products/deca' element={<Children />} />
            <Route path='/page/dostavka-i-plashtane' element={<ShippingAndPayment />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/page/za-nas' element={<AboutUs />} />
        </Routes>
    );
}

export default AllRoutes;