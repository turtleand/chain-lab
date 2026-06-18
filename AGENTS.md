# AGENTS.md - chain-lab

This file gives repository-level guidance for Codex automatic PR reviews and other AI agents.

## Scope

Applies only to `chain-lab/`.

## Ecosystem role

- Chain Lab is the blockchain, crypto systems, and decentralized technology learning surface of Turtleand.
- Its job is systems literacy: protocols, incentives, custody, security, wallets, contracts, governance, and trade-offs.
- Treat blockchain as durable technology education, not price commentary, token promotion, market timing, or speculation.
- Route general AI curriculum to `ai-lab/`, engineering craft to `build/`, reflective essays to Growth, compact doctrine to `handbook/`, ecosystem routing to `portal/`, and agent operations to `openclaw-lab/` or `hermes-lab/`.

## Project summary

- Stack: Astro + MDX
- Status: Active
- Primary content: blockchain systems learning and durable crypto literacy

## Workflow

1. Read `README.md`, content schema, and nearby docs before larger changes.
2. Prefer edits under `src/`, `public/`, and content collections.
3. Keep changes focused and avoid hand-editing generated output in `dist/` unless explicitly asked.
4. Treat security, wallet, contract, custody, and governance material as public-safety-sensitive.

## Public-safety review

Reject changes that expose secrets, private keys, seed phrases, credentials, private infrastructure details, internal paths, specific vulnerabilities, exploitable contract details, operational weaknesses, or unsafe wallet/security instructions. Safe public lessons are allowed when they describe general patterns, architecture trade-offs, defensive principles, custody concepts, and high-level risk models.

Keep private things private. Share learnings, not exposure.

## Content quality review

- Explain protocols, incentives, custody, security, wallets, contracts, governance, and trade-offs with care.
- Avoid financial advice, token promotion, hype-cycle claims, unsupported investment framing, and market-timing content.
- Keep content useful for durable understanding rather than short-term market movement.
- Preserve Turtleand voice: calm, precise, direct, reflective when useful, practical when needed.
- Do not introduce em dashes in public writing.
- Keep humans responsible for direction, judgment, taste, ethics, and consequences.

## Repository integrity review

- Keep changes focused to the branch purpose.
- Do not silently modify generated or build output unless the repo explicitly tracks it or the change requires regeneration.
- Keep routes, content indexes, topic metadata, sitemaps, and AI-readable artifacts in sync when the repo uses them.
- Run local validation before PR creation.

## PR review checklist

Codex and other agents should check:

- Does the change strengthen Chain Lab as blockchain systems literacy?
- Are claims grounded, educational, and free from financial advice or token hype?
- Is anything private, unsafe, or operationally sensitive exposed?
- Are wallet, contract, custody, and security explanations safe for public readers?
- Are routes, builds, generated files, metadata, and indexes still correct?
- Is the diff small, coherent, and free from unrelated cleanup?

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
