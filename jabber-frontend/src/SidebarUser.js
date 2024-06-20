// SidebarUser.js
import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function SidebarUser({ id, name, image }) {
  return (
    <Link to={`/rooms/${id}`} className="no-underline text-black">
      <div className="flex items-center p-3 cursor-pointer rounded-xl bg-gray-900 hover:bg-gray-800 hover:scale-105 transition-transform duration-200 ">
        <Avatar src={image} />
        <div className="ml-4 flex-1">
          <h3 className="text-white text-base mb-2">{name}</h3>
          {/* <p className="text-gray-400 text-sm">{messages[0]?.Message}</p> */}
        </div>
        
      </div>
    </Link>
  );
}

export default SidebarUser;
