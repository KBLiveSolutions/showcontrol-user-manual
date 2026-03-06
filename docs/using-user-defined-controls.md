# Using User-Defined Controls

## Goal

Configure and validate User pages so critical live actions are reliable under pressure.

## Preconditions

- Device connected
- Setlist baseline already validated

---

## 1) Configure User pages

For each active **User page**:

- map primary button actions
- map shifted actions
- map encoder turn/push
- map pedal behavior
- set display lines if needed

---

## 2) Validation protocol

For each User page, test in this order:

1. Transport-critical actions
2. Song navigation actions
3. Section-related actions
4. Shift-layer actions
5. Encoder and pedal actions

### Verify

- each action triggers intended function only
- no overlapping/conflicting mappings
- shifted layer behaves consistently

---

## 3) Performance safety rules

- do not remap critical controls during active playback unless emergency
- prefer simplified mappings for show-critical actions
- keep one known-safe recovery action per User page

---

## If control behavior mismatches

Go to [Troubleshooting](troubleshooting.md#4-user-page-actions-mismatch).
