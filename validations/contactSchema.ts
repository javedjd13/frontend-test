import * as Yup from "yup";

const strongEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const contactFormSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be under 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .matches(strongEmailRegex, 'Invalid email address')
        .required('Email is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message can be max 500 characters')
        .required('Message is required'),
});
