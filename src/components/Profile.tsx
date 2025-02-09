import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading || !user) return null;

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
