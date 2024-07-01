import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchPosts } from '../store/reducers/postsSlice';
export default function PostList() {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postStatus = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {postStatus === 'loading' && <div>Loading...</div>}
      {postStatus === 'succeeded' && (
        <ul>
          {posts.map((post:any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {postStatus === 'failed' && <div>{error}</div>}
    </div>
  )
}