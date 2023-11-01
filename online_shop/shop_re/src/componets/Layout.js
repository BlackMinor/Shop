import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import SignIn from "../pages/SignIn";
import { logoutUser } from "../feauters/shop/shopAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!localStorage.user) {
    
    return (
      <>
        <header>
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <Link to={""} className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Shopius
                  </span>
                </Link>
              </div>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to={"/"}
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div>
                      <button
                        data-modal-target="authentication-modal"
                        data-modal-toggle="authentication-modal"
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                        onClick={() => setHiddenModal(!hiddenModal)}
                      >
                        Sign In
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="absolute">{hiddenModal && <SignIn />}</div>
          <Outlet />
        </main>
      </>
    );
  }
};

export default Layout;
