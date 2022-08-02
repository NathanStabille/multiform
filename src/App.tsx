import { FormProvider } from "./Contexts/FormContext";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <FormProvider>
      <AppRoutes />
    </FormProvider>
  );
};
