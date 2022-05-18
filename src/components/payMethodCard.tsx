import React from 'react';

interface IPayMethodCard {
    key: number;
    name: string;
    image: string;
  }
const PayMethodCard = (props: IPayMethodCard) => {
  return (
    <>
    <div className="h-auto">
     
      <div className=" p-0 text-xs">
          <img src={props.image} alt="" />
        <div className="">
          <h3 className="mb-1 mr-3 text-gray-900">
            {props.name}
          </h3>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default PayMethodCard;
