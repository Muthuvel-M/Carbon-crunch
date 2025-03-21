import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className=" flex flex-col items-center">
        <div className="bg-white text-green-600  text-center py-2 px-4 rounded-full mt-8">
          FEATURES
        </div>
        <h1 className="text-5xl font-bold mt-4 ">Why Carbon Crunch?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              Automated Data Collection
            </h2>
            <p>
              Our system automates carbon data collection, saving time, reducing
              errors, and ensuring accurate sustainability reporting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex  justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              Monitoring & Reporting
            </h2>
            <p>
              Effortlessly track and report carbon emissions with automated
              monitoring, ensuring accuracy and compliance in sustainability
              reporting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              Monitoring & Reporting
            </h2>
            <p>
              Effortlessly track and report carbon emissions with automated
              monitoring, ensuring accuracy and compliance in sustainability
              reporting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              Simplified Certification Process
            </h2>
            <p>
              Streamline your certification process with our simplified,
              automated solution, reducing complexity and ensuring faster
              compliance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              AI-Driven Insights
            </h2>
            <p>
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies, and drive impactful decision-making.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-start mb-4">
              <img
                src="src\assets\images\icon-1.png"
                alt="Icon"
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-green-600 text-xl font-bold mb-2">
              AI-Driven Insights
            </h2>
            <p>
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies, and drive impactful decision-making.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <img
          src="src\assets\images\image.png"
          alt="Earth"
          className="flex w-[818px] h-[996px] left-[26px] m-[20px]"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white p-4 rounded-lg w-[446px] h-[246.05px]">
          <h2 className="font-bold text-[87.92px] leading-[100%] tracking-[1%] uppercase">
            3X
          </h2>
          <p className="text-[29.31px] leading-[100%] tracking-[1%] titlecase w-[416.69px] h-[114px]">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </p>
        </div>

        <div className="absolute top-[332px] left-[474px] bg-gray-800 text-white w-[246px]  h-[173px] rounded-lg px-[13.83px] py-[9.51px]">
          <h2 className="text-[55px] font-bold">98%</h2>
          <p>Of CEOs Agree Sustainability Is Their Responsibility</p>
        </div>
        <div className="absolute top-1/2 left-[857px] right-0 bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-3xl font-bold">18%</h2>
          <p>
            Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By
            2050
          </p>
        </div>
        <div className="absolute bottom-[100px] left-[559px] bg-white text-green-600  rounded-lg px-[11px] py-[16px]">
          <h2 className="text-3xl font-bold">37%</h2>
          <p>
            Of The World's Largest Companies Have A Public Net Zero Target.
            Nearly All Are Off Track
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
