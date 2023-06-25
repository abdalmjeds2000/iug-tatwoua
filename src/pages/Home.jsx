import { Typography } from 'antd'
import ContactHeader from '../components/ContactHeader/ContactHeader'
import DataTable from '../components/DataTable/DataTable'

const Home = () => {
  
  return (
    <div>
      <div className='mb-8'>
        <Typography.Title level={3} className='text-center'>طلبات التطوع - الجامعة الاسلامية بغزة</Typography.Title>
        <Typography.Text className='block text-center'>
          يمكنك من خلال هذا الموقع معرفة الطلبات المتاحة للتطوع في الجامعة الاسلامية بغزة
        </Typography.Text>
      </div>
      <ContactHeader />
      <DataTable />
    </div>
  )
}

export default Home