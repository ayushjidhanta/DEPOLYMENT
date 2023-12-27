// Inbuilt Components
import styles from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components & Assets include:
import { Icons } from "../../assets/Icons/Icons";
import Spinner from "../../assets/Spinner/Spinner";
import AlertDialog from "../../assets/AlertDialog/AlertDialog";
import TextField from "../../assets/InputFields/TextField/TextField";
import PasswordField from "../../assets/InputFields/PasswordField/PasswordField";
import PrimaryButton from "../../assets/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../assets/Button/SecondaryButton/SecondaryButton";

// Services
import { loginuser } from "../../service/api";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const [alertDialog, setAlertDialog] = useState({
    isOpen: false,
    message: "",
  });

  const [spinner, setSpinner] = useState(false);

  const credentialHandler = (field, value) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const setName = (e) => credentialHandler("name", e.target.value);
  const setPassword = (e) => credentialHandler("password", e.target.value);

  const alertDialogHandler = (field, value) => {
    setAlertDialog((prev) => ({ ...prev, [field]: value }));
  };

  const showAlert = (message) => {
    alertDialogHandler("isOpen", true);
    alertDialogHandler("message", message);
  };

  const authHandler = async (e) => {
    if (!credentials.name || !credentials.password) {
      showAlert(
        !credentials.name
          ? "Please Enter The Username"
          : "Please Enter The Password"
      );
      return;
    }

    setSpinner(true);

    try {
      const response = await loginuser(credentials);

      if ((response.statusText = "OK")) {
        setSpinner(false);
        // navigate("/home");
      } else {
        setSpinner(false);
        showAlert(new String(response));
      }
    } catch (error) {
      setSpinner(false);
      showAlert(error);
    }
  };

  return (
    <>
      <AlertDialog
        isOpen={alertDialog.isOpen}
        alertMessage={alertDialog.message}
        handlerFunction={alertDialogHandler}
      />
      <Spinner show={spinner} />
      <div className={styles.login_page}>
        <div className={styles.form_wrapper}>
          <h1 className={styles.h1}>Login</h1>
          <div className={styles.form}>
            <TextField placeholder="Username" event={setName} />
            <PasswordField placeholder="Password" event={setPassword} />
            <PrimaryButton event={authHandler} title="Sign In" />
            <SecondaryButton
              event={() => navigate("/signup")}
              title="Sign Up"
            />
            <div className={styles.social_icons}>
              <span>{Icons.facebook}</span>
              <span>{Icons.google}</span>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
};

export default Login;
