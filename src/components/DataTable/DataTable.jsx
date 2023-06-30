import { Button, Popconfirm, Table, Typography } from 'antd';
import React from 'react';
import { db } from "../../main";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import moment from 'moment';
import { ReloadOutlined } from '@ant-design/icons';


const DataTable = ({ isAdmin, extra: Extra }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    const _Data = await getDocs(collection(db, "requests"));
    const mappingData = _Data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(mappingData);
    setData(mappingData);
    setLoading(false);
  }
  React.useEffect(() => { fetchData(); }, []);
  
  const handleDelete = async (id) => {
    setLoading(true);
    // delete for v9
    await deleteDoc(doc(db, "requests", id));
    fetchData();
  }

  const handleEdit = (id) => {
    console.log(id);
    return id;
  }
  
  
  const columns = [
    {
      title: 'الحملة/المبادرة',
      dataIndex: 'title',
      render: (text) => <div style={{minWidth: 150}}>{text}</div>,
    },
    {
      title: 'المؤسسة',
      dataIndex: 'organization',
      render: (text) => <div style={{minWidth: 150}}>{text}</div>,
    },
    {
      title: 'بداية التطوع',
      dataIndex: 'startDate',
      render: (value) => <div style={{minWidth: 80}}>{moment(value.toDate()).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'نهاية التطوع',
      dataIndex: 'endDate',
      render: (value) => <div style={{minWidth: 80}}>{moment(value.toDate()).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'عدد الساعات',
      dataIndex: 'totalHours',
      render: (text) => <div style={{minWidth: 30}}>{text}</div>,
    },
    {
      title: 'ملاحظات',
      dataIndex: 'notes',
      render: (text) => <div style={{minWidth: 150}}>{text}</div>,
    },

    {
      title: 'الإجراءات',
      dataIndex: 'action',
      render: (text, record) => (
        <div className='flex flex-wrap gap-1.5'>
          <Button type='primary' size='small' onClick={() => setSelectedItem(record.id)}>تعديل</Button>
          {/* popup confirem */}
          <Popconfirm title="هل أنت متأكد من حذف هذا الطلب؟" placement='bottomRight' onConfirm={() => handleDelete(record.id)} okText="نعم" cancelText="لا">
            <Button type='primary' danger size='small'>حذف</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (!isAdmin) {
    columns.splice(6, 1);
  }
  

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center bg-[#2969B0] py-3 px-6 rounded-lg mb-2">
        <Typography.Title level={3} style={{margin: 0, color: '#fff'}}>طلبات التطوع</Typography.Title>
        <div className='flex flex-wrap items-center gap-1.5'>
          {Extra ? <Extra onFinish={fetchData} itemId={selectedItem} resetSelectedItem={() => setSelectedItem(null)} /> : null}
          <Button icon={<ReloadOutlined />} onClick={fetchData}>تحديث</Button>
        </div>
      </div>
      <Table rowKey="id" loading={loading} bordered columns={columns} dataSource={data} 
        pagination = {{ pageSize: 14, hideOnSinglePage: true, position: ['bottomCenter'], showTotal: (total, range) => `${range[0]} من ${total}` }} 
      />
    </div>
  )
}

export default DataTable;