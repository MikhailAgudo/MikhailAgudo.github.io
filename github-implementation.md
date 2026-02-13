# GitHub Pages Implementation Checklist

Depending on your preference, we can either:
A. **Static Export (Recommended)**: Compile the Next.js app into standard HTML/CSS/JS files that GitHub Pages can run.
B. **Manual Rewrite**: Rewrite the site from scratch using only plain HTML/CSS/JS files (more work, but absolute simplicity).

Given you already have a working Next.js app, **Option A** is usually the best path as it produces the plain files you want without rewriting code. This checklist covers that process while resolving the conflict with your old files.

## 1. Safety & Preparation
- [ ] **Backup Old Files**: Create a folder named `legacy_backup` or similar.
- [ ] **Move Existing Projects**: Move `calculator`, `etch-a-sketch`, and `tic-tac-toe` into a temporary `public/` subdirectory or safe location so they are included in the build (or merge them later).
- [ ] **Analyze Project Structure**: Confirm the Next.js app is at the root.

## 2. Configure Next.js for Static Output
- [ ] **Update `next.config.js`**:
    - Add `output: 'export'` (This tells Next.js to produce an `out` folder with plain HTML/JS/CSS).
    - Add `images: { unoptimized: true }` (Required because GitHub Pages cannot run the Next.js Image Optimization server).
- [ ] **Check Routing**: Ensure there are no usage of `headers()`, `cookies()`, or dynamic server-side logic (Static Exports require purely static pages).

## 3. Generate the Static Site
- [ ] **Run Build**: Execute `npm run build`.
- [ ] **Verify Output**: Check for a new `out/` directory. It should contain `index.html`, `_next/`, and other assets.
- [ ] **Local Test**: Use a simple local server (e.g., `npx serve out`) to verify the static build looks and functions exactly like the dev version.

## 4. Merging with Legacy Content
- [ ] **Restore Legacy Projects**:
    - Copy the `calculator`, `etch-a-sketch`, and `tic-tac-toe` folders *into* the `out/` folder (or ensure they were in `public/` before build).
- [ ] **Root Cleanup**: The root directory currently contains source code. For GitHub Pages to serve the site, the *contents* of `out/` need to be served.
    - *Option 1 (Clean)*: Use a `gh-pages` branch or GitHub Actions to deploy only the `out` folder.
    - *Option 2 (Simple)*: Replace the root `index.html` with the one from `out/`, and ensure `_next` folder is present at root. (Note: This mixes source and build files, which can be messy).

## 5. Deployment
- [ ] **Add `.nojekyll`**: Create an empty file named `.nojekyll` in the final build folder (to allow `_next` folders to be served).
- [ ] **Commit & Push**: Push the changes.
- [ ] **GitHub Settings**: Go to Repo Settings -> Pages -> Build and deployment -> Source.
- [ ] **Verify**: Check the live URL.

## 6. Manual Functionality Check
- [ ] Verify Bento Grid animations work without the server.
- [ ] Verify navigation links.
- [ ] Verify legacy projects (`/tic-tac-toe`, etc.) are accessible.
