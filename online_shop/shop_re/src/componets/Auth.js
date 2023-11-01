import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../feauters/shop/shopAPI";

export const Auth = () => {
  const [respone, setResponse] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.user) {
      navigate("/signIn");
    } else {
      dispatch(getUser())
        .unwrap()
        .then((r) => {
          setResponse(true);
        })
        .catch(() => {
          navigate("/signIn");
        });
    }
  }, []);
  return (
    <>
      <>
        <header>
          <nav>
            <h3>logined</h3>
            <button
              onClick={() => {
                dispatch(logoutUser())
                  .unwrap()
                  .then((r) => {
                    localStorage.removeItem("user");
                    navigate("/");
                  });
              }}
            >
              LOGOUT
            </button>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </>
      <Outlet />
    </>
  );
};
