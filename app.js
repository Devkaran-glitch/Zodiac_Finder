const ZODIAC_DATA = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "March 21 - April 19",
    element: "Fire",
    ruling: "Mars",
    traits: [
      "Bold and ambitious leader",
      "Confident and courageous",
      "Energetic and pioneering",
      "Independent and competitive",
    ],
    compat: ["Leo", "Sagittarius"],
    daily: "Your energy is contagious today - lead the way!",
    color: "#FF6B6B",
    start: [3, 21],
    end: [4, 19],
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "April 20 - May 20",
    element: "Earth",
    ruling: "Venus",
    traits: [
      "Practical and reliable",
      "Patient and determined",
      "Loves luxury and comfort",
      "Loyal and stable",
    ],
    compat: ["Virgo", "Capricorn"],
    daily: "Take time to appreciate life's simple pleasures today.",
    color: "#4ECDC4",
    start: [4, 20],
    end: [5, 20],
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - June 20",
    element: "Air",
    ruling: "Mercury",
    traits: [
      "Versatile and communicative",
      "Quick-witted and curious",
      "Adaptable and social",
      "Intellectually restless",
    ],
    compat: ["Libra", "Aquarius"],
    daily: "Your curiosity opens new doors to exciting possibilities.",
    color: "#45B7D1",
    start: [5, 21],
    end: [6, 20],
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "June 21 - July 22",
    element: "Water",
    ruling: "Moon",
    traits: [
      "Nurturing and protective",
      "Emotionally intuitive",
      "Home and family focused",
      "Compassionate and caring",
    ],
    compat: ["Scorpio", "Pisces"],
    daily: "Trust your intuition - it's guiding you well today.",
    color: "#96CEB4",
    start: [6, 21],
    end: [7, 22],
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "July 23 - August 22",
    element: "Fire",
    ruling: "Sun",
    traits: [
      "Charismatic and confident",
      "Generous and warm-hearted",
      "Creative and dramatic",
      "Natural born leader",
    ],
    compat: ["Aries", "Sagittarius"],
    daily: "Shine bright - the world needs your unique light!",
    color: "#F39C12",
    start: [7, 23],
    end: [8, 22],
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "August 23 - September 22",
    element: "Earth",
    ruling: "Mercury",
    traits: [
      "Analytical and detail-oriented",
      "Practical and organized",
      "Helpful and reliable",
      "Perfectionist tendencies",
    ],
    compat: ["Taurus", "Capricorn"],
    daily: "Your attention to detail creates perfect opportunities.",
    color: "#6C7B7F",
    start: [8, 23],
    end: [9, 22],
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "September 23 - October 22",
    element: "Air",
    ruling: "Venus",
    traits: [
      "Diplomatic and fair-minded",
      "Social and charming",
      "Seeks balance and harmony",
      "Aesthetic and refined",
    ],
    compat: ["Gemini", "Aquarius"],
    daily: "Balance is your superpower - use it to create harmony.",
    color: "#E8A87C",
    start: [9, 23],
    end: [10, 22],
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "October 23 - November 21",
    element: "Water",
    ruling: "Pluto",
    traits: [
      "Intense and passionate",
      "Mysterious and intuitive",
      "Determined and resourceful",
      "Emotionally deep",
    ],
    compat: ["Cancer", "Pisces"],
    daily: "Your inner strength transforms challenges into victories.",
    color: "#C44569",
    start: [10, 23],
    end: [11, 21],
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "November 22 - December 21",
    element: "Fire",
    ruling: "Jupiter",
    traits: [
      "Adventurous and optimistic",
      "Philosophical and open-minded",
      "Freedom-loving traveler",
      "Honest and straightforward",
    ],
    compat: ["Aries", "Leo"],
    daily: "Adventure awaits - follow your wandering spirit!",
    color: "#F8B500",
    start: [11, 22],
    end: [12, 21],
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "December 22 - January 19",
    element: "Earth",
    ruling: "Saturn",
    traits: [
      "Ambitious and disciplined",
      "Practical and responsible",
      "Patient and persistent",
      "Traditional and cautious",
    ],
    compat: ["Taurus", "Virgo"],
    daily: "Steady progress leads to lasting success today.",
    color: "#40739e",
    start: [12, 22],
    end: [1, 19],
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "January 20 - February 18",
    element: "Air",
    ruling: "Uranus",
    traits: [
      "Independent and innovative",
      "Humanitarian and progressive",
      "Intellectual and unique",
      "Friendly yet detached",
    ],
    compat: ["Gemini", "Libra"],
    daily: "Your unique perspective sparks positive change around you.",
    color: "#487eb0",
    start: [1, 20],
    end: [2, 18],
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "February 19 - March 20",
    element: "Water",
    ruling: "Neptune",
    traits: [
      "Compassionate and artistic",
      "Intuitive and empathetic",
      "Dreamy and imaginative",
      "Sensitive and spiritual",
    ],
    compat: ["Cancer", "Scorpio"],
    daily: "Let your compassion and creativity flow freely today.",
    color: "#8c7ae6",
    start: [2, 19],
    end: [3, 20],
  },
];

