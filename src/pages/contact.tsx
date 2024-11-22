const Contact = () => {
  return (
    <div className="max-w-2xl lg:max-w-7xl px-4 py-16 mx-auto">
      <h1 className="mb-2 lg:mb-10 text-4xl font-extrabold text-center">
        Want to have a conversation?
      </h1>
      <div className="flex flex-col items-center max-w-sm p-10 mx-auto rounded-lg shadow-lg border-gray-200">
        <img
          src="contact.png"
          alt="Contact Me Icon"
          className="w-10 h-10 p-1"
        />
        <h5 className="font-bold text-2xl text-gray-700 dark:text-white p-3">
          Contact
        </h5>
        <p className="text-gray-300 dark:text-white p-1">Email</p>
        <a
          href="mailto:priyasharma2702@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you!"
          className="text-gray-900 dark:text-orange-500 font-medium underline hover:text-orange-600 dark:hover:text-orange-400"
        >
          priyasharma2702@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
