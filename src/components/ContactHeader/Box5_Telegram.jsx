import { Button, ConfigProvider, Typography } from 'antd'
import telegram_logo from "../../assets/Telegram_logo.svg.webp";

const Box1_Whatsapp = () => {
  return (
    <div className='flex-1 flex justify-between items-center gap-2 max-lg:flex-col max-lg:text-center'>
      <div>
        <Typography.Text strong className='block'>تواصل معنا عبر التلجرام</Typography.Text>
        <ConfigProvider theme={{ token: { colorPrimary: '#0088CC', }, }}>
          <a href='https://web.telegram.org/a/#-657007412' target='_blank' rel="noreferrer">
            <Button type='primary' className='mt-2 !flex items-center gap-2'>
              <img src={telegram_logo} className='w-5' />
              <span>رابط الواتسآب</span>
            </Button>
          </a>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Box1_Whatsapp