import React from 'react';
import DeleteAllUser from '../component/DeleteAllUser';
import  fakeUserData  from '../api/index';  
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slice/UserSlice';
import DisplayUsers from '../component/DisplayUsers';

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  return (
    <>
      <div className='content'>
        <div className='admin-table'>
          <div className='admin-sutitle'>List of User Details</div>
          <button className='add-btn' onClick={() => addNewUser(fakeUserData())}>
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetails;
