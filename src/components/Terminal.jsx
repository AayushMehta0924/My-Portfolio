import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const COMMANDS = {
  help: () => [
    "Available commands:",
    "  whoami      — short bio",
    "  skills      — primary stack",
    "  contact     — how to reach me",
    "  resume      — open resume.pdf",
    "  social      — links",
    "  clear       — wipe the terminal",
  ],
  whoami: () => [
    "aayush mehta — data + ai engineer",
    "based in frisco, tx · building on google cloud",
  ],
  skills: () => [
    "  python · sql · airflow · dbt · bigquery",
    "  vertex ai · google adk · looker · kafka",
  ],
  contact: () => [
    "email   aayushmehta0924@gmail.com",
    "phone   +1 (469) 901-3435",
    "address 2337 Gelding Ln, Frisco, TX 75036",
  ],
  resume: () => {
    if (typeof window !== "undefined") window.open("/Aayush_Resume.pdf", "_blank");
    return ["opening Aayush_Resume.pdf …"];
  },
  social: () => [
    "linkedin  /in/aayushmehta0924",
    "github    /AayushMehta0924",
  ],
  clear: () => "__CLEAR__",
};

const PROMPT = "aayush@portfolio:~$";

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: "out", lines: ["welcome — type 'help' to see commands."] },
  ]);
  const [input, setInput] = useState("");
  const [recall, setRecall] = useState([]);
  const [recallIdx, setRecallIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  const focusInput = () => inputRef.current?.focus();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const submit = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    setRecall((r) => [...r, cmd]);
    setRecallIdx(-1);
    const fn = COMMANDS[cmd];
    if (!fn) {
      setHistory((h) => [
        ...h,
        { type: "in", lines: [cmd] },
        { type: "err", lines: [`command not found: ${cmd}. try 'help'.`] },
      ]);
      return;
    }
    const out = fn();
    if (out === "__CLEAR__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, { type: "in", lines: [cmd] }, { type: "out", lines: out }]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!recall.length) return;
      const idx = recallIdx < 0 ? recall.length - 1 : Math.max(0, recallIdx - 1);
      setRecallIdx(idx);
      setInput(recall[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (recallIdx < 0) return;
      const idx = recallIdx + 1;
      if (idx >= recall.length) {
        setRecallIdx(-1);
        setInput("");
      } else {
        setRecallIdx(idx);
        setInput(recall[idx]);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={focusInput}
      className="mx-auto mt-10 max-w-2xl cursor-text rounded-xl border border-neutral-300 bg-neutral-100/80 font-mono text-sm shadow-2xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
    >
      <div className="flex items-center justify-between border-b border-neutral-300 px-4 py-2 dark:border-neutral-800">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-neutral-500">aayush — terminal</span>
        <span className="w-12" />
      </div>

      <div ref={scrollRef} className="h-64 overflow-y-auto px-4 py-3 text-neutral-800 dark:text-neutral-200">
        {history.map((row, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {row.type === "in" ? (
              <div className="flex gap-2">
                <span className="text-emerald-600 dark:text-emerald-400">{PROMPT}</span>
                <span>{row.lines[0]}</span>
              </div>
            ) : row.type === "err" ? (
              row.lines.map((l, j) => (
                <div key={j} className="text-rose-600 dark:text-rose-400">{l}</div>
              ))
            ) : (
              row.lines.map((l, j) => <div key={j}>{l}</div>)
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <span className="text-emerald-600 dark:text-emerald-400">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
