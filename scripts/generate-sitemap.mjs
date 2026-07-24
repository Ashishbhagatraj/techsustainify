import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "../data");
const BASE_URL = "https://techsustainify.com";

function scanAllParams() {
  const params = [];
  if (!fs.existsSync(DATA_DIR)) return params;

  const subjects = fs.readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const subject of subjects) {
    const files = fs.readdirSync(path.join(DATA_DIR, subject))
      .filter((f) => f.endsWith(".json"));
    for (const file of files) {
      params.push({ subject, topic: file.replace(".json", "") });
    }
  }
  return params;
}

function generateSitemap() {
  const params = scanAllParams();
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    `<url><loc>${BASE_URL}</loc></url>`,
    ...params.map(({ subject, topic }) =>
      `<url><loc>${BASE_URL}/${subject}/${topic}/</loc></url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
  console.log(`✅ sitemap.xml generated — ${params.length + 1} URLs`);
}

function generateTopicDataFile() {
  const params = scanAllParams();

  const imports = params.map(({ subject, topic }) =>
    `import ${subject}_${topic.replace(/-/g, "_")} from '../data/${subject}/${topic}.json';`
  ).join("\n");

  const entries = params.map(({ subject, topic }) =>
    `  "${subject}/${topic}": ${subject}_${topic.replace(/-/g, "_")}`
  ).join(",\n");

  const content = `// AUTO GENERATED — mat chhedna\n${imports}\n\nexport const allTopicData: Record<string, any> = {\n${entries}\n};\n\nexport function scanAllParams() {\n  return Object.keys(allTopicData).map((key) => {\n    const [subject, topic] = key.split("/");\n    return { subject, topic };\n  });\n}\n`;

  fs.writeFileSync(path.join(__dirname, "../lib/scansitemaptopic.ts"), content);
  console.log(`✅ scansitemaptopic.ts generated — ${params.length} topics`);
}

generateSitemap();
generateTopicDataFile();

// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const DATA_DIR = path.join(__dirname, "../data");
// const BASE_URL = "https://techsustainify.com";

// function scanAllParams() {
//   const params = [];

//   if (!fs.existsSync(DATA_DIR)) return params;

//   const subjects = fs
//     .readdirSync(DATA_DIR, { withFileTypes: true })
//     .filter((d) => d.isDirectory())
//     .map((d) => d.name);

//   for (const subject of subjects) {
//     const files = fs
//       .readdirSync(path.join(DATA_DIR, subject))
//       .filter((f) => f.endsWith(".json"));

//     for (const file of files) {
//       params.push({
//         subject,
//         topic: file.replace(".json", ""),
//       });
//     }
//   }

//   return params;
// }

// function generateSitemap() {
//   const params = scanAllParams();

//   const urls = [
//     `<url><loc>${BASE_URL}</loc></url>`,

//     ...params.map(
//       ({ subject, topic }) =>
//         `<url><loc>${BASE_URL}/${subject}/${topic}</loc></url>`
//     ),
//   ];

//   const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls.join("\n")}
// </urlset>`;

//   fs.writeFileSync(
//     path.join(__dirname, "../public/sitemap.xml"),
//     xml
//   );

//   console.log(`✅ sitemap.xml generated — ${params.length + 1} URLs`);
// }

// generateSitemap();
// generateTopicDataFile();