import 'antd/dist/antd.css';
// import './index.css';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';
const { TextArea } = Input;

export function CreateExpenseForm () {

  const handleOnSubmit = () =>{
    
  }

  return (
    <>
      <Form
      >
        <Form.Item label="Amount">
          <Input />
        </Form.Item>
        <Form.Item label="Reciever">
          <Input />
        </Form.Item>
        <Form.Item label="Select Category">
          <Select>
            <Select.Option value="Food">Demo</Select.Option>
            <Select.Option value="Transportation">Demo</Select.Option>
            <Select.Option value="Shopping">Demo</Select.Option>
            <Select.Option value="Entertainment">Demo</Select.Option>
            <Select.Option value="Housing and Utilities">Demo</Select.Option>
            <Select.Option value="Miscellaneous">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Comment">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" onSubmit={}>
          Submit
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};
