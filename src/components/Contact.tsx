import { useReducer } from "react";

type Action = {
  type: "setName" | "setEmail" | "setMessage" | "setOption" | "reset";
  payload: string;
};

interface FormEvent {
  preventDefault: () => void;
}

type StateType = {
  name: string;
  email: string;
  option: string;
  message: string;
};
const initialState: StateType = {
  name: "",
  email: "",
  option: "FPP",
  message: "",
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handelSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch({ type: "reset", payload: "" });
  };
  return (
    <div className="bg-purple-800 h-[1000px] text-white flex flex-col ">
      <form
        className=" flex flex-col w-[30vw] m-auto gap-4"
        onSubmit={(e) => handelSubmit(e)}
      >
        <h1 className="text-2xl font-bold">Contact me</h1>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            value={state.name}
            type="text"
            id="name"
            className="border-white border-1 w-full rounded h-10"
            onChange={(e) =>
              dispatch({ type: "setName", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
            type="email"
            id="email"
            className="border-white border-1 w-full rounded h-10"
          />
        </div>
        <div>
          <label htmlFor="option">Type of Enquiry</label>
          <br />
          <select
            value={state.option}
            onChange={(e) =>
              dispatch({ type: "setOption", payload: e.target.value })
            }
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
            value={state.message}
            onChange={(e) => {
              dispatch({ type: "setMessage", payload: e.target.value });
            }}
            name="message"
            id="message"
            placeholder="Enter your message"
            className="border-white border-1 w-full rounded h-[30vh] p-2"
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-600 rounded p-2 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

function reducerFunction(state: StateType, action: Action): StateType {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setMessage":
      return {
        ...state,
        message: action.payload,
      };
    case "setOption":
      return {
        ...state,
        option: action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
