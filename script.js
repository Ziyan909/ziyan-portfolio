// ===============================
// TERMINAL FEED (CONTROLLED)
// ===============================
const terminal = document.getElementById("terminal");

const logs = [
  "Scanning network 10.0.0.0/24...",
  "Port 22 open on 10.0.0.5",
  "Brute force detected from 185.203.10.22",
  "Honeypot connection logged",
  "Malware beacon blocked",
  "Firewall rule deployed",
  "Suspicious traffic quarantined",
  "Threat signature updated",
  "Packet drop rule activated"
];

let maxLines = 15;

function addLog() {
  const line = "> " + logs[Math.floor(Math.random() * logs.length)];
  terminal.textContent += line + "\n";

  let lines = terminal.textContent.split("\n");
  if (lines.length > maxLines) {
    lines = lines.slice(lines.length - maxLines);
    terminal.textContent = lines.join("\n");
  }

  terminal.scrollTop = terminal.scrollHeight;
}

setInterval(addLog, 1800);

// ===============================
// TYPING EFFECT WITH PAUSE
// ===============================
const text = "Monitoring threats • Detecting intrusions • Securing networks";
const typingEl = document.getElementById("typing");

let index = 0;
let isDeleting = false;
let pause = false;

function typeEffect() {
  if (pause) return;

  if (!isDeleting) {
    typingEl.textContent = text.slice(0, index++);
    if (index > text.length) {
      pause = true;
      setTimeout(() => {
        isDeleting = true;
        pause = false;
      }, 1500); // hold full text
    }
  } else {
    typingEl.textContent = text.slice(0, index--);
    if (index === 0) {
      isDeleting = false;
    }
  }
}

setInterval(typeEffect, 80);
