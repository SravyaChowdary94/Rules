// import logo from './logo.svg';
import './App.css';
import Rules from './components/Rules/Rules';
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
function App() {
  const sidebarItems = [
    {name:'DASHBOARD', img :"../../assets/images/dashboard.png"},
    {name:'TEAMS',img : './assets/images/dashboard.png'},
    {name:'RULES',img : './assets/images/dashboard.png'},
    {name:'TEST',img : './assets/images/dashboard.png'},
    {name:'PROJECT DELIVERY',img : './assets/images/dashboard.png'},
    {name:'STATISTICS',img : './assets/images/dashboard.png'},
    {name:'STATISTICS',img : './assets/images/dashboard.png'},
    {name:'LOGS',img : './assets/images/dashboard.png'},
  ];
  return (
    <>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
                <Header></Header>
            </div>
          </div>
          <div className='row'> 
            <div className='col-2'>
              <Sidebar data={sidebarItems}></Sidebar>
            </div>
            <div className='col-10'>
              <Rules></Rules>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
