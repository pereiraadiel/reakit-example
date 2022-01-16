import {
  unstable_useFormState as useFormState,
} from "reakit/Form";

import { AppInput } from '../../styles/AppInput';
import { AppForm } from '../../styles/AppForm';
import { AppFormLabel } from '../../styles/AppFormLabel';
import { AppFormMessage } from '../../styles/AppFormMessage';
import { AppFormSubmitButton } from "../../styles/AppFormSubmitButton";
import { AppTitle } from "../../styles/AppTitle";

export const Home = () => {
  const form = useFormState({
    values: { name: "", email: "", password: "" },
    onValidate: (values) => {
      if (!values.name) {
        const errors = {
          name: "How can we be friends without knowing your name?",
        };
        throw errors;
      }
      if (!values.email) {
        const errors = {
          email: "We need your e-mail for send messages",
        };
        throw errors;
      }
      if (!values.password) {
        const errors = {
          password: "We need a secret to identify where you are logged in",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <AppForm {...form}>
        <AppTitle>Olá, para continuarmos preencha o formulário</AppTitle>
        <AppFormLabel {...form} name="name">
          Nome
        </AppFormLabel>
        <AppInput {...form} name="name" placeholder="John Doe"/>
        <AppFormMessage {...form} name="name" />

        <AppFormLabel {...form} name="email">
          E-mail
        </AppFormLabel>
        <AppInput {...form} type="email" name="email" placeholder="john.doe@gmail.com"/>
        <AppFormMessage {...form} name="email" />
        
        <AppFormLabel {...form} name="password">
          Senha
        </AppFormLabel>
        <AppInput {...form} type="password" min={8} name="password" placeholder="·····"/>
        <AppFormMessage {...form} name="password" />
        <AppFormSubmitButton {...form}>Enviar</AppFormSubmitButton>
      </AppForm>
    </>
  );
}