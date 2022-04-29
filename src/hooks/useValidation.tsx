import { useState, ChangeEvent, FormEvent } from 'react';

type IValidateProps = {
  stateInitial: {
    username: string;
    password: string;
  };
  fn: () => void;
  // onChange: (val: string) => void
  // onSelect: (id: string, val: number) => void
};

// function Message(

// export const useForm = (callback: any, initialState= {}) => {
const useValidation = (props: IValidateProps) => {
  const [formvalues, setValues] = useState(props.stateInitial);
  const [submitForm, setSubmitForm] = useState(false);

  /*  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn(); // funciñin que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, []); */

  // función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...formvalues,
      [e.target.name]: e.target.value,
    });
  };

  // función que se ejecuta cuendo el usuario hace submit
  // FormEvent<HTMLFormElement>
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitForm(true);
  };
  return {
    formvalues,
    // errors,
    submitForm,
    handleChange,
    handleSubmit,
  };
};

export default useValidation;
