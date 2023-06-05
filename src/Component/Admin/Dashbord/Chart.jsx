import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import style from "./Dashboard.module.css";

function Chart() {
  const data = [
    {
      name: "	Jan",
      uv: 10,
      pv: 5000,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 5000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 6000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 7500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 7500,
      pv: 6500,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 8000,
      pv: 8000,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 5000,
      pv: 4000,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3000,
      pv: 7000,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 10000,
      pv: 10000,
      amt: 2100,
    },
  ];
  return (
    <div className={style.chart}>
      <h5>Monthly Transaction</h5>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
