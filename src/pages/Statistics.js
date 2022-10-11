import { Col, Row, Divider } from "antd";
import LineChartComponent from "../components/Statistics/Expenses-linechart";
import { PieChartComponent } from "../components/Statistics/Expenses-pie-chart";

export default function Statistics(){

    return(
        <>
        <h1>Statistics for expenses</h1>
          <Row align="top" justify='space-evenly'>
            <Col span={12}>
            <LineChartComponent/>
            </Col>

            <Col span={10}>
            <PieChartComponent/>
            </Col>
        </Row>

        </>
    )

}