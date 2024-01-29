import { Outlet, Link, useLocation } from "react-router-dom"


export default function Layout() {

     const location = useLocation();

  return (
    <>
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
            <nav className="mt-10 flex justify-center items-center flex-col gap-5">
                <Link  className={`${location.pathname === '/' ? 'text-blue-900 bg-white p-2 rounded-lg' : 'text-white'} text-2xl block mt-2 hover:text-blue-40`}  to="/">Clientes</Link>
                <Link  className={` ${location.pathname === '/customers/new' ? 'text-blue-900 bg-white p-2 rounded-lg' : 'text-white'} text-2xl block mt-2 hover:text-blue-40`} to="/customers/new">Nuevo Cliente</Link>
            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
        </main>
    </div>
    </>
  )

}
