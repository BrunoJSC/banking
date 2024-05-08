"use client";

import React from "react";
import AnimatedCounter from "@/components/animated-counter";
import DoughnutChart from "@/components/doughnut-chart";

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance,}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts}/>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">{totalBanks} Bank Accounts</h2>
        
        <div className="flex flex-col gap-6">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;