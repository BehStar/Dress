//you have to install( npm install @hookform/resolvers yup)
import React from "react";
import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { UsersContext, WhichUserIsLoggedInContext } from "../../../Context";
const ResetPassword = () => {
  const { users, setUsers } = useContext(UsersContext);
  const { whichUserLogIn } = useContext(WhichUserIsLoggedInContext);
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (data) => {
    const newUpdatePass = users.map((user) => {
      if (user.id === whichUserLogIn.id) {
        return { ...user, password: data.password };
      } else {
        return user;
      }
    });
    setUsers(newUpdatePass);
  };
  //USERS-CONTEXT harvaght change shod dar localStorage ham change shavd
  //fek konam useMemo bayad dar ayande estefade shavad
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
    console.log("hello from rreset-pass useEffect USERS");
  }, [users]);
  return (
    <div className="sub-comp-dash">
      <div className="container-sub-com-dash">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPwd"
              type="password"
              {...register("confirmPwd")}
              className={`form-control ${
                errors.confirmPwd ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          </div>
          <button type="submit" className="btn-reset-pass">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
