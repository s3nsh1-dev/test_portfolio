const Contact = () => {
  return (
    <div className="bg-purple-800 h-[1000px] text-white flex flex-col ">
      <div className=" flex flex-col w-[30vw] m-auto gap-4">
        <h1 className="text-2xl font-bold">Contact me</h1>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            className="border-white border-1 w-full rounded h-10"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            className="border-white border-1 w-full rounded h-10"
          />
        </div>
        <div>
          <label htmlFor="option">Type of Enquiry</label>
          <br />
          <select
            name="option"
            id="option"
            className="bg-purple-800 order-white border-1 h-10 w-full rounded p-2"
          >
            <option value="FPP">Freelance Project Proposal</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="Three">Three</option>
            <option value="Four">Four</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className="border-white border-1 w-full rounded h-[30vh] p-2"
          ></textarea>
        </div>
        <button className="bg-purple-600 rounded p-2 font-bold">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
