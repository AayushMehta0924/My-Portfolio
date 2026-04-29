import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useSound } from "../context/SoundContext";

// Update if wrong — guessed from email handle 0924
const BIRTH_DATE = "2000-09-24";

const PIANO_URL = "https://www.youtube.com/@2symphonians197";
const PROMPT = "aayush@portfolio:~$";

const SECTIONS = ["about", "technologies", "experience", "education", "projects", "contact", "top"];

const calcAge = () => {
  const dob = new Date(BIRTH_DATE);
  const now = new Date();
  let years = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) years--;
  return years;
};

const JOKES = [
  "There are 10 kinds of people: those who understand binary and those who don't.",
  "Why do Java devs wear glasses? Because they don't C#.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'mind if I JOIN you?'",
  "Why was the function sad after a successful first date? It never got called back.",
  "There's no place like 127.0.0.1.",
];

const buildCommands = ({ setTheme, setSound, getTheme, getSound, onClose }) => {
  const cmds = {
    help: () => [
      "available commands:",
      "  whoami       short bio",
      "  age          how old i am",
      "  ls           list site sections",
      "  cd <section> jump to section (about, projects, …)",
      "  skills       primary stack",
      "  experience   work timeline summary",
      "  education    schools + gpa",
      "  projects     project highlights",
      "  contact      how to reach me",
      "  social       links",
      "  resume       download Aayush_Resume.pdf",
      "  piano        my piano channel",
      "  fun-facts    things you didn't ask for",
      "  motto        words to live by",
      "  now          what i'm doing right now",
      "  joke         random programming dad-joke",
      "  theme [light|dark]   switch or toggle theme",
      "  sound [on|off]       toggle hover/click sounds",
      "  date         current date/time",
      "  echo <text>  repeat text back",
      "  sudo <cmd>   nice try",
      "  exit         close the terminal",
      "  clear        wipe the terminal",
    ],
    whoami: () => [
      "aayush mehta — data + ai engineer",
      "based in frisco, tx · building on google cloud",
      "currently shipping: customer 360, vertex ai agents, sap → bigquery",
    ],
    age: () => [`${calcAge()} years young.`],
    ls: () => [SECTIONS.map((s) => s + "/").join("  ")],
    skills: () => [
      "  python · sql · airflow · dbt · bigquery",
      "  vertex ai · google adk · looker · kafka",
      "  docker · kubernetes · postgres · mongo",
    ],
    experience: () => [
      "  jan 2026 – now    data architect      itdatabuild",
      "  may 2025 – dec 25 cloud data/ai eng   sabre",
      "  sept 2022 – jun 23 cloud data/ai eng   analytics it",
      "  nov 2021 – nov 22 head of finance      youth india foundation",
      "  nov 2021 – dec 21 web developer        twowaits",
      "  may 2021 – jun 22 data engineer       nividata",
      "  may 2020 – dec 20 data analyst        bosky buildcon",
    ],
    education: () => [
      "  m.s. computer science — arizona state university (3.73/4)  ★ namu scholarship",
      "  b.tech cse           — s.r.m. university, chennai (9.38/10)",
    ],
    projects: () => [
      "  streamlens          real-time video processing on kafka + resnet50",
      "  fraudulent merchant xgboost fraud-detection w/ class imbalance handling",
      "  navagraha classifier 9-class deity sculpture cnn (91% accuracy, published)",
      "  movie hub           mern app with jwt auth + omdb integration",
      "type 'cd projects' to see them.",
    ],
    contact: () => [
      "email   aayushmehta0924@gmail.com",
      "phone   +1 (469) 901-3435",
      "address 2337 Gelding Ln, Frisco, TX 75036",
    ],
    social: () => [
      "linkedin  /in/aayushmehta0924",
      "github    /AayushMehta0924",
      "piano     youtube.com/@2symphonians197",
    ],
    resume: () => {
      if (typeof window !== "undefined") window.open("/Aayush_Resume.pdf", "_blank");
      return ["opening Aayush_Resume.pdf …"];
    },
    piano: () => {
      if (typeof window !== "undefined") window.open(PIANO_URL, "_blank");
      return ["opening 2symphonians on youtube …", "(piano covers + originals)"];
    },
    "fun-facts": () => [
      "• ex head of finance at youth india foundation",
      "• trilingual: english, hindi, gujarati",
      "• plays piano · publishes covers as @2symphonians",
      "• co-authored a published paper on temple sculpture cnns",
      "• coffee > tea, but barely",
    ],
    funfacts: () => cmds["fun-facts"](),
    motto: () => [`"Hardware eventually fails. Software eventually works."`],
    now: () => [
      "→ migrating sap hana calc views → bigquery (airflow)",
      "→ exploring multi-agent orchestration patterns",
      "→ tinkering with llm evals & guardrails",
    ],
    joke: () => [JOKES[Math.floor(Math.random() * JOKES.length)]],
    date: () => [new Date().toString()],
    sudo: (args) => [`Permission denied: ${args.join(" ") || "you"} is not in the sudoers file. This incident will be reported.`],
    echo: (args) => [args.join(" ")],
    exit: () => {
      onClose && onClose();
      return ["bye 👋"];
    },
    clear: () => "__CLEAR__",
  };

  cmds.cd = (args) => {
    const target = (args[0] || "").replace(/\/$/, "").toLowerCase();
    if (!target) return ["usage: cd <section>"];
    if (!SECTIONS.includes(target)) return [`no such section: ${target}. try one of: ${SECTIONS.join(", ")}`];
    if (typeof document !== "undefined") {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return [`→ ${target}/`];
  };
  cmds.goto = cmds.cd;

  cmds.theme = (args) => {
    const arg = (args[0] || "").toLowerCase();
    if (!arg) {
      setTheme(getTheme() === "dark" ? "light" : "dark");
      return [`theme → ${getTheme() === "dark" ? "light" : "dark"}`];
    }
    if (arg !== "dark" && arg !== "light") return ["usage: theme [dark|light]"];
    setTheme(arg);
    return [`theme → ${arg}`];
  };

  cmds.sound = (args) => {
    const arg = (args[0] || "").toLowerCase();
    if (!arg) {
      setSound(!getSound());
      return [`sound → ${!getSound() ? "on" : "off"}`];
    }
    if (arg !== "on" && arg !== "off") return ["usage: sound [on|off]"];
    const want = arg === "on";
    if (want !== getSound()) setSound(want);
    return [`sound → ${arg}`];
  };

  return cmds;
};

const Terminal = ({ onClose }) => {
  const { theme, toggle: toggleTheme } = useTheme();
  const { enabled: soundOn, toggle: toggleSound } = useSound();

  const [history, setHistory] = useState([
    { type: "out", lines: ["welcome — type 'help' to see commands."] },
  ]);
  const [input, setInput] = useState("");
  const [recall, setRecall] = useState([]);
  const [recallIdx, setRecallIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // refs so the commands closure can read latest theme/sound without re-binding
  const themeRef = useRef(theme);
  const soundRef = useRef(soundOn);
  themeRef.current = theme;
  soundRef.current = soundOn;

  const commandsRef = useRef(null);
  if (!commandsRef.current) {
    commandsRef.current = buildCommands({
      setTheme: (v) => {
        if (v !== themeRef.current) toggleTheme();
      },
      setSound: (v) => {
        if (v !== soundRef.current) toggleSound();
      },
      getTheme: () => themeRef.current,
      getSound: () => soundRef.current,
      onClose,
    });
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const submit = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    setRecall((r) => [...r, trimmed]);
    setRecallIdx(-1);
    const [name, ...args] = trimmed.split(/\s+/);
    const fn = commandsRef.current[name.toLowerCase()];
    if (!fn) {
      setHistory((h) => [
        ...h,
        { type: "in", lines: [trimmed] },
        { type: "err", lines: [`command not found: ${name}. try 'help'.`] },
      ]);
      return;
    }
    const out = fn(args);
    if (out === "__CLEAR__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, { type: "in", lines: [trimmed] }, { type: "out", lines: out }]);
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
    } else if (e.key === "Escape" && onClose) {
      onClose();
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <motion.div
      onClick={focusInput}
      className="cursor-text rounded-xl border border-neutral-300 bg-neutral-100/95 font-mono text-sm shadow-2xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95"
    >
      <div className="flex items-center justify-between border-b border-neutral-300 px-4 py-2 dark:border-neutral-800">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="h-3 w-3 rounded-full bg-red-500/80 transition-transform hover:scale-110"
          />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-neutral-500">aayush — terminal</span>
        <span className="text-xs text-neutral-500">esc to close</span>
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
