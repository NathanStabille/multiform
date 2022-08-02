import { ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../Contexts/FormContext";
import { Layout } from "../../Layout";
import * as C from "./style";

export const FormStep3 = () => {
  const { state, dispatch } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 3 });
    }
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGithub, payload: e.target.value });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/concluded");
    } else {
      alert("Fill in the fields.");
    }
  };

  return (
    <Layout>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <C.Container>
          <p>Step 3/3</p>
          <h1>{state.name}, how do we find you?</h1>
          <p>Fill in your details so we can get in touch.</p>
          <hr />

          <label>
            What is your email?
            <input
              type="email"
              value={state.email}
              onChange={handleEmailChange}
            />
          </label>

          <label>
            What is your Github?
            <input
              type="url"
              value={state.github}
              onChange={handleGithubChange}
            />
          </label>

          <Link to="/step2">
            <button>PREV</button>
          </Link>
          <button onClick={handleNextStep}>FINALIZE</button>
        </C.Container>
      </motion.div>
    </Layout>
  );
};
