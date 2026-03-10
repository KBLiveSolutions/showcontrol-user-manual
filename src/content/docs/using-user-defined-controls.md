---
title: Using User-Defined Controls
---

## Defining User actions
1. In the Application, select the **User tab**.
2. Select one of the **4** User pages with the **Page selector**, the controls for the current Page will automatically appear.
3. For each **User page**, you can set :

    - Display lines
    - Primary Button actions
    - Shifted actions by clicking on the Shift button. A blue frame will then appear around the controls.
    - Encoder turn/push (Turn is above the encoder, Push is below).
    - Pedal actions

> Actions are sent directly to the controller on select
>
> You can Export and Import page configurations as Json Files.

## Using the controller
Press and hold the Encoder to select which User mode is currently active.

> You can send **Program Change N** to the controller (to the DAW port or on  External MIDI) to remotely switch to  User page N.


## Actions reference
### Display Options

These are the 2 lines that appear on the main Display.

| Display Type           | Description                  |
|------------------------|-----------------------------|
| Scene Name             | Current scene/cue name       |
| Next Scene Name        | Upcoming scene name          |
| Track Name             | Selected track name          |
| Looper Number          | Active looper index          |
| Variation Number       | Current variation            |
| Prev/Next Marker Name  | Marker navigation info       |
| Setlist Song           | Current song in setlist      |
| Next Setlist Song      | Upcoming song                |


### Buttons Actions

These actions are available for the main 5 Buttons, the Pedals and the Encoder when pushing it.

#### Transport Controls

| Action                 | Description                  |
|------------------------|-----------------------------|
| Play/Stop              | Toggle playback              |
| Play                   | Start playback               |
| Stop                   | Stop playback                |
| Record                 | Toggle recording             |
| Metronome              | Toggle click track           |
| BPM +1 / BPM -1        | Tempo adjustment             |
| Rewind / Fast Forward  | Timeline navigation          |

#### Arrangement Controls

| Action                 | Description                  |
|------------------------|-----------------------------|
| Jump 1.1.1             | Jump to start                |
| Arr. Rec               | Arrangement recording        |
| Arr. Loop              | Toggle arrangement loop      |
| Prev/Next Marker       | Navigate markers             |
| Loop to Next Marker    | Set loop to next marker      |


#### Session Controls

| Action                 | Description                  |
|------------------------|-----------------------------|
| Session Rec            | Session recording            |
| Prev/Next Scene        | Scene navigation             |
| Launch Scene           | Trigger current scene        |
| Prev/Next Section      | Section navigation           |
| Loop Section           | Loop current section         |


#### Looper Controls

| Action                 | Description                  |
|------------------------|-----------------------------|
| Looper State           | Toggle looper                |
| Prev/Next Looper       | Navigate loopers             |
| Clear                  | Clear current looper         |
| Clear All              | Clear all loopers            |


#### Custom MIDI

| Action       | Description                        |
|--------------|------------------------------------|
| Custom MIDI  | Send custom Note/CC/PC message     |


### Encoder Turn Actions

| Action                | Description                  |
|-----------------------|-----------------------------|
| BPM                   | Adjust tempo                |
| Scene Select          | Navigate scenes             |
| Track Select          | Navigate tracks             |
| Scroll                | General scrolling           |
| Selected Parameter    | Adjust selected parameter   |
| Track Volume/Pan      | Mix controls                |
| Track Send A/B        | Send levels                 |


## If control behavior mismatches

Go to [Troubleshooting](troubleshooting.md#4-user-page-actions-mismatch).