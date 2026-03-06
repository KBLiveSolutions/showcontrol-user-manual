# Troubleshooting

Use this page to quickly diagnose the most common issues.

---

## 1) Connection issues

### Controller not detected (USB)

1. Use a **data-capable** USB cable (not charge-only)
2. Try another USB port
3. Restart controller and app
4. Confirm MIDI ports appear on your OS

### No Ethernet communication

1. Check cable and link LEDs
2. Verify IP and port in **Settings** tab
3. Ensure controller and computer are on compatible subnet
4. Temporarily disable firewall for test

### App shows wrong connection state

- Replug USB / Ethernet
- Restart app
- Check if another process already owns the MIDI ports

---

## 2) Setlist sync issues

### Scenes/Markers list is empty

1. Confirm Ableton is open
2. Confirm remote script is installed and loaded
3. Verify the expected set/project is active
4. Reconnect app/controller once Ableton is fully ready

### Drag & drop works but live navigation is wrong

1. Review song/section order in Setlist tab
2. Check for accidental duplicates
3. Use Undo/Redo history to verify recent edits
4. Save and reload setlist state if needed

---

## 3) User controls not behaving as expected

### Button action mismatch

1. Confirm correct **User page** is selected
2. Confirm Shift state (normal vs shifted layer)
3. Re-open mapping dialog and verify action type/channel/value

### Encoder or pedal not responding

1. Verify pedal type (single/dual/expression) in Settings
2. Re-check hardware connection
3. Confirm no conflicting mapping on same target

---

## 4) Display or brightness issues

### Display too dim / LEDs too dim

- Increase brightness sliders in **Settings**
- Re-send settings if required by workflow

### UI seems visually misaligned after update

- Restart app to reload style state
- Confirm latest CSS changes are included in your build

---

## 5) Recovery steps (quick)

If behavior is inconsistent during rehearsal:

1. Save current work
2. Restart app
3. Power cycle controller
4. Reconnect in preferred order:
   - Ableton (if used)
   - ShowControl app
   - Controller
5. Verify USB/ETH status dots before testing again

---

## Support info to collect before reporting

- App version
- OS version
- Connection mode (USB/Ethernet)
- Whether Ableton script is active
- Exact steps to reproduce
- Screenshot/video if UI-related
