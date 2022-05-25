import { useRouter } from 'next/router';

// import { Meta } from '@/layout/Meta';
import Layout from '@/templates/Layout';

const Index = () => {
  const router = useRouter();

  return (
    /* <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>main</h1>
    </Main> */

    <Layout>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 z-30 flex h-full w-full flex-col items-center justify-center">
          <div className="text-5xl font-bold text-white uppercase font-viga text-center">descubre <br></br>nuevos talentos</div>
          <div className="text-3xl text-white uppercase">encuentra prendas únicas</div>
        </div>
        <img
          className="m-auto my-7 h-2/6 w-2/4"
          src={`${router.basePath}/plisado.jpg`}
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Index;
