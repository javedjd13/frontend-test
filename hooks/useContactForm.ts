import { useFormik } from 'formik';
import { contactFormSchema } from '@/validations/contactSchema';
import { ContactFormValues } from '@/types/contact';

const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
};

export const useContactForm = (
    onSubmitCallback: (values: ContactFormValues) => void
) => {
    const formik = useFormik({
        initialValues,
        validationSchema: contactFormSchema,
        onSubmit: onSubmitCallback,
    });

    return {
        ...formik,
    };
};
