import { Typography } from 'antd';
import ContactHeader from '../components/ContactHeader/ContactHeader';
import DataTable from '../components/DataTable/DataTable';

const Home = () => {
  
  return (
    <div className="container mx-auto p-6 min-h-[480px] rounded-2xl border">
      <div>
        <Typography.Title level={3} className='text-center'>طلبات التطوع - الجامعة الاسلامية بغزة</Typography.Title>
        <Typography.Text className='block text-center'>
          يمكنك من خلال هذا الموقع معرفة الطلبات المتاحة للتطوع في الجامعة الاسلامية بغزة
        </Typography.Text>
        {/* <div className='text-center my-4'>
          <Typography.Text type='secondary' style={{ fontSize: 10 }}>صفحة الجامعة</Typography.Text>
          <img
            src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=https://sportal.iugaza.edu.ps/ords/f?p=147:29:17320416133532::NO:29::'
            alt='qr code'
            className='w-24 h-24 rounded-xl border hover:border-2 hover:border-[#00b96b] hover:scale-105 transition-all duration-300 mx-auto'
          />
        </div> */}
        <div className='text-center my-4'>
          <Typography.Text>
            للدخول إلى صفحة الجامعة <Typography.Link href='https://sportal.iugaza.edu.ps/ords/f?p=147:29:17320416133532::NO:29::' target='_blank' rel="noreferrer">اضغط هنا</Typography.Link>
          </Typography.Text>
        </div>
      </div>
      <ContactHeader />
      <DataTable />

      {/* <SupportEngine /> */}
    </div>
  )
}

export default Home