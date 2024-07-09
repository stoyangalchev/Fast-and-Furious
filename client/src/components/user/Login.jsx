import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FormValidatorContext } from "../../contexts/FormValidatorContext";
import styles from './Auth.module.css'

export const Login = () => {
    const { setStateFunc } = useContext(AuthContext);
    const { UserValidator, errors } = useContext(FormValidatorContext);

    const [serverError, setServerError] = useState(null);

    const userData = {
        username: "",
        password: "",
    };
    const redirect = useNavigate();
    
    const [user, setUser] = useState(userData);

    const onChangeHandler = (e) => {
        setUser((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
    };
    const loginHandler = (e) => {
        e.preventDefault();
        authService
            .login(user)
            .then((loggedUser) => {
                setStateFunc(loggedUser);
                redirect("/");
            })
            .catch((err) => {
                setServerError(err);
            });
    };
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.col1}>
                    <div className={styles.header}>
                        <h1 className={styles.heading}>
                            <span className={styles.highlight}>Login </span>
                        </h1>
                    </div>
                    <p className={styles.paragraph}>
                        Login into the system to view more information, create new cars, write comments and like content <i className="bi bi-arrow-down"></i>
                    </p>
                </div>
                <div className={styles.col2}>
                    <div className={styles.form}>
                        <form method="POST" onSubmit={loginHandler}>
                            <div className={styles.formContent}>
                                <div className={styles.item}>
                                    <input
                                        type="text"
                                        name="username"
                                        className={styles.input}
                                        placeholder="Username"
                                        value={user.username}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.username}</p>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="password"
                                        name="password"
                                        className={styles.input}
                                        placeholder="Password"
                                        autoComplete="on"
                                        value={user.password}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.password}</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <p className={styles.error}>{serverError}</p>
                                    <button className={styles.btn} type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
