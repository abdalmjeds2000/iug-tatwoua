import { Table, Typography } from 'antd';

const DataTable = ({ extra }) => {
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
      render: (text) => <div style={{minWidth: 80}}>{text}</div>,
    },
    {
      title: 'نهاية التطوع',
      dataIndex: 'endDate',
      render: (text) => <div style={{minWidth: 80}}>{text}</div>,
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
  ];
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      title: `حملة ${i}`,
      organization: `مؤسسة ${i}`,
      startDate: `2021-09-0${i}`,
      endDate: `2021-09-0${i}`,
      totalHours: `${i}`,
      notes: `ملاحظات ${i}`,
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-[#2969B0] py-3 px-6 rounded-lg mb-2">
        <Typography.Title level={3} style={{margin: 0, color: '#fff'}}>طلبات التطوع</Typography.Title>
        <div>{extra}</div>
      </div>
      <Table bordered columns={columns} dataSource={data} 
        pagination = {{ pageSize: 14, position: ['bottomCenter'] }}
      />
    </div>
  )
}

export default DataTable