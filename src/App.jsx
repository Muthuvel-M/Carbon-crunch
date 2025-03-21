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

      <div className="relative flex min-h-screen bg-gray-100">
        {/* Background Image */}
        <div className="relative w-[900px] h-[600px]  mt-12">
          <img
            src="src\assets\images\image.png"
            alt="Sustainability"
            className="w-full h-full object-contain pl-[0px]"
          />
        </div>

        {/* Stats Cards */}
        <div className="absolute top-35 right-[27rem] bg-green-600 text-white p-4 rounded-lg w-[219px] shadow-lg">
          <p className="text-3xl font-extrabold">3X</p>
          <p className="text-sm">ESG High Performers Deliver A Higher Total Shareholder Return</p>
        </div>
        
        <div className="absolute top-70 right-[27rem] bg-gray-800 text-white p-4 rounded-lg w-[219px] shadow-lg">
          <p className="text-3xl font-extrabold">98%</p>
          <p className="text-sm">Of CEOs Agree Sustainability Is Their Responsibility</p>
        </div>
        
        <div className="absolute bottom-16 right-[-5rem] bg-gray-900 text-white p-4 rounded-lg w-[219px] shadow-lg">
          <p className="text-2xl font-extrabold">18%</p>
          <p className="text-sm">Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050</p>
        </div>

        <div className="absolute bottom-[-2rem] left-[70%] bg-white text-green-700 p-4 rounded-lg w-[219px] shadow-lg">
          <p className="text-2xl font-extrabold">37%</p>
          <p className="text-sm">Of The World’s Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track</p>
        </div>
      </div>
    </div>
  );
}

export default App;