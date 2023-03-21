import ContactForm from "../../components/contact-form"

export const metadata = {
  title: 'Contact',
  description: 'Contact Ross Alan Ford for any inquiries',
}

export default function Contact() {

  return (
<>
      <div className="mx-auto max-w-xl justify-center pt-32 px-10">
      <ContactForm/>
      </div>
    </>
  )
}

