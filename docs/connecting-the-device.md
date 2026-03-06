# Installation / connection

## Goal

Install the controller correctly and bring it online with a stable control path to your host/DAW.

## Preconditions

- Controller and host machine available
- ShowControl app installed and launchable
- If using Ableton integration: project and script available
- Required cables available (USB-C and/or Ethernet, and power if needed)

---

## 1) Physical installation

- Place the controller on a stable surface with enough airflow.
- Connect required cables (USB-C and/or Ethernet).
- If using PoE, ensure the switch/injector is active.
- Power on the controller.

### Verify

- screen initializes normally
- no boot-loop behavior
- cable links are physically secure

---

## 2) Connection mode selection

Choose one primary path for operation:

- **USB connection** (simple local setup)
- **Ethernet connection** (networked setup)

### Verify

- app shows expected connection status (USB/ETH)
- chosen path remains stable for at least 1-2 minutes

---

## 3) App and MIDI/DAW validation

- Open ShowControl and confirm the controller is detected.
- Confirm expected MIDI ports appear on the host machine.
- If using Ableton/script, confirm script is loaded and responsive.

### Verify

- transport/control feedback responds as expected
- no unexpected disconnects during basic actions

---

## 4) Network validation (if Ethernet)

- Confirm IP and port values in Settings.
- Ensure controller and host are on the same subnet (or valid routed path).

### Verify

- connection remains stable during basic control actions

---

## If installation/connection fails

Go to [Troubleshooting](troubleshooting.md).
