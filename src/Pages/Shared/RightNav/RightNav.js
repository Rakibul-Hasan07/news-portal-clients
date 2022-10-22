import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const RightNav = () => {
    const {googleLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogle =() => {
        googleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            navigate('/')
            // console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className="d-grid gap-2 my-5">
                <Button onClick={handleGoogle} variant="outline-primary" size="lg">
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