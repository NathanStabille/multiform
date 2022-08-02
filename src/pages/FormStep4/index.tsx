import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { FormActions, useForm } from "../../Contexts/FormContext";
import { Layout } from "../../Layout";
import * as C from "./style";

export const FormStep4 = () => {
  const { state, dispatch } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 4 });
    }
  }, []);

  return (
    <Layout>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <C.Container>
          <p>Registration completed.</p>
          <h1>Your data has been successfully registered.</h1>
          <hr />

          <C.DataArea>
            <h1>Your data</h1>
            <hr />
            <h1>{state.name}</h1>
            {state.level === 0 && (
              <SelectOption
                title="I'm a beginner"
                description="I started programming in less than 2 years"
                icon="🎓"
                selected={false}
                interaction={false}
              />
            )}

            {state.level === 1 && (
              <SelectOption
                title="I am a programmer"
                description="I have more than 2 years of experience"
                icon="🧑‍💻"
                selected={false}
                interaction={false}
              />
            )}
            <h2>{state.email}</h2>
            <h2>{state.github}</h2>
          </C.DataArea>
        </C.Container>
      </motion.div>
    </Layout>
  );
};
