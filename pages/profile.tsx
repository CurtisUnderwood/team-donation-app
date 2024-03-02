import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user ? <div>Welcome {user.name}</div> : <div>Please log in first!</div>}!
      {/* Display user details */}
    </div>
  );
}