function getSign(month, day) {
  for (const sign of ZODIAC_DATA) {
    if (
      sign.start[0] < sign.end[0] ||
      (sign.start[0] === sign.end[0] && sign.start[1] < sign.end[1])
    ) {
      // No year cross
      if (
        (month === sign.start[0] && day >= sign.start[1]) ||
        (month === sign.end[0] && day <= sign.end[1]) ||
        (month > sign.start[0] && month < sign.end[0])
      )
        return sign;
    } else {
      // Cross-year (Capricorn)
      if (
        (month === sign.start[0] && day >= sign.start[1]) ||
        (month === sign.end[0] && day <= sign.end[1]) ||
        month > sign.start[0] ||
        month < sign.end[0]
      )
        return sign;
    }
  }
  return null;
}

// Main DOM elements
const zodiacForm = document.getElementById("zodiac-form");
const birthDate = document.getElementById("birth-date");
const birthDay = document.getElementById("birth-day");
const birthMonth = document.getElementById("birth-month");
const errorMsg = document.getElementById("error-msg");
const resultCard = document.getElementById("result-card");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Input handlers
function parseInput() {
  let date = birthDate.value;
  if (date) {
    let parts = date.split("-");
    // YYYY-MM-DD
    let month = parseInt(parts[1], 10);
    let day = parseInt(parts[2], 10);
    if (isNaN(month) || isNaN(day)) return null;
    return { month, day };
  }
  let m = parseInt(birthMonth.value, 10);
  let d = parseInt(birthDay.value, 10);
  if (!isNaN(m) && !isNaN(d)) {
    return { month: m, day: d };
  }
  return null;
}

function validateInput() {
  let { month, day } = parseInput() || {};
  if (!month || !day) return "Please select a valid date.";
  if (month < 1 || month > 12 || day < 1 || day > 31)
    return "Day or month out of range.";
  if ([4, 6, 9, 11].includes(month) && day > 30)
    return "Selected month only has 30 days.";
  if (month === 2 && day > 29) return "February only has up to 29 days.";
  return "";
}

// Form submit handler
zodiacForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMsg.textContent = "";
  errorMsg.style.opacity = "0";
  resultCard.classList.remove("visible");
  resultCard.innerHTML = "";

  let err = validateInput();
  if (err) {
    errorMsg.textContent = err;
    errorMsg.style.opacity = "1";
    return;
  }

  let { month, day } = parseInput();
  const sign = getSign(month, day);

  if (!sign) {
    errorMsg.textContent = "Unable to detect sign for this date.";
    errorMsg.style.opacity = "1";
    return;
  }

  showSign(sign);
  clearBtn.classList.remove("hidden");
});

function showSign(sign) {
  // Card animated content
  resultCard.innerHTML = `
    <span class="sign-icon" style="color:${sign.color};" title="${sign.name}">${
    sign.symbol
  }</span>
    <div class="sign-label">${sign.name}</div>
    <div class="sign-dates">${sign.dates}</div>
    <ul class="traits-list">${sign.traits
      .map((tr) => `<li>${tr}</li>`)
      .join("")}</ul>
    <div class="meta-info">
      <strong>Element:</strong> ${
        sign.element
      } &nbsp; | &nbsp; <strong>Ruling Planet:</strong> ${sign.ruling}
    </div>
    <div class="compatibility">
      <span class="compat-sign-badge" title="Strong vibes">${
        sign.compat[0]
      }</span>
      <span class="compat-sign-badge" title="Good match">${
        sign.compat[1]
      }</span>
    </div>
    <div class="daily-vibe">${sign.daily}</div>
  `;
  resultCard.classList.add("visible");
}

// Clear handler
clearBtn.addEventListener("click", () => {
  resultCard.innerHTML = "";
  resultCard.classList.remove("visible");
  birthDate.value = "";
  birthDay.value = "";
  birthMonth.value = "";
  errorMsg.textContent = "";
  errorMsg.style.opacity = "0";
  clearBtn.classList.add("hidden");
});

// Theme toggle handler
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.add("theme-transition");
  setTimeout(() => body.classList.remove("theme-transition"), 700);
  // Pick icon
  document
    .querySelectorAll("#toggle-icon.sun")
    .forEach(
      (icon) =>
        (icon.style.display = body.classList.contains("dark-mode")
          ? "none"
          : "inline")
    );
  document
    .querySelectorAll("#toggle-icon.moon")
    .forEach(
      (icon) =>
        (icon.style.display = body.classList.contains("dark-mode")
          ? "inline"
          : "none")
    );
});

// Accessibility: Enter clears card or submits form
document.addEventListener("keydown", (e) => {
  if (
    (e.key === "Enter" || e.key === " ") &&
    clearBtn === document.activeElement
  ) {
    clearBtn.click();
  }
  if (
    (e.key === "Enter" || e.key === " ") &&
    zodiacForm === document.activeElement
  ) {
    zodiacForm.submit();
  }
});
