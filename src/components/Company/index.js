import React, { Component } from 'react';
import {getCompanies} from '../../services/api';
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap';

export default class Company extends Component {
    
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true,
            errors: null,
        }
    }

    async componentDidMount() {

        try {
            const result = await getCompanies();

            this.setState({
                data: result.data,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({
                error,
                isLoading: false,
            });
        }
        /*const dd = await Api.getCompanies();
        console.warn(dd);*/
    }

    render() {
        console.log(process.env.API_URL);
        const { data } = this.state;

        return (
            <Container>
                <Row>
                    <h1 className="text-center mt-4 mb-4 mx-auto">Companies</h1>
                    <Col sm={12}>

                        {this.state.isLoading && <Spinner animation="border" size="lg" />}
                        {!this.state.isLoading && <Table hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d => <tr key={d.id}>
                                    <td>{d.name}</td>
                                    <td>{d.city}</td>
                                    <td>{d.address}</td>
                                </tr>)}
                            </tbody>
                        </Table>}
                    </Col>
                </Row>
            </Container>
        )
    }
}