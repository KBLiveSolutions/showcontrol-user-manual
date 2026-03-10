---
title: Troubleshooting
---

Symptom-first diagnostics for operator use.

---

## 1) Controller not detected

### Fast checks

1. Use a data USB cable.
2. Try another USB port.
3. Restart controller + app.
4. Confirm expected MIDI ports appear.

### Deep checks

- isolate to minimal rig (controller + single cable + app)
- check for competing MIDI clients

### Escalation

- reboot operator machine if port enumeration is inconsistent

---

## 2) No Scenes/Markers shown

### Fast checks

1. Confirm Ableton set is open.
2. Confirm remote script is loaded.
3. Reconnect after Ableton is fully ready.

### Deep checks

- verify correct project context and expected markers/scenes exist
- verify app path is using intended source mode

---

## 3) Wrong Song/Section behavior

### Fast checks

1. Verify Song order in Setlist tab.
2. Verify Section placement inside each Song.
3. Check for misplaced drops/duplicates.
4. Use undo/redo to inspect latest operations.

### Deep checks

- validate jump logic against rehearsal sequence
- retest with simplified setlist slice

---

## 4) User page actions mismatch

### Fast checks

1. Confirm active User page.
2. Confirm Shift state.
3. Re-check assignment values.

### Deep checks

- test one control at a time on isolated target action
- remove overlapping mappings during diagnosis

---

## 5) Network issues

### Fast checks

1. Verify IP + port on both ends.
2. Verify same subnet.
3. Verify firewall policy.

### Deep checks

- test direct link
- test with reduced network load

---

## Recovery order (safe)

1. Save state if possible
2. Restart app
3. Power cycle controller
4. Re-validate first Song + critical controls
5. Resume from known-safe transition point