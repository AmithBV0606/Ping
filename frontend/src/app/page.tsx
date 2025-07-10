import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-7">
      <div>
        <p className="text-2xl underline font-bold">Hello, World!!</p>
      </div>

      <div>
        <Button variant={"default"}>Click Me</Button>
      </div>
    </div>
  );
}
