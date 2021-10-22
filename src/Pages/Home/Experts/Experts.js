import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        name: 'Andrew Smith',
        img: mechanic1,
        expertize: 'Engine Expert'
    },
    {
        id: 2,
        name: 'John Anderson',
        img: mechanic2,
        expertize: 'Head Expert'
    },
    {
        id: 3,
        name: 'Abraham Smith',
        img: mechanic3,
        expertize: 'Screw Expert'
    },
    {
        id: 4,
        name: 'David Johnson',
        img: mechanic4,
        expertize: 'Polish Expert'
    },
    {
        id: 5,
        name: 'Donald Trump',
        img: mechanic5,
        expertize: 'Magic Expert'
    },
]

const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;