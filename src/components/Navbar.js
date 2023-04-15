import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar className={"bg-secondary"} expand="lg">
            <Container className={"fw-bolder text-white"}>
                <Navbar.Brand href="/">Jungle Cards Collection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/mycards">My Cards</Nav.Link>
                        <Nav.Link href="/collection">The Collection</Nav.Link>
                        <Nav.Link href="https://testnets.opensea.io/collection/jungle-cards-collection">Opensea</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;