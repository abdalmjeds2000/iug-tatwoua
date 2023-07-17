import { Button, ConfigProvider, Form, Input, Typography, message, DatePicker, InputNumber, Modal } from "antd";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable/DataTable";
import { PlusCircleOutlined } from "@ant-design/icons";
import { db } from '../main';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import moment from "moment";


const Manage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const handleSubmit = (values) => {
    const { password } = values;
    if (password === '123456@#@#ABcd') {
      setIsAuth(true);
      message.success('تم تسجيل الدخول بنجاح');
    } else {
      setIsAuth(false);
      message.error('كلمة المرور غير صحيحة');
    }

  }
  const rulesOptions = [{ required: true, message: 'هذا الحقل مطلوب' }];

  return (
    <div className="container mx-auto">
      {!isAuth && <div className="max-w-md mx-auto mt-8">
        <Form layout="vertical" onFinish={handleSubmit}>
          <Typography.Title level={4} className='text-center'>
            تسجيل الدخول كـAdmin
          </Typography.Title>
          <Form.Item label='كلمة المرور' name="password" rules={rulesOptions}>
            <Input.Password size="large" placeholder="أكتب كلمة السر" autoFocus />
          </Form.Item>
          <Form.Item>
            <Button type='primary' size="large" htmlType="submit" block>تسجيل الدخول</Button>
          </Form.Item>
        </Form>
      </div>}



      {isAuth && <DataTable isAdmin extra={ManageRequest} />}
    </div>
  )
}

export default Manage;



const ManageRequest = ({ onFinish, itemId, resetSelectedItem }) => {
  const [form] = Form.useForm();
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
  useEffect(() => {
    if (itemId) {
      initForm();
    }
  }, [itemId]);

  const initForm = async () => {
    setLoading(true);
    const docRef = doc(db, "requests", itemId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    const data = docSnap.data();
    // handle firebase timestamp to show correctly in antd datepicker
    data.startDate = moment(data.startDate.toDate());
    data.endDate = moment(data.endDate.toDate());
    delete data.id;
    form.setFieldsValue(data);
    setVisible(true);
    setLoading(false);
  }
  const handleEdit = async (values) => {
    setLoading(true);
    const docRef = doc(db, "requests", itemId);
    values.startDate = values.startDate.toDate();
    values.endDate = values.endDate.toDate();
    await setDoc(docRef, values);
    message.success('تم تعديل الطلب بنجاح');
    setLoading(false);
    setVisible(false);
    onFinish();
  }

  useEffect(() => {
    if (!visible) {
      form.resetFields();
      resetSelectedItem();
    }
  }, [visible])



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
        <br />
        {visible ? <Form form={form} layout="vertical" name="new-request-form" onFinish={itemId ? handleEdit : handleSubmit}
          onFinishFailed={() => message.error('الرجاء التأكد من إدخال جميع الحقول بشكل صحيح')}
        >
          <Form.Item label='الحملة/المبادرة' name="title" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب العنوان" />
          </Form.Item>
          <Form.Item label='المؤسسة' name="organization" rules={rulesOptions}>
            <Input size="large" placeholder="أكتب المؤسسة" />
          </Form.Item>
          <Form.Item label='بداية التطوع' name="startDate" rules={rulesOptions}>
            <DatePicker size="large" placeholder="أكتب بداية التطوع" onChange={console.log} format="DD/MM/YYYY" style={{display: "block"}} />
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
            <Button type='primary' size="large" htmlType="submit" loading={loading} block>
              {itemId ? 'تعديل' : 'إضافة'}
            </Button>
          </Form.Item>
        </Form> : null}
      </Modal>
    </>
  )
}
