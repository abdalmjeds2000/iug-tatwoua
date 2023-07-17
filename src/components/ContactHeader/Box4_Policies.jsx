import { useState } from "react";
import { Button, Modal, Steps, Typography } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";


const Box2_Instructions = () => {
  const [visible, setVisible] = useState(false);
  

  const steps = [
    {
      title: 'المادة (1):',
      description: 'يعتبر مساق العمل التطوعي 60 ساعة، أحد المساقات التي يلتزم الطالب بإنجازها خلال فترة دراسته، ويتوقف تخرج الطالب/ة على إنهاء هذا المساق.',
    },{
      title: 'المادة (2):',
      description: 'يقضي المتطوع فترة تطوعه في عدة أماكن خلال فترة التطوع، وذلك تحت إشراف قسم العمل التطوعي بعمادة شؤون الطلبة كمرجعية لهذا المساق.',
    },{
      title: 'المادة (3):',
      description: 'يسمح التطوع داخل كليات وعمادات ومرافق الجامعة، وضمن الحملات والفعاليات التي تنظمها الجامعة، وكذلك يسمح التطوع لدى مؤسسات المجتمع الأهلية منها والرسمية، والتي بينها وبين الجامعة تفاهمات واتفاقيات عمل مشتركة، ويستثنى من ذلك القطاع الخاص (الربحي).',
    },{
      title: 'المادة (4):',
      description: 'يلتزم المتطوع والمتطوعة بسياسة وفلسفة الجامعة خلال تطوعه/ها داخل الجامعة أو لدى المؤسسات الخارجية، ومن يتجاوز ذلك يعرض نفسه للمساءلة من جهات الاختصاص.',
    },{
      title: 'المادة (5):',
      description: 'يعفى من مساق 60 ساعة عمل تطوعي من سبق لهم دراسته في الدبلوم المتوسط (التجسير)، أو في مرحلة بكالوريوس سابقة، كما يعفى من المساق طلبة التقنيات المساعدة من ذوي الإعاقة والخريجين ممن لديهم ظروف قاهرة مثل السفر أو المرض، شرط إبراز الوثائق التي تؤكد ذلك، وكذلك يعفى منها الخريجون في أوقات الأوبئة وعدم القدرة على التطوع.',
    },{
      title: 'المادة (6):',
      description: 'تحدد عمادة شؤون الطلبة عدد ساعات التطوع الـــــــ (60 ساعة)، وتضعها في نطاقها السليم وفق ما تجده مناسباً، وبما يحفظ جهد الطالب المتطوع.',
    },{
      title: 'المادة (7):',
      description: 'يتم تسجيل المهمة التطوعية من خلال صفحة الطالب عبر خدمات الطلبة، ثم شؤون الطلبة، ثم اختيار المهمة التطوعية من قائمة طلبات التطوع.',
    },{
      title: 'المادة (8):',
      description: 'اعتماد مساق التطوع هي مسؤولية عمادة شؤون الطلبة، وهي المخولة باعتماده ضمن الشروط المتفق عليها بين الجامعة والطالب/ة.',
    }
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    description: item?.description,
    status: 'finish',
  }));



  return (
    <div className="flex-1 max-lg:text-center">
      <Typography.Text strong className='block'>
        سياسات العمل التطوعي
      </Typography.Text>
      <Button type='primary' className='block mt-2' icon={<UnorderedListOutlined />} onClick={() => setVisible(true)}>
        قراءة السياسات
      </Button>

      <Modal
        title='سياسات العمل التطوعي'
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Steps progressDot items={items} direction="vertical" className="policies_steps" />
      </Modal>
    </div>
  )
}

export default Box2_Instructions