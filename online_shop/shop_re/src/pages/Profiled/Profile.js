import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../../feauters/shop/shopAPI";

export const Profile = () => {
  const { user } = useSelector((st) => st.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div>
        Name <h3>{user.first_name}</h3>
      </div>
      <div>
        Surname <h3>{user.last_name} </h3>
      </div>
      <Outlet />
    </>
  );
};
