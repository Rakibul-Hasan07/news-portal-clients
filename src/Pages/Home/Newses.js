import React from 'react';

const Newses = ({news}) => {
    // console.log(news);
    return (
        <div>
            <p>{news.author.name}</p>
            <p>{news.author.published_date}</p>
            <img className='h-50 w-50' src={news.image_url} alt="" />
        </div>
    );
};

export default Newses;