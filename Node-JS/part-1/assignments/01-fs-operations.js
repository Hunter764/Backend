/**
 * ============================================================
 *  📝 Assignment: File System Operations in Node.js
 * ============================================================
 *
 *  Practice the following fs module methods.
 *  Uncomment each section one at a time, run the file,
 *  and observe the output before moving to the next.
 *
 *  Topics Covered:
 *    1. fs.unlinkSync()   — Delete a file
 *    2. fs.cpSync()       — Copy a file
 *    3. fs.mkdirSync()    — Create directories
 *    4. fs.statSync()     — Get file/directory stats
 *    5. fs.rmdirSync()    — Remove a directory
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

// ─────────────────────────────────────────────
// 1. DELETE a file  —  fs.unlinkSync(path)
// ─────────────────────────────────────────────
// Creates a temporary file and then deletes it.

// fs.writeFileSync("./temp-delete-me.txt", "This file will be deleted!");
// console.log("✅ File created: temp-delete-me.txt");
//
// fs.unlinkSync("./temp-delete-me.txt");
// console.log("🗑️  File deleted: temp-delete-me.txt");


// ─────────────────────────────────────────────
// 2. COPY a file  —  fs.cpSync(src, dest)
// ─────────────────────────────────────────────
// Copies a source file to a new destination.

// fs.writeFileSync("./original.txt", "I am the original file content.");
// fs.cpSync("./original.txt", "./copy-of-original.txt");
// console.log("📋 File copied: original.txt → copy-of-original.txt");
//
// const copied = fs.readFileSync("./copy-of-original.txt", "utf-8");
// console.log("📖 Copied file content:", copied);


// ─────────────────────────────────────────────
// 3. CREATE DIRECTORIES  —  fs.mkdirSync(path)
// ─────────────────────────────────────────────
// Creates a single directory, and nested directories using { recursive: true }.

// fs.mkdirSync("./test-folder");
// console.log("📁 Directory created: test-folder");
//
// fs.mkdirSync("./nested/deep/folder", { recursive: true });
// console.log("📁 Nested directories created: nested/deep/folder");


// ─────────────────────────────────────────────
// 4. FILE/DIR STATS  —  fs.statSync(path)
// ─────────────────────────────────────────────
// Retrieves metadata about a file or directory.

// fs.writeFileSync("./stats-demo.txt", "Hello! Check my stats.");
// const stats = fs.statSync("./stats-demo.txt");
//
// console.log("📊 File Stats for stats-demo.txt:");
// console.log("   Size (bytes):", stats.size);
// console.log("   Is File?:", stats.isFile());
// console.log("   Is Directory?:", stats.isDirectory());
// console.log("   Created At:", stats.birthtime);
// console.log("   Last Modified:", stats.mtime);


// ─────────────────────────────────────────────
// 5. REMOVE A DIRECTORY  —  fs.rmdirSync(path)
// ─────────────────────────────────────────────
// Removes an empty directory. Use { recursive: true } for non-empty ones.

// fs.mkdirSync("./remove-me");
// console.log("📁 Directory created: remove-me");
//
// fs.rmdirSync("./remove-me");
// console.log("🗑️  Directory removed: remove-me");


// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGE
// ─────────────────────────────────────────────
// Try combining the above methods:
//   - Create a directory called "project"
//   - Inside it, create a file called "index.js" with some content
//   - Read and log the file content
//   - Get and display the file stats
//   - Delete the file
//   - Remove the directory
//   - Log "🎉 Cleanup complete!" at the end
