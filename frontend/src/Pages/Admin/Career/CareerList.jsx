// import { BiSolidPencil } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import Swal from "sweetalert2";
import { useDeleteCareerMutation, useGetCareersQuery } from "../../../Redux/career/careerApi";

export default function CareerList() {
  const { data, isLoading, isError, error } = useGetCareersQuery();
  const [deleteCareer] = useDeleteCareerMutation();

  const handleDeleteCareer = async (id) => {
    const isConfirm = window.confirm(
      "Are you sure delete this Career?",
    );
    if (isConfirm) {
      const result = await deleteCareer(id);
      if (result?.data?.success) {
        Swal.fire("", "Career Delete Success", "success");
      } else {
        Swal.fire("", "Somethin went worng", "error");
      }
    }
  };

  let content = null;
  if (isLoading) {
    return (content = <Spinner />);
  }
  // console.log(error.data.error);
  if (!isLoading && isError) {
    content = <p>{error?.data?.error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((category, i) => (
      <tr key={category?._id}>
        <td>{i + 1}</td>
        <td>
            {category?.role}
        </td>
        <td>
          <div className="flex items-center gap-2">
            {/* <Link
              to={`/admin/category/edit/${category?._id}`}
              className="duration-200 hover:text-green-700"
            >
              <BiSolidPencil />
            </Link> */}
            <button
              onClick={() => handleDeleteCareer(category?._id)}
              className="text-lg duration-200 hover:text-red-600"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </td>
      </tr>
    ));
  }


  return (
    <div>
      <div className="mb-2 flex justify-end">
        <Link to="/admin/career/add" className="orange_btn text-sm">
          Add New Career
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  )
}
