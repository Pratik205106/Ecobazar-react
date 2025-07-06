const ContactMap = () => {
  return (
    <div className="mt-10 w-full h-[400px]">
      <iframe
        title="map"
        className="w-full h-full rounded-xl border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.049012280071!2d85.3476!3d27.7149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908c2f0c9c9%3A0xd1f2a68b04b0e51!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1719999988888"
      ></iframe>
    </div>
  );
};

export default ContactMap;
