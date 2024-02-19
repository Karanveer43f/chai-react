import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-center text-3xl rounded-xl text-white p-4">
        User: {id}
      </div>
    </>
  );
}
export default User;
