import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getCategory,
  getCountry,
} from "../../feauters/shop/shopAPI";

export const AddProduct = () => {
  const { country, category } = useSelector((st) => st.shop);
  const dispatch = useDispatch();
  const [rate, setRate] = useState(3);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    dispatch(getCountry());
    dispatch(getCategory());
  }, []);
  console.log(country);
  console.log(category);
  const save = (data) => {
    data.image = data.image[0];
    console.log(data);
    dispatch(addProduct(data))
      .unwrap()
      .then((r) => {
        if (r.errors) {
          for (let k in r.errors) {
            r.errors[k].forEach((elm) => {
              console.log(k,elm);
              setError(k, { message: elm });
            });
          }
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <div>
          <label>Name</label>
          <input {...register("name", { required: "Fill Fields" })} />
          {errors.name && <p className="text-red-800">{errors.name.message}</p>}
        </div>
        <div>
          <label>Price</label>
          <input />
        </div>
        <div>
          <label>Count</label>
          <input {...register("count", { required: "Fill Fields" })} />
          {errors.price && (
            <p className="text-red-800">{errors.price.message}</p>
          )}
        </div>
        <div>
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: "Fill Fields" })}
          />
          {errors.image && (
            <p className="text-red-800">{errors.image.message}</p>
          )}
        </div>
        <div>
          <label>Category</label>
          <select {...register("category", { required: "Fill Fields" })}>
            
            {category.map((elm) => {
              return <option key={elm.id} value={elm.id}>{elm.category_name}</option>;
            })}
          </select>
          {errors.category && (
              <p className="text-red-800">{errors.category.message}</p>
            )}
        </div>
        <div>
          <label>Description</label>
          <textarea {...register("description", { required: "Fill Fields" })}>
            {errors.description && (
              <p className="text-red-800">{errors.description.message}</p>
            )}
          </textarea>
        </div>
        <div>
          <label>Country</label>
          <select {...register("country", { required: "Fill Fields" })} multiple>
           
            {country.map((elm) => {
              return <option key={elm.id} value={elm.id}>{elm.country_name}</option>;
            })}
          </select>
          {errors.country && (
              <p className="text-red-800">{errors.country.message}</p>
            )}
        </div>
        <button>Add Product</button>
      </form>
    </div>
  );
};
