import React, { useEffect, useState } from 'react';
import Newses from './Newses';

const Home = () => {
    const [newses, setNewses] = useState([])
    // console.log(newses);
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res=> res.json())
        .then(data=> setNewses(data))
    },[])
    return (
        <div>
            <h3 className='mt-5'>Todays All News Here</h3>
            {
                newses.map(news => <Newses key={news._id} news={news}></Newses>)
            }
        </div>
    );
};

export default Home;