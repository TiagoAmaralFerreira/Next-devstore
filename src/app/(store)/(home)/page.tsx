import { resolve } from "path";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <div className="">
      <h1>Hello Word</h1>
    </div>
  );
}
