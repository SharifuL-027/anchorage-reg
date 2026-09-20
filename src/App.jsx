import { Outlet } from 'react-router';
import Navbar from './components/Pages/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="grow w-full">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
export default App;