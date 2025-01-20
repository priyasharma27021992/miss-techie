const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="flex">
          <label htmlFor="email">Email</label>
          <input id="email" type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
