import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { SidebarItem } from "../components/SidebarItem";
import { useForm } from "../Contexts/FormContext";
import * as C from "./style";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Personal"
              description="Identify yourself"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Professional"
              description="Your level"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contacts"
              description="How to find you"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />

            {state.email !== "" && state.github !== "" && (
              <SidebarItem
                title="Concluded"
                description=""
                icon="check"
                path="/concluded"
                active={state.currentStep === 4}
              />
            )}
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
