import { Avatar, Tooltip } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

const SupportAvatar = ({ className, onClick }) => {
  return (
    <div className={className} onClick={() => onClick && onClick()}>
      <Tooltip title='الدعم' mouseEnterDelay={0.7} placement='left'>
        <Avatar 
          size='large' 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: "3px solid #2969B0", width: '60px', height: '60px', background: '#2969B0' }}
          className='shadow-xl hover:drop-shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300'
        >
          <CommentOutlined style={{ fontSize: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
        </Avatar>
      </Tooltip>
    </div>
  )
}

export default SupportAvatar