import { Col, Row, Divider } from "antd";
import LineChartComponent from "../components/Statistics/Expenses-linechart";
import { PieChartComponent } from "../components/Statistics/Expenses-pie-chart";

export default function Statistics(){

    return(
        <>
          <Row justify="center" gutter={12} className="LineChart">
            {/* <Col span={1}>
            </Col> */}
            <Col  span={12}>
            <LineChartComponent/>
            </Col>

            <Col span={10}>
            <PieChartComponent/>
            </Col>
        </Row>

        </>
    )

}