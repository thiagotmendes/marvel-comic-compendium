import "./components/Header";

import './App.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 mb-8 pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="wrapper">
          <aside>
            <Sidebar />
          </aside>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default App
