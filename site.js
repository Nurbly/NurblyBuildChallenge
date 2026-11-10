// Edit these links. Every element with a matching data-link attribute, on every page, picks them up.
const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf69wwVc-SbedNtUcvbTx0MuECi4CSDu4kUj3SwHBGGuRNF3g/viewform";
const SPONSOR_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfUw2hdGM48Wno9_Rd5Qn9v3o48OMjSxv4tCVeEhbPk320oQA/viewform";
const RULES_URL = "rules.html";
const DISCORD_URL = "https://discord.gg/hH5B7P2Pfw"; // Leave empty to hide the Discord mention.
const CONTACT_EMAIL = "support@nurbly.com";

const links = { register: REGISTER_URL, sponsor: SPONSOR_URL, rules: RULES_URL, discord: DISCORD_URL,
  email: "mailto:" + CONTACT_EMAIL };
document.querySelectorAll("[data-link]").forEach(a => { a.href = links[a.dataset.link]; });
document.querySelectorAll('[data-link="email"]').forEach(a => { a.textContent = CONTACT_EMAIL; });
if (!DISCORD_URL) document.querySelectorAll('[data-needs="discord"]').forEach(el => el.remove());
