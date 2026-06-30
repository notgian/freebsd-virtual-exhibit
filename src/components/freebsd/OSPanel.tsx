import TerminalPanel from "./TerminalPanel";

interface CommandEntry {
  name: string;
  description: string;
}

interface OSPanelProps {
  host: string;
  user: string;
  score: number;
  command: string;
  commands: CommandEntry[];
}

export default function OSPanel({ host, user, score, command, commands }: OSPanelProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <TerminalPanel user={user} host={host} command={command} commands={commands} />
    </div>
  );
}