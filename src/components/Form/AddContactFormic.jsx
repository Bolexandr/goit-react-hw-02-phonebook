import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  BasicLabel,
  BasicInput,
  ErorValidSpan,
  SubmitButton,
  BasicForm,
} from './AddContactForm.styled';

const initialValue = { name: '', number: '' };
let Shema = yup.object({
  name: yup.string().required(),
  number: yup.string().min(3).max(15).required('This field is requried'),
});

const AddContactForm = ({ onSubmitHendler }) => {
  const onFormSubmitHeandler = (e, { resetForm }) => {
    onSubmitHendler(e, resetForm);
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Shema}
      onSubmit={onFormSubmitHeandler}
    >
      <BasicForm>
        <BasicLabel htmlFor="name">Name</BasicLabel>
        <BasicInput type="text" name="name" id="name" />
        <ErrorMessage component={ErorValidSpan} name="name" />
        <BasicLabel htmlFor="number">Number</BasicLabel>
        <BasicInput name="number" type="tel" id="number" />
        <ErrorMessage component={ErorValidSpan} name="number" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </BasicForm>
    </Formik>
  );
};
export default AddContactForm;
