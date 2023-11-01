import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../feauters/shop/shopAPI";

const SignUp = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const save = (obj) => {
    dispatch(registerUser(obj))
      .unwrap()
      .then((r) => {
        if (r.errors) {
          for (let k in r.errors) {
            r.errors[k].forEach((elm) => {
              console.log(elm);
              setError(k, { message: elm });
            });
          }
        } else {
          navigete("/");
        }
      });
    
  };

  return (
    <>
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close window</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit(save)}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  {...register("first_name", { required: "Fill Fields" })}
                />
                {errors.first_name && (
                  <p className="text-danger">{errors.first_name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Surname"
                  {...register("last_name", { required: "Fill Fields" })}
                />
                {errors.last_name && (
                  <p className="text-danger">{errors.last_name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                  {...register("email", { required: "Fill Fields" })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Username"
                  required
                  {...register("username", { required: "Fill Fields" })}
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  {...register("password1", { required: "Fill Fields" })}
                />
                {errors.password1 && (
                  <p className="text-danger">{errors.password1.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Repeate your password
                </label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  {...register("password2", { required: "Fill Fields" })}
                />
                {errors.password2 && (
                  <p className="text-danger">{errors.password2.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-between">
                <span>Already have an account?</span>
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
