import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { useAddPeopleMutation, useGetPeopleQuery, useUpdatePeopleMutation } from "../../../../Redux/whoWeAre/people/peopleApi";

export default function People() {
    const editor = useRef(null);
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);

  const { data: privacy, isLoading } = useGetPeopleQuery();

  const [addPrivacy, { isLoading: addIsLoading }] = useAddPeopleMutation();

  const [updatePrivacy, { isLoading: updateIsLoading }] =
  useUpdatePeopleMutation();

  useEffect(() => {
    if (privacy) {
      setContent(privacy?.data?.description);
      setId(privacy?.data?._id);
    }
  }, [privacy]);

  const handlePrivacyPolicy = async (e) => {
    e.preventDefault();
    const info = { description: content };

    try {
      if (id) {
        const res = await updatePrivacy({ id, data: info });
        if (res?.data?.success) {
          Swal.fire(
            "Success",
            "People updated successfully",
            "success",
          );
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      } else {
        const res = await addPrivacy(info);
        if (res?.data?.success) {
          Swal.fire(
            "Success",
            "People created successfully",
            "success",
          );
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error");
      console.log(error);
    }
  };


  return (
     <div className="make_privacy_policy">
      <h2 className="mb-3 text-center text-xl font-medium text-primary sm:text-2xl">
        {id ? "Edit People Section" : "Create People Section"}
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handlePrivacyPolicy}>
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
          <div className="mt-4">
            <button
              className="admin_btn"
              disabled={addIsLoading || updateIsLoading}
            >
              {addIsLoading || updateIsLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
