import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const clickedData = data.find((item) => item.id === Number(id));
  console.log(clickedData);
  return (
    <div>
      <div className="p-4 mx-auto" style={{ width: "90%", height: 400 }}>
        {clickedData ? (
          <>
            <h2 className="text-xl font-bold mb-5 mt-2 mx-auto px-4 text-center">
              Ratings of {clickedData.title}
            </h2>
            <ResponsiveContainer>
              <BarChart
                data={clickedData.ratings}
                layout="vertical"
                margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name"/>
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" />
              </BarChart>
            </ResponsiveContainer>
          </>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
};

export default Chart;