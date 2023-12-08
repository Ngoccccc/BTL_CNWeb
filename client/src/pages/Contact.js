import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
           Mọi thắc mắc về sản phẩm, vui lòng liên hệ với chúng tôi
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.banhangdacap@luadao.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0123456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 123-456-789 (hotline)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
