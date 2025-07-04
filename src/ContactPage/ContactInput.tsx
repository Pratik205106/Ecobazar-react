const ContactInput = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <main className="w-full max-w-4xl bg-white">
        <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
          Just Say Hello!
        </h1>
        <p className="text-sm text-[#808080] mb-6 max-w-xl">
          Do you fancy saying hi to me or want to get started with your project and need my help? Feel free to contact me.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Template Cookie"
              className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="zakirsoft@gmail.com"
              className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Hello|"
            className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm"
          />

          <textarea
            placeholder="Subjects"
            className="w-full h-28 px-4 py-2 border border-[#E5E5E5] rounded-md text-sm resize-none"
          ></textarea>
        </form>
      </main>
    </div>
  );
};

export default ContactInput;
