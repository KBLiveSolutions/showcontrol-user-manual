# Using Ableset

Ableset can be used alongside ShowControl depending on your show workflow.

> This page summarizes practical integration guidance for the current project state.

---

## Typical integration roles

- **ShowControl** handles controller UI, mappings, and setlist interaction
- **Ableton + remote script** provides scene/marker context and transport/state sync
- **Ableset** can be used as an additional setlist/show orchestration layer

---

## Connectivity patterns

| Service | Connection | ShowControl App | Ableton Script | Ableset |
|---|---|---:|---:|---:|
| ShowControl workflow | USB | Optional | Recommended | Optional |
| ShowControl workflow | Ethernet | Recommended | Recommended | Optional |
| Ableset workflow | USB | Recommended | Optional | Required |
| Ableset workflow | Ethernet | Optional | Optional | Required |

---

## Practical setup advice

### If your show is Ableton-first

1. Install/enable the Ableton remote script
2. Use ShowControl Setlist tab with **Scenes/Markers** source
3. Validate navigation and transport controls

### If your show is Ableset-first

1. Make Ableset the main source of show progression
2. Keep ShowControl for controller mappings and live actions
3. Test edge cases (song jump, section loop, failover behavior)

---

## Rehearsal checklist

- Scene/marker list populates correctly
- Song order matches show order
- Next/previous actions are deterministic
- Shift-layer actions behave as expected
- USB/ETH indicators match actual transport path
