import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div className=''>
            {
                categories.map(category => <div key={category._id} className='mt-4'>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>{category.title}</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                <img className='w-50 h-50' src={category.image_url} alt="" />
                            </Card.Text>
                           
                            <Button variant="success"><Link to='/' className='text-white'>Go To Home</Link></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default Category;