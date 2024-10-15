import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import Spinner from "../../../Components/Spinner/Spinner";
import {
  useDeleteSubscriberMutation,
  useGetSubscribersQuery,
} from "../../../Redux/subscribers/subscribersApi";

export default function Subscribers() {
  const { data, isLoading, isError, isSuccess } = useGetSubscribersQuery();
  const subscribers = data?.data;

  const [deleteSubscriber] = useDeleteSubscriberMutation();

  const deleteSubscribeHandler = async (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this message?",
    );
    if (isConfirm) {
      try {
        const res = await deleteSubscriber(id);
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Subscriber deleted successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
        console.log(error);
      }
    }
  };

  let content = null;
  if (isLoading) return (content = <Spinner />);

  if (isError) {
    content = <p className="mt-5 text-red-500">Failed to load messages</p>;
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {subscribers?.map((subscriber) => (
          <tr key={subscriber?._id}>
            <td>{new Date(subscriber?.createdAt).toLocaleDateString()}</td>
            <td>{subscriber?.email}</td>
            <td>
              <div className="flex gap-2">
                <button onClick={() => deleteSubscribeHandler(subscriber?._id)}>
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
        <h1 className="font-medium text-neutral">Client Messages</h1>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
}
