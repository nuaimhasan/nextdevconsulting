import { useState } from "react";
import { useAddSubscriberMutation } from "../../../Redux/subscribers/subscribersApi";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [addSubscriber, { isLoading, isSuccess, isError }] = useAddSubscriberMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addSubscriber({ email }).unwrap();
      setEmail("");
      alert("Successfully subscribed!");
    } catch (err) {
      console.error("Subscription failed: ", err);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="w-full bg-secondary">
      <div className="container">
        <div className="py-10 text-center text-white md:flex md:text-start">
          <h2 className="text-3xl font-bold md:w-[30%] md:text-4xl">
            Subscribe to our newsletter
          </h2>
          <div>
            <p className="text-sm md:text-xl">
              Monthly updates from Itad featuring our latest news, opinion and
              career opportunities
            </p>
            <form
              onSubmit={handleSubmit} // Attach submit handler
              className="mt-7 flex justify-center gap-2 md:justify-start"
            >
              <input
                className="w-48 rounded-3xl border px-3 py-2 shadow md:w-72"
                placeholder="Enter your email"
                type="email"
                value={email} // Bind input to email state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                required
              />
              <button
                type="submit"
                className="rounded-3xl border border-orange bg-orange px-3 py-1.5 font-semibold duration-300 hover:bg-transparent"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {isSuccess && <p className="mt-2 text-green-500">Subscribed successfully!</p>}
            {isError && <p className="mt-2 text-red-500">Subscription failed. Please try again.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
