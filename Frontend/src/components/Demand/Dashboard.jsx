import React from "react";
import { agent_performance, data_dash, hot_leads, needs } from "../../components/data.js";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import PipelineChart from "./Pipelinechart.jsx";
import LeadSources from "./LeadSources.jsx";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      
      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data_dash.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className="bg-white/80 border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <div
                  className={`p-3 rounded-lg ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={20} />
                </div>

                <h1
                  className={`flex items-center text-sm font-medium ${
                    item.trend === "up"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.trend === "up" ? (
                    <TiArrowUp />
                  ) : (
                    <TiArrowDown />
                  )}
                  {item.percentage}
                </h1>
              </div>

              {/* Bottom Info */}
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {item.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Pipeline Chart (bigger) */}
        <div className="lg:col-span-3">
          <PipelineChart />
        </div>

        {/* Lead Sources */}
        <div className="lg:grid-cols-4">
          <LeadSources />
        </div>

      </div>
{/* needs attention */}
<div className=" min-[900px]:grid grid-cols-2 gap-2">
<article className="bg-white shadow-md rounded-lg p-2 mb-6">
 <article className="flex justify-between items-center">

 <h1 className="capitalize font-bold p-2">needs attention</h1>
<span className="w-4 h-4 text-pink-500 opacity-[0.7] text-xs bg-pink-200 text-center rounded-md  ">3</span>
 </article>
 
  {needs.map(({id,name,client,rent,wait})=>{
   return<div className=" bg-pink-100  m-2 flex  justify-around items-center p-4 capitalize gap-2 rounded-lg  ">
<article>
<h1 className="text-xs">{name}</h1>
<p className="text-xs opacity-[0.6]">{rent}</p>
  </article>
<article>
 <h3 className="text-xs">{client}</h3>
<p className="text-xs">{wait}</p>
</article>
   </div> 
  })}
  

</article>
{/* hotleads */}
<article className="bg-white shadow-md rounded-lg p-2 mb-6">
 <article className="flex justify-between items-center">
<h1 className="capitalize font-bold p-2">hot leads</h1>
<span className="w-20 h-6 p-1 text-pink-500 opacity-[0.7] text-xs bg-pink-200 text-center rounded-md  ">score{'<='}70</span>
 </article>
{hot_leads.map(({ id, name, rating, icons: Icon, location }) => {
 return (
  <div
  key={id}
  className="bg-pink-100 m-2 flex justify-between items-center p-4 capitalize gap-2 rounded-lg "
  >
      {/* Left side */}
      <article>
        <h1 className="text-xs font-medium">{name}</h1>
        <p className="text-xs opacity-60">{location}</p>
      </article>

      {/* Right side */}
      <article className="text-right">
        <div className="text-xs flex  items-center gap-1 justify-end">
          {Icon && <Icon />}
        <p className="text-xs">{rating}</p>
        </div>
      </article>
    </div>
  );
 })}
 </article>
 {/* follow-ups */}
 <article className="bg-white shadow-md rounded-lg p-2 mb-6 ">
  <article className="flex items-center justify-between p-2">

<h1 className="capitalize font-bold p-2">follow-ups</h1>
<span className="w-20 h-4 text-pink-500 opacity-[0.7] text-xs bg-pink-200 text-center rounded-md  ">pending</span>
  </article>
<div className="text-center text-pink-500 opacity-[0.7] text-xs p-4 capitalize">
 not pending follow-ups
</div>
 </article>
 {/* agent performance */}
 <article className="bg-white shadow-md rounded-lg p-2 mb-6  ">
 <article className="flex justify-between items-center">
<h1 className="capitalize font-bold p-2">Agent Performance</h1>

 </article>

{agent_performance.map(({ id,name, percent,active,avg,booked,conversion }) => {
 return (
  <div
  key={id}
  className="bg-pink- m-2 flex justify-between items-center p-4 capitalize gap-2 rounded-lg "
  >
      {/*  */}
      <article className="flex  items-center gap-3  ">
      <article>
       <h1 className="w-6 h-6 rounded-full bg-pink-100 text-center p-0.5 text-yellow-500 text-sm  font-bold ">
        {name.charAt(0)}
       </h1> 
      </article>
       <article className=" tracking-wider text-black">
        <h1 className="text-xs font-medium">{`${name}`}</h1>
        <article className="w-44 flex justify-around">
        <span className="text-xs opacity-60">{`${active}`}</span>
        <span className="text-xs opacity-60">{`${avg}`}</span>
        <span className="text-xs opacity-60">{`booked${booked}`}</span>
        </article>
       </article>
      </article>

      {/* Right side */}
      <article className="text-right">
        <div className="text-xs  items-center gap-1 justify-end">
         <p className=""> {percent}</p>
        <p className="text-xs">{conversion}</p>
        </div>
      </article>
    </div>
  );
 })}
 </article>
 </div>
    </div>
  );
};

export default Dashboard;