#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const folderPath = process.argv[2];

if (!folderPath) {
  console.log("⚠️ Please provide a folder path: node analyze.js ./myfolder");
  process.exit(1);
}

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("❌ Error reading folder:", err);
    process.exit(1);
  }

  let fileCount = 0;
  let totalSize = 0;
  const extensions = new Set();

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      fileCount++;
      totalSize += stats.size;
      const ext = path.extname(file);
      extensions.add(ext);
    }
  });

  console.log(`📂 Folder: ${folderPath}`);
  console.log(`📄 Number of files: ${fileCount}`);
  console.log(`📏 Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`🗂 Extensions used: ${[...extensions].join(", ")}`);
});
