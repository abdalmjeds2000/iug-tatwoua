import { Button, ConfigProvider, DatePicker, Form, Input, InputNumber, Modal, message } from 'antd'
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from 'react';
import { db } from '../main';
import { addDoc, collection } from 'firebase/firestore';

const ManageRequest = ({ onFinish }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const rulesOptions = [{ required: true, message: 'هذا الحقل مطلوب' }];

  const handleSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    values.startDate = values.startDate.toDate();
    values.endDate = values.endDate.toDate();
    const dbRef = collection(db, "requests");
    addDoc(dbRef, values)
    .then(docRef => {
      if(onFinish) onFinish();
      message.success('تم إضافة الطلب بنجاح');
    })
    .catch(error => message.error(error.message) )
    .finally(() => {
      setLoading(false);
      setVisible(false);
    });
  }
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b', }, }}>
        <Button type='primary' icon={<PlusCircleOutlined />} loading={loading} onClick={() => setVisible(true)}>
          إضافة طلب تطوع جديد
        </Button>
      </ConfigProvider>
      <Modal
        title='إضافة طلب تطوع جديد'
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label='الحملة/المبادرة' name="title" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب العنوان" />
          </Form.Item>
          <Form.Item label='المؤسسة' name="organization" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب المؤسسة" />
          </Form.Item>
          <Form.Item label='بداية التطوع' name="startDate" rules={rulesOptions}>
            <DatePicker size="large" placeholder="أكتب بداية التطوع" format="DD/MM/YYYY" style={{display: "block"}} />
          </Form.Item>
          <Form.Item label='نهاية التطوع' name="endDate" rules={rulesOptions}>
            <DatePicker size="large" placeholder="أكتب نهاية التطوع" format="DD/MM/YYYY" style={{display: "block"}} />
          </Form.Item>
          <Form.Item label='عدد الساعات' name="totalHours" rules={rulesOptions}>
            <InputNumber size="large" placeholder="أكتب عدد الساعات" style={{width: "100%"}} />
          </Form.Item>
          <Form.Item label='ملاحظات' name="notes" rules={rulesOptions}>
            <Input.TextArea size="large" rows={4} placeholder="أكتب ملاحظات" />
          </Form.Item>
          <Form.Item>
            <Button type='primary' size="large" htmlType="submit" loading={loading} block>إضافة</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ManageRequest