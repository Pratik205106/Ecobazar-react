const ContactMap = () => {
  return (
    <div className="mt-10 w-full h-[400px]">
      <iframe
        title="map"
        className="w-full h-full rounded-xl border-0"
        src="https://www.google.com/maps/@27.7139868,85.3497887,13z/data=!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;
