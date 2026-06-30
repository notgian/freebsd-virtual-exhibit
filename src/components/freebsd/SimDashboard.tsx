import { useState } from "react";
import OSPanel from "./OSPanel";
import CommandInput from "./CommandInput";

const HELP_COMMANDS = [
  { name: "ls", description: "list directory contents" },
  // { name: "cd", description: "change the working directory" },
  { name: "echo", description: "print text to the terminal" },
  { name: "cat", description: "print file contents" },
];
 
const OS_CONFIGS = [
  { host: "freebsd", user: "user67", score: 38 },
  { host: "ubuntu", user: "user67", score: 72 },
];
 
export default function SimDashboard() {
  const [command, setCommand] = useState("help");
 
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-12">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10">
        <CommandInput defaultValue={command} onSubmit={setCommand} />
 
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          {OS_CONFIGS.map((os) => (
            <OSPanel
              key={os.host}
              host={os.host}
              user={os.user}
              score={os.score}
              command={command}
              commands={HELP_COMMANDS}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
