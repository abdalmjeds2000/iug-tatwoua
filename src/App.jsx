import { ConfigProvider, Layout, theme } from 'antd'
import './App.css'
import logo from './assets/IUG_logo.jpg'
import { StyleProvider } from '@ant-design/cssinjs';
import AppRouter from './AppRouter';
import { Link } from 'react-router-dom';
function App() {

  return (
    <ConfigProvider
      direction="rtl"
        theme={{
            token: {
              colorPrimary: "#2969B0",
              fontFamily: "Noto Kufi Arabic, Arial, sans-serif",
            },

        }}
      >
      <StyleProvider hashPriority="high">
        <Layout style={{ minHeight: '100vh'}}>
          <Layout.Header 
            className='p-0 sticky top-0 z-50 border-b' 
            style={{ background: "transparent", backdropFilter: 'blur(25px)' }}
          >
            <div className='flex justify-center'>
              <Link to='/'>
                <img 
                  src={logo}
                  alt='logo'
                  className='w-20 z-10 shadow-lg rounded-full mt-5'
                  style={{ width: '75px' }}
                />
              </Link>
            </div>
          </Layout.Header>
          <Layout.Content className='mx-3 my-6 md:my-12'>
            <AppRouter />
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            IUG © 2023{/* Created by <Typography.Link href='https://twitter.com/abdalmjeds2000'>AbdAlmjed Skaik</Typography.Link> */}
          </Layout.Footer>
        </Layout>
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
