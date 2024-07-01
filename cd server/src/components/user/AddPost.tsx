import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Modal } from 'antd';
const { TextArea } = Input;
export default function AddPost() {
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async () => {
      if (!title || !thumbnail || !content || !category) {
        Modal.warning({
          title: 'Cảnh báo',
          content: 'Tên bài viết không được phép để trống',
        });
        return;
      }
  
      try {
        await axios.post('http://localhost:8080/posts', {
          title,
          thumbnail,
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        navigate('/');
      } catch (error) {
        console.error('Failed to save the post:', error);
      }
    };
  
  return (
    <Form>
      <Form.Item label="Tên bài viết">
        <Input value={title} onChange={(e:any) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Input value={thumbnail} onChange={(e:any) => setThumbnail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Thể loại">
        <Input value={category} onChange={(e:any) => setCategory(e.target.value)} />
      </Form.Item>
      <Form.Item label="Nội dung">
        <TextArea value={content} onChange={(e:any) => setContent(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Xuất bản
        </Button>
      </Form.Item>
    </Form>
  )
}