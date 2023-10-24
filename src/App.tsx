import "./components/Header";

import './App.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-row pt-8 pb-8">
        <aside className="pr-4">
          <Sidebar />
        </aside>
        <div className="pl-4">
          <Outlet />
        </div>
      </div>
    </>
    
  )
}

export default App
