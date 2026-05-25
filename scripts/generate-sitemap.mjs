import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "../data");
const BASE_URL = "https://techsustainify.com";

function scanAllParams() {
  const params = [];

  if (!fs.existsSync(DATA_DIR)) {
    console.warn("⚠️ data/ folder nahi mila");
    return params;
  }

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
    // Static pages
    `<url>
      <loc>${BASE_URL}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`,

    // Dynamic pages
    ...params.map(({ subject, topic }) => `<url>
      <loc>${BASE_URL}/${subject}/${topic}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${topic.endsWith("-home") ? "0.9" : "0.7"}</priority>
    </url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
  console.log(`✅ sitemap.xml generated — ${params.length + 1} URLs`);
}

generateSitemap();