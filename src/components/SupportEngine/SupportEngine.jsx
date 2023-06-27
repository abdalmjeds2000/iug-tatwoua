import React from 'react';
import SupportAvatar from './SupportAvatar';
import ChatRoom from './ChatRoom';

const SupportEngine = () => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.createRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);
  return (
    <div ref={ref}>
      <SupportAvatar onClick={() => setVisible(!visible)} className=' fixed bottom-4 right-4' />
      <ChatRoom visible={visible} />
    </div>
  )
}

export default SupportEngine