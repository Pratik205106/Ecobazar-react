import ContactInfoBox from "./ContactInfoBox";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactInput = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <ContactInfoBox />
        <ContactForm />
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactInput;
