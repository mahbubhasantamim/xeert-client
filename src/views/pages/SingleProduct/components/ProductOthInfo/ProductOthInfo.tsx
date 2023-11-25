import { useState } from "react";

export default function ProductOthInfo() {
  const [activeTab, setActiveTab] = useState("information");

  const changeTab = (
    tab: "information" | "description" | "otherinfo" | "review"
  ) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="py-4 sm:py-8">
        <div className="flex justify-center sm:justify-start">
          <button
            type="button"
            className={
              activeTab === "information"
                ? `py-2 px-4 border-b-2 border-b-primary text-xs dark:text-secondary dark:border-b-secondary`
                : `py-2 px-4 border-b-2 border-b-transparent text-xs text-slate-400 hover:border-b-secondary`
            }
            onClick={() => changeTab("information")}
          >
            Information
          </button>
          <button
            type="button"
            className={
              activeTab === "description"
                ? `py-2 px-4 border-b-2 border-b-primary text-xs dark:text-secondary dark:border-b-secondary`
                : `py-2 px-4 border-b-2 border-b-transparent text-xs text-slate-400 hover:border-b-secondary`
            }
            onClick={() => changeTab("description")}
          >
            Description
          </button>
          <button
            type="button"
            className={
              activeTab === "otherinfo"
                ? `py-2 px-4 border-b-2 border-b-primary text-xs dark:text-secondary dark:border-b-secondary`
                : `py-2 px-4 border-b-2 border-b-transparent text-xs text-slate-400 hover:border-b-secondary`
            }
            onClick={() => changeTab("otherinfo")}
          >
            Other info
          </button>
          <button
            type="button"
            className={
              activeTab === "review"
                ? `py-2 px-4 border-b-2 border-b-primary text-xs dark:text-secondary dark:border-b-secondary`
                : `py-2 px-4 border-b-2 border-b-transparent text-xs text-slate-400 hover:border-b-secondary`
            }
            onClick={() => changeTab("review")}
          >
            Review
          </button>
        </div>

        <div>
          {activeTab === "information" && (
            <p className="text-xs p-6 border dark:border-darkPrimary dark:text-slate-300">
              Information Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Assumenda, suscipit ullam. Delectus est eum rem excepturi
              nihil similique obcaecati, tempora
            </p>
          )}
          {activeTab === "description" && (
            <p className="text-xs p-6 border dark:border-darkPrimary dark:text-slate-300">
              Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, suscipit ullam. Delectus est eum rem excepturi nihil
              similique obcaecati, tempora
            </p>
          )}
          {activeTab === "otherinfo" && (
            <p className="text-xs p-6 border dark:border-darkPrimary dark:text-slate-300">
              Other info Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Assumenda, suscipit ullam. Delectus est eum rem excepturi
              nihil similique obcaecati, tempora
            </p>
          )}
          {activeTab === "review" && (
            <p className="text-xs p-6 border dark:border-darkPrimary dark:text-slate-300">
              Review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, suscipit ullam. Delectus est eum rem excepturi nihil
              similique obcaecati, tempora
            </p>
          )}
        </div>
      </div>
    </>
  );
}
