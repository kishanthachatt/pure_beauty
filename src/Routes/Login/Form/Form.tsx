import * as React from "react";
import { Formik } from "formik";
import { Spin, notification } from "antd";
import { useNavigate } from "react-router";

import { schema } from "./Form.constant";
import { LoginParams } from "../../../API/Login/Login.interface";
import { login } from "../../../API/Login";

import cn from "./Form.module.scss";
import { ROUTE } from "../../../Routes.constant";

export function Form() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onFormSubmit = async (values: LoginParams) => {
    setLoading(true);
    const response = await login(values);
    if (response.error) {
      setLoading(false);
    } else {
      notification.success({
        message: (
          <div style={{ color: "#842a3a" }}>You have sucessfully Login!</div>
        ),
        style: { backgroundColor: "#fdf2db" },
      });
      localStorage.setItem("bearer", response.jwt_token);
      navigate(ROUTE.BLOG);
      setLoading(false);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        onFormSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div>
          <form
            noValidate
            onSubmit={handleSubmit}
            className={cn.form}
            autoComplete="off"
          >
            <div>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <p className={cn.error}>
                {errors.username && touched.username && errors.username}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={cn.error}>
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div>
              <button className={cn.button} type="submit">
                Login
                {loading && <Spin style={{ color: "white" }} />}
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}
