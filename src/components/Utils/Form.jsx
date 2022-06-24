const Form = () => {
  return (
    <form data-aos="fade-up" className="xl:px-20 lg:px-8 px-4 pt-6 pb-8 mb-4">
      <div className="mb-4 text-left">
        <label
          className="block text-custom-blue text-base font-normal font-primary mb-2"
          for="firstname"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border border-primary focus:outline-primary  w-full py-4 px-3 text-gray-700 leading-tight focus:outline focus:scale-[1.008] focus:shadow-outline text-lg font-primary focus:bg-[#f2f2f2] bg-white duration-300 ease-in-out"
          id="firstname"
          type="text"
        />
      </div>

      <div className="mb-4 text-left">
        <label
          className="block text-custom-blue text-base font-normal font-primary mb-2"
          for="lasrtname"
        >
          Last Name
        </label>
        <input
          className="shadow appearance-none border border-primary focus:outline-primary  w-full py-4 px-3 text-gray-700 leading-tight focus:outline focus:scale-[1.008] focus:shadow-outline text-lg font-primary focus:bg-[#f2f2f2] bg-white"
          id="firstname"
          type="text"
        />
      </div>

      <div className="mb-4 text-left">
        <label
          className="block text-custom-blue text-base font-normal font-primary mb-2"
          for="firstname"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border border-primary focus:outline-primary  w-full py-4 px-3 text-gray-700 leading-tight focus:outline focus:scale-[1.008] focus:shadow-outline text-lg font-primary focus:bg-[#f2f2f2] bg-white"
          id="firstname"
          type="text"
        />
      </div>

      <div className="mb-4 text-left">
        <label
          className="block text-custom-blue text-base font-normal font-primary mb-2"
          for="firstname"
        >
          Subject
        </label>
        <textarea
          className="shadow appearance-none border border-primary focus:outline-primary  w-full py-4 px-3 text-gray-700 leading-tight focus:outline focus:scale-[1.008] focus:shadow-outline text-lg font-primary focus:bg-[#f2f2f2] bg-white"
          id="firstname"
          type="text"
          rows={6}
        />
      </div>

      <div className="text-left">
        <button
          className="border-[2px] border-primary hover:bg-primary hover:text-white py-3 px-7 focus:outline-none focus:shadow-outline font-primary hover:scale-105 transform transition-transform ease-in-out duration-500"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
