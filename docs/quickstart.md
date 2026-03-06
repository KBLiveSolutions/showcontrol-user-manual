# Quick Start (Performer)

## Goal

Bring the rig to a stable, show-ready state with validated control and navigation.

## Preconditions

- Controller connected (USB and/or Ethernet)
- ShowControl app running on operator machine
- If using Ableton integration: set is open and script is loaded

---

## 1) Connect and validate transport path

1. Connect controller via USB or Ethernet.
2. Open ShowControl app.
3. Confirm at least one active link indicator (USB or ETH).

**Expected result**
- Controller is reachable and status path is visible.

If not, go to [Troubleshooting](troubleshooting.md#1-controller-not-detected).

---

## 2) Validate device/network settings

1. Open **Settings** tab.
2. Set LED/display brightness for venue conditions.
3. If using Ethernet: verify IP + port, then press **Send**.

**Expected result**
- Brightness and network values apply without errors.

If not, go to [Troubleshooting](troubleshooting.md#5-network-issues).

---

## 3) Build or verify setlist structure

1. Open **Setlist** tab.
2. Select source (**Scenes** or **Markers**).
3. Create/select setlist.
4. Arrange Songs and Sections.
5. Confirm order and transitions.

**Expected result**
- Setlist matches show order and is navigation-safe.

If not, go to [Troubleshooting](troubleshooting.md#3-wrong-songsection-behavior).

---

## 4) Validate control mappings

1. Open **User** tab.
2. Validate critical actions per active User page:
   - transport actions
   - previous/next Song
   - Shift layer
   - encoder and pedals

**Expected result**
- Critical actions are deterministic and repeatable.

If not, go to [Troubleshooting](troubleshooting.md#4-user-page-actions-mismatch).

---

## 5) Final pre-show gate

- [ ] Correct setlist selected
- [ ] First Song selected
- [ ] Shift state confirmed
- [ ] Connection path stable
- [ ] Critical controls re-tested

If any item fails, stop and resolve before starting playback.
