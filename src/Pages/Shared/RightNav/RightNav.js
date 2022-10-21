import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div className="d-grid gap-2 my-5">
                <Button variant="outline-primary" size="lg">
                    Google Login
                </Button>
                <Button variant="outline-dark" size="lg">
                    Github Login
                </Button>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><FaFacebook/> FaceBook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                        <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
                        <ListGroup.Item><FaWhatsapp/> WhatsApp</ListGroup.Item>
                        <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                        <ListGroup.Item><FaTelegram/> Telegram</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
};

export default RightNav;