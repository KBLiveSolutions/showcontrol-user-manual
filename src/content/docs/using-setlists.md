---
title: Using Setlists
---

## Building the Setlist
1. In the application, open the **Setlist** tab.
2. Select source (**Scenes** or **Markers**).
3. Create/select target setlist.
4. Drag content into the **Songs** box.
5. Organize **Sections** inside Songs.

[CAPTURE d'ECRAN SETLIST]


> **Setlists:** 
>
> - You can rename, duplicate, remove, or create Setlists. 
> - The selected Setlist is the currently active Setlist. 
> - When opening a set, the last selected Setlist is active by default.
>
> **Songs:** 
>
> - You can reorder Songs by drag and drop. 
> - Rename a Song by right-clicking or double-clicking it. 
> - Remove a Song by right-clicking or dropping it outside the Songs box.
>
> **Sections:** 
>
> - You can reorder Sections by drag and drop. 
> - Remove a Section by right-clicking or dropping it outside the Songs box.

## Playback
### Session Playback

- For **Session Scenes**, Scenes will play until the end of the longest Clip, then the next Scene in the Song will be launched.
- Enabling **Loop** will relaunch the currently playing Scene
- If you create a Track named **STRUCTURE**, any Clip on it will impose its length to the Scene.
    
### Arrangement Playback

- For **Arrangement Markers**, the Arrangement will play until a Marker named **STOP** is reached
- Markers between a Song start marker and a STOP marker are ingored, unless they are part of the Setlist, in which case they will be considered as Sections.
- Enabling Loop will position the Arrangment Loop around the current Section.


## Using the controller
[CONTROLLER MOCKUP]

- Press and hold the encoder, and select Setlist
- Use the buttons to start, stop playback, skip to previous or next Song.
- Loop button works as described above.
- Press the encoder to select a Song
- Press the encoder while holding Shift to select a Setlist

> You can send **Program Change #5** to the controller (to the DAW port or on  External MIDI) to remotely switch to the Setlist page.

## Using the Performance tab
[CAPTURE d'ECRAN PERFORMANCE]

- The buttons are the same as above.
- You can MIDI map the buttons to a MIDI controller by clicking on MIDI Learn.


## If setlist behavior is wrong

Go to [Troubleshooting](troubleshooting.md#3-wrong-songsection-behavior).