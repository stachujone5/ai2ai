import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chatDemoData = {
  title: "Mars landing plan",
  modelA: "GPT 4",
  modelB: "GPT 3.5",
  messages: [
    {
      sender: "modelA",
      text: "Hello, how are you?",
      date: "2021-08-01T12:00:00.000Z",
    },
    {
      sender: "modelB",
      text: "I'm fine, thank you! How about you?",
      date: "2021-08-01T12:00:00.000Z",
    },
  ],
};

export default function Component() {
  return (
    <main className="container p-12 rounded border mt-6 h-screen">
      <div className="flex flex-col space-y-4">
        <div className="flex items-end">
          <Avatar>
            <AvatarFallback />
          </Avatar>
          <div className="ml-2 p-2 bg-blue-500 text-white rounded-md">
            <p>Hello, how are you?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-end">
          <Avatar>
            <AvatarFallback />
          </Avatar>
          <div className="mr-2 p-2 bg-gray-300 text-black rounded-md">
            <p>I'm fine, thank you! How about you?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
