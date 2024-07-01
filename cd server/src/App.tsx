import User from './components/user/User'
import { Link, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
export default function App() {
  return (
    <div>App
      <User></User>
      <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Danh sách bài viết</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/add-post">Thêm mới bài viết</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Content>
    </Layout>
    </div>
  )
}