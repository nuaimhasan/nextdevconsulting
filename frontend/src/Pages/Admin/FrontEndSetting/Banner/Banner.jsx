import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  useGetBannerQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
} from "../../../../Redux/banner/bannerApi.js";
import ImageUploading from "react-images-uploading";

export default function Banner() {
  const [image, setImage] = useState([]); // Image array
  const [title, setTitle] = useState(""); // Title text
  const [subtitle, setSubtitle] = useState(""); // Subtitle text
  const [description, setDescription] = useState(""); // Description text
  const [bannerId, setBannerId] = useState(null);

  const { data: bannerData, isLoading: isBannerLoading } = useGetBannerQuery();
  const [addBanner, { isLoading: isAddLoading }] = useAddBannerMutation();
  const [updateBanner, { isLoading: isUpdateLoading }] =
    useUpdateBannerMutation();

  useEffect(() => {
    if (bannerData?.data) {
      setBannerId(bannerData.data._id);
      setTitle(bannerData.data.title || "");
      setSubtitle(bannerData.data.subtitle || "");
      setDescription(bannerData.data.description || "");

      // If image exists, wrap it as expected by ImageUploading
      if (bannerData.data.image) {
        setImage([
          {
            data_url: `${import.meta.env.VITE_BACKEND_URL}/${bannerData.data.image}`,
          },
        ]);
      }
    }
  }, [bannerData]);

  console.log(bannerData);

  const handleAddEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", description);

    // Append the image file if a new one is selected
    if (image.length > 0 && image[0].file) {
      formData.append("image", image[0].file);
    }

    try {
      let result;
      if (bannerId) {
        result = await updateBanner({ id: bannerId, formData }).unwrap();
      } else {
        result = await addBanner(formData).unwrap();
      }

      if (result.success) {
        setImage([]);
        setTitle("");
        setSubtitle("");
        setDescription("");
        Swal.fire("", "Banner updated successfully", "success");
      }
    } catch (error) {
      Swal.fire("", error?.data?.message || "Operation failed", "error");
    }
  };

  if (isBannerLoading) return <p>Loading...</p>;

  return (
    <section className="rounded bg-base-100 shadow">
      <div className="border-b p-4">
        <h3 className="font-medium text-neutral">Banner</h3>
      </div>

      <form onSubmit={handleAddEdit} className="p-4">
        <div className="grid gap-4">
          {/* Title */}
          <div>
            <p className="mb-1">Title</p>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Subtitle */}
          <div>
            <p className="mb-1">Subtitle</p>
            <input
              type="text"
              name="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="Enter subtitle"
              required
            />
          </div>

          {/* Description */}
          <div>
            <p className="mb-1">Description</p>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded border p-2"
              rows="4"
              placeholder="Enter description"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <ImageUploading
              value={image}
              onChange={(icn) => setImage(icn)}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="rounded border border-dashed p-4"
                  {...dragProps}
                >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={onImageUpload}
                      className="w-max cursor-pointer rounded-2xl bg-primary px-4 py-1.5 text-sm text-base-100"
                    >
                      Choose Image
                    </span>

                    <p className="text-neutral-content">or Drop here</p>
                  </div>

                  <div className={`${image?.length > 0 && "mt-4"} `}>
                    {image?.length > 0 &&
                      image?.map((img, index) => (
                        <div key={index} className="image-item relative">
                          <img
                            src={img["data_url"]}
                            alt="Banner"
                            className="w-28"
                          />
                          <div
                            onClick={() => onImageRemove(index)}
                            className="absolute right-0 top-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-base-100"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="admin_btn"
            disabled={isAddLoading || isUpdateLoading}
          >
            {isAddLoading || isUpdateLoading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </section>
  );
}
