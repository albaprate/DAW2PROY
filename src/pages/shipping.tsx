import React from 'react';
import Layout from '@/templates/Layout';

const shipping = () => {
  return (
   <Layout>
       <div className='w-1/4 m-auto mb-8'>
            <p className='text-xl uppercase'>MÉTODOS DE ENVÍO Y COSTE</p>
            <p>Las opciones de envío pueden variar en función de la dirección de entrega, la hora de tu compra y la disponibilidad de los artículos.</p>
            <p>En el momento de procesar tu compra, te mostraremos los métodos de envío disponibles, el coste y la fecha de entrega de tu pedido.</p>
            <p>Posibles opciones de entrega:</p>
            <p className='uppercase font-bold mt-6 mb-0'>Entrega a domicilio:</p>
            <p className='mb-0'>- Entrega garantizada al día siguiente de la compra - 4,95 EUR</p>
            <p className='mt-0'>Pedidos realizados de Lunes a Sábado.</p>
            <p>- Entrega estándar - 3,95 EUR / GRATUITO (PEDIDOS A PARTIR DE 30 EUR)</p>
            <p className='mb-0'>El plazo estimado de entrega oscilará entre 2-3 días laborables, dependiendo de la dirección de entrega.</p>
            <p>En el mismo día de la compra - 5,95 EUR</p>
            <p>Entrega en el mismo día en Madrid para todos los pedidos realizados de lunes a viernes antes de las 14h.</p>
            <p className="uppercase font-bold mt-6 mb-0">Punto de entrega - 3,95 EUR / GRATUITO (PEDIDOS A PARTIR DE 30 EUR)</p>
            <p className='mb-0'>En el punto de entrega que elijas en 2-3 días laborables.</p>
            <p>Te mostraremos los puntos de entrega disponibles en el momento de la compra.</p>
            <p>Recuerda que para recoger tu pedido es necesario que presentes un documento identificativo. Si la persona que acude a recoger el pedido es distinta a la que lo ha comprado, necesitará presentar una autorización escrita y una copia del DNI del comprador.</p>
            <p>Para los pedidos preparados en distintos centros de distribución, te ofreceremos dos opciones:</p>
            <p>- Recibirlo en una única entrega (gratis por compras superiores a 30 EUR)</p>
            <p>-Recibirlo más rápido en varias entregas (con un coste adicional de 2 EUR)</p>
       
       </div>
   </Layout>
  );
}

export default shipping;
