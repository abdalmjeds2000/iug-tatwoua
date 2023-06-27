import { Button, Typography } from 'antd';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleOutlined } from '@ant-design/icons';

const SignInComponent = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Typography.Title level={3} style={{ color: '#fff' }}>
        أهلاً بك في دعم الطلاب
      </Typography.Title>
      <Typography.Text style={{ color: '#fff', marginBottom: 20 }}>
        قم بتسجيل الدخول للمتابعة
      </Typography.Text>
      <Button type='primary' style={{background: '#eee', color: '#2969B0'}} size='large' icon={<GoogleOutlined />} onClick={signInWithGoogle}>
        الدخول بحساب جوجل
      </Button>
    </div>
  )
}

const SignOutComponent = () => {
  const auth = getAuth();

  return auth.currentUser && (
    <Button type='primary' size='large' onClick={() => auth.signOut()}>
      Sign out
    </Button>
  )
}


const ChatRoom = ({ visible }) => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <div 
      style={{ transform: visible ? 'scale(1)' : 'scale(0)', maxHeight: "calc(100% - 175px)", maxWidth: "calc(100% - 40px)" }} 
      className={`fixed bottom-24 right-6 z-50 w-[400px] h-[520px] max-w-full max-h-full bg-[${user ? '#ffffff' : '#2969B0'}] rounded-xl overflow-hidden drop-shadow-lg origin-bottom-right transition-transform duration-300`}
    >
      {
        user ? <SignOutComponent /> : <SignInComponent />
      }
    </div>
  )
}

export default ChatRoom