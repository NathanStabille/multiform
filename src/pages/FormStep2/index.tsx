import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { FormActions, useForm } from "../../Contexts/FormContext";
import { Layout } from "../../Layout";
import * as C from "./style";

export const FormStep2 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 2 });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Enter your name");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Layout>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <C.Container>
          <p>Step 2/3</p>
          <h1>{state.name}, what best describes you?</h1>
          <p>
            Choose the option that matches your current status, professionally.
          </p>
          <hr />

          <SelectOption
            title="I'm a beginner"
            description="I started programming in less than 2 years"
            icon="🎓"
            selected={state.level === 0}
            onClick={() => setLevel(0)}
            interaction
          />

          <SelectOption
            title="I am a programmer"
            description="I have more than 2 years of experience"
            icon="🧑‍💻"
            selected={state.level === 1}
            onClick={() => setLevel(1)}
            interaction
          />

          <Link to="/">
            <button>PREV</button>
          </Link>
          <button onClick={handleNextStep}>NEXT</button>
        </C.Container>
      </motion.div>
    </Layout>
  );
};
