import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUsers = () => {
    const dispatch=useDispatch();
    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }
  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <Wrapper>
      {data.map((user, id) => {
        return <li key={id}>{user}
         <button className="btn-delete" onClick={()=>deleteUser(id)}>
           <MdDeleteForever className="delete-icon"/>
         </button>
        </li>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Add your styles here if needed */
`;

export default DisplayUsers;
