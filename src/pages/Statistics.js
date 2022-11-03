import { Col, Row, Divider } from "antd";
import LineChartComponent from "../components/Statistics/Expenses-linechart";
import { PieChartComponent } from "../components/Statistics/Expenses-pie-chart";
import { SumSpentField } from "../components/Statistics/SumSpentField";


export default function Statistics() {

    return (
        <>
            <Row justify='center'>
                <Col>
                    <h1>Statistics for expenses</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={23}>
                    <SumSpentField />
                </Col>
            </Row>
            <Row align="top" justify='center'>
                <Col span={12}>
                    <LineChartComponent />
                </Col>
                <Col span={1}>
                </Col>
                <Col span={10}>
                    <PieChartComponent />
                </Col>
            </Row>

        </>
    )

}