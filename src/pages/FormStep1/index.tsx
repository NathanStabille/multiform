import { ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../Contexts/FormContext";
import { Layout } from "../../Layout";
import * as C from "./style";

export const FormStep1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({ type: FormActions.setCurrentStep, payload: 1 });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Enter your name");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setName, payload: e.target.value });
  };

  return (
    <Layout>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <C.Container>
          <p>Step 1/3</p>
          <h1>Let's start with your name</h1>
          <p>Fill in the field below with your full name</p>
          <hr />

          <label>
            Your full name :
            <input
              type="text"
              autoFocus
              value={state.name}
              onChange={handleNameChange}
            />
          </label>

          <button onClick={handleNextStep}>NEXT</button>
        </C.Container>
      </motion.div>
    </Layout>
  );
};
