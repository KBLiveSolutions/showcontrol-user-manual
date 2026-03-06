# Using Ableset

## Purpose

Define how ShowControl is operated when Ableset participates in the control/playback chain.

---

## Responsibility split

- **ShowControl hardware**: physical control surface input
- **ShowControl app**: mappings, setlist UI, operational state
- **Ableton/script**: musical timing and source context
- **Ableset**: orchestration and external show logic

---

## Operating patterns

| Pattern | Primary logic owner | Notes |
|---|---|---|
| Ableton-first | Ableton locators/markers | Use Scenes/Markers source in Setlist tab |
| Ableset-first | Ableset orchestration | Keep ShowControl as physical operator layer |

---

## Preconditions

- Network topology known and stable
- Correct app/script instances loaded
- Setlist ownership decided (Ableton-first vs Ableset-first)

---

## Validation sequence

1. Confirm connection path (USB/ETH).
2. Confirm Song order and Section navigation.
3. Validate Shift-layer controls.
4. Validate deterministic jump behavior.
5. Validate fallback behavior for path loss.

**Expected result**
- Operator can move Song/Section state predictably under load.

If not, go to [Troubleshooting](troubleshooting.md).
