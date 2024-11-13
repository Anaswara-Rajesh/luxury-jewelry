import Header from './Header';

const MainLayout: React.FC = ({ children }:any) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default MainLayout;
