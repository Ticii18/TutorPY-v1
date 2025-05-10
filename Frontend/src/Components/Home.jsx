import SlowMotion from "./SlowMotion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <SlowMotion>
        <section className="lg:h-screen bg-white dark:bg-gray-900 flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4 py-16 sm:px-6 flex flex-col md:flex-row items-center gap-12 lg:px-8 lg:py-32">
            <div className="max-w-prose">
              <h1 className="text-yellow-300 text-4xl font-bold sm:text-5xl">
                Python:
                <strong className="text-blue-600"> Ciencia de datos </strong>
              </h1>
              <p className="mt-4 text-base sm:text-lg/relaxed text-gray-700 dark:text-gray-200">
                Python es bla bla bla.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  className="inline-block rounded border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  href="https://www.python.org/doc/"
                >
                  Documentación Oficial
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-md h-auto dark:fill-red-600"
                src="/undraw_coding_joxb.svg"
                alt="Ilustración de programación en Python"
              />
            </div>
          </div>
        </section>
      </SlowMotion>

      <SlowMotion>
        <section className="lg:h-screen bg-white dark:bg-gray-900 flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4 py-16 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12 lg:px-8 lg:py-32">
            <div className="max-w-prose">
              <h1 className="text-yellow-300 text-4xl font-bold sm:text-5xl">
                Python:
                <strong className="text-blue-600"> Ciencia de datos </strong>
              </h1>
              <p className="mt-4 text-base sm:text-lg/relaxed text-gray-700 dark:text-gray-200">
                La ciencia de datos es bla bla bla.
              </p>
              <div className="mt-6 flex gap-4">
                <Link 
                to="/document"
                className="inline-block rounded border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                
                >
                  Leer más
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-md h-auto"
                src="/undraw_visual-data_3ghp.svg"
                alt="Ilustración de ciencia de datos"
              />
            </div>
          </div>
        </section>
      </SlowMotion>

      <SlowMotion>
        <section className="lg:h-screen bg-white dark:bg-gray-900 flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4 py-16 sm:px-6 flex flex-col md:flex-row items-center gap-12 lg:px-8 lg:py-32">
            <div className="max-w-prose">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                TutorPY:
                <strong className="text-indigo-600"> Sobre nosotros </strong>
              </h1>
              <p className="mt-4 text-base sm:text-lg/relaxed text-gray-700 dark:text-gray-200">
                Somos bla bla bla.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  className="inline-block rounded bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
                  href="#"
                >
                  Empezar
                </a>
                <a
                  className="inline-block rounded border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  href="#"
                >
                  Leer más sobre nosotros
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-md h-auto"
                src="/undraw_meet-the-team_pp46.svg"
                alt="Ilustración de equipo"
              />
            </div>
          </div>
        </section>
      </SlowMotion>
    </>
  );
}

export default Home;
