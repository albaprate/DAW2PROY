import React, {useContext} from 'react';
import { MainContext } from '@/contexts/MainContexts';
import Link from 'next/link';
import { CloseOutlined } from '@ant-design/icons';


const ModalOrder = ({setOpenModal}) => {
  const values = useContext(MainContext); 
  // { setOpenModal }
 /*  setTimeout(() => {
     setOpenModal(false);
  }, 3000); */

  return (
    <div className="m-auto h-2/5 text-center border ">
      Tu compra ha sido procesada correctamente
      <Link href="/">
      <CloseOutlined
        onClick={() => {
          setOpenModal(false);
          values.removeCart()
        }}
           
      /> 
       </Link>
      
    </div>
  );
};

export default ModalOrder;
