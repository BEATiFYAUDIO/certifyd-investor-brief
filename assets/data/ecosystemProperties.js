/**
 * @typedef {"profile" | "external" | "public" | "fan" | "network" | "awards" | "founder"} PropertyType
 * @typedef {"featured" | "core" | "leadership"} PropertyGroup
 *
 * @typedef {Object} EcosystemProperty
 * @property {string} id
 * @property {string} name
 * @property {PropertyType} type
 * @property {PropertyGroup} group
 * @property {string} category
 * @property {string} relationshipLabel
 * @property {string=} status
 * @property {string=} url
 * @property {string=} displayUrl
 * @property {string} actionLabel
 * @property {string} summary
 * @property {string[]} signals
 * @property {string} screenshot
 * @property {string=} mobileScreenshot
 * @property {string=} imagePosition
 * @property {string=} sourceRepo
 * @property {string=} sourcePath
 */

/** @type {EcosystemProperty[]} */
window.CERTIFYD_ECOSYSTEM_PROPERTIES = [
  {
    id: "vassal-certifyd",
    name: "Vassal Certifyd",
    type: "profile",
    group: "featured",
    category: "Applications",
    relationshipLabel: "Live creator profile",
    displayUrl: "vassal.certifyd.me",
    actionLabel: "View Profile",
    summary:
      "A live creator profile showing Certifyd identity and publishing in action.",
    signals: ["Creator relationship", "Music and entertainment", "Independent domain"],
    screenshot: "assets/screenshots/desktop/vassal-certifyd.png",
    imagePosition: "center 18%",
  },
  {
    id: "vassalbenford",
    name: "VassalBenford.com",
    type: "external",
    group: "featured",
    category: "People",
    relationshipLabel: "Strategic partner",
    status: "Live",
    url: "https://vassalbenford.com",
    actionLabel: "Visit Website",
    summary:
      "Vassal Benford’s professional website, providing external career and business context.",
    signals: ["Artist identity", "Public career context", "Independent web presence"],
    screenshot: "assets/screenshots/desktop/vassalbenford.png",
    imagePosition: "center 20%",
  },
  {
    id: "certifyd-site",
    name: "Certifyd",
    type: "public",
    group: "core",
    category: "Applications",
    relationshipLabel: "Identity, publishing and creator ownership",
    status: "Live",
    url: "https://certifyd.me",
    actionLabel: "Visit Certifyd",
    summary:
      "Identity, publishing and creator ownership.",
    signals: ["Company positioning", "Product entry points", "Creator infrastructure narrative"],
    screenshot: "assets/screenshots/desktop/certifyd.png",
    mobileScreenshot: "assets/screenshots/mobile/certifyd.png",
    imagePosition: "center top",
    sourceRepo: "certifyd-me-site",
    sourcePath: "index.html",
  },
  {
    id: "fan",
    name: "Certifyd Fan",
    type: "fan",
    group: "core",
    category: "Applications",
    relationshipLabel: "Audience discovery and support",
    status: "Live",
    url: "https://fan.certifyd.me",
    actionLabel: "Open Fan",
    summary:
      "Audience discovery, playback and direct creator support.",
    signals: ["Discovery board", "Persistent player", "Library and bundles"],
    screenshot: "assets/screenshots/desktop/fan.png",
    mobileScreenshot: "assets/screenshots/mobile/fan.png",
    imagePosition: "left 18%",
    sourceRepo: "certifyd-fan-pwa",
    sourcePath: "public/origins.json",
  },
  {
    id: "network",
    name: "Certifyd Network",
    type: "network",
    group: "core",
    category: "Network",
    relationshipLabel: "Public node and infrastructure services",
    status: "Live",
    url: "https://network.certifyd.me",
    actionLabel: "Explore the Network",
    summary:
      "Public node and infrastructure services.",
    signals: ["Node operator path", "Network map", "Public registry context"],
    screenshot: "assets/screenshots/desktop/network.png",
    mobileScreenshot: "assets/screenshots/mobile/network.png",
    imagePosition: "left 20%",
    sourceRepo: "certifyd-network-map",
    sourcePath: "README.md",
  },
  {
    id: "awards",
    name: "Certifyd Awards",
    type: "awards",
    group: "core",
    category: "Applications",
    relationshipLabel: "Recognition backed by public proof",
    status: "Live",
    url: "https://awards.certifyd.me",
    actionLabel: "Explore the Awards",
    summary:
      "Recognition backed by public proof.",
    signals: ["Awards directory", "Nominee pages", "Public submission path"],
    screenshot: "assets/screenshots/desktop/awards.png",
    mobileScreenshot: "assets/screenshots/mobile/awards.png",
    imagePosition: "left top",
    sourceRepo: "certifyd-awards-site",
    sourcePath: "src/data/awards.ts",
  },
  {
    id: "darrylhillock",
    name: "DarrylHillock.com",
    type: "founder",
    group: "leadership",
    category: "People",
    relationshipLabel: "Founder profile",
    url: "https://darrylhillock.com",
    actionLabel: "Visit Website",
    summary:
      "Founder profile.",
    signals: ["Product systems", "Music technology", "Company-building context"],
    screenshot: "assets/screenshots/desktop/darrylhillock-portrait.png",
    imagePosition: "center center",
  },
];

window.CERTIFYD_CORE_ENGINE = {
  name: "Certifyd Core",
  label: "The Foundation",
  headline: "The creator node engine.",
  summary:
    "Certifyd Core is the software creators and operators run locally.",
  availability: "Every Certifyd node begins with Certifyd Core.",
  manages: ["Identity", "Publishing", "Files", "Catalogs", "Distribution", "Creator ownership"],
};

window.CERTIFYD_THESIS_PILLARS = [
  {
    title: "Certifyd Core",
    body:
      "Creator node engine.",
  },
  {
    title: "Nodes",
    body:
      "Creators and operators run Certifyd Core.",
  },
  {
    title: "Certifyd Network",
    body:
      "Shared infrastructure connects participating nodes.",
  },
  {
    title: "Products",
    body:
      "Fan, Awards, Profiles and future applications extend the shared platform.",
  },
  {
    title: "Commercial Services",
    body:
      "Creator tools, enterprise, commerce, recognition and future products.",
  },
];

window.CERTIFYD_NETWORK_ORIGINS = [
  "https://certifyd.beatifygroup.com",
  "https://certifyd.darrylhillock.com",
  "https://public.certifyd.me",
  "https://certifyd2.inklinguy.pro",
  "https://certifyd.blessedrthe.fyi",
  "https://certifyd.ansolas.com",
];
