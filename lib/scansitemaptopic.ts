import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export function scanAllParams(): { subject: string; topic: string }[] {
  try {
    const params: { subject: string; topic: string }[] = [];

    if (!fs.existsSync(DATA_DIR)) {
      console.warn("⚠️ data/ folder nahi mila:", DATA_DIR);
      return params;
    }

    const subjects = fs.readdirSync(DATA_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const subject of subjects) {
      const subjectPath = path.join(DATA_DIR, subject);

      const files = fs.readdirSync(subjectPath)
        .filter((f) => f.endsWith(".json"));

      for (const file of files) {
        params.push({ subject, topic: file.replace(".json", "") });
      }
    }

    console.log("✅ Total params found:", params.length); // build me dikhega
    return params;

  } catch (err) {
    console.error("❌ scanAllParams error:", err);
    return [];
  }
}