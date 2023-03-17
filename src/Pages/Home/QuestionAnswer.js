import React from "react";
import RightAnswer from "../../components/RightAnswer";

const QuestionAnswer = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold sm:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 dark:dark:text-gray-400 text-center w-[45%] mx-auto">
        We provided services manually within 9am to 6pm.But we try to deliver within 24 hours not more than 3 days. 
      </p>

      <div className="md:flex justify-center items-center">
        <div className="dark:dark:bg-gray-800 dark:dark:text-gray-100 md:w-[60%]">
          <div className="container flex flex-col justify-center px-4 py-4 mx-auto md:p-8">
            <div className="space-y-4">
              <div class="py-3 border p-3 rounded-md">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How do you take orders?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				  We take order by manually and online base. You can choose any one option to so that we can take your order in time and place it accordingly.
                  </p>
                </details>
              </div>
              <div class="py-3 border p-3 rounded-md">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How many points do you have?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				  We have 1 central office, 6 sub office and 240 service points to reach to our clients easily.
                  </p>
                </details>
              </div>
              <div class="py-3 border p-3 rounded-md">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How long it takes to deliver?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We deliver goods within 24 hours in divisional areas. But overall Bangladesh it takes minimum 3 days to deliver finally.
                  </p>
                </details>
              </div>
              <div class="py-3 border p-3 rounded-md">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Do you have ant technical staff to handle immediate disorder?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We have fully paid staff to handle immediate disorder in our supply chain. So don't Worry, Count on us. We have brand values to satisfy you and make your money and time worth.
                  </p>
                </details>
              </div>
              <div class="py-3 border p-3 rounded-md">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How does billing work?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We offers a variety of billing options, including monthly
                    and annual subscription plans, as well as pay-as-you-go
                    pricing for certain services. Payment is typically made
                    through a credit card or other secure online payment method.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:w-[40%] m-auto
		   "
        >
          <RightAnswer></RightAnswer>
        </div>
      </div>
    </section>
  );
};

export default QuestionAnswer;
