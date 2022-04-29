import React from 'react';

// import { CloseOutlined } from '@ant-design/icons';

const ModalOrder = () => {
  // { setOpenModal }
  setTimeout(() => {
    // setOpenModal(false);
  }, 3000);

  return (
    <div className="m-auto flex h-3/5 w-2/4 items-center justify-center border transition duration-300">
      Tu compra ha sido procesada correctamente
      {/*  <CloseOutlined
        onClick={() => {
          setOpenModal(false);
        }}
      /> */}
    </div>
  );
};

export default ModalOrder;
