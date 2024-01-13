import React from 'react';
//import { deleteUsers } from '../store/slice/UserSlice';
import { useDispatch } from 'react-redux';
import { clearAllUsers } from '../store/actions';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAllUsers());
    // Add logic to clear all users
    console.log('Clear All button clicked');
  };

  return (
    <>
      <button className='btn-delete' onClick={handleClick}>Clear All</button>
    </>
  );
};

export default DeleteAllUser;
