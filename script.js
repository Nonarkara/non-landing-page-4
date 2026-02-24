/* ══════════════════════════════════════════
   NON — Editorial Script
   i18n · media · steal ideas
   ══════════════════════════════════════════ */

/* ── CONTENT POLICY ── */

const CONTENT_POLICY = {
  excludeFolders: ["Family", "Commencement photos", "Non's Otters Transcription", "Transcripts from Otter"],
  excludePatterns: ["client_secret", ".json.txt", "ngrok_recovery_codes", "IMG_0960.JPG", "IMG_0971.JPG", "IMG_0974.JPG"]
};

/* ── FEATURED MEDIA ── */

const FEATURED_MEDIA = [
  { path: "Portrait photos/IMG_0786.JPG", section: "hero_main", alt: "Portrait of Non Arkaraprasertkul" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(10).jpg", section: "fieldwork", alt: "Fieldwork in Shanghai" },
  { path: "Lecture photos/DAY1_0368.jpg", section: "work_main", alt: "Non delivering a lecture" },
  { path: "Designated Survivor/ChatGPT Image Feb 23, 2026, 12_09_50 AM.png", section: "writing", alt: "Designated Survivor: Bangkok" }
];

/* ── STEAL MY IDEA ── */

const STEAL_IDEAS = [
  {
    titleKey: "steal1Title",
    descKey: "steal1Desc",
    json: {
      name: "City Data Platform",
      version: "1.0",
      layers: ["transport", "energy", "environment", "safety", "economy"],
      dataFrequency: "real-time",
      dashboardModules: ["KPI tracker", "alert system", "citizen feedback", "resource allocation"],
      govIntegration: true,
      openData: true,
      stack: { frontend: "React + Mapbox", backend: "FastAPI", db: "PostgreSQL + TimescaleDB" }
    }
  },
  {
    titleKey: "steal2Title",
    descKey: "steal2Desc",
    json: {
      name: "Design Thinking Workshop Kit",
      duration: "2 days",
      phases: ["empathize", "define", "ideate", "prototype", "test"],
      participants: { min: 15, max: 40 },
      materials: ["persona cards", "journey maps", "voting dots", "crazy-8 sheets"],
      facilitators: 2,
      deliverable: "action-plan.pdf"
    }
  },
  {
    titleKey: "steal3Title",
    descKey: "steal3Desc",
    json: {
      name: "Gamified Classroom",
      system: "points + badges + missions",
      levels: 5,
      weeklyMissions: 3,
      leaderboard: true,
      rewards: ["certificate", "showcase slot", "mentorship hour"],
      resetCycle: "semester",
      platform: "web + mobile"
    }
  },
  {
    titleKey: "steal4Title",
    descKey: "steal4Desc",
    json: {
      name: "Urban Ethnography Toolkit",
      methods: ["participant observation", "deep interviews", "photo diary", "mental mapping"],
      fieldDuration: "6-12 months",
      analysisFramework: "grounded theory",
      outputs: ["field notes", "thematic map", "policy brief"],
      ethics: "IRB approved",
      tools: ["audio recorder", "field journal", "GIS software"]
    }
  },
  {
    titleKey: "steal5Title",
    descKey: "steal5Desc",
    json: {
      name: "Tech Noir Novel Framework",
      genre: "speculative fiction",
      structure: { acts: 3, chapters: 24 },
      themes: ["surveillance", "resilience", "identity", "power"],
      setting: "near-future megacity",
      research: ["urban studies", "political theory", "technology ethics"],
      publishTo: ["Substack serial", "PDF export", "print-on-demand"]
    }
  },
  {
    titleKey: "steal6Title",
    descKey: "steal6Desc",
    json: {
      name: "Digital Literacy Bootcamp",
      weeks: 8,
      modules: ["data thinking", "platform literacy", "AI basics", "digital ethics", "cybersecurity 101"],
      audience: "government officials",
      format: "hybrid",
      assessment: "project-based",
      certification: true,
      alumni: "ongoing mentorship network"
    }
  }
];

/* ══════════════════════════════════
   I18N
   ══════════════════════════════════ */

const I18N = {
  en: {
    heroTagline: "City systems designer. Anthropologist. Novelist.",

    s1word: "fiction",
    s1p1: "He spent three years in Shanghai\u2019s disappearing neighborhoods\u2009\u2014\u2009mapping stories that urban planners were too busy to hear. Lilong alleys, families mid-eviction, a city rewriting itself overnight. He recorded it all, not as a tourist but as an ethnographer living inside the demolition zone.",
    s1p2: "Before that: architecture at KMITL (first-class honors), then a master\u2019s at MIT, a philosophy degree at Oxford, and a PhD at Harvard. Not for the frames on the wall. For the frameworks in the field.",

    s2word: "stop",
    s2p1: "Now he builds city systems that actually work. At depa and SLIC, Non translates \u201Csmart city\u201D from conference slides into street-level reality across all 77 Thai provinces. 120+ technology projects delivered. 5,000+ government officials retrained to think about data, design, and the people they serve.",
    s2p2: "His method: start from pain points, not trend decks. Design incentives before interfaces. Prototype fast, scale only what survives contact with the real world. He\u2019s been on stages in Barcelona, Shanghai, Johor Bahru, and Bangkok\u2009\u2014\u2009but the work that matters happens in provincial city halls at 9 AM on a Tuesday.",

    s3word: "sense?",
    s3p1: "At night, he writes speculative fiction. Designated Survivor: Bangkok\u2009\u2014\u2009a political thriller where the city\u2019s own smart systems become the battleground. Because the best way to stress-test infrastructure is to blow it up on paper first.",
    s3p2: "He also maintains nonharvard, a long-running personal blog on cities, culture, and the occasional existential crisis. Writing is where his strategy brain meets narrative craft.",
    s3link1: "Read the novel on Substack",
    s3link2: "Read the blog",

    s4word: "proprietary",
    s4intro: "These are real frameworks I use. Copy the JSON, fork the concept, build something better. No permission needed.",
    steal1Title: "City Data Platform",
    steal1Desc: "Full-stack city dashboard with real-time data layers and citizen feedback loops.",
    steal2Title: "Design Thinking Workshop Kit",
    steal2Desc: "Two-day workshop with five phases, materials, and a deliverable action plan.",
    steal3Title: "Gamified Classroom",
    steal3Desc: "Points-badges-missions system for engaging students or government trainees.",
    steal4Title: "Urban Ethnography Toolkit",
    steal4Desc: "Fieldwork methodology: from participant observation to policy brief.",
    steal5Title: "Tech Noir Novel Framework",
    steal5Desc: "Three-act structure for speculative fiction set in near-future megacities.",
    steal6Title: "Digital Literacy Bootcamp",
    steal6Desc: "8-week hybrid curriculum for government digital upskilling.",
    stealCopy: "Copy",
    stealCopied: "Copied!",

    s5word: "hiding",
    s5intro: "Here\u2019s where to find everything.",

    footer: "\u00A9 Non Arkaraprasertkul | \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 | \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93"
  },

  th: {
    heroTagline: "\u0E19\u0E31\u0E01\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E19\u0E31\u0E01\u0E21\u0E32\u0E19\u0E38\u0E29\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32 \u0E19\u0E31\u0E01\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22",

    s1word: "fiction",
    s1p1: "\u0E40\u0E02\u0E32\u0E43\u0E0A\u0E49\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E32\u0E21\u0E1B\u0E35\u0E43\u0E19\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E02\u0E2D\u0E07\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49\u2009\u2014\u2009\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E17\u0E35\u0E48\u0E19\u0E31\u0E01\u0E1C\u0E31\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E1F\u0E31\u0E07 \u0E15\u0E23\u0E2D\u0E01\u0E25\u0E35\u0E48\u0E2B\u0E25\u0E07 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E31\u0E27\u0E01\u0E25\u0E32\u0E07\u0E16\u0E39\u0E01\u0E44\u0E25\u0E48\u0E17\u0E35\u0E48 \u0E40\u0E21\u0E37\u0E2D\u0E07\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E02\u0E49\u0E32\u0E21\u0E04\u0E37\u0E19 \u0E40\u0E02\u0E32\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u2009\u2014\u2009\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E43\u0E19\u0E10\u0E32\u0E19\u0E30\u0E19\u0E31\u0E01\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27 \u0E41\u0E15\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E19\u0E31\u0E01\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E27\u0E23\u0E23\u0E13\u0E32\u0E17\u0E35\u0E48\u0E2D\u0E32\u0E28\u0E31\u0E22\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E25\u0E32\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E23\u0E37\u0E49\u0E2D\u0E16\u0E2D\u0E19",
    s1p2: "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E49\u0E19: \u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E01 \u0E2A\u0E08\u0E25. (\u0E40\u0E01\u0E35\u0E22\u0E23\u0E15\u0E34\u0E19\u0E34\u0E22\u0E21\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2B\u0E19\u0E36\u0E48\u0E07) \u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E42\u0E17\u0E08\u0E32\u0E01 MIT \u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E1B\u0E23\u0E31\u0E0A\u0E0D\u0E32\u0E08\u0E32\u0E01 Oxford \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E40\u0E2D\u0E01\u0E08\u0E32\u0E01 Harvard \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E32\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E1B\u0E41\u0E02\u0E27\u0E19 \u0E41\u0E15\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E32\u0E01\u0E23\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E44\u0E1B\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E2A\u0E19\u0E32\u0E21",

    s2word: "stop",
    s2p1: "\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E40\u0E02\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E08\u0E23\u0E34\u0E07 \u0E17\u0E35\u0E48 depa \u0E41\u0E25\u0E30 SLIC \u0E19\u0E19\u0E41\u0E1B\u0E25\u0E04\u0E33\u0E27\u0E48\u0E32 \u201C\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u201D \u0E08\u0E32\u0E01\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E16\u0E19\u0E19\u0E17\u0E31\u0E48\u0E27\u0E17\u0E31\u0E49\u0E07 77 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14 \u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E01\u0E27\u0E48\u0E32 120 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u0E2D\u0E1A\u0E23\u0E21\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E23\u0E31\u0E10\u0E01\u0E27\u0E48\u0E32 5,000 \u0E04\u0E19\u0E43\u0E2B\u0E49\u0E04\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E23\u0E31\u0E1A\u0E43\u0E0A\u0E49",
    s2p2: "\u0E27\u0E34\u0E18\u0E35\u0E02\u0E2D\u0E07\u0E40\u0E02\u0E32: \u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E08\u0E23\u0E34\u0E07 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E40\u0E17\u0E23\u0E19\u0E14\u0E4C \u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E23\u0E07\u0E08\u0E39\u0E07\u0E43\u0E08\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D \u0E17\u0E14\u0E25\u0E2D\u0E07\u0E40\u0E23\u0E47\u0E27 \u0E02\u0E22\u0E32\u0E22\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E19\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E40\u0E02\u0E32\u0E02\u0E36\u0E49\u0E19\u0E40\u0E27\u0E17\u0E35\u0E17\u0E35\u0E48\u0E1A\u0E32\u0E23\u0E4C\u0E40\u0E0B\u0E42\u0E25\u0E19\u0E32 \u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49 \u0E22\u0E30\u0E42\u0E2E\u0E23\u0E4C\u0E1A\u0E32\u0E2B\u0E23\u0E39 \u0E41\u0E25\u0E30\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F\u2009\u2014\u2009\u0E41\u0E15\u0E48\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E08\u0E23\u0E34\u0E07\u0E46 \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E35\u0E48\u0E28\u0E32\u0E25\u0E32\u0E01\u0E25\u0E32\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E49\u0E32\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23",

    s3word: "sense?",
    s3p1: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19\u0E40\u0E02\u0E32\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22\u0E41\u0E19\u0E27\u0E04\u0E32\u0E14\u0E40\u0E14\u0E32 Designated Survivor: Bangkok\u2009\u2014\u2009\u0E19\u0E34\u0E22\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u0E02\u0E2D\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E19\u0E32\u0E21\u0E23\u0E1A \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E27\u0E34\u0E18\u0E35\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E04\u0E37\u0E2D\u0E17\u0E33\u0E25\u0E32\u0E22\u0E21\u0E31\u0E19\u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E01\u0E48\u0E2D\u0E19",
    s3p2: "\u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E40\u0E02\u0E32\u0E22\u0E31\u0E07\u0E14\u0E39\u0E41\u0E25\u0E1A\u0E25\u0E47\u0E2D\u0E01 nonharvard \u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E21\u0E32\u0E22\u0E32\u0E27\u0E19\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E01\u0E24\u0E15\u0E2D\u0E31\u0E15\u0E16\u0E34\u0E20\u0E32\u0E27\u0E30\u0E22\u0E32\u0E21\u0E04\u0E48\u0E33\u0E04\u0E37\u0E19 \u0E07\u0E32\u0E19\u0E40\u0E02\u0E35\u0E22\u0E19\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E21\u0E2D\u0E07\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E40\u0E08\u0E2D\u0E01\u0E31\u0E1A\u0E28\u0E34\u0E25\u0E1B\u0E30\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
    s3link1: "\u0E2D\u0E48\u0E32\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22\u0E1A\u0E19 Substack",
    s3link2: "\u0E2D\u0E48\u0E32\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01",

    s4word: "proprietary",
    s4intro: "\u0E40\u0E1F\u0E23\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E08\u0E23\u0E34\u0E07\u0E17\u0E35\u0E48\u0E1C\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E01\u0E47\u0E2D\u0E1B JSON \u0E44\u0E1B\u0E43\u0E0A\u0E49 \u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E30\u0E44\u0E23\u0E17\u0E35\u0E48\u0E14\u0E35\u0E01\u0E27\u0E48\u0E32 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15",
    steal1Title: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E21\u0E37\u0E2D\u0E07",
    steal1Desc: "\u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E1F\u0E35\u0E14\u0E41\u0E1A\u0E47\u0E01\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
    steal2Title: "\u0E0A\u0E38\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D Design Thinking",
    steal2Desc: "\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E0A\u0E47\u0E2D\u0E1B 2 \u0E27\u0E31\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 \u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
    steal3Title: "\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E1A\u0E1A\u0E40\u0E01\u0E21\u0E34\u0E1F\u0E32\u0E22",
    steal3Desc: "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E15\u0E49\u0E21-\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D-\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E23\u0E07\u0E08\u0E39\u0E07\u0E43\u0E08\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19",
    steal4Title: "\u0E0A\u0E38\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E27\u0E23\u0E23\u0E13\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07",
    steal4Desc: "\u0E27\u0E34\u0E18\u0E35\u0E17\u0E33\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E2A\u0E19\u0E32\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E2A\u0E39\u0E48\u0E2A\u0E23\u0E38\u0E1B\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22",
    steal5Title: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E34\u0E22\u0E32\u0E22 Tech Noir",
    steal5Desc: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E34\u0E22\u0E32\u0E22\u0E41\u0E19\u0E27\u0E04\u0E32\u0E14\u0E40\u0E14\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E2D\u0E31\u0E19\u0E43\u0E01\u0E25\u0E49",
    steal6Title: "\u0E1A\u0E39\u0E17\u0E41\u0E04\u0E21\u0E1B\u0E4C\u0E23\u0E39\u0E49\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25",
    steal6Desc: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 8 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23",
    stealCopy: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01",
    stealCopied: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27!",

    s5word: "hiding",
    s5intro: "\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48",

    footer: "\u00A9 Non Arkaraprasertkul | \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 | \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93"
  },

  zh: {
    heroTagline: "\u57CE\u5E02\u7CFB\u7EDF\u8BBE\u8BA1\u5E08\u3002\u4EBA\u7C7B\u5B66\u5BB6\u3002\u5C0F\u8BF4\u5BB6\u3002",

    s1word: "fiction",
    s1p1: "\u4ED6\u5728\u4E0A\u6D77\u6B63\u5728\u6D88\u5931\u7684\u5F04\u5802\u91CC\u4F4F\u4E86\u4E09\u5E74\u2009\u2014\u2009\u8BB0\u5F55\u90A3\u4E9B\u57CE\u5E02\u89C4\u5212\u8005\u65E0\u6687\u503E\u542C\u7684\u6545\u4E8B\u3002\u5F04\u5802\u5DE7\u5DF7\u3001\u88AB\u8FEB\u8FC1\u7684\u5BB6\u5EAD\u3001\u4E00\u5EA7\u5728\u4E00\u591C\u4E4B\u95F4\u6539\u5199\u81EA\u5DF1\u7684\u57CE\u5E02\u3002\u4ED6\u4EE5\u6C11\u65CF\u5FD7\u5B66\u8005\u7684\u8EAB\u4EFD\u5C45\u4F4F\u5728\u62C6\u8FC1\u533A\u5185\uFF0C\u4E00\u4E00\u8BB0\u5F55\u8FD9\u4E00\u5207\u3002",
    s1p2: "\u5728\u6B64\u4E4B\u524D\uFF1AKMITL\u5EFA\u7B51\u5B66\u58EB\uFF08\u4E00\u7B49\u8363\u8A89\uFF09\u3001MIT\u7855\u58EB\u3001\u725B\u6D25\u54F2\u5B66\u5B66\u4F4D\u3001\u54C8\u4F5B\u535A\u58EB\u3002\u4E0D\u662F\u4E3A\u4E86\u5899\u4E0A\u7684\u6846\u67B6\uFF0C\u800C\u662F\u4E3A\u4E86\u7530\u91CE\u4E2D\u7684\u601D\u7EF4\u6846\u67B6\u3002",

    s2word: "stop",
    s2p1: "\u73B0\u5728\u4ED6\u5728\u6784\u5EFA\u771F\u6B63\u80FD\u8FD0\u884C\u7684\u57CE\u5E02\u7CFB\u7EDF\u3002\u5728 depa \u548C SLIC\uFF0C\u519C\u628A\u201C\u667A\u6167\u57CE\u5E02\u201D\u4ECE\u4F1A\u8BAE\u6F14\u793A\u8F6C\u5316\u4E3A\u8857\u5934\u73B0\u5B9E\uFF0C\u8986\u76D6\u6CF0\u56FD\u5168\u90E877\u4E2A\u7701\u3002\u4EA4\u4ED8120\u591A\u4E2A\u6280\u672F\u9879\u76EE\uFF0C\u57F9\u8BAD5000\u591A\u540D\u653F\u5E9C\u5B98\u5458\u91CD\u65B0\u601D\u8003\u6570\u636E\u3001\u8BBE\u8BA1\u4E0E\u670D\u52A1\u5BF9\u8C61\u3002",
    s2p2: "\u4ED6\u7684\u65B9\u6CD5\uFF1A\u4ECE\u771F\u5B9E\u75DB\u70B9\u51FA\u53D1\uFF0C\u800C\u975E\u8FFD\u9010\u6F6E\u6D41\u3002\u5148\u8BBE\u8BA1\u6FC0\u52B1\u673A\u5236\uFF0C\u518D\u8BBE\u8BA1\u754C\u9762\u3002\u5FEB\u901F\u8BD5\u70B9\uFF0C\u53EA\u653E\u5927\u7ECF\u5F97\u8D77\u5B9E\u8DF5\u68C0\u9A8C\u7684\u65B9\u6848\u3002\u4ED6\u5728\u5DF4\u585E\u7F57\u90A3\u3001\u4E0A\u6D77\u3001\u65B0\u5C71\u548C\u66FC\u8C37\u7684\u8BBA\u575B\u4E0A\u6F14\u8BB2\u2009\u2014\u2009\u4F46\u771F\u6B63\u91CD\u8981\u7684\u5DE5\u4F5C\u53D1\u751F\u5728\u5468\u4E8C\u65E9\u4E0A\u4E5D\u70B9\u7684\u7701\u7EA7\u5E02\u653F\u5385\u91CC\u3002",

    s3word: "sense?",
    s3p1: "\u591C\u665A\uFF0C\u4ED6\u5199\u63A8\u6D4B\u5C0F\u8BF4\u3002Designated Survivor: Bangkok\u2009\u2014\u2009\u4E00\u90E8\u57CE\u5E02\u667A\u80FD\u7CFB\u7EDF\u6210\u4E3A\u6218\u573A\u7684\u653F\u6CBB\u60CA\u609A\u5C0F\u8BF4\u3002\u56E0\u4E3A\u538B\u529B\u6D4B\u8BD5\u57CE\u5E02\u57FA\u7840\u8BBE\u65BD\u7684\u6700\u597D\u65B9\u5F0F\u662F\u5148\u5728\u7EB8\u4E0A\u7684\u7206\u7834\u5B83\u3002",
    s3p2: "\u4ED6\u8FD8\u7EF4\u62A4\u7740 nonharvard \u535A\u5BA2\uFF0C\u8FD9\u662F\u4E00\u4E2A\u957F\u671F\u8FD0\u884C\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u5185\u5BB9\u6DB5\u76D6\u57CE\u5E02\u3001\u6587\u5316\u548C\u5076\u5C14\u7684\u5B58\u5728\u4E3B\u4E49\u5371\u673A\u3002\u5199\u4F5C\u662F\u6218\u7565\u601D\u7EF4\u4E0E\u53D9\u4E8B\u6280\u5DE7\u7684\u4EA4\u6C47\u70B9\u3002",
    s3link1: "\u5728 Substack \u4E0A\u9605\u8BFB\u5C0F\u8BF4",
    s3link2: "\u9605\u8BFB\u535A\u5BA2",

    s4word: "proprietary",
    s4intro: "\u8FD9\u4E9B\u662F\u6211\u5B9E\u9645\u4F7F\u7528\u7684\u6846\u67B6\u3002\u590D\u5236 JSON\uFF0C\u53C9\u5F00\u6982\u5FF5\uFF0C\u505A\u51FA\u66F4\u597D\u7684\u4E1C\u897F\u3002\u65E0\u9700\u6388\u6743\u3002",
    steal1Title: "\u57CE\u5E02\u6570\u636E\u5E73\u53F0",
    steal1Desc: "\u5168\u6808\u57CE\u5E02\u4EEA\u8868\u677F\uFF0C\u5B9E\u65F6\u6570\u636E\u5C42\u4E0E\u5E02\u6C11\u53CD\u9988\u3002",
    steal2Title: "\u8BBE\u8BA1\u601D\u7EF4\u5DE5\u4F5C\u574A\u5957\u4EF6",
    steal2Desc: "\u4E24\u5929\u5DE5\u4F5C\u574A\u914D\u7F6E\uFF0C\u542B\u9636\u6BB5\u3001\u6750\u6599\u4E0E\u4EA4\u4ED8\u7269\u3002",
    steal3Title: "\u6E38\u620F\u5316\u8BFE\u5802",
    steal3Desc: "\u79EF\u5206-\u52CB\u7AE0-\u4EFB\u52A1\u7CFB\u7EDF\uFF0C\u63D0\u5347\u5B66\u5458\u53C2\u4E0E\u5EA6\u3002",
    steal4Title: "\u57CE\u5E02\u6C11\u65CF\u5FD7\u5DE5\u5177\u5305",
    steal4Desc: "\u4ECE\u89C2\u5BDF\u5230\u653F\u7B56\u7B80\u62A5\u7684\u7530\u91CE\u65B9\u6CD5\u3002",
    steal5Title: "\u79D1\u6280\u9ED1\u8272\u5C0F\u8BF4\u6846\u67B6",
    steal5Desc: "\u8FD1\u672A\u6765\u5DE8\u57CE\u6545\u4E8B\u7684\u63A8\u6D4B\u5C0F\u8BF4\u7ED3\u6784\u3002",
    steal6Title: "\u6570\u5B57\u7D20\u517B\u8BAD\u7EC3\u8425",
    steal6Desc: "8\u5468\u6DF7\u5408\u8BFE\u7A0B\uFF0C\u4E3A\u653F\u5E9C\u5B98\u5458\u6570\u5B57\u5316\u63D0\u5347\u3002",
    stealCopy: "\u590D\u5236",
    stealCopied: "\u5DF2\u590D\u5236\uFF01",

    s5word: "hiding",
    s5intro: "\u6240\u6709\u6E20\u9053\u90FD\u5728\u8FD9\u91CC\u3002",

    footer: "\u00A9 Non Arkaraprasertkul | \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 | \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93"
  }
};

/* ══════════════════════════════════
   HELPERS
   ══════════════════════════════════ */

function isDisallowedPath(path) {
  if (!path) return true;
  const v = path.toLowerCase();
  if (CONTENT_POLICY.excludeFolders.some(f => v.includes(f.toLowerCase()))) return true;
  return CONTENT_POLICY.excludePatterns.some(p => v.includes(p.toLowerCase()));
}

function textFor(lang, key) {
  return (I18N[lang] || I18N.en)[key] || I18N.en[key] || "";
}

function featured(section) {
  return FEATURED_MEDIA.find(i => i.section === section);
}

/* ══════════════════════════════════
   MEDIA
   ══════════════════════════════════ */

function hydrateMedia() {
  document.querySelectorAll("img[data-media]").forEach(img => {
    const m = featured(img.dataset.media);
    if (!m || isDisallowedPath(m.path)) { img.removeAttribute("src"); return; }
    img.src = encodeURI(m.path);
    img.alt = m.alt;
  });
}

/* ══════════════════════════════════
   STEAL MY IDEA
   ══════════════════════════════════ */

function renderStealIdeas(lang) {
  const container = document.getElementById("steal-list");
  if (!container) return;
  container.innerHTML = "";

  const copyLabel = textFor(lang, "stealCopy");
  const copiedLabel = textFor(lang, "stealCopied");

  STEAL_IDEAS.forEach((idea, idx) => {
    const item = document.createElement("div");
    item.className = "steal-item";

    const head = document.createElement("button");
    head.className = "steal-head";
    head.textContent = textFor(lang, idea.titleKey);
    head.setAttribute("aria-expanded", "false");

    const body = document.createElement("div");
    body.className = "steal-body";

    const desc = document.createElement("p");
    desc.className = "steal-desc";
    desc.textContent = textFor(lang, idea.descKey);

    const jsonWrap = document.createElement("div");
    jsonWrap.className = "steal-json-wrap";

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = JSON.stringify(idea.json, null, 2);
    pre.appendChild(code);

    const copyBtn = document.createElement("button");
    copyBtn.className = "steal-copy-btn";
    copyBtn.textContent = copyLabel;

    jsonWrap.appendChild(pre);
    jsonWrap.appendChild(copyBtn);

    body.appendChild(desc);
    body.appendChild(jsonWrap);

    head.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      head.setAttribute("aria-expanded", String(isOpen));
    });

    copyBtn.addEventListener("click", () => {
      const text = JSON.stringify(idea.json, null, 2);
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => { copyBtn.textContent = copyLabel; copyBtn.classList.remove("copied"); }, 1800);
      }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
        copyBtn.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => { copyBtn.textContent = copyLabel; copyBtn.classList.remove("copied"); }, 1800);
      });
    });

    item.appendChild(head);
    item.appendChild(body);
    container.appendChild(item);
  });
}

