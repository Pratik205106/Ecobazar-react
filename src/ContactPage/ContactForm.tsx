import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";

const ContactForm = () => {
  return (
    <div className="w-[984px] h-[507px] flex-1 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
        Just Say Hello!
      </h1>
      <p className="text-sm text-[#808080] mb-6 w-[486px]">
        Do you fancy saying hi to me or want to get started with your <br />
        project and you need my help? Feel free to contact me.
      </p>

      <form className="space-y-4">
        <div className="flex gap-4">
          <InputField
            type="text"
            placeholder="Template Cookie"
            width="w-[434px]"
          />
          <InputField
            type="email"
            placeholder="zakirsoft@gmail.com"
            width="w-[434px]"
          />
        </div>

        <InputField
          type="text"
          placeholder="Text area"
          width="w-[884px]"
        />

        <TextAreaField
          placeholder="Subjects"
          height="h-28"
        />

        <button
          type="submit"
          className="bg-[#00B207] text-white text-sm font-medium px-6 py-3 rounded-3xl hover:bg-green-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
