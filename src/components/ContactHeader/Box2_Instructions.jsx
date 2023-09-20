import { useState } from "react";
import { Button, Image, Modal, Steps, Typography } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import intro1 from "../../assets/intro1.png";
import intro2 from "../../assets/intro2.png";
import intro3 from "../../assets/intro3.png";


const Box2_Instructions = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'تسجيل الدخول',
      description: <>
        قم بتسجيل الدخول على بوابة الطلبة من خلال الضغط <Typography.Link href='https://idp.iugaza.edu.ps/idp/Authn/UserPassword' target='_blank' rel="noreferrer">هنا</Typography.Link>
        {current === 0 && <><br />
        <Image src={intro1} alt='step 1 image' width={400} className='block' /></>}
      </>,
    },
    {
      title: 'من القائمة الرئيسية: طلبات التطوع',
      description: <>
        من القائمة الجانبية إضغط على طلبات التطوع كما هو موضح في الصورة
        {current === 1 && <><br />
        <Image src={intro2} alt='step 2 image' width={400} className='block' /></>}
      </>,
    },
    {
      title: 'من القائمة النشطة: إختر المهمة التطوعية',
      description: <>
        من القائمة النشطة إختر المهمة التطوعية التي تريد التطوع بها
        {current === 2 && <><br />
        <Image src={intro3} alt='step 3 image' width={400} className='block' /></>}
      </>,
    },{
      title: <>إضغت على زر <b>حفظ</b></>,
    },{
      title: <>إضغت على زر <b>إعتماد</b></>,
    },{
      title: <>يظهر الطلب لدى <b>مشرف التطوع</b></>,
    },{
      title: <>يتم إرسال لك رسالة <b>SMS</b> عند بدء النشاط</>,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    description: item?.description,
    title: item.title,
  }));



  return (
    <div className="flex-1 max-lg:text-center">
      <Typography.Text strong className='block'>
        خطوات التسجيل
      </Typography.Text>
      <Button type='primary' className='block mt-2' icon={<OrderedListOutlined />} onClick={() => setVisible(true)}>
        طريقة التسجيل
      </Button>

      <Modal
        title='طريقة التسجيل في الطلبات المتاحة للتطوع'
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Steps current={current} items={items} direction="vertical" />

        <span className="border-t-2 border-dashed block " />
        <div className="mt-4 flex justify-end">
          {current > 0 && (
            <Button onClick={prev}>
              السابق
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next} className="mr-2">
              التالي
            </Button>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Box2_Instructions