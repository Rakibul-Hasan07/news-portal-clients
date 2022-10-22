import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout =() => {
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.error(error)
        })
    }
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>RK NEWS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=''>Categories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {user?.email ? 
                        <>
                        <p className='text-white me-2'>{user?.displayName}</p>
                        <Link onClick={handleLogout}>LogOut</Link>
                        </> 
                        : <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;