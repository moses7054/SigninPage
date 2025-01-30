"use client";

import { useRef, useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birthday: "",
  });
  const [type, setType] = useState("text");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation or submission logic goes here
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3 items-center"
    >
      <div className="w-full">
        <label
          htmlFor="email"
          className="font-figtree font-semibold text-sm leading-4 text-[#5E7078] "
        >
          Email<span className="text-[#F86A6A]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full h-10 border border-gray-300 rounded-md mt-2 bg-[#F8F9F9]  placeholder:font-figtree placeholder:font-normal placeholder:text-sm pl-4 focus:bg-white focus:outline-none"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="password"
          className="font-figtree font-semibold text-sm leading-4 text-[#5E7078] "
        >
          Password<span className="text-[#F86A6A]">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="w-full h-10 border border-gray-300 rounded-md mt-2 bg-[#F8F9F9]  placeholder:font-figtree placeholder:font-normal placeholder:text-sm pl-4 focus:bg-white focus:outline-none"
        />
        <div className="w-full flex justify-start gap-[5.77px] h-1 mt-2">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="w-[66px] h-full bg-[#0000001A]"></div>
            ))}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="birthday"
          className="font-figtree font-semibold text-sm leading-4 text-[#5E7078] "
        >
          Birthday<span className="text-[#F86A6A]">*</span>
        </label>
        <input
          type={type}
          id="birthday"
          name="birthday"
          ref={inputRef}
          value={formData.birthday}
          onChange={handleChange}
          onFocus={() => {
            setType("date");
            setTimeout(() => inputRef.current?.showPicker(), 0); // Force open date picker
          }}
          onBlur={(e) => !e.target.value && setType("text")}
          required
          placeholder="MM/DD/YYYY"
          className="w-full h-10 border border-gray-300 rounded-md mt-2 pr-2 bg-[#F8F9F9]   placeholder:font-figtree placeholder:font-normal placeholder:text-sm pl-4 focus:bg-white focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-[280px] h-[40px] mt-3 bg-[#007CB5] rounded-3xl"
      >
        <span className="font-figtree font-semibold text-[18px] leading-5 text-white">
          Continue
        </span>
      </button>
    </form>
  );
};

export default SignupForm;
