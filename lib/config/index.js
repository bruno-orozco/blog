// do not convert to ESM and/or TS -- this needs to be imported in CJS files like next.config.js too
module.exports = {
  // Site info
  siteName: "Bruno Codes - Backend Developer",
  siteDomain: "brunocodes.com",
  siteLocale: "es-MX",
  timeZone: "America/Mexico_City", // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
  baseUrl:
    // NOTE: no trailing slashes!
    process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && process.env.NEXT_PUBLIC_VERCEL_URL !== undefined
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.IS_DEV_SERVER === true
      ? `http://localhost:${process.env.NEXT_DEV_PORT}`
      : "https://brunocodes.com", // fallback to production URL
  onionDomain: "http://blog-git-main-bruno-orozcos-projects.vercel.app",
  longDescription:
    "Desarrollador backend en Ciudad de México, con experiencia en Python y Java, ofrezco el desarrollo de productos de software.",
  verifyGoogle: "",
  verifyBing: "",
  fathomSiteId: "PIUEIVIZ",
  webmentionId: "brunocodes.com",
  giscusConfig: {
    repo: "bruno-orozco/homepage",
    repoId: "R_kgDONKC--g",
    category: "General",
    categoryId: "DIC_kwDONKC--s4Cj-Li",
  },
  // Me info
  authorName: "Bruno Orozco",
  authorEmail: "om_bruno@icloud.com",
  authorSocial: {
    github: "bruno-orozco",
    twitter: "bruno_codes",
    facebook: "bruno_codes",
    keybase: "bruno_codes",
    medium: "bruno_codes",
    linkedin: "orozco-bruno",
    instagram: "bruno_codes",
  },
};
