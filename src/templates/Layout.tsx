import { ReactNode } from 'react'; // es el tipo predeterminado para el atributo de children

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type ILayoutProps = {
  // meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => {
  return (
    <>
      {/*  {props.meta} */}
      <Header />
      <main className="grow">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
