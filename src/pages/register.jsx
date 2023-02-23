import NavbarApp from "@/component/navbar";
import React from "react";

const Register = () => {
  return (
    <div className="items-center w-[100%]  flex flex-col h-[100vh] justify-center">
      <NavbarApp hideMenu={true} />
      <form
        onSubmit={() => console.log("oke")}
        className=" border-2 border-black md:w-[50%] w-[90%] text-center rounded-2xl h-[400px] justify-center items-center flex flex-col"
      >
        <label className="font-bold text-4xl">REGISTER</label>
        <br />
        <br />
        <table className="text-left items-center flex flex-col text-xl">
          <tbody>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                :{" "}
                <input className="border-2 border-black rounded-md px-1"></input>
              </td>
            </tr>

            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                :{" "}
                <input className="border-2 border-black rounded-md px-1"></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="bg-green-500 rounded-md text-white px-5 py-1 my-5 text-xl hover:bg-green-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
