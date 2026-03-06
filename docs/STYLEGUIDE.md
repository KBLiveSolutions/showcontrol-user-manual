# ShowControl Manual Style Guide

This guide defines how to write and maintain user documentation for ShowControl in a live-performance context.

Scope:
- Hardware controller
- Desktop application
- Ableton/script dependency
- Optional Ableset integration

---

## 1) Audience model

Every page must be written for one primary audience:

- **Performer**: fast, minimal, action-first
- **Operator/Tech**: precise, diagnostic, system-level

If both are needed, split content into separate sections or pages.

---

## 2) Page structure rules

Preferred section order:

1. **Goal**
2. **Preconditions**
3. **Steps**
4. **Expected result**
5. **Failure path** (link to troubleshooting)

For reference pages, use:

1. **Purpose**
2. **Inputs/Outputs**
3. **Limits/Defaults**
4. **Operational notes**

---

## 3) Responsibility boundaries (mandatory)

When documenting a feature, explicitly state ownership:

- **Hardware**
- **ShowControl app**
- **Ableton/script**
- **Ableset**

Avoid vague phrasing like “the system does X” without naming the layer.

---

## 4) Terminology (strict)

Use these canonical terms only:

- **Song**: setlist song entry
- **Section**: section inside a Song
- **User page**: one configurable control page
- **Scenes/Markers source**: left source list in Setlist

Do not alternate with synonyms inside docs.

---

## 5) Writing style

Target style: **technical/operator oriented**.

- concise, direct, imperative
- no marketing language
- no ambiguous words (“maybe”, “probably”) in procedures
- short paragraphs and dense signal

Good:
- “Set IP and port, then press Send.”

Avoid:
- “You might want to check network settings if needed.”

---

## 6) Formatting standards

- Use `##` for major sections, `###` for substeps
- Use checklists for pre-show/showday tasks
- Use compact tables for mapping/reference data
- Use horizontal rules (`---`) between major blocks
- Keep one task per numbered step

For in-app docs navigation:
- subsection labels must match heading text exactly where possible

---

## 7) Operational safety content

Any live-critical page should include:

- **What to verify before show**
- **What not to change mid-show**
- **Fallback sequence**
- **Recovery order**

If a section can break show flow, add an explicit warning note.

---

## 8) Troubleshooting design

Troubleshooting must be symptom-first:

- “Controller not detected”
- “No Scenes/Markers shown”
- “Wrong Song/Section triggered”

Each symptom entry should include:

1. Fast checks (<= 60s)
2. Deep checks
3. Escalation/restart order

---

## 9) Versioning and change control

For every doc update:

- keep terminology stable
- update submenu anchors if headings changed
- verify links in Info tab navigation
- commit with explicit scope (`docs(...)`)

When large rewrites happen:
- keep a dated backup snapshot of prior docs

---

## 10) Quality checklist before publish

- [ ] Audience is clear
- [ ] Preconditions are explicit
- [ ] Steps are executable as written
- [ ] Expected results are measurable
- [ ] Failure path is present
- [ ] Terminology is consistent
- [ ] Submenu anchors match headings
- [ ] No stale defaults/values

---

## 11) Recommended page set

Minimum operational doc set:

- `index.md` (entry + scope)
- `quickstart.md` (performer path)
- `showday-checklist.md` (operator checklist)
- `application.md` (UI workflows)
- `hardware.md` (physical + IO)
- `ableset.md` (integration patterns)
- `troubleshooting.md` (symptom-first)
- `STYLEGUIDE.md` (this document)
