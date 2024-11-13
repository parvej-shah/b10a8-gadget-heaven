import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

export default function Statistics() {
  const { setTitle } = useContext(cartContext);
  const data = useLoaderData();
  const composedChart = (
      <ComposedChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product_title" scale="band" />
        <YAxis />
        <Legend />
        <Area type="monotone" name="Price" dataKey="price" fill="rgba(149, 56, 226, 0.15)" stroke="rgba(149, 56, 226, 0.15)" />
        <Bar dataKey="price" name='Price' barSize={30} fill="#9538E2" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
  );
  useEffect(() => {
    setTitle("Gadget Heaven | Statistics");
  }, []);
  return (
    <div className="bg-seconderyBg">
      <div className="bg-primaryBg p-6 space-y-4">
        <h2 className="font-bold text-3xl text-white text-center">
          Statistics
        </h2>
        <p className="text-white text-center">
          Data-Driven Decisions for Smart Shopping Optimize Your Gadget Choices
          with Our Stats
        </p>
      </div>
      <div className="container mx-auto px-2">
        <h2 className="font-bold text-2xl text-primaryText py-6">Statistics</h2>
        <div className="shadow-2xl mb-10 rounded-xl p-4 bg-white">
        <ResponsiveContainer width="100%" height={400}>
          {composedChart}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
