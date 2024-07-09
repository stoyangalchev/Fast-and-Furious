import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FormValidatorContext } from "../../contexts/FormValidatorContext";
import styles from "./Auth.module.css";

export const Register = () => {
    const userData = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    };

    const { setStateFunc } = useContext(AuthContext);
    const { UserValidator, errors } = useContext(FormValidatorContext);

    const [user, setUser] = useState(userData);
    const [serverError, setServerError] = useState(null);

    const redirect = useNavigate();

    const onChangeHandler = (e) => {
        setUser((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
    };

    const registerHandler = async (e) => {
        e.preventDefault();

        authService.register(user).then((loggedUser) => {
        
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
                            <span className={styles.highlight}>Register </span>
                        </h1>
                    </div>
                    <p className={styles.paragraph}>
                        Register into the system to view more information, create new cars, write comments and like content{" "}
                        <i className="bi bi-arrow-down"></i>
                    </p>
                </div>
                <div className={styles.col2}>
                    <div className={styles.form}>
                        <form method="POST" onSubmit={registerHandler}>
                            <div className={styles.formContent}>
                                <div className={styles.item}>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        name="firstname"
                                        placeholder="First Name"
                                        value={user.firstname}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.firstname}</p>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={user.lastname}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.lastname}</p>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        name="username"
                                        placeholder="Username"
                                        value={user.username}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.username}</p>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="email"
                                        className={styles.input}
                                        name="email"
                                        placeholder="Email"
                                        value={user.email}
                                        onBlur={UserValidator}
                                        onChange={onChangeHandler}
                                    />
                                    <p className={styles.error}>{errors?.email}</p>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="password"
                                        className={styles.input}
                                        name="password"
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
                                        Register
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
