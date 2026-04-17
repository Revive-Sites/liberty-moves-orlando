#!/bin/bash

echo ""
echo "🚀 Revive Agency — Site Setup"
echo "================================"

# Check Node
if ! command -v node &> /dev/null; then
  echo "❌ Node.js not found. Install it from https://nodejs.org then re-run this script."
  exit 1
fi

# Check Python
if ! command -v python3 &> /dev/null; then
  echo "⚠️  Python3 not found. The UI skill needs it."
  echo "   Mac: brew install python3"
  echo "   Ubuntu: sudo apt install python3"
  echo "   Windows: winget install Python.Python.3.12"
  echo "   Continuing anyway..."
fi

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "🎨 Installing UI UX Pro Max skill (globally)..."
npm install -g uipro-cli 2>/dev/null || echo "⚠️  uipro-cli may already be installed, continuing..."

echo ""
echo "🔧 Initializing skill in this project..."
uipro init --ai claude --offline

echo ""
echo "✅ All done! You're ready to build."
echo ""
echo "Next steps:"
echo "  1. Fill in SITE_CONFIG.md with client details"
echo "  2. Run: npm run dev"
echo "  3. Open Claude Code: claude"
echo "  4. For 21st.dev Magic: make sure your API key MCP is set up in Claude Code"
echo ""
