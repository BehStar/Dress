import React from "react";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../../../Context";

const RegisterForm = ({ setLastRegUser }) => {
  const { users, setUsers } = useContext(UsersContext);
  const [addUser, setAddUser] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userNameR: "", emailR: "", passwordR: "" } });
  const onSubmit = (data) => {
    const lenUsers = users.length;
    const isUsernameExist = users.some(
      (user) => user.username === data.userNameR
    );
    const isEmailExist = users.some((user) => user.email === data.emailR);
    const isUserExistforR = users.every(
      (user) => user.email !== data.emailR && user.username !== data.usernameR
    );
    if (isUsernameExist) {
      alert("username is exist already. choose a new one");
    } else if (isEmailExist) {
      alert("Email is exist already. choose a new one");
    } else if (isUserExistforR) {
      setAddUser({
        id: lenUsers + 1,
        username: data.userNameR,
        email: data.emailR,
        password: data.passwordR,
        address: [],
        tickets: [],
      });
      alert(" Your Registery is successfully");
    }
  };
  //   ================
  //  بعد از اینکه کاربر رجیستری را  انجام داد و با موفقیت اطلاعت ثبت شد، این پنجره بسته وارد پنجره لاگین می شود
  useEffect(() => {
    if (addUser) {
      setUsers([...users, addUser]);
      setLastRegUser(addUser);
    }
  }, [addUser]);
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-group">
          <input
            {...register("userNameR", {
              required: "Fill the field",
              minLength: { value: 4, message: "Please fill the 4 char" },
            })}
            placeholder="username"
          />
          <p>{errors.userNameR?.message}</p>
          <input
            {...register("emailR", { required: "Fill the field" })}
            placeholder="email"
            type="email"
          />
          <p>{errors.emailR?.message}</p>
          <input
            {...register("passwordR", {
              required: true,
              minLength: {
                value: 4,
                message: "you have to fill the min 4 char",
              },
            })}
            placeholder="password"
            type="password"
          />
          <p>{errors.passwordR?.message}</p>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
