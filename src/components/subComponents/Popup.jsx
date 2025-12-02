import React, { useState, useEffect } from "react";

const Popup = ({ onClose, position = "justify-center items-center" }) => {
  const [showForm, setShowForm] = useState(true);
  const [user, setUser] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [messageLogin, setMessageLogin] = useState("");
  const [messageSignUp, setMessageSignUp] = useState("");

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/books/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessageSignUp("Account created successfully!");
        onClose();
      } else {
        setMessageSignUp(data.message || "Error creating account.");
      }
    } catch (error) {
      setMessageSignUp("Server error. Check XAMPP or PHP file.");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/books/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // مهم للتعامل مع الكوكيز
        body: JSON.stringify({ email, password, remember }),
      });

      const result = await response.json();
      if (result.state === "good") {
        setMessageLogin("Login successful!");
        setUser(result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        onClose();
      } else {
        setMessageLogin(result.msg);
      }
    } catch (err) {
      setMessageLogin("Server error. Try again.");
    }
  };

  useEffect(() => {
    if (user) {
      console.log("User updated:", user.username);
    }
  }, [user]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex ${position} z-50`}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-lg min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-around items-center mb-6 gap-3">
          <button
            onClick={() => setShowForm(true)}
            className="text-xl bg-slate-600 font-medium p-1 px-20 rounded text-white hover:bg-slate-700"
            style={{ backgroundColor: showForm ? "#343a40" : "" }}
          >
            Login
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl bg-slate-600 font-medium p-1 px-20 rounded text-white hover:bg-slate-700"
            style={{ backgroundColor: !showForm ? "#343a40" : "" }}
          >
            Sign Up
          </button>
        </div>

        {/* ---------------- LOGIN FORM ---------------- */}
        {showForm && (
          <form onSubmit={handleSubmitLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <h2>{messageLogin}</h2>

            <button
              type="submit"
              className="w-full bg-slate-600 text-white p-2 rounded hover:bg-slate-700"
            >
              Login
            </button>
          </form>
        )}

        {/* ---------------- SIGN UP FORM ---------------- */}
        {!showForm && (
          <form onSubmit={handleSubmitSignUp}>
            <input
              type="text"
              placeholder="username"
              className="w-full border p-2 mb-3 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <h2>{messageSignUp}</h2>

            <button
              type="submit"
              className="w-full bg-slate-600 text-white p-2 rounded hover:bg-slate-700"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
