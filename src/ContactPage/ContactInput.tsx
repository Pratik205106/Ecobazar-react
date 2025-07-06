import ContactInfoBox from "./ContactInfoBox";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactInput = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
      
      <div className="mx-auto flex flex-col lg:flex-row gap-10">
        <ContactInfoBox />
        <ContactForm />
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactInput;
