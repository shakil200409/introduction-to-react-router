import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  const { userId } = useParams();
  console.log(userId);

  return (
    <div>
      <h2>Details about user: {name}</h2>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
