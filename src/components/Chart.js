import React, { useContext, useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartConfig } from "../constants/config";
import { convertUnixTimestamptoDate, convertDateToUnixTimestamp, createDate } from "../helpers/date-helper";
import Card from "./Card";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext";
import { fetchHistoricalData } from "../api/stock-api";
import StockContext from "../context/StockContext";


const Chart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");

  const { darkMode} = useContext(ThemeContext)

  const {stockSymbol} = useContext(StockContext);

        // if stock symbol or filter changes call this use effect
  useEffect(() => {
    const getDateRange = () => {
        const {days, weeks, months, years} = chartConfig[filter];
            // 
        const endDate = new Date();
        const startDate = createDate(endDate, -days, -weeks, -months, -years)

        // convert to unix time stamp
        const startTimestampUnix = convertDateToUnixTimestamp(startDate)
        const endTimeStampUnix = convertDateToUnixTimestamp(endDate)


        return {startTimestampUnix, endTimeStampUnix}
    }
    const updateChartData = async () => {
        try{
            const {startTimestampUnix, endTimeStampUnix} = getDateRange()
            const resolution = chartConfig[filter].resolution
            const result = await fetchHistoricalData(stockSymbol, resolution, startTimestampUnix, endTimeStampUnix);
            setData(formatData(result))
        }
        catch(error){
            setData([])
            console.log(error)
        }
    }
    updateChartData();
  }, [stockSymbol, filter])

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestamptoDate(data.t[index]),
      };
    });
  };
  return (
    <Card>
      {/* from recharts */}
    {/* add buttons display grapping the chartConfig array*/}
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={darkMode ? '#312e81' : "rgb(82 155 238)"} stopOpacity={0.8} />
              <stop offset="95%" stopColor={darkMode ? '#312e81' : "rgb(82 155 238)"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="montone"
            dataKey="value"
            stroke="#1e90ff"
            fillOpacity={1}
            stokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
