import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";
import { Col, Row } from "antd";

const Expense = () => {
    return (
    <>
        <h1 className="title">Expenses</h1>
        <Row gutter={[14, 14]} justify="center">
            <Col span={13}>
            <ListExpenses />
            </Col>
            <Col>
            <PieChartComponent/>
            </Col>
        </Row>
    </>
    )
};

export default Expense