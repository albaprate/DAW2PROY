import React from 'react';
import Layout from '@/templates/Layout';
const Questions = () => {
  return (
        <Layout>
            <div className='w-1/4 m-auto mb-8'>
            <p className='text-xl uppercase'>preguntas frecuentes</p>
                <p className='underline'>
                01. ¿Cuánto tarda en llegar mi pedido y cuánto cuesta el envío?</p>
                <p>Ofrecemos diferentes tipos de envío. Para mayor información, visita nuestra sección Información de envío.</p>
                <p className='underline'>02. ¿Puedo cambiar un artículo?</p>
                <p>No ofrecemos cambios directos. Para poder cambiar un producto deberás realizar un nuevo pedido y realizar la devolución del que quieres cambiar. Sigue nuestras instrucciones de devolución para devolver un artículo en su forma original y conseguir el reembolso.</p>
                <p className='underline'>03. ¿Puedo añadir artículos a un pedido ya realizado?</p>
                <p>Una vez tu pedido haya sido procesado, no podremos añadir productos a éste. Si quieres añadir más artículos, por favor, vuelve a realizar un nuevo pedido.</p>
                <p className='underline'>04. ¿Tengo que firmar mi pedido?</p>
                <p>Debido al alto valor de los artículos que vendemos, necesitamos una prueba de entrega para todos los pedidos. Esto significa que no podemos autorizar que los paquetes se entreguen sin una firma.</p>
                <p className='underline'>05. ¿Qué hago si he perdido mi etiqueta de devolución?</p>
                <p>Te proporcionaremos una nueva etiqueta. Para ello, ponte en contacto con nuestro equipo de atención al cliente.</p>
                <p className='underline'>06. ¿Qué métodos de pago aceptáis?</p>
                <p>Por favor, haz clic en PAGOS para más información sobre nuestras opciones de pago.</p>
            </div>
        </Layout>
  );
}

export default Questions;
