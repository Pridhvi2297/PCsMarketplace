import React, { useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { admin_login } from '../../store/Reducers/authReducer'


const AdminLogin = () => {
  const dispatch = useDispatch();
  const [state, setSatate] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setSatate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  return (
    <div className="min-w-screen min-h-screen bg-black flex justify-center items-center">
      <div className="w-[350px] text-black p-2">
        <div className="bg-white p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <img
              className="w-[60%] h-full"
              src="/images/logo.png"
              alt="Pnc Mart"
            />
          </div>

          <h2 className="text-3xl mb-3 text-center font-bold">
            PNC Marketplace
          </h2>

          <div className="flex items-center justify-center">
            <p className="text-l mb-3">Welcome Admin</p>
          </div>
          <div className="flex items-center justify-center">
            <MdAdminPanelSettings size={50} className="ml-2" />
          </div>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button className="bg-blue-500 w-full hover:shadow-black hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              SignIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
