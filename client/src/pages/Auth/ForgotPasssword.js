import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"VERSACE - Quên mật khẩu"}>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Đặt lại mật khẩu</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
<<<<<<< HEAD
              placeholder="Email "
=======
              placeholder="Nhập email "
>>>>>>> 5b16d014e68eb410a373443b40e6b7f29a4e5895
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
<<<<<<< HEAD
              placeholder="Môn thể thao yêu thích "
=======
              placeholder="Tên thể thao yêu thích "
>>>>>>> 5b16d014e68eb410a373443b40e6b7f29a4e5895
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
<<<<<<< HEAD
              placeholder="Mật khẩu mới"
=======
              placeholder="Nhập mật khẩu"
>>>>>>> 5b16d014e68eb410a373443b40e6b7f29a4e5895
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Đặt lại
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
