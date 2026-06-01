<p align="center">
  <img src="https://nodejs.org/static/logos/nodejsDark.svg" alt="Node.js Logo" width="300"/>
</p>

<h1 align="center">🚀 Node.js Backend — Complete Learning Guide</h1>

<p align="center">
  <em>A structured, hands-on journey from Node.js fundamentals to building production-ready backends.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/Status-In_Progress-orange?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Part-1%2F5_Complete-blueviolet?style=for-the-badge" alt="Progress"/>
</p>

---

## 📑 Table of Contents

- [🗺️ Learning Roadmap](#️-learning-roadmap)
- [📊 Progress Tracker](#-progress-tracker)
- [📂 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- **Part 1 — Foundations**
  - [1.1 What is Node.js?](#11--what-is-nodejs)
  - [1.2 Installation & Setup](#12--installation--setup)
  - [1.3 Hello World — Your First Program](#13--hello-world--your-first-program)
  - [1.4 Global Objects in Node.js](#14--global-objects-in-nodejs)
  - [1.5 Modules & CommonJS](#15--modules--commonjs)
  - [1.6 module.exports & Importing Custom Modules](#16--moduleexports--importing-custom-modules)
  - [1.7 File System (fs) Module](#17--file-system-fs-module)
  - [1.8 Path Module](#18--path-module)
  - [1.9 OS Module](#19--os-module)
  - [1.10 Process Object](#110--process-object)
  - [1.11 How Node.js Works Internally](#111--how-nodejs-works-internally)
  - [1.12 Package Management with npm](#112--package-management-with-npm)
- [📝 Part 1 — Assignments](#-part-1--assignments)
- [🔮 Parts 2–5 — Coming Soon](#-parts-25--coming-soon)
- [🤝 Contributing](#-contributing)

---

## 🗺️ Learning Roadmap

```
┌─────────────────────────────────────────────────────────────────────┐
│                    NODE.JS BACKEND ROADMAP                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░  20% Complete            │
│                                                                     │
│  ✅ Part 1 ─── Foundations & Core Concepts                         │
│       │        Node.js basics, Modules, File System, npm           │
│       │                                                             │
│  ⬜ Part 2 ─── Server-Side Development                             │
│       │        HTTP module, Express.js, REST APIs, Middleware      │
│       │                                                             │
│  ⬜ Part 3 ─── Databases & Data Layer                              │
│       │        MongoDB, Mongoose, SQL basics, ORMs                 │
│       │                                                             │
│  ⬜ Part 4 ─── Authentication & Security                           │
│       │        JWT, OAuth, bcrypt, CORS, Helmet                    │
│       │                                                             │
│  ⬜ Part 5 ─── Advanced & Production                               │
│                Websockets, Testing, Deployment, CI/CD              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Progress Tracker

| Part | Topic | Status | Key Concepts |
|:----:|:------|:------:|:-------------|
| 1 | **Foundations & Core Concepts** | ✅ Complete | Node.js basics, Modules, `fs`, `path`, `os`, npm |
| 2 | **Server-Side Development** | ⬜ Upcoming | HTTP, Express.js, REST APIs, Routing, Middleware |
| 3 | **Databases & Data Layer** | ⬜ Upcoming | MongoDB, Mongoose, CRUD, Aggregation |
| 4 | **Authentication & Security** | ⬜ Upcoming | JWT, OAuth 2.0, Hashing, CORS, Rate Limiting |
| 5 | **Advanced & Production** | ⬜ Upcoming | WebSockets, Testing, Docker, Deployment |

---

## 📂 Project Structure

```
Backend/
├── .gitignore
├── Node-JS/
│   ├── README.md                 ← 📖 You are here
│   └── part-1/
│       ├── package.json          ← Project manifest
│       ├── hello.js              ← Entry point — Hello World + Modules demo
│       ├── math.js               ← Custom module (Add, Sub)
│       ├── file.js               ← File System operations (CRUD)
│       └── assignments/
│           └── 01-fs-operations.js  ← 📝 Practice exercises
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Hunter764/Backend.git
cd Backend/Node-JS/part-1

# 2. Run your first program
node hello.js

# 3. Explore file operations
node file.js

# 4. Try the assignments
node assignments/01-fs-operations.js
```

---

<br/>

# Part 1 — Foundations & Core Concepts

<br/>

## 1.1 · What is Node.js?

Node.js is a **JavaScript runtime** built on Chrome's **V8 engine** that lets you run JavaScript **outside the browser** — primarily on the server side.

| Feature | Browser JS | Node.js |
|:--------|:----------:|:-------:|
| DOM Manipulation | ✅ | ❌ |
| `window` / `document` | ✅ | ❌ |
| `global` object | ❌ | ✅ |
| File System Access | ❌ | ✅ |
| HTTP Server | ❌ | ✅ |
| NPM Packages | ❌ | ✅ |
| ES Modules | ✅ | ✅ |
| CommonJS `require()` | ❌ | ✅ |

> [!TIP]
> **Think of it this way:** The browser gives JavaScript eyes (DOM) and ears (events). Node.js gives JavaScript hands (file system) and a voice (networking).

### Key Characteristics

- **Single-threaded** — Uses one main thread with an event loop
- **Non-blocking I/O** — Asynchronous operations don't freeze execution
- **Event-driven** — Built on callbacks, promises, and events
- **Cross-platform** — Runs on Windows, macOS, and Linux
- **Package ecosystem** — Largest open-source library registry (npm)

---

## 1.2 · Installation & Setup

<details>
<summary><b>🖥️ macOS</b></summary>

```bash
# Using Homebrew (recommended)
brew install node

# Verify installation
node --version    # → v20.x.x
npm --version     # → 10.x.x
```

</details>

<details>
<summary><b>🪟 Windows</b></summary>

1. Download the **LTS installer** from [nodejs.org](https://nodejs.org)
2. Run the `.msi` installer (check "Add to PATH")
3. Open a terminal and verify:
   ```bash
   node --version
   npm --version
   ```

</details>

<details>
<summary><b>🐧 Linux (Ubuntu/Debian)</b></summary>

```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

</details>

> [!IMPORTANT]
> Always install the **LTS (Long Term Support)** version for stability. The Current version has newer features but may not be as stable.

---

## 1.3 · Hello World — Your First Program

📄 **File:** [`hello.js`](./part-1/hello.js)

```javascript
console.log("Hello World! I am learning Node.js");
```

```bash
# Run it
node hello.js
# Output: Hello World! I am learning Node.js
```

> [!NOTE]
> Unlike browser JavaScript, there is no HTML file involved. You run `.js` files directly with the `node` command.

---

## 1.4 · Global Objects in Node.js

In the browser, the top-level object is `window`. In Node.js, it's `global`.

```javascript
// ❌ These do NOT exist in Node.js
console.log(window);   // ReferenceError: window is not defined
console.log(document); // ReferenceError: document is not defined
console.log(alert);    // ReferenceError: alert is not defined

// ✅ These are available in Node.js
console.log(global);        // The global namespace object
console.log(setTimeout);    // Schedule delayed execution
console.log(setInterval);   // Schedule repeated execution
console.log(console);       // Console logging utilities
console.log(__dirname);     // Absolute path to current directory
console.log(__filename);    // Absolute path to current file
```

### Commonly Used Globals

| Global | Description | Example |
|:-------|:-----------|:--------|
| `global` | The global namespace (like `window` in browsers) | `global.myVar = 42` |
| `__dirname` | Absolute path of the directory of the current file | `/Users/you/project` |
| `__filename` | Absolute path of the current file | `/Users/you/project/app.js` |
| `console` | Logging to stdout/stderr | `console.log("hi")` |
| `setTimeout` | Execute after delay | `setTimeout(fn, 1000)` |
| `setInterval` | Execute repeatedly | `setInterval(fn, 2000)` |
| `Buffer` | Handle binary data | `Buffer.from("hello")` |
| `process` | Current process info & control | `process.env.NODE_ENV` |

---

## 1.5 · Modules & CommonJS

Node.js uses the **CommonJS** module system by default. Every file is treated as a separate module with its own scope.

```
┌──────────────────────────────────────────────────┐
│              CommonJS Module System               │
├──────────────────────────────────────────────────┤
│                                                    │
│   math.js (Module)         hello.js (Consumer)    │
│   ┌──────────────────┐     ┌──────────────────┐  │
│   │ function Add(a,b) │     │ const math =     │  │
│   │   return a + b    │────▶│   require('./math')│  │
│   │                   │     │                  │  │
│   │ module.exports =  │     │ math.Add(5, 3)   │  │
│   │   { Add, Sub }    │     │ // → 8           │  │
│   └──────────────────┘     └──────────────────┘  │
│                                                    │
│   require() → Loads & caches the module            │
│   module.exports → Defines what's exposed          │
│                                                    │
└──────────────────────────────────────────────────┘
```

### How `require()` Works

```javascript
const maths = require('./math');
//     ↑               ↑
//  variable       path to module
//  receives       (.js extension optional)
//  exports
```

> [!NOTE]
> **Module Caching:** When you `require()` a module, Node.js caches it after the first load. Subsequent `require()` calls return the cached version, **not** a fresh execution.

### Types of Modules

| Type | Example | Description |
|:-----|:--------|:-----------|
| **Core / Built-in** | `require('fs')` | Ships with Node.js — no installation needed |
| **Local / Custom** | `require('./math')` | Your own files (use relative paths `./`) |
| **Third-party** | `require('express')` | Installed via `npm install` |

---

## 1.6 · module.exports & Importing Custom Modules

📄 **File:** [`math.js`](./part-1/math.js)

### Exporting Functions

```javascript
// math.js — Defining and exporting functions
function Add(a, b) {
    return a + b;
}
function Sub(a, b) {
    return a - b;
}

module.exports = { Add, Sub };
```

### Importing & Using

```javascript
// hello.js — Importing the custom module
const maths = require('./math');

console.log(maths.Add(5, 3));  // → 8
console.log(maths.Sub(10, 4)); // → 6
```

<details>
<summary><b>📚 Different Export Patterns</b></summary>

```javascript
// Pattern 1: Export an object with multiple functions
module.exports = { Add, Sub };
// Usage: const math = require('./math'); math.Add(1,2);

// Pattern 2: Export a single function
module.exports = function greet(name) {
    return `Hello, ${name}!`;
};
// Usage: const greet = require('./greet'); greet("World");

// Pattern 3: Export individual properties
exports.PI = 3.14159;
exports.E  = 2.71828;
// Usage: const constants = require('./constants'); constants.PI;

// Pattern 4: Export a class
module.exports = class Calculator {
    add(a, b) { return a + b; }
};
// Usage: const Calc = require('./calc'); new Calc().add(1,2);
```

> ⚠️ **Never assign directly to `exports`:** `exports = { ... }` will NOT work. Always use `module.exports` for reassignment.

</details>

---

## 1.7 · File System (fs) Module

📄 **File:** [`file.js`](./part-1/file.js)

The `fs` module provides an API to interact with the file system. Every operation has **two versions**:

| Version | Naming | Behavior | Use Case |
|:--------|:-------|:---------|:---------|
| **Synchronous** | `methodSync()` | Blocks the thread until done | Scripts, simple tools |
| **Asynchronous** | `method()` | Non-blocking, uses callback | Servers, production code |

```javascript
const fs = require("fs");
```

### 📝 Create / Write

```javascript
// Sync — blocks execution until file is written
fs.writeFileSync("./text.txt", "Hello world this is sync writing");

// Async — non-blocking, takes a callback
fs.writeFile("./test.txt", "hello world i am async code", (err) => {
    if (err) console.log(err);
    else console.log("File written successfully!");
});
```

> [!WARNING]
> `writeFileSync` and `writeFile` will **overwrite** the file if it already exists. Use `appendFile` to add content without erasing.

### 📖 Read

```javascript
// Sync
const content = fs.readFileSync("./text.txt", "utf-8");
console.log(content);

// Async
fs.readFile("./test.txt", "utf-8", (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});
```

### ✏️ Update / Append

```javascript
// Sync
fs.appendFileSync("./text.txt", new Date().toDateString());

// Async
fs.appendFile("./log.txt", `Log entry: ${new Date().toDateString()}\n`, (err) => {
    if (err) console.log(err);
    else console.log("File Updated");
});
```

### 🗑️ Delete, Copy & More

```javascript
// Delete a file
fs.unlinkSync("./temp.txt");

// Copy a file
fs.cpSync("./source.txt", "./destination.txt");

// Create a directory
fs.mkdirSync("./new-folder");

// Create nested directories
fs.mkdirSync("./a/b/c", { recursive: true });

// Get file stats
const stats = fs.statSync("./text.txt");
console.log(stats.size);         // Size in bytes
console.log(stats.isFile());     // true
console.log(stats.isDirectory());// false
console.log(stats.birthtime);    // Creation timestamp

// Remove a directory
fs.rmdirSync("./new-folder");
```

### Sync vs Async — Visual Comparison

```
  Synchronous (Blocking)           Asynchronous (Non-Blocking)
  ─────────────────────            ──────────────────────────────

  Task A: Read File ████████       Task A: Read File ▒▒▒▒▒▒▒▒
  Task B: (waiting...) ░░░░░░░░   Task B: Process ████████
  Task B: Process ████████         Task A: ─── callback ──→ ████
  Task C: Log ████                 Task C: Log ████

  Total: ████████████████████      Total: ████████████████
  (Slower — sequential)            (Faster — concurrent)
```

---

## 1.8 · Path Module

The `path` module provides utilities for working with file and directory paths in a cross-platform way.

```javascript
const path = require("path");

// Join path segments (handles OS-specific separators)
path.join("/users", "abhyudaya", "project", "file.js");
// → /users/abhyudaya/project/file.js

// Get the file extension
path.extname("hello.js");      // → .js

// Get the filename without directory
path.basename("/users/project/hello.js");     // → hello.js
path.basename("/users/project/hello.js", ".js"); // → hello

// Get the directory name
path.dirname("/users/project/hello.js");      // → /users/project

// Resolve to an absolute path
path.resolve("part-1", "hello.js");
// → /Users/abhyudaya/Desktop/Backend/Node-JS/part-1/hello.js

// Parse a path into its components
path.parse("/users/project/hello.js");
// → { root: '/', dir: '/users/project', base: 'hello.js', ext: '.js', name: 'hello' }
```

> [!TIP]
> Always use `path.join()` instead of string concatenation (`+`) for paths. It handles `/` vs `\` differences between macOS/Linux and Windows automatically.

---

## 1.9 · OS Module

The `os` module provides operating system-related utility methods.

```javascript
const os = require("os");

console.log(os.platform());    // → darwin (macOS) | win32 | linux
console.log(os.arch());       // → x64 | arm64
console.log(os.cpus().length); // → Number of CPU cores
console.log(os.totalmem());    // → Total memory in bytes
console.log(os.freemem());     // → Free memory in bytes
console.log(os.homedir());     // → /Users/abhyudaya
console.log(os.hostname());    // → Machine hostname
console.log(os.tmpdir());      // → Temp directory path
console.log(os.uptime());      // → System uptime in seconds
console.log(os.userInfo());    // → { username, homedir, shell, ... }
```

<details>
<summary><b>💡 Practical Example: System Info Logger</b></summary>

```javascript
const os = require("os");

function getSystemReport() {
    const totalMemGB = (os.totalmem() / 1024 ** 3).toFixed(2);
    const freeMemGB  = (os.freemem()  / 1024 ** 3).toFixed(2);
    const uptimeHrs  = (os.uptime()   / 3600).toFixed(1);

    return `
╔══════════════════════════════════╗
║       SYSTEM INFORMATION        ║
╠══════════════════════════════════╣
║ Platform:  ${os.platform().padEnd(20)}║
║ Arch:      ${os.arch().padEnd(20)}║
║ CPUs:      ${String(os.cpus().length).padEnd(20)}║
║ Memory:    ${freeMemGB}/${totalMemGB} GB free${" ".repeat(Math.max(0, 8 - freeMemGB.length))}║
║ Uptime:    ${uptimeHrs} hours${" ".repeat(Math.max(0, 14 - uptimeHrs.length))}║
║ User:      ${os.userInfo().username.padEnd(20)}║
╚══════════════════════════════════╝`;
}

console.log(getSystemReport());
```

</details>

---

## 1.10 · Process Object

The `process` object is a **global** that provides information and control over the current Node.js process.

```javascript
// Environment variables
console.log(process.env.NODE_ENV);  // → development | production
console.log(process.env.HOME);     // → /Users/abhyudaya

// Process info
console.log(process.pid);          // → Current process ID
console.log(process.version);      // → v20.19.6
console.log(process.cwd());        // → Current working directory
console.log(process.argv);         // → Command-line arguments array

// Memory usage
console.log(process.memoryUsage());
// → { rss, heapTotal, heapUsed, external, arrayBuffers }

// Exit the process
process.exit(0);  // 0 = success, 1 = error
```

### Command-Line Arguments

```bash
node app.js hello world 42
```

```javascript
console.log(process.argv);
// [
//   '/usr/local/bin/node',   ← Path to Node binary
//   '/path/to/app.js',       ← Path to script
//   'hello',                 ← Your arguments start here
//   'world',
//   '42'
// ]

// Extract only your arguments:
const args = process.argv.slice(2);
console.log(args); // → ['hello', 'world', '42']
```

---

## 1.11 · How Node.js Works Internally

### The Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        YOUR CODE (JavaScript)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│                    ┌───────────────────┐                          │
│                    │    NODE.JS APIs    │                          │
│                    │  (fs, http, path)  │                          │
│                    └────────┬──────────┘                          │
│                             │                                     │
│              ┌──────────────┴──────────────┐                      │
│              │                             │                      │
│    ┌─────────▼─────────┐     ┌────────────▼────────────┐         │
│    │     V8 ENGINE      │     │       LIBUV             │         │
│    │  (Compiles JS to   │     │  (Async I/O, Event Loop │         │
│    │   machine code)    │     │   Thread Pool)          │         │
│    └───────────────────┘     └─────────────────────────┘         │
│                                                                   │
├──────────────────────────── OS ──────────────────────────────────┤
│           File System    |    Network    |    Processes            │
└─────────────────────────────────────────────────────────────────┘
```

### The Event Loop

Node.js is **single-threaded** but achieves concurrency via the **event loop**. It delegates heavy operations (file I/O, network) to the OS/thread pool and picks up results via callbacks.

```
                    ┌───────────────────────┐
               ┌───▶│      Timers           │ ← setTimeout, setInterval
               │    └──────────┬────────────┘
               │               ▼
               │    ┌───────────────────────┐
               │    │   Pending Callbacks    │ ← I/O callbacks (deferred)
               │    └──────────┬────────────┘
               │               ▼
               │    ┌───────────────────────┐
               │    │      Idle / Prepare    │ ← Internal use
               │    └──────────┬────────────┘
               │               ▼
               │    ┌───────────────────────┐
  Event Loop   │    │        Poll           │ ← Retrieve new I/O events
  (repeats)    │    │  (incoming connections,│
               │    │   data, etc.)         │
               │    └──────────┬────────────┘
               │               ▼
               │    ┌───────────────────────┐
               │    │       Check           │ ← setImmediate callbacks
               │    └──────────┬────────────┘
               │               ▼
               │    ┌───────────────────────┐
               │    │    Close Callbacks     │ ← socket.on('close')
               └────┴───────────────────────┘
```

### Blocking vs Non-Blocking

```javascript
// ❌ BLOCKING — Freezes the entire server for every request
const data = fs.readFileSync("/huge-file.txt", "utf-8"); // Waits here...
console.log(data); // Only runs after file is fully read

// ✅ NON-BLOCKING — Server stays responsive
fs.readFile("/huge-file.txt", "utf-8", (err, data) => {
    console.log(data); // Runs when ready
});
console.log("I execute immediately!"); // Doesn't wait
```

> [!CAUTION]
> **Never use synchronous (`*Sync`) methods in server/production code.** They block the entire event loop, meaning no other requests can be served until the operation completes. Use them only in scripts, CLI tools, or initialization code.

---

## 1.12 · Package Management with npm

**npm** (Node Package Manager) is the default package manager for Node.js and the world's largest software registry.

### package.json — The Project Manifest

📄 **File:** [`package.json`](./part-1/package.json)

```json
{
  "name": "part-1",
  "version": "1.0.0",
  "description": "this is day 1",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "hello.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node hello.js"
  }
}
```

### Key Fields Explained

| Field | Purpose | Example |
|:------|:--------|:--------|
| `name` | Package name (lowercase, no spaces) | `"part-1"` |
| `version` | Semantic version | `"1.0.0"` |
| `main` | Entry point file | `"hello.js"` |
| `type` | Module system: `"commonjs"` or `"module"` | `"commonjs"` |
| `scripts` | Custom commands run via `npm run <name>` | `"start": "node hello.js"` |
| `dependencies` | Packages needed in production | `"express": "^4.18.0"` |
| `devDependencies` | Packages needed only for development | `"nodemon": "^3.0.0"` |

### Essential npm Commands

```bash
# Initialize a new project
npm init              # Interactive setup
npm init -y           # Auto-accept all defaults

# Install packages
npm install express           # Add to dependencies
npm install nodemon --save-dev # Add to devDependencies
npm install                    # Install all from package.json

# Run scripts
npm start             # Runs "start" script
npm test              # Runs "test" script
npm run <script-name> # Run any custom script

# Manage packages
npm list              # Show installed packages
npm outdated          # Check for newer versions
npm update            # Update packages
npm uninstall express # Remove a package
```

<details>
<summary><b>📦 Understanding node_modules & package-lock.json</b></summary>

- **`node_modules/`** — Contains all installed packages and their dependencies. **Never commit this to Git** (it's in our `.gitignore`).
- **`package-lock.json`** — Auto-generated. Records the exact version of every installed package for reproducible builds. **Always commit this file.**

```
project/
├── node_modules/         ← 🚫 Git-ignored (can be huge!)
│   ├── express/
│   ├── lodash/
│   └── ... (hundreds of folders)
├── package.json          ← ✅ Commit this
└── package-lock.json     ← ✅ Commit this
```

</details>

---

## 📝 Part 1 — Assignments

Practice exercises are located in the **assignments** folder:

| # | File | Topics Covered |
|:-:|:-----|:--------------|
| 1 | [`01-fs-operations.js`](./part-1/assignments/01-fs-operations.js) | `unlinkSync`, `cpSync`, `mkdirSync`, `statSync`, `rmdirSync` |

> [!TIP]
> Open each assignment file, **uncomment one section at a time**, run it with `node`, and observe the output before moving on. A bonus challenge is included at the end!

---

## 🔮 Parts 2–5 — Coming Soon

<details>
<summary><b>📦 Part 2 — Server-Side Development</b></summary>

- Creating HTTP servers with the built-in `http` module
- Introduction to Express.js
- RESTful API design (GET, POST, PUT, DELETE)
- Route parameters & query strings
- Middleware concepts
- Serving static files
- Template engines (EJS / Pug)

</details>

<details>
<summary><b>🗄️ Part 3 — Databases & Data Layer</b></summary>

- Introduction to MongoDB & NoSQL
- Mongoose ODM — Schemas, Models, Validation
- CRUD operations with MongoDB
- Aggregation pipelines
- Relationships & population
- Introduction to SQL & PostgreSQL
- Connection pooling & optimization

</details>

<details>
<summary><b>🔐 Part 4 — Authentication & Security</b></summary>

- Password hashing with bcrypt
- JSON Web Tokens (JWT) — Auth flow
- Session-based vs Token-based authentication
- OAuth 2.0 (Google, GitHub login)
- CORS configuration
- Helmet.js — HTTP security headers
- Rate limiting & input sanitization

</details>

<details>
<summary><b>🚀 Part 5 — Advanced & Production</b></summary>

- Real-time communication with WebSockets (Socket.io)
- Unit & integration testing (Jest / Mocha)
- Error handling patterns
- Logging (Winston / Morgan)
- Environment configuration
- Docker containerization
- CI/CD pipelines
- Deployment (Render, Railway, AWS)

</details>

---

## 🤝 Contributing

This is a personal learning repository. If you find it helpful:

1. ⭐ **Star** the repo
2. 🍴 **Fork** it for your own learning
3. 📬 Open an **issue** for suggestions or corrections

---

<p align="center">
  <b>Built with ❤️ while learning Node.js</b><br/>
  <sub>By <a href="https://github.com/Hunter764">Hunter764</a></sub>
</p>
