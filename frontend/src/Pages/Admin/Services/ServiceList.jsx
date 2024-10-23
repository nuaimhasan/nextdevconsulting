import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteServiceMutation, useGetServicesQuery } from "../../../Redux/services/servicesApi";

export default function ServiceList() {
  const { data, isError, isSuccess } = useGetServicesQuery();
  const services = data?.data;

  const [deleteService] = useDeleteServiceMutation();
  const deleteServiceHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Service?");
    if (isConfirm) {
      try {
        const res = await deleteService(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Service Deleted Successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  let content = null;

  if (isError) {
    content = (
      <p className="mt-5 text-red-500">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {services?.map((service, i) => (
          <tr key={service?._id}>
            <td>{i + 1}</td>
            <td>{service?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
                alt={service?.image}
                className="h-8 w-14 rounded"
              />
            </td>
            <td>
              <div className="flex items-center gap-3">
                <Link to={`/admin/services/edit/${service?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteServiceHandler(service?._id)}>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="rounded border-b bg-base-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-neutral">Services</h1>
          <Link to="/admin/services/add" className="admin_btn text-sm">
            Add Service
          </Link>
        </div>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
}
