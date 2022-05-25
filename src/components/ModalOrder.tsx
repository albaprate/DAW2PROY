import React from 'react';

 import { CloseOutlined } from '@ant-design/icons';


const ModalOrder = ({setOpenModal}) => {
  // { setOpenModal }
 /*  setTimeout(() => {
     setOpenModal(false);
  }, 3000); */

  return (
    <div className="m-auto h-2/5 text-center border ">
      Tu compra ha sido procesada correctamente
        <CloseOutlined
        onClick={() => {
          setOpenModal(false);
        }}
      /> 
    </div>
  );
};

export default ModalOrder;
