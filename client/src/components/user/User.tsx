import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getAllUsers } from "../../store/reducers/userReducer"
import { useEffect } from "react";
export default function User() {
    // lay data ve dung useSelector
    const data:any = useSelector(state=>state);
    const disPatch=useDispatch();
    useEffect(()=>{
        disPatch(getAllUsers());
    },[])
    const HandleDeleteUser=(id:number)=>{
      console.log(11111,id);
      let confirmDelete=window.confirm('ban co muon xoa hay khong');
      if (confirmDelete){
        disPatch(deleteUser(id))
      }
    }
    
  return (
    <div>User
      <ul>
        {data.userReducer.users.map((user:any)=>{
          return <li key={user.id}>{user.name}
            <button onClick={()=> HandleDeleteUser(user.id)}>Xoa</button>
          </li>
        })}
      </ul>
    </div>
  )
}
