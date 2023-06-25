import { Button, Form, Input, Typography, message } from "antd";
import { useState } from "react";
import ManageRequest from "../components/ManageRequest";
import DataTable from "../components/DataTable/DataTable";

const Manage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const handleSubmit = (values) => {
    const { password } = values;
    if (password === '123') {
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
            <Input.Password size="large" placeholder="أكتب كلمة السر" />
          </Form.Item>
          <Form.Item>
            <Button type='primary' size="large" htmlType="submit" block>تسجيل الدخول</Button>
          </Form.Item>
        </Form>
      </div>}



      {isAuth && <DataTable extra={<ManageRequest />} />}
    </div>
  )
}

export default Manage