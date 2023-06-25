import { Button, ConfigProvider, Form, Input, Modal } from 'antd'
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from 'react';

const ManageRequest = ({ idUpdate, id }) => {
  const [visible, setVisible] = useState(false);

  const rulesOptions = [{ required: true, message: 'هذا الحقل مطلوب' }];
  
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b', }, }}>
        <Button type='primary' size="large" icon={<PlusCircleOutlined />} onClick={() => setVisible(true)}>
          إضافة طلب تطوع جديد
        </Button>
      </ConfigProvider>
      <Modal
        title='إضافة طلب تطوع جديد'
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item label='الحملة/المبادرة' name="title" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب العنوان" />
          </Form.Item>
          <Form.Item label='المؤسسة' name="organization" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب المؤسسة" />
          </Form.Item>
          <Form.Item label='بداية التطوع' name="startDate" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب بداية التطوع" />
          </Form.Item>
          <Form.Item label='نهاية التطوع' name="endDate" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب نهاية التطوع" />
          </Form.Item>
          <Form.Item label='عدد الساعات' name="totalHours" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب عدد الساعات" />
          </Form.Item>
          <Form.Item label='ملاحظات' name="notes" rules={rulesOptions}>
            <Input.TextArea size="large" rows={4} placeholder="أكتب ملاحظات" />
          </Form.Item>
          <Form.Item>
            <Button type='primary' size="large" htmlType="submit" block>إضافة</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ManageRequest