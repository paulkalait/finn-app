import React from "react";
import Card from "./Card";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quickSand bg-neutral-100">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-center">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="col-span-1 row-span-4 md:col-span-2 row xl:row-span-6">
        <Chart />
      </div>
      <div>
        <Card>
          <Overview
            symbol={mockCompanyDetails.ticker}
            price={300}
            change={30}
            changePercent={10.0}
            currency={"USD"}
          />
        </Card>
      </div>
      <div className="row-span-2 xl:row-span-5">
        <Card>
          <Details details={mockCompanyDetails} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
