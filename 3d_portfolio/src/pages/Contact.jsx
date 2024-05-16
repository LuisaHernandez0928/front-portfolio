import { useRef, useState } from "react";
const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
     ...form,
      [e.target.name]: e.target.value,
    });
  };

  //It is called once you click on it
  const handleFocus = () => {};
  //It is called once you click out
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    formRef.current.submit();
  };
  return (
    <section className="flex relative lh:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="flex w-full flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Let me know your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              rows={4}
              type="text"
              name="message"
              className="textarea"
              placeholder="How I can help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Contacting Luisa..." : "Send me a message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
