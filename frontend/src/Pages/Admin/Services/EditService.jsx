
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import {
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
} from "../../../Redux/services/servicesApi";

export default function EditService() {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const { id } = useParams();

  const { data: serviceData } = useGetServiceByIdQuery(id);
  const service = serviceData?.data;

  const [updateService, { isLoading }] = useUpdateServiceMutation();

  useEffect(() => {
    if (service) {
      setImage([
        { data_url: `${import.meta.env.VITE_BACKEND_URL}/${service.image}` },
      ]);
    }
  }, [service]);

  const handleEditService = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;

    const formData = new FormData();
    formData.append("title", title);


    if (image?.length > 0 && image[0].file) {
      formData.append("image", image[0].file);
    }

    try {
      const res = await updateService({ id, formData }).unwrap();
      if (res?.success) {
        Swal.fire("", "Service updated successfully", "success");
        navigate("/admin/services/all");
      } else {
        Swal.fire("", "Something went wrong!", "error");
      }
    } catch (error) {
      Swal.fire("", "Something went wrong!", "error");
      console.log(error);
    }
  };

  return (
    <section className="rounded bg-base-100 shadow">
      <div className="flex items-center justify-between border-b p-4 font-medium text-neutral">
        <h3>Edit Service</h3>
      </div>

      <form className="p-4" onSubmit={handleEditService}>
        <div className="flex flex-col gap-4 text-neutral-content">
          <div className="grid items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                required
                defaultValue={service?.title}
              />
            </div>
          </div>

          <div className="grid gap-3 rounded border border-dashed p-4 sm:grid-cols-2">
            <div>
              <p className="mb-1">Image</p>
              <ImageUploading
                value={image}
                onChange={(icn) => setImage(icn)}
                dataURLKey="data_url"
                maxNumber={1}
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div {...dragProps}>
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="w-max cursor-pointer rounded-2xl bg-primary px-4 py-1.5 text-sm text-base-100"
                      >
                        Choose Image
                      </span>
                      <p className="text-neutral-content">or Drop here</p>
                    </div>
                    {image?.length > 0 && (
                      <div className="relative mt-4">
                        <img
                          src={image[0]?.data_url}
                          alt="Main"
                          className="w-24"
                        />
                        <div
                          onClick={() => onImageRemove(0)}
                          className="absolute right-0 top-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-base-100"
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>

          
        </div>

        <div className="mt-6">
          <button className="admin_btn" disabled={isLoading}>
            {isLoading ? "Updating..." : "Edit Project"}
          </button>
        </div>
      </form>
    </section>
  );
}
