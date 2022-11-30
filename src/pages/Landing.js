import { Col, Row } from "antd";

import img from '../assets/budget.JPG'

const Landing = () => {

    return <div>
        <Row style={{padding: 50, width: 'calc(100% - 48px)'}} justify='space-between'>
                <Col>
                    <h1>To keep you  </h1>
                    <h1>on your budget</h1>
                </Col>
                <Col>
                    <img src={img} alt='img'/>
                </Col>
            </Row>
    </div>
}

export default Landing;