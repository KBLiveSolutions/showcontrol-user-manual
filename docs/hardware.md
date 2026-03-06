# Hardware Controller

This page covers physical setup, on-stage usage, and quick diagnostics.

---

## Power

Controller power options:

- USB-C
- PoE (if available on your hardware path)

If both are connected, PoE may be prioritized depending on your hardware implementation.

### Recommendations

- use stable, tested power supplies
- avoid mid-show power path changes

---

## Connection modes

| Service | Connection | ShowControl App | Ableton Script | Ableset |
|---|---|---:|---:|---:|
| ShowControl | USB | Optional | Recommended | Optional |
| ShowControl | Ethernet | Recommended | Recommended | Optional |
| Ableset workflow | USB | Recommended | Optional | Required |
| Ableset workflow | Ethernet | Optional | Optional | Required |

---

## MIDI ports

When connected by USB, expected ports are:

- **Show Control DAW**
- **Show Control External MIDI**

If these are missing, check cable/port and reconnect sequence.

---

## Navigation

- **Long encoder press**: open menu/navigation
- **Short encoder press**: validate/select
- **Shift/Lock**: alternate actions / exit actions

---

## Setlist / Ableset page

Used for Song and Section navigation in live context.

Typical operations:

- previous/next Song
- section changes
- transport-oriented actions (depending on mapping/service mode)

---

## User pages

Up to 4 User pages are available for custom control layouts.

Each User page can combine:

- primary + shifted button actions
- encoder mappings
- pedal mappings
- display lines

---

## Settings page

Hardware-side settings usually include:

- LED brightness
- display brightness
- network IP/port
- device ID

Save values before exiting when applicable.

---

## Pedals

Supported pedal modes:

- footswitch
- expression
- dual

Verify pedal mode and wiring before show day.

---

## External MIDI

External USB MIDI devices can be connected and forwarded through the external MIDI path.

Use powered hubs for higher current devices.

---

## Quick pre-show hardware check

- power stable
- expected MIDI ports visible
- network link valid (if ETH)
- pedals/encoder responding
