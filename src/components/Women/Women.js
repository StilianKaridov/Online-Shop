import React from 'react';
import { women } from '../../data';

export default function Women() {

    return (
        //Щe трбва да измислим нещо общо за тези li и така ще го преизползваме в другите компоненти
        <ul>
            {women.map(item =>
                <div>
                    <li>{item.url}</li>
                    <li>{item.description}</li>
                    <li>{item.sale}</li>
                    <li>{item.price}</li>
                </div>
            )}
        </ul>
    );
}