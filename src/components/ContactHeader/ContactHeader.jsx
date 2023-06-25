import Box1_Whatsapp from './Box1_Whatsapp';
import { Button, Divider, Typography } from 'antd';
import Box2_Instructions from './Box2_Instructions';
import { MailOutlined } from '@ant-design/icons';
const ContactHeader = () => {
  return (
    <div className='bg-neutral-100 rounded-lg border p-4 mb-8 flex items-center justify-stretch gap-5 max-lg:flex-col max-w-6xl mx-auto'>
      <Box1_Whatsapp />
      <Divider type='vertical' style={{ minHeight: 50}} />
      <Box2_Instructions />
      <Divider type='vertical' style={{ minHeight: 50}} />
      <div className='flex-1 max-lg:text-center'>
        <Typography.Text strong className='block'>تواصل معنا عبر البريد الالكتروني</Typography.Text>
        <a href='mailto:abdalmjeds2000@gmail.com'>
          <Button type='default' className='block mt-2' icon={<MailOutlined />}>
            رابط البريد الالكتروني  
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ContactHeader