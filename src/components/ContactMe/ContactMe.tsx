import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
})

const ContactMe: React.FC<{ isSpanish: boolean }> = ({ isSpanish }) => {
  interface FormValues {
    name: string;
    email: string;
    message: string;
  }

  interface FormikHelpers {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
  }

  const content = {
    es: {
      title: 'Contáctame',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      success: '¡Formulario enviado correctamente!',
      error: 'Ocurrió un error. Por favor, intenta nuevamente.',
    },
    en: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      success: 'Form submitted successfully!',
      error: 'An error occurred. Please try again.',
    }
  }

  const t = isSpanish ? content.es : content.en

  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers) => {
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,   
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,   
        {
          from_name: values.name,  
          from_email: values.email,
          message: values.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!     
      )

      console.log('Correo enviado:', result.text)
      alert('Correo enviado exitosamente!')
      resetForm()
    } catch (error) {
      console.error('Error al enviar el correo:', error)
      alert('Ocurrió un error al enviar el correo. Inténtalo nuevamente.')
    }
    setSubmitting(false)
  }

  return (
    <div className="max-w-lg mx-auto mt-8 mb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t.title}</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold">{t.name}</label>
              <Field 
                type="text" 
                name="name" 
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold ">{t.email}</label>
              <Field 
                type="email" 
                name="email" 
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold ">{t.message}</label>
              <Field 
                as="textarea" 
                name="message" 
                className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                rows={4} 
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              {isSubmitting ? 'Sending...' : t.send}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactMe
