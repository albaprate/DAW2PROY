import React from 'react';
import Layout from '@/templates/Layout';
//import Image from 'next/image';
const aboutUs = () => {
  return (
    <Layout>
    <div className='w-1/4 m-auto mb-8'>
      <div>
          <h3 className='text-xl uppercase'>sobre mí</h3>
  
         {/*  <Image
              key="1"
              alt=""
              src="/public/LCI_Desfilada2019__1868.jpg"
              layout="responsive"
              width="500"
              height="600"
              className="object-cover duration-300  hover:opacity-50 "
            /> */}
      </div>
      <div>Soy Alba y como estudiante de diseño que fui, pretendo que las personas descubran prendas especiales e únicas. 
        Como proyecto de fin de grado, cada año miles de estudiantes realizan colecciones de ropa desde 0. Pensar un concepto, trabajarlo, pensar cómo transmitirlo a través de formas, tejidos y texturas.
        Ahora todas estas prendas tant cuidadas que normalmente quedan en un armario, podrán darse a conocer por el mundo y dejar que alguien las elija.
        Esta web permite ser un portal de venta a nuevos diseñadores y asímismo apoyarlos en el inicio de crear una marca
      </div>
    </div>
</Layout>
  );
}

export default aboutUs;
