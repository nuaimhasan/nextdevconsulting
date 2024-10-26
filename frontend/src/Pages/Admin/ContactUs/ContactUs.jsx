import { useState, useEffect } from "react";
import swal from "sweetalert2";
import {
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from "../../../Redux/contact/contactApi.js";

export default function ContactUs() {
  const { data, isLoading } = useGetContactsQuery();
  const contactUs = data?.data;
  const id = contactUs?._id;

  const [addContact, { isLoading: addIsLoading }] = useAddContactMutation();
  const [updateContact, { isLoading: updateIsLoading }] =
    useUpdateContactMutation();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hotNumber, setHotNumber] = useState("");
  const [address, setAddress] = useState("");
  const [wpLink, setWpLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    if (contactUs) {
      setEmail(contactUs.email || "");
      setPhone(contactUs.phone || "");
      setHotNumber(contactUs.hotNumber || "");
      setAddress(contactUs.address || "");
      setWpLink(contactUs.wpLink || "");
      setFacebookLink(contactUs.facebookLink || "");
      setTwitterLink(contactUs.twitterLink || "");
      setLinkedinLink(contactUs.linkedinLink || "");
      setYoutubeLink(contactUs.youtubeLink || "");
    }
  }, [contactUs]);

  const handleAddUpdate = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA and get the token
    if (window.grecaptcha) {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          "6LfBwWwqAAAAAIWg6GlQlS8_yVrL8UgBV8Gggi2y",
          { action: "LOGIN" }
        );
        setCaptchaToken(token);
      } catch (error) {
        swal.fire("", "CAPTCHA validation failed", "error");
        return;
      }
    } else {
      swal.fire("", "CAPTCHA not loaded", "error");
      return;
    }

    // Proceed with form submission after receiving the CAPTCHA token
    const formData = {
      email,
      phone,
      hotNumber,
      address,
      wpLink,
      facebookLink,
      twitterLink,
      linkedinLink,
      youtubeLink,
      captchaToken, // Send the token along with form data
    };

    try {
      let res;
      if (id) {
        res = await updateContact({ id, info: formData }).unwrap();
      } else {
        res = await addContact(formData).unwrap();
      }

      if (res?.success) {
        swal.fire(
          "",
          `Contact ${id ? "updated" : "added"} successfully`,
          "success"
        );
      } else {
        swal.fire("", "Something went wrong!", "error");
      }
    } catch (error) {
      swal.fire("", error.message || "Something went wrong!", "error");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="rounded bg-base-100 shadow">
      <div className="border-b p-4">
        <h3 className="font-medium text-neutral">Contact Us</h3>
      </div>

      <form className="p-4" onSubmit={handleAddUpdate}>
        <div className="grid items-start gap-4 text-neutral-content sm:grid-cols-2 md:grid-cols-3">
          {/* Existing input fields */}
        </div>

        <div className="mt-4">
          <button
            className="admin_btn"
            disabled={addIsLoading || updateIsLoading}
          >
            {id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
}
