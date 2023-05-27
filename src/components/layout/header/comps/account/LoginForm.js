import React from "react";
import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  UsersContext,
  WhichUserIsLoggedInContext,
  IsShowModalAccountContext,
} from "../../../../Context";

const LoginForm = () => {
  const { users } = useContext(UsersContext);
  const { whichUserLogIn, setWhichUserLogIn } = useContext(
    WhichUserIsLoggedInContext
  );
  const { setIsShowModalAccount } = useContext(IsShowModalAccountContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userNameL: "",
      passwordL: "",
    },
  });

  const onSubmit = (data) => {
    const isUserThereInData = users.find(
      (user) =>
        user.username === data.userNameL && user.password === data.passwordL
    );
    if (isUserThereInData) {
      alert("you logged in successfully");
      setWhichUserLogIn(isUserThereInData);
      setIsShowModalAccount(false);
    }
    // --
  };
  console.log("hi in login page");
  useEffect(() => {
    localStorage.setItem("WHICH_USER_LOGIN", JSON.stringify(whichUserLogIn));
  }, [whichUserLogIn]);

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-group">
          <input
            {...register("userNameL", {
              required: "Fill the field",
              minLength: { value: 4, message: "Please fill the 4 char" },
            })}
            placeholder="username"
          />
          <p>{errors.userNameL?.message}</p>
          <input
            {...register("passwordL", {
              required: true,
              minLength: {
                value: 4,
                message: "you have to fill the min 4 char",
              },
            })}
            placeholder="password"
            type="password"
          />
          <div className="rem-pass-group">
            <input type="checkbox" id="remPass" />
            <label htmlFor="remPass">remember username & password</label>
          </div>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
