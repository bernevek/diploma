import React, {Component} from "react";
import { connect } from 'react-redux';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import NavDropdown from "react-bootstrap/NavDropdown"
import { history } from '../../store'


export class AppNavbarHeader extends Component {
    state = {
        user: undefined
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    click = () => {
        console.log("fsg");
        history.push({pathname: "/userPolicy"})
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">Access system</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/users">Users</NavDropdown.Item>
                            <NavDropdown.Item href="#/userPolicy">User policies</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Computer" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Computers</NavDropdown.Item>
                            <NavDropdown.Item href="#/computerPolicy">Computer policies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/applications">Applications</Nav.Link>
                        <Nav.Link href="#/sites">Sites</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNavbarHeader);
