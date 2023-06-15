import Image from "next/image";

const getDatas = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const datas = await getDatas();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {datas.users.map((user) => (
        <div key={user.id} className="flex flex-col items-center text-black">
          Hello {user.first_name} {user.last_name}
        </div>
      ))}
    </main>
  );
}
