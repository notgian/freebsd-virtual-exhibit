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

export default function TerminalPanel({ user, host, command, commands }: TerminalPanelProps) {
  const colWidth = Math.max(...commands.map((c) => c.name.length)) + 1;
  const trimmed = command.trim();
  const matched = commands.find((c) => c.name === trimmed);
  const showAll = trimmed === "" || trimmed === "help";
  const entries = showAll ? commands : matched ? [matched] : [];

  return (
    <div className="flex h-72 w-full max-w-sm flex-col overflow-hidden rounded-md border border-red-600/70 bg-black/90 p-5 font-mono text-sm text-white shadow-[0_0_25px_-5px_rgba(239,68,68,0.4)]">
      <p className="mb-3 shrink-0">
        <span className="text-red-500">{user}@{host}</span>
        <span className="text-white">{">"} {trimmed || "help"}</span>
      </p>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {entries.length > 0 ? (
          <ul className="space-y-1.5">
            {entries.map((cmd) => (
              <li key={cmd.name} className="text-zinc-200">
                <span className="text-zinc-400">{cmd.name.padEnd(colWidth, " ")}</span>
                <span className="text-zinc-500"> - </span>
                <span className="text-zinc-400">{cmd.description}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-zinc-500">command not found: {trimmed}</p>
        )}
      </div>
    </div>
  );
}
