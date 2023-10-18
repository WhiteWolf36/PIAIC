export async function generateStaticProducts() {
  const users: string[] = ["Ahmad", "Haad", "Salman"];
  return users.map((user) => {
    user: user;
  });
}

export default function page({ params }: { params: { user: string } }) {
  return <div className="bg-red-500">My name is {params.user}</div>;
}
