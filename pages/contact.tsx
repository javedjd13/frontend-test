import Head from "next/head";
import { useContactForm } from "@/hooks/useContactForm";
import { FormikValues } from "formik";
import InputField from "@/components/InputField";

const ContactPage: React.FC = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm((values: FormikValues) => {
    console.log("Form Submitted:", values);
  });

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Contact Us
          </h1>

          <InputField
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />

          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <InputField
            type="textarea"
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            touched={touched.message}
          />

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactPage;
