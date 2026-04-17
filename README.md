# Revive Agency — Website Template

This is the starting point for all Revive Agency client websites.
It includes Claude Code configuration, design standards, and team workflows.

---

## For Team Members — Getting Started

### Option A: GitHub Codespaces (Recommended — No Local Setup)

1. Open this repo on GitHub
2. Click the green **"Code"** button
3. Click **"Open with Codespaces"** → **"New codespace"**
4. Wait ~2 minutes for the environment to build
5. The dev server starts automatically at port 3000
6. Fill in `SITE_CONFIG.md` with the client's details
7. Open the Claude Code terminal and type `claude` to start

> Everything is pre-installed. You don't need Node, Python, or any CLI tools.

---

### Option B: Local Setup (Windows)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-ORG/client-site-name
cd client-site-name

# 2. Run the setup script
setup.bat

# 3. Fill in SITE_CONFIG.md

# 4. Start the dev server
npm run dev

# 5. Open Claude Code
claude
```

---

### Option C: Local Setup (Mac/Linux)

```bash
git clone https://github.com/YOUR-ORG/client-site-name
cd client-site-name
chmod +x setup.sh && ./setup.sh
# Fill in SITE_CONFIG.md
npm run dev
claude
```

---

## Working on an Existing Client Site

> Use this when a site is already built and you're making changes.

### Step 1 — Get the latest code
```bash
git pull origin main
npm install
```

### Step 2 — Fill in / review SITE_CONFIG.md
Make sure the client details and known issues are current.

### Step 3 — Start the dev server
```bash
npm run dev
```
Open `http://localhost:3000` and make sure the site loads without errors.
**If there are errors on first load, stop and report them before making changes.**

### Step 4 — Make changes using Claude Code

Open Claude Code:
```bash
claude
```

Then use these commands inside Claude Code:

| Command | Use it for |
|---|---|
| `/edit [description]` | Any targeted change to the existing site |
| `/new-page [name] [purpose]` | Adding a brand new page |
| `/audit` | Full pre-launch checklist |
| `/ui [description]` | Generate a new UI component (requires 21st.dev Magic MCP) |

**Examples:**
```
/edit "Update the phone number to 786-555-0000 across all pages"
/edit "Add a Before & After section to the homepage below services"
/new-page services/roof-repair "Roof repair service page targeting Miami homeowners"
/audit
```

### Step 5 — Commit your changes
```bash
git add .
git commit -m "content: update phone number on all pages"
git push origin main
```

**Commit message prefixes:**
- `feat:` — new feature or section
- `content:` — text, images, phone numbers, hours
- `style:` — colors, fonts, spacing
- `fix:` — bug fix
- `seo:` — metadata, schema, alt text

---

## One-Time Setup (Per Person, Do Once)

These are installed per-person, not per-project:

### Install Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Set up 21st.dev Magic MCP
1. Go to https://21st.dev/magic/console and get your API key
2. Run this once in your terminal:
```bash
claude mcp add magic --scope user --env API_KEY="YOUR_KEY_HERE" -- npx -y @21st-dev/magic@latest
```

---

## Creating a New Client Site from This Template

1. Go to this repo on GitHub
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it something like `client-name-website`
4. Set it to **Private**
5. Clone it locally or open in Codespaces
6. Fill in `SITE_CONFIG.md`
7. Start building

---

## Questions?

Contact: austin@thereviveagency.com
