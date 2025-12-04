import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-base-200 py-20 px-5  dark:bg-[#7A5A43] ">
      <div
        data-aos="fade-down"
        className="max-w-11/12 mx-auto text-center mb-10"
      >
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <h3 className="text-xl text-gray-600 dark:text-gray-300 font-medium">
          Have questions about our services?
        </h3>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          We’ve gathered the most common ones here. Find quick and simple
          answers below!
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {/* Question 1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="collapse collapse-arrow bg-base-100 rounded-xl shadow-sm"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-gray-300">
            What types of services do you provide?
          </div>
          <div className="collapse-content text-gray-600 dark:text-gray-200">
            <p>
              We offer a range of services including pet grooming, health
              checkups, and adoption assistance to ensure your furry friends are
              well cared for.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="collapse collapse-arrow bg-base-100 rounded-xl shadow-sm"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold dark:text-gray-300 text-gray-800">
            How can I book a service?
          </div>
          <div className="collapse-content text-gray-600 dark:text-gray-300">
            <p>
              Simply visit our "Services" page, select your desired service, and
              complete the booking form — it’s quick and easy!
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="collapse collapse-arrow bg-base-100 rounded-xl shadow-sm"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-gray-300">
            What is your cancellation policy?
          </div>
          <div className="collapse-content text-gray-600 dark:text-gray-300">
            <p>
              You can cancel or reschedule your appointment up to 24 hours in
              advance without any fees.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="collapse collapse-arrow bg-base-100 rounded-xl shadow-sm"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-gray-300">
            Do you offer any membership or loyalty programs?
          </div>
          <div className="collapse-content text-gray-600 dark:text-gray-300">
            <p>
              Yes! We offer loyalty rewards and monthly membership packages for
              regular customers. Contact us to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;