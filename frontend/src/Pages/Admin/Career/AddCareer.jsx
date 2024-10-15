import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAddCareerMutation } from "../../../Redux/career/careerApi";

export default function AddCareer() {
  const navigate = useNavigate();
  const [addCareer, { isLoading }] = useAddCareerMutation();

  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleAddCategory = async () => {


    try {
      const categoryData = {
        title: title,
        role: role,
        location: location,
        type: type,
      };
      const res = await addCareer(categoryData).unwrap();
      if (res?.success) {
        Swal.fire("Success", "Career added successfully", "success");
        setTitle("");
        setRole("");
        setLocation("");
        setType("");
        navigate("/admin/career");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.data?.message || "Something went wrong",
        "error",
      );
    }
  };

  return (
    <div className="shadhow rounded bg-base-100 p-4 sm:w-1/2">
      <div className="form_group mt-2">
        <p className="text-neutral-content">Title</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form_group mt-2">
        <p className="text-neutral-content">Role</p>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
      </div>
      <div className="form_group mt-2">
        <p className="text-neutral-content">Location</p>
        <input type="text" onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="form_group mt-2">
        <p className="text-neutral-content">Type</p>
        <input type="text" onChange={(e) => setType(e.target.value)} />
      </div>

      <div className="mt-4">
        <button
          onClick={handleAddCategory}
          className="orange_btn text-sm"
          disabled={isLoading && "disabled"}
        >
          {isLoading ? "Loading.." : "Add Career"}
        </button>
      </div>
    </div>
  );
}