/* ══════════════════════════════════
   LANGUAGE
   ══════════════════════════════════ */

const translatableNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const selected = I18N[lang] ? lang : "en";

  translatableNodes.forEach(node => {
    node.textContent = textFor(selected, node.dataset.i18n);
  });

  langButtons.forEach(btn => {
    const isActive = btn.dataset.lang === selected;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.tabIndex = isActive ? 0 : -1;
  });

  document.documentElement.lang = selected === "zh" ? "zh" : selected;
  localStorage.setItem("nonLandingLang", selected);

  renderStealIdeas(selected);
}

function setupLanguage() {
  langButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    btn.addEventListener("keydown", e => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const offset = e.key === "ArrowRight" ? 1 : -1;
      const next = (i + offset + langButtons.length) % langButtons.length;
      langButtons[next].focus();
      setLanguage(langButtons[next].dataset.lang);
    });
  });
}

/* ══════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════ */

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(n => n.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });

  nodes.forEach(n => observer.observe(n));
}

/* ══════════════════════════════════
   INIT
   ══════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  hydrateMedia();
  setupLanguage();

  const savedLang = localStorage.getItem("nonLandingLang") || "en";
  setLanguage(savedLang);

  // Add reveal class to story sections and photos
  document.querySelectorAll(".story, .bleed-photo").forEach(el => el.classList.add("reveal"));
  setupReveal();
});
