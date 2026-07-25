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
 * @property {string=} mediaAspect
 * @property {string=} mobileMediaAspect
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
    relationshipLabel: "Creator profile",
    url: "https://vassal.certifyd.me",
    displayUrl: "vassal.certifyd.me",
    actionLabel: "View Profile",
    summary:
      "A live creator profile on Certifyd.",
    signals: ["Creator relationship", "Music and entertainment", "Independent domain"],
    screenshot: "assets/screenshots/desktop/vassal-certifyd.png",
    mobileScreenshot: "assets/screenshots/mobile/vassal-certifyd-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "1080 / 2042",
    imagePosition: "center 18%",
  },
  {
    id: "vassalbenford",
    name: "VassalBenford.com",
    type: "external",
    group: "featured",
    category: "People",
    relationshipLabel: "Founder",
    status: "Live",
    url: "https://vassalbenford.com",
    actionLabel: "Visit Website",
    summary:
      "Founder background across music, entertainment and business.",
    signals: ["Artist identity", "Founder background", "Independent web presence"],
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
      "Creator identity and publishing.",
    signals: ["Creator identity", "Publishing", "Ownership"],
    screenshot: "assets/screenshots/desktop/certifyd.png",
    mobileScreenshot: "assets/screenshots/mobile/certifyd-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "4 / 5",
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
      "Fan discovery, playback and creator support.",
    signals: ["Discovery", "Playback", "Library and bundles"],
    screenshot: "assets/screenshots/desktop/fan.png",
    mobileScreenshot: "assets/screenshots/mobile/fan-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "4 / 5",
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
    relationshipLabel: "Node and infrastructure services",
    status: "Live",
    url: "https://network.certifyd.me",
    actionLabel: "Explore the Network",
    summary:
      "Node discovery and network services.",
    signals: ["Node discovery", "Network services", "Operator path"],
    screenshot: "assets/screenshots/desktop/network.png",
    mobileScreenshot: "assets/screenshots/mobile/network-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "5 / 4",
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
    relationshipLabel: "Awards and recognition platform",
    status: "Live",
    url: "https://awards.certifyd.me",
    actionLabel: "Explore the Awards",
    summary:
      "Awards, nominees and public submissions.",
    signals: ["Awards directory", "Nominee pages", "Submissions"],
    screenshot: "assets/screenshots/desktop/awards.png",
    mobileScreenshot: "assets/screenshots/mobile/awards-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "5 / 4",
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
      "Founder background and product work.",
    signals: ["Product systems", "Music technology", "Creator commerce"],
    screenshot: "assets/screenshots/desktop/darrylhillock.png",
    mobileScreenshot: "assets/screenshots/mobile/darrylhillock-card.jpg",
    mediaAspect: "16 / 10",
    mobileMediaAspect: "5 / 4",
    imagePosition: "center top",
  },
];

window.CERTIFYD_CORE_ENGINE = {
  name: "Certifyd Core",
  label: "The Foundation",
  headline: "The creator node engine.",
  summary:
    "Local node software for creators and operators.",
  availability: "Every node starts with Core.",
  manages: ["Identity", "Publishing", "Files", "Catalogs", "Distribution", "Creator ownership"],
};

window.CERTIFYD_THESIS_PILLARS = [
  {
    title: "Certifyd Core",
    body:
      "Node engine for identity, publishing, files, catalogs and distribution.",
  },
  {
    title: "Nodes",
    body:
      "Creators and operators run Core on their own systems.",
  },
  {
    title: "Certifyd Network",
    body:
      "Shared services connect participating nodes.",
  },
  {
    title: "Products",
    body:
      "Fan, Awards, Profiles and future applications use the same infrastructure.",
  },
  {
    title: "Commercial Services",
    body:
      "Creator tools, enterprise services, commerce and recognition expand from the platform.",
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
