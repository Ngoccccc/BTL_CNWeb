import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/orders", {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      {orders.length == 0 ? <h1>Loading</h1> :
        <div className="container-flui p-3 m-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1 className="text-center">Tất cả đơn hàng</h1>
              {orders?.map((o, i) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Người mua</th>
                          <th scope="col">Thời gian</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Tổng tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o?.status}</td>
                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createAt).fromNow()}</td>
                          <td>{o?.products?.length}</td>
                          <td>{o?.total}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      {o?.products?.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p.product}>
                          <div className="col-md-4">
                            <img
                              src={`/api/v1/product/product-photo/${p.product}`}
                              className="card-img-top"
                              width="100px"
                              height={"100px"}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>}
    </Layout>
  );
};

export default Orders;
