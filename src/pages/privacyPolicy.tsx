import React from 'react';
import Layout from '@/templates/Layout';

const privacyPolicy = () => {
  return (
        <Layout>
            <div className='w-2/4 m-auto mb-8'>
                <p className='text-xl uppercase'>política de privacidad</p>
            <p>
                Este informe sobre la protección de datos personales proporciona a los usuarios de este sitio web 
                un resumen lo más completo posible sobre el tratamiento de los datos personales relacionados con su persona, 
                según se describe a continuación, mediante el Sitio según el Reglamento General de Protección de Datos (RGPD) (UE) 
                2016/679 y los reglamentos italianos para la protección de datos personales.
            </p>
            <p>Cumpliendo con los reglamentos aplicables, este Informe sobre la Protección de Datos Personales explica también:</p>
            <p>la naturaleza de los datos personales tratados (según se definen a continuación);</p>
            <p>los propósitos del tratamiento y los medios involucrados en el tratamiento;</p>
            <p>la identidad y los detalles de contacto de los titulares del tratamiento de los datos;</p>
            <p>los detalles de contacto del Responsable de la Protección de Datos (RPD);</p>
            <p>posibles terceros involucrados en las actividades de tratamiento;</p>
            <p>el período de almacenamiento de los datos personales;</p>
            </div>
        </Layout>
  );
}

export default privacyPolicy;
