import { Button, ConfigProvider, Typography } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons';

const Box1_Whatsapp = () => {
  return (
    <div className='flex-1 flex justify-between items-center gap-2 max-lg:flex-col max-lg:text-center'>
      <div>
        <Typography.Text strong className='block'>تواصل عبر الواتس آب</Typography.Text>
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b', }, }}>
          <a href='https://wa.me/972599306962?text=' target='_blank' rel="noreferrer">
            <Button type='primary' className='block mt-2' icon={<WhatsAppOutlined />}>رابط الواتسآب</Button>
          </a>
        </ConfigProvider>
      </div>
      
      <div className='text-center'>
        <Typography.Text type='secondary' style={{ fontSize: 10 }}>أو قم بمسح الكود</Typography.Text>
        <img
          src='https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://wa.me/972599306962?text='
          alt='qr code'
          className='min-w-[5rem] h-20 aspect-square rounded-xl border hover:border-2 hover:border-[#00b96b] hover:scale-105 transition-all duration-300'
        />
      </div>
    </div>
  )
}

export default Box1_Whatsapp