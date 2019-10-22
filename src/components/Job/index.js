import React, {Component} from 'react';
import { getJobs } from '../../services/api';
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap';

export default class Candidate extends Component{

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
            const result = await getJobs();

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
    }

    render() {
        console.log(process.env.API_URL);
        const { data } = this.state;
        
        return (
            <Container>
                <Row>
                    <h1 className="text-center mt-4 mb-4 mx-auto">Jobs</h1>
                    <Col sm={12}>

                        {this.state.isLoading && <Spinner animation="border" size="lg" />}
                        {!this.state.isLoading && <Table hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d => <tr key={d.id}>
                                    <td>{d.title}</td>
                                </tr>)}
                            </tbody>
                        </Table>}
                    </Col>
                </Row>
            </Container>
        )
    }
}