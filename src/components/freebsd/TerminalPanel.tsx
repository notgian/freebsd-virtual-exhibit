import { useMemo } from "react";

interface CommandEntry {
  name: string;
  description: string;
}

interface TerminalPanelProps {
  user: string;
  host: string;
  command: string;
  commands: CommandEntry[];
}

const FS: Record<string, { type: string; content?: string }> = {
  "/readme.txt": { type: "file", content: "Welcome to the sim terminal." },
  "/notes.txt": { type: "file", content: "Nothing to see here." },
};

function evaluate(raw: string): string[] {
  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  if (!cmd || cmd === "help") {
    return [
      "available commands:",
      "  ls           list directory contents",
      "  echo <text>  print text",
      "  cat <file>   print file contents",
    ];
  }

  if (cmd === "ls") {
    return ["readme.txt", "notes.txt"];
  }

  if (cmd === "echo") {
    return [args.join(" ") || ""];
  }

  if (cmd === "cat") {
    const file = args[0];
    if (!file) return ["cat: missing operand"];
    const entry = FS[`/${file}`];
    if (!entry) return [`cat: ${file}: no such file`];
    return [entry.content ?? ""];
  }

  return [`${cmd}: command not found`];
}

export default function TerminalPanel({ user, host, command }: TerminalPanelProps) {
  const trimmed = command.trim();
  const lines = useMemo(() => evaluate(trimmed), [trimmed]);

  return (
    <div className="flex h-72 w-full max-w-sm flex-col overflow-hidden rounded-md border border-red-600/70 bg-black/90 p-5 font-mono text-sm text-white shadow-[0_0_25px_-5px_rgba(239,68,68,0.4)]">
      <p className="mb-3 shrink-0">
        <span className="text-red-500">{user}@{host}</span>
        <span className="text-white">{"> "}{trimmed || "help"}</span>
      </p>
      <div className="min-h-0 flex-1 overflow-y-auto space-y-0.5">
        {lines.map((line, i) => (
          <p key={i} className="text-zinc-300 whitespace-pre">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
