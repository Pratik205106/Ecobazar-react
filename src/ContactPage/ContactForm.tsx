const ContactForm = () => {
  return (
    <div className="w-[984px] h-[507px] flex-1 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
        Just Say Hello!
      </h1>
      <p className="text-sm text-[#808080] mb-6 w-[486px]">
        Do you fancy saying hi to me or want to get started with your project
        and you need my help? Feel free to contact me.
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Template Cookie"
            className="h-12 w-[434px] px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00B207]"
          />
          <input
            type="email"
            placeholder="zakirsoft@gmail.com"
            className="h-12 w-[434px] px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00B207]"
          />
        </div>

        <input
          type="text"
          placeholder="Hello"
          className="h-12 w-[884px] px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00B207]"
        />

        <textarea
          placeholder="Subjects"
          className="w-full h-28 px-4 py-2 border border-[#E5E5E5] rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00B207]"
        ></textarea>

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
