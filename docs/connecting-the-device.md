# Installing and Connecting the ShowControl Controller

## Software Installation

### Ableton Live Control Surface Script
1. Unzip the script archive.
2. Copy the folder into Ableton Live’s `Remote Scripts` directory (usually found in the installation folder or your user library).
3. Restart Ableton Live to detect the new script.

### ShowControl Application
1. Download the `.dmg` file for the ShowControl app.
2. Open the file and follow the instructions to install the application on your computer.
3. Launch the app after installation.

## Hardware Connection

### USB Connection

- Connect the USB cable between the controller and your computer.
- Open Ableton Live, go to Preferences, and add a Control Surface line: select “Show Control” and set the MIDI In and Out ports to “Show Control DAW”.
- The controller will display a white SHCTRL icon and the number 1, indicating an active USB connection.

**Needed** : Show Control script

### Ethernet Connection

- Connect the Ethernet cable between the controller and your network or directly to your computer.
- You can power the controller either by connecting the USB-C port to a charger or computer, or by using a Power over Ethernet (PoE) injector or switch on your Ethernet cable.
- On the controller, press and hold the encoder to access the Settings menu.
- Set the IP address according to your network requirements (make sure the first three octets match your computer’s address).
- On your computer, set the Ethernet port’s IPv4 address manually, using an address in the same subnet as the controller.
- Launch the ShowControl app: it will automatically detect your device and establish the connection.
- The SHCTRL icon on the controller will turn green and the number 1 will appear, indicating an active network connection.
- Make sure the Show Control script is loaded in Ableton Live so the app can communicate with Live.


**Needed** : Show Control script + Show Control App

## If Installation or Connection Fails

See the [Troubleshooting](troubleshooting.md) section for detailed solutions.

> **Requirements**
> - ShowControl controller and computer available
> - ShowControl app installed and working
> - Ableton Live project and script available (if using Ableton integration)
> - Required cables (USB-C, Ethernet, power)
