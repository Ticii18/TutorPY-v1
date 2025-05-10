import Logo from "../../public/Logo.svg"
import ChangeButton from "./ChangeButton";
import { Link } from 'react-router-dom';
import Tasks from "./Tasks";

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 dark:border dark:border-slate-800 border border-slate-700">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <a className="block text-teal-600 dark:text-teal-300" href="Hola">
                            <span className="sr-only">Home</span>
                            <img src={Logo} alt="Logo" className="h-8" />
                        </a>

                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/tasks"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                Tareas
                            </Link>
                            <a
                                href="#"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                History
                            </a>
                            <a
                                href="#"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                Projects
                            </a>
                            <a
                                href="#"
                                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                Blog
                            </a>
                        </div>
                    </div>

                    {/* Parte derecha - Buscador y botones */}
                    <div className="flex items-center gap-4">

                        <div className="flex gap-2">
                            <a
                                className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 dark:hover:bg-teal-500"
                                href="#"
                            >
                                Login
                            </a>
                            <a
                                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Register
                            </a>


                        </div>
                            <ChangeButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;