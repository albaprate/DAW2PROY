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
    <div className="m-auto h-3/5 justify-center  align-middle border border-black flex">
     <p className='p-0 mr-3 text-base sm:text-xs'>Tu compra ha sido procesada correctamente</p> 
     
      <Link href="/">
      <CloseOutlined
        className='mt-1'
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
