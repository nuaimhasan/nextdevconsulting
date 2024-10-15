import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAddCategoryMutation } from "../../../Redux/category/categoryApi";

export default function AddCategory() {
  const navigate = useNavigate();
  const [addCategory, { isLoading }] =
    useAddCategoryMutation();

  const [name, setName] = useState("");

  const handleAddCategory = async () => {
    if (name === "") {
      return Swal.fire("", "Category name is required", "error");
    }

    try {
      const categoryData = {
        name: name,
      };
      const res = await addCategory(categoryData).unwrap();
      if (res?.success) {
        Swal.fire("Success", "Category added successfully", "success");
        setName("");
        navigate("/admin/category");
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
        <p className="text-neutral-content">Category name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mt-4">
        <button
          onClick={handleAddCategory}
          className="orange_btn text-sm"
          disabled={isLoading && "disabled"}
        >
          {isLoading ? "Loading.." : "Add category"}
        </button>
      </div>
    </div>
  );
}
