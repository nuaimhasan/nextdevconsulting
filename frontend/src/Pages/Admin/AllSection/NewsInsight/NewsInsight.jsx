import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import {
  useAddNewsInsightMutation,
  useGetNewsInsightQuery,
  useUpdateNewsInsightMutation,
} from "../../../../Redux/newsInsight/newsInsightApi";

export default function NewsInsight() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);

  const { data: newsInsight, isLoading } = useGetNewsInsightQuery();

  const [addNewsInsight, { isLoading: addIsLoading }] = useAddNewsInsightMutation();

  const [updateNewsInsight, { isLoading: updateIsLoading }] =
    useUpdateNewsInsightMutation();

  useEffect(() => {
    if (newsInsight) {
      setContent(newsInsight?.data?.description);
      setId(newsInsight?.data?._id);
    }
  }, [newsInsight]);

  const handleNewsInsight = async (e) => {
    e.preventDefault();
    const info = { description: content };

    try {
      if (id) {
        const res = await updateNewsInsight({ id, data: info });
        if (res?.data?.success) {
          Swal.fire("Success", "News & Insight updated successfully", "success");
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      } else {
        const res = await addNewsInsight(info);
        if (res?.data?.success) {
          Swal.fire("Success", "News & Insight created successfully", "success");
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
        {id ? "Edit News & Insight" : "Create News & Insight"}
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleNewsInsight}>
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
  );
}
