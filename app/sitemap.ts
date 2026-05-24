import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://techsustainify.com";

// Data folder ka path — jahan JSON files hain
const DATA_DIR = path.join(process.cwd(), "data");

function getAllTopicUrls(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Check karo data folder exist karta hai ya nahi
  if (!fs.existsSync(DATA_DIR)) return entries;

  // Sabhi subject folders scan karo (java, python, c, etc.)
  const subjects = fs.readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const subject of subjects) {
    const subjectPath = path.join(DATA_DIR, subject);

    // Subject folder ke andar sabhi JSON files scan karo
    const files = fs.readdirSync(subjectPath)
      .filter((f) => f.endsWith(".json"));

    for (const file of files) {
      const topic = file.replace(".json", ""); // "java-home.json" → "java-home"

      entries.push({
        url: `${BASE_URL}/${subject}/${topic}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: topic.endsWith("-home") ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}

// Static pages
const staticPages: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicEntries = getAllTopicUrls();
  return [...staticPages, ...dynamicEntries];
}