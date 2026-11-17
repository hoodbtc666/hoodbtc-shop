/* ============================================================
   HOODBTC Shop — product guides (build-time data)
   ------------------------------------------------------------
   Consumed by scripts/build.mjs only; never loaded by a page.
   One entry per product: what the device does, how it is used
   (numbered setup steps + everyday use), its key specs, and
   what a buyer should know before ordering.

   Written from each maker's official product information,
   retold in HOODBTC's own words — no official marketing text
   is copied. Customer-facing rule: the copy names only the
   device as sold in the shop. It never names the manufacturer,
   any website or store, or any branded companion app, and it
   makes no earnings, rewards or income claims of any kind.
   ============================================================ */

const HOODBTC_GUIDES = {
"weatherxm-d1-network": {
 "what": [
  {
   "type": "p",
   "text": "The D1 is a two-part home and small-site weather station, sold as bundle WB1200. A solar-powered outdoor station (WS1001) measures conditions at your site, and an indoor gateway (WG1200) with a touchscreen console receives those readings and puts them where you can use them. The outdoor station never joins your Wi-Fi itself. It sends a compact reading packet over a private point-to-point LoRa radio link to its own paired gateway, roughly every 20 seconds. The gateway then forwards observations over Wi-Fi about once a minute, shows live conditions on its screen, and serves the same data locally at the same time. The gateway cryptographically protects each observation and its location with a built-in secure element before forwarding, so data leaving the home can be verified as coming from your station. It also logs history locally to a memory card, offers a local web interface and a local network API for home-automation, building and custom software integrations, and can share weather telemetry with nearby mesh radio nodes. In this Network Edition, the station contributes its quality-checked observations to the network it is built for, where they are shown in its companion app and network explorer and made available through that network's data services. The hardware is identical to the Open Edition; this edition is the lower-priced version for stations contributing data under that network's rules. Typical uses include homes, schools and small businesses, gardens and small farms, greenhouses and nurseries, and small facilities that want weather measured at their own address rather than taken from a distant forecast."
  }
 ],
 "steps": [
  "Unpack the bundle: outdoor station with wind cups, wind vane and solar panel, indoor gateway with USB-C cable, external battery pack, mounting plate, U-bolts, nuts, wrench, screwdriver, zip ties and bird spikes.",
  "Assemble the outdoor station, fitting the wind cups, wind vane and rain collector following the assembly guide.",
  "Insert 2 AA 1.5 V non-rechargeable batteries as backup power. Do not use rechargeable batteries, as they can damage the station. Fit the external battery pack if you want capacity for extra cells (up to 8 AA in total).",
  "Mount the station outdoors in the open on a metal pole, about 50 mm (2 in) in diameter and at least 2 m (6.56 ft) high, secured with the plate, U-bolts and tools provided. Keep it clear of walls, trees and heat sources that distort wind and temperature readings.",
  "Place the gateway indoors within LoRa range of the station, ideally near a window facing the station, in a spot with a fairly steady indoor temperature. Keep it permanently powered and switched on so it can receive, record and upload readings.",
  "Connect the gateway to power with the USB-C cable and a USB power supply (cable included, power adapter not included), then join it to your 2.4 GHz Wi-Fi network.",
  "Download its companion app, claim the station and gateway, and confirm the pairing. The gateway can be set to listen for its saved station, or paired locally.",
  "Check the gateway touchscreen and the app to confirm live readings are arriving, and confirm the gateway's local web interface loads on your home network."
 ],
 "howParas": [
  "Everyday use: Leave both parts running. The station samples continuously outdoors on solar power with battery backup, and the gateway shows live weather tiles, trend charts and daily minimum and maximum values on its touchscreen. The same live and recent readings are available in the companion app, in the gateway's local web interface with live and 24-hour charts, and to local software through the local network API, with no internet round trip needed for local reads. History is also written to the gateway's memory card as a local record. The gateway can additionally act as an environmental sensor for nearby mesh radio nodes, sharing your station's wind, rain and pressure readings even if the internet is down. Firmware updates arrive over the air in stages, and can also be installed over USB."
 ],
 "specs": [
  {
   "label": "Components",
   "value": "WS1001 outdoor station + WG1200 indoor gateway (bundle WB1200)"
  },
  {
   "label": "Measurements (7-in-1)",
   "value": "temperature, relative humidity, barometric pressure, wind speed, wind direction, rainfall / rain rate, light (including solar radiation and UV information derived from light sensing)"
  },
  {
   "label": "Temperature",
   "value": "-40 to +60 °C range; accuracy ±0.2 °C; resolution 0.1 °C"
  },
  {
   "label": "Relative humidity",
   "value": "10% to 99% range; accuracy ±5%"
  },
  {
   "label": "Rain",
   "value": "0 to 300 mm/h range; accuracy ±10%; resolution 0.254 mm"
  },
  {
   "label": "Wind speed",
   "value": "0 to 50 m/s range; accuracy ±1 m/s at wind speeds below 5 m/s"
  },
  {
   "label": "Wind direction",
   "value": "0 to 359 degrees"
  },
  {
   "label": "Light",
   "value": "0 to 200,000 lux range; accuracy ±15%"
  },
  {
   "label": "Pressure",
   "value": "300 to 1100 hPa range (equivalent to about +9,000 m to -500 m relative to sea level); accuracy ±3.9 Pa; resolution 0.06 Pa"
  },
  {
   "label": "Station sampling / uplink",
   "value": "packet about every 20 seconds to its gateway; gateway forwards over Wi-Fi every 1 minute"
  },
  {
   "label": "Station link",
   "value": "LoRa point-to-point, sub-GHz, EU868 / US915 / AS923 regional options; up to about 1 km line of sight to its paired gateway"
  },
  {
   "label": "Station power",
   "value": "integrated solar panel with 2 × AA backup; external battery pack included for extra cells; 1.5 V non-rechargeable batteries only"
  },
  {
   "label": "Gateway display",
   "value": "4-inch (3.95-inch) capacitive touchscreen, with live weather tiles, trend charts and daily extremes; integrated barometric pressure sensor"
  },
  {
   "label": "Gateway connectivity",
   "value": "2.4 GHz Wi-Fi, Bluetooth Low Energy, LoRa receiver"
  },
  {
   "label": "Gateway power",
   "value": "USB-C, requires continuous USB power; USB-C cable included, USB power adapter not included"
  },
  {
   "label": "Gateway security and location",
   "value": "ATECC608 secure element for cryptographic protection of observations; GPS"
  },
  {
   "label": "Gateway storage",
   "value": "microSD card slot for permanent local weather history logging"
  },
  {
   "label": "Gateway interfaces",
   "value": "cloud forwarding over Wi-Fi; local web user interface on the LAN; local HTTP REST API on the LAN; mesh environmental telemetry; Bluetooth"
  },
  {
   "label": "Gateway firmware",
   "value": "over-the-air updates; USB installation also supported"
  },
  {
   "label": "In the box",
   "value": "WS1001 station with wind cups, wind vane and solar panel; WG1200 gateway with USB-C cable; external battery pack; mounting plate, U-bolts, nuts, wrench, screwdriver, zip ties, bird spikes"
  },
  {
   "label": "Size and weight (boxed kit)",
   "value": "44 × 17 × 27 cm; 2 kg"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "You will also need AA 1.5 V non-rechargeable batteries, a USB power supply for the gateway, a metal mounting pole (about 50 mm diameter, at least 2 m tall) and the tools and parts to secure the pole; none of these are included. Rechargeable batteries must not be used in the station. Choose the correct regional frequency option (EU868, US915 or AS923) for your location when ordering. Real LoRa range depends on the site: up to about 1 km needs clear line of sight, and concrete, metal and coated glass reduce it, so a gateway position near a window facing the station works best. The gateway needs a 2.4 GHz Wi-Fi signal (5 GHz-only networks will not work for it) and must stay powered on to receive and upload readings. Place the gateway where indoor temperature stays relatively steady through the day for the most reliable pressure readings. Local web access, the local API and memory-card logging work on your own network; cloud features in the companion app need an internet connection."
  }
 ]
},
"weatherxm-d1-open": {
 "what": [
  {
   "type": "p",
   "text": "This is the same D1 hardware as the Network Edition: a solar-powered WS1001 outdoor station linked by private point-to-point LoRa to an indoor WG1200 gateway with a touchscreen, local web interface, local network API, memory-card logging and mesh telemetry. The difference is deployment, not hardware. The Open Edition is for private or business use without a participation commitment to the network the hardware is built for. It follows an independent backend and firmware path, so readings are used on your own terms: read live from the gateway on your local network, feed them into home-automation, building-management or custom software, log them locally, or share them as telemetry with nearby mesh nodes, rather than operating the unit as a contributing network station. Both editions include the local web interface, the local API and mesh support; the gateway hardware, sensors, radio link and power arrangement are the same."
  }
 ],
 "steps": [
  "Unpack the bundle: outdoor station with wind cups, wind vane and solar panel, indoor gateway with USB-C cable, external battery pack, mounting plate, U-bolts, nuts, wrench, screwdriver, zip ties and bird spikes.",
  "Assemble the outdoor station, fitting the wind cups, wind vane and rain collector following the assembly guide.",
  "Insert 2 AA 1.5 V non-rechargeable batteries as backup power. Do not use rechargeable batteries, as they can damage the station. Fit the external battery pack if you want capacity for extra cells (up to 8 AA in total).",
  "Mount the station outdoors in the open on a metal pole, about 50 mm (2 in) in diameter and at least 2 m (6.56 ft) high, clear of walls, trees and heat sources.",
  "Place the gateway indoors within LoRa range of the station, ideally near a window facing the station, and keep it permanently powered by USB-C with your own USB power supply (cable included, adapter not included).",
  "Join the gateway to your local network over 2.4 GHz Wi-Fi.",
  "Open the gateway's local web interface on your LAN to pair the station, check radio settings, view the live packet log and confirm readings.",
  "Connect your own software through the gateway's local HTTP REST API, set up memory-card logging if you want a local history record, and enable mesh telemetry if you run nearby mesh nodes.",
  "If needed, update or switch the gateway firmware through the independent firmware path, including installation over USB."
 ],
 "howParas": [
  "Everyday use: The station runs outdoors on solar power with battery backup and sends a reading packet to the gateway about every 20 seconds. The gateway displays live conditions, trends and daily extremes on its touchscreen, serves live and 24-hour charts in its local web interface, answers local API requests from your software with no internet round trip and no cloud account in the loop, and writes history to its memory card. Typical local uses include automations driven by real conditions at your address (for example pausing irrigation after rain or closing awnings in high wind), feeding on-site weather into building or greenhouse controls, and sharing live conditions with nearby mesh users. Cloud and network participation are not required for this local use."
 ],
 "specs": [
  {
   "label": "Components",
   "value": "WS1001 outdoor station + WG1200 indoor gateway (bundle WB1200)"
  },
  {
   "label": "Measurements (7-in-1)",
   "value": "temperature, relative humidity, barometric pressure, wind speed, wind direction, rainfall / rain rate, light (including solar radiation and UV information derived from light sensing)"
  },
  {
   "label": "Temperature",
   "value": "-40 to +60 °C range; accuracy ±0.2 °C; resolution 0.1 °C"
  },
  {
   "label": "Relative humidity",
   "value": "10% to 99% range; accuracy ±5%"
  },
  {
   "label": "Rain",
   "value": "0 to 300 mm/h range; accuracy ±10%; resolution 0.254 mm"
  },
  {
   "label": "Wind speed",
   "value": "0 to 50 m/s range; accuracy ±1 m/s at wind speeds below 5 m/s"
  },
  {
   "label": "Wind direction",
   "value": "0 to 359 degrees"
  },
  {
   "label": "Light",
   "value": "0 to 200,000 lux range; accuracy ±15%"
  },
  {
   "label": "Pressure",
   "value": "300 to 1100 hPa range; accuracy ±3.9 Pa; resolution 0.06 Pa"
  },
  {
   "label": "Station sampling / uplink",
   "value": "packet about every 20 seconds to its gateway"
  },
  {
   "label": "Station link",
   "value": "LoRa point-to-point, sub-GHz, EU868 / US915 / AS923 regional options; up to about 1 km line of sight to its paired gateway; no LoRaWAN network server or third-party gateway involved"
  },
  {
   "label": "Station power",
   "value": "integrated solar panel with 2 × AA backup; external battery pack included for extra cells; 1.5 V non-rechargeable batteries only"
  },
  {
   "label": "Gateway display",
   "value": "4-inch (3.95-inch) capacitive touchscreen, with live weather tiles, trend charts and daily extremes; integrated barometric pressure sensor"
  },
  {
   "label": "Gateway connectivity",
   "value": "2.4 GHz Wi-Fi, Bluetooth Low Energy, LoRa receiver"
  },
  {
   "label": "Gateway power",
   "value": "USB-C, requires continuous USB power; USB-C cable included, USB power adapter not included"
  },
  {
   "label": "Gateway security and location",
   "value": "ATECC608 secure element; GPS"
  },
  {
   "label": "Gateway storage",
   "value": "microSD card slot for local weather history logging (CSV), with an in-browser chart viewer"
  },
  {
   "label": "Gateway interfaces",
   "value": "local web user interface on the LAN; local HTTP REST API on the LAN with automatic home-automation discovery; mesh environmental telemetry; Bluetooth; independent backend / firmware path"
  },
  {
   "label": "Gateway firmware",
   "value": "open firmware base; over-the-air updates and USB installation / mode switching supported"
  },
  {
   "label": "In the box",
   "value": "WS1001 station with wind cups, wind vane and solar panel; WG1200 gateway with USB-C cable; external battery pack; mounting plate, U-bolts, nuts, wrench, screwdriver, zip ties, bird spikes"
  },
  {
   "label": "Size and weight (boxed kit)",
   "value": "44 × 17 × 27 cm; 2 kg"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "You will also need AA 1.5 V non-rechargeable batteries, a USB power supply for the gateway, a metal mounting pole (about 50 mm diameter, at least 2 m tall) and the tools and parts to secure the pole; none of these are included. Rechargeable batteries must not be used in the station. Choose the correct regional frequency option (EU868, US915 or AS923) for your location when ordering. This edition carries no participation commitment to the network the hardware is built for, and follows its own backend and firmware path, which can differ in timing and features from the network path; check that the independent firmware supports the integrations you plan before relying on them. LoRa range is up to about 1 km only with clear line of sight; walls, concrete, metal and coated glass reduce it. The gateway needs 2.4 GHz Wi-Fi and continuous USB power, and works best indoors where temperature stays relatively steady. Local use does not need an internet connection, but remote access and any cloud features you choose to use do."
  }
 ]
},
"geodnet-mobilecm": {
 "what": [
  {
   "type": "p",
   "text": "The MobileCM is a fixed, geodetic-grade GNSS base station for the network it is built for. Mounted in one place with a clear view of the sky, it continuously receives signals from the major satellite positioning constellations on three frequency bands and provides high-accuracy RTK correction data for nearby users, for applications such as surveying, mapping, robotics, precision agriculture and drone / UAV operations. It also functions as a space-weather station, collecting satellite observation data beyond corrections. It uploads its observations over a Wi-Fi internet connection and includes built-in NTRIP server and gateway functionality, so compatible rovers and users nearby can connect directly for corrections without you running separate server software. It is supplied as a ready-to-use kit with a survey-grade roof antenna and mounting hardware, and it runs on very low power from USB-C, so it can be left running continuously at a fixed site."
  }
 ],
 "steps": [
  "Choose a fixed site, ideally a roof, where the antenna will have a clear, unobstructed view of the sky in all directions, away from walls, metal structures and overhangs that block or reflect satellite signals.",
  "Mount the included survey-grade triple-band antenna using the 9 m antenna cable, 0.3 m mounting pole and brackets in the kit, following the manual for your roof or structure.",
  "Run the antenna cable to the MobileCM receiver and connect it, then connect the Wi-Fi antenna to the receiver.",
  "Power the receiver by USB-C using the cable provided and a suitable USB power source.",
  "Connect to the receiver's setup Wi-Fi from a phone or computer and open its setup interface.",
  "In the setup interface, enter your own 2.4 GHz Wi-Fi network details so the station can reach the internet, and complete any position / site configuration the manual requires for a fixed base station.",
  "Register the station in its companion web console using its serial number, then confirm it appears online and is transmitting data."
 ],
 "howParas": [
  "Everyday use: Once installed, the station is left running continuously at its fixed position. It tracks satellites, generates RTK corrections through its built-in NTRIP server for nearby compatible users, and uploads its observation data over your Wi-Fi connection. Day-to-day involvement is minimal: check in the companion web console from time to time that the station is online and transmitting, keep its internet connection and USB-C power uninterrupted, and keep the antenna's sky view clear if anything changes around the site (new structures, growth or moved equipment). A fixed, accurately known antenna position is what makes the corrections useful, so do not move the antenna after setup without reconfiguring the station."
 ],
 "specs": [
  {
   "label": "Function",
   "value": "fixed GNSS RTK base station with built-in NTRIP server and gateway functionality; also operates as a space-weather station"
  },
  {
   "label": "GNSS bands",
   "value": "triple-band L1 / L2 / L5 reception"
  },
  {
   "label": "Constellations",
   "value": "GPS, GLONASS, Galileo, BeiDou and QZSS, including international constellation variants; four main constellations supported simultaneously"
  },
  {
   "label": "Total bands",
   "value": "up to 12 bands across all constellations and variants"
  },
  {
   "label": "Tracking channels",
   "value": "1,000+ channels for satellite tracking and high data throughput"
  },
  {
   "label": "Accuracy role",
   "value": "geodetic-grade, ultra-high-accuracy positioning and RTK correction data for nearby rovers / users"
  },
  {
   "label": "Connectivity",
   "value": "2.4 GHz Wi-Fi for internet uplink, NTRIP corrections and remote configuration; Bluetooth support per hardware specification"
  },
  {
   "label": "Power",
   "value": "USB-C powered; power consumption under 2 W"
  },
  {
   "label": "Kit included",
   "value": "MobileCM receiver, triple-band roof antenna, 9 m antenna cable, Wi-Fi antenna, USB-C power cable, 0.3 m mounting pole and brackets (pre-configured antenna installation kit)"
  },
  {
   "label": "Documentation supplied",
   "value": "datasheet and manual for the base station (space-weather station) are provided for this model"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Full receiver dimensions, weight, operating temperature range and an environmental / ingress rating are not published for this model; the datasheet and manual carry those details. Performance depends entirely on siting: the antenna needs a fixed position with a clear, unobstructed sky view, and a poor site (blocked sky, nearby metal, reflective surfaces) reduces correction quality for everyone using the station. The station needs a continuous internet connection over 2.4 GHz Wi-Fi and continuous USB-C power to upload data and serve corrections; it has no cellular connection of its own. The antenna position must stay fixed after setup. Orders shipped outside the United States are sent on delivered-at-place terms, meaning import duties and taxes at the destination are the buyer's responsibility; check those costs for your country before ordering. Professional uses such as surveying should confirm that this station and its correction stream meet the accuracy and workflow requirements of the specific job and software in use."
  }
 ]
},
"dimo-macaron": {
 "what": [
  {
   "type": "p",
   "text": "The Macaron is a compact plug-in device for a car's OBD-II diagnostic port. Once plugged in, it reads vehicle data through that port, including diagnostic trouble codes, trip and location-related data, GPS positioning and maintenance-related information, and makes basic vehicle analytics available in its companion mobile app. It is the entry-level, lowest-cost hardware option in its range, intended for drivers who want a simple view of their car's health and use without a cellular subscription device. It connects to the phone app over Bluetooth for setup and nearby communication, and sends its longer-range data over a public LoRa IoT network, which is why coverage where you drive matters. Three status LEDs on the device show power, connection and Bluetooth state. It draws its power from the vehicle itself, so there is no battery to charge and nothing to remove between drives."
  }
 ],
 "steps": [
  "Check that your vehicle is from 2008 or newer. One maker's fully electric models are excluded, as they connect differently; check compatibility for your exact model before ordering.",
  "Check public LoRa IoT network coverage for the areas where you normally drive and park, as coverage can be limited outside metro areas.",
  "Download its companion mobile app and create an account. The app requires Android 9.0 or iOS 16 or above.",
  "Locate the OBD-II port, usually under the dashboard on the driver's side, and plug the Macaron in directly. Do not use an extension cable.",
  "Turn the car on and pair the device with your vehicle in the app over Bluetooth, following the in-app flow.",
  "Allow time for the device to sync and configure on its first connection, watching the power, connection and Bluetooth LEDs.",
  "Confirm in the app that the device shows as connected to your vehicle."
 ],
 "howParas": [
  "Everyday use: Leave the device plugged in. It powers from the vehicle when the car is in use, records trip and diagnostic data as you drive, and passes data onward when the phone app connects over Bluetooth or when the car is within LoRa network coverage. In the app you can review basic vehicle analytics, diagnostic codes and trip information for the connected vehicle. Because long-range reporting depends on LoRa coverage rather than cellular, trips outside covered metro areas may sync later or less completely than trips inside covered areas. If you change vehicles, unplug the device and repeat the pairing flow for the new vehicle, provided it is also compatible."
 ],
 "specs": [
  {
   "label": "Compatibility",
   "value": "vehicles from 2008 and newer, with the exclusion noted above"
  },
  {
   "label": "Connection to vehicle",
   "value": "OBD-II port, CAN bus via OBD-II; plug in directly, no extension cable"
  },
  {
   "label": "Processor",
   "value": "nRF52840, 32-bit, 64 MHz Arm Cortex-M4F CPU"
  },
  {
   "label": "Memory",
   "value": "128 MB flash and 256 kB RAM on chip"
  },
  {
   "label": "Connectivity",
   "value": "SX1262 LoRa transceiver on a public LoRa IoT network; Bluetooth 5.0 / Bluetooth Low Energy; USB 2.0 connector"
  },
  {
   "label": "Antennas",
   "value": "external U.FL antenna (902–928 MHz for US, 868 MHz for Europe); internal antenna optional"
  },
  {
   "label": "Sensors",
   "value": "3-axis accelerometer and gyroscope"
  },
  {
   "label": "Positioning",
   "value": "GPS location data reported through the vehicle connection and network"
  },
  {
   "label": "Display",
   "value": "3 LEDs for power, connection and Bluetooth"
  },
  {
   "label": "Power",
   "value": "powered from the vehicle; no separate battery (battery: N/A); input voltage 5–50 V; internal voltage 3.3 V; power-on current 200 mA; low-power mode 2 µA"
  },
  {
   "label": "Materials and construction",
   "value": "ABS, clamshell injection-moulded device"
  },
  {
   "label": "Connectivity included",
   "value": "3 years of network connectivity included"
  },
  {
   "label": "Companion app requirement",
   "value": "Android 9.0 or iOS 16 and above"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "No formal in-the-box contents list is published for this device. Compatibility is not universal: the vehicle must be from 2008 or newer, one maker's fully electric models are excluded, and some specific models may be untested or unsupported, so verify your exact vehicle before ordering. LoRa IoT coverage is the main practical limit: it is concentrated in metro areas and can be limited or absent elsewhere, which affects how promptly trip data is reported. The device must be plugged directly into the OBD-II port without an extension cable. It has no battery and only works while connected to the vehicle. The companion app needs a phone running Android 9.0 or iOS 16 or above and a Bluetooth connection for setup."
  }
 ]
},
"natix-vx360": {
 "what": [
  {
   "type": "p",
   "text": "The VX360 is a plug-in storage and data device for compatible electric vehicles from a single maker. It connects to the vehicle's glovebox USB port and works with the car's existing external cameras — front, side (repeater / pillar) and rear, giving a surround view — with no access to the cabin camera. It stores the car's dashcam driving footage and parked surveillance (sentry) footage directly on the device, then backs footage up automatically to your personal cloud space whenever it connects to a known Wi-Fi network, so you do not need to unplug it to get your recordings. In its companion app you can view, share and download your trip and surveillance recordings, check storage in real time as you drive, and manage footage kept in the cloud. Footage you choose to share onward is processed before use: computer-vision anonymisation blurs personally identifiable information such as faces and licence plates, only driving footage with specific events is used (parked footage and footage from your configured private zones are not collected for that use), and the shared street-level imagery is used to identify and map features such as traffic signs, traffic lights and road conditions, and to build realistic driving scenarios for autonomous-driving development. You can also retrieve files directly by unplugging the device and connecting it to a computer."
  }
 ],
 "steps": [
  "Check your vehicle is a supported model and year: Model 3, Model Y, Model S (2021 and newer), Model X (2021 and newer) or Cybertruck. Only models from 2021 onward are supported.",
  "Connect the VX360 to the glovebox USB port using the cable provided. No additional tools or technical expertise are required.",
  "Download its companion mobile app for iOS or Android and register an account, which takes a couple of minutes.",
  "Pair the app with the device over Bluetooth, following the in-app instructions.",
  "Use the app to connect the device to your home or preferred Wi-Fi network, so uploads can happen automatically.",
  "Drive normally while the vehicle's cameras record to the device, and set up any private zones (a radius around your home, office or other private places) in the app where you do not want data collected.",
  "When parked within range of a known Wi-Fi network, open the app to confirm footage has uploaded to your cloud space and view your recordings."
 ],
 "howParas": [
  "Everyday use: The device sits in the glovebox and records in the background as you drive, capturing dashcam and surveillance footage from the car's four external cameras. When the car is parked on a known Wi-Fi network (for most owners, at home), footage uploads automatically to your personal cloud space. In the app you can watch, download and share recordings for purposes such as incident documentation or managing more than one vehicle, and follow how much storage is in use. Cloud copies are kept for 30 days and are then automatically removed to make space for new recordings, so download anything you need to keep for longer within that window. If you prefer not to use the cloud for a particular recording, unplug the device and copy the files directly to a computer instead."
 ],
 "specs": [
  {
   "label": "Compatibility",
   "value": "Model 3, Model Y, Model S (2021 and newer), Model X (2021 and newer), Cybertruck; only models released in 2021 and onwards are supported"
  },
  {
   "label": "Connection",
   "value": "glovebox USB port, using the cable provided"
  },
  {
   "label": "Storage",
   "value": "256 GB on-device storage"
  },
  {
   "label": "Recording capacity",
   "value": "more than 20 hours of video recordings from the car's 4 external cameras"
  },
  {
   "label": "Cameras used",
   "value": "front, side (repeater / pillar) and rear external cameras only; no access to the internal / cabin camera"
  },
  {
   "label": "Footage types",
   "value": "dashcam driving footage, parked surveillance (sentry) footage, and automatic driving footage, based on your preferences"
  },
  {
   "label": "Cloud backup",
   "value": "automatic upload to your personal cloud space when connected to a known Wi-Fi network; footage accessible in the app for 30 days, then automatically removed"
  },
  {
   "label": "Processor / onboard compute",
   "value": "quad-core Arm Cortex-A7"
  },
  {
   "label": "Positioning",
   "value": "L1-band GNSS module"
  },
  {
   "label": "Connectivity",
   "value": "Wi-Fi, low-power Bluetooth, Micro USB port"
  },
  {
   "label": "Companion app",
   "value": "available for iOS and Android; includes cloud storage access, social sharing and a gamified experience"
  },
  {
   "label": "Privacy processing",
   "value": "AI / computer-vision anonymisation blurring faces and licence plates in shared footage; user-defined private zones (listed as coming soon); no collection for shared use while parked or inside private zones"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "No formal itemised in-the-box contents list is published beyond the connection cable provided. This device only works with the listed models from the one vehicle maker, and only with models from 2021 onward; it does not work with other brands or older models. It depends on the car's own camera and recording systems being enabled and working; it stores and backs up that footage, it is not a standalone camera. Cloud backup needs the car to park within range of a Wi-Fi network you have connected the device to, and cloud copies are deleted automatically after 30 days. Companion app availability is limited to a listed set of countries and regions, so check that your country is supported before ordering. Direct file access is also possible by unplugging the device and connecting it to a computer. Keep the device connected in the glovebox for continuous recording; removing it stops new footage from being stored on it."
  }
 ]
},
"sensecap-m1": {
 "what": [
  {
   "type": "p",
   "text": "A ready-to-use indoor gateway for long-range, low-power wireless (LoRaWAN) networks. It provides wide-area coverage — described as miles of range — and data transmission capacity for nearby LoRa and LoRaWAN devices such as sensors, trackers, and other low-power endpoints, relaying their data over your internet connection to the long-range IoT network it is built for. Typical uses for the class of network it serves include agriculture monitoring, building and asset monitoring, and facility management. It is built on a mature single-board computer platform paired with a dedicated LoRa concentrator module, and is designed to run continuously with power consumption comparable to an ordinary light bulb. A built-in secure element chip provides hardware-based authentication for the device. Software is kept current with automatic over-the-air updates for both the operating system and the application software, with no manual update steps, and a built-in remote diagnostics mechanism allows faults to be investigated remotely when support is requested. Cooling is handled by an aluminium enclosure with a heatsink and an internal fan that manages temperature automatically, supporting long-term, stable operation. Optional accessories for the range include higher-gain fibreglass antennas, mounting pads, and outdoor enclosures, sold separately."
  }
 ],
 "steps": [
  "Check you have the correct regional version for where the gateway will operate (for example EU868 for Europe or US915 for North America) — the version, its antenna, and its power adapter are region-specific.",
  "Unbox the gateway, its region-matched antenna, its region-matched power adapter, the pre-fitted 64 GB MicroSD card, and the quick start guide.",
  "Attach the antenna to the antenna connector before powering the unit on.",
  "Place the gateway indoors in an elevated, clear position — next to a window or fixed on a wall are the suggested positions — away from obstructions where possible.",
  "Connect the power adapter and power the gateway up.",
  "Download its companion app on your smartphone and create an account.",
  "Press the gateway's button for about 5 seconds, until its LED changes to a slow flash, to enter Bluetooth pairing mode.",
  "In the app, start hotspot setup, choose this model from the list, and let the app find and connect to the gateway over Bluetooth.",
  "Connect the gateway to the internet: either select your Wi-Fi network in the app and enter its password, or connect an Ethernet cable instead.",
  "Complete registration in the app and confirm the gateway shows as connected and online."
 ],
 "howParas": [
  "Everyday use: leave the gateway powered on and connected so it continuously provides coverage and relays data for LoRaWAN devices in range. It needs no daily attention — updates install automatically, the fan and heatsink manage its temperature, and its status can be checked in its companion app. For broader coverage across an area, the guidance for this class of gateway is to space multiple gateways roughly 350–400 metres apart."
 ],
 "specs": [
  {
   "label": "Processor",
   "value": "quad-core Cortex-A72 (ARM v8) 64-bit SoC at 1.5 GHz (BCM2711)"
  },
  {
   "label": "RAM",
   "value": "2 GB / 4 GB / 8 GB variants"
  },
  {
   "label": "LoRa concentrator",
   "value": "WM1302 / WM1303 module with SX1302 / SX1303 baseband chip"
  },
  {
   "label": "Storage",
   "value": "64 GB MicroSD card"
  },
  {
   "label": "Frequency versions",
   "value": "EU868 version 863–870 MHz; US915 version 902–928 MHz"
  },
  {
   "label": "Additional frequency plans supported",
   "value": "AU915, KR920, and AS923 (select the version and plan for your region)"
  },
  {
   "label": "Receiver sensitivity",
   "value": "-125 dBm at 125 kHz / SF7; -139 dBm at 125 kHz / SF12"
  },
  {
   "label": "Transmit power",
   "value": "up to 26 dBm"
  },
  {
   "label": "Antenna gain",
   "value": "US915: 2.6 dBi; EU868: 2.8 dBi"
  },
  {
   "label": "Antenna impedance",
   "value": "50 ohm"
  },
  {
   "label": "Antenna radiation pattern",
   "value": "omni-directional"
  },
  {
   "label": "Antenna connector",
   "value": "RP-SMA female ×1"
  },
  {
   "label": "Wi-Fi",
   "value": "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless"
  },
  {
   "label": "Bluetooth",
   "value": "Bluetooth 5.0, BLE (used for setup)"
  },
  {
   "label": "LoRaWAN",
   "value": "supports Class A and Class C devices"
  },
  {
   "label": "Security",
   "value": "built-in ECC608 secure element chip for authentication"
  },
  {
   "label": "Updates",
   "value": "automatic over-the-air updates (operating system and software)"
  },
  {
   "label": "Input",
   "value": "DC 5 V, 3 A"
  },
  {
   "label": "Interfaces",
   "value": "USB Type-C (power supply) ×1; Ethernet RJ45 ×1; RP-SMA female antenna connector ×1"
  },
  {
   "label": "Operating temperature",
   "value": "0 °C to 50 °C"
  },
  {
   "label": "Relative humidity",
   "value": "0%–90% (non-condensing)"
  },
  {
   "label": "Heat dissipation",
   "value": "aluminium enclosure, heatsink, and cooling fan"
  },
  {
   "label": "Enclosure rating",
   "value": "IP20 (indoor use)"
  },
  {
   "label": "Certifications",
   "value": "FCC (US versions) / CE (EU versions)"
  },
  {
   "label": "Size",
   "value": "about 15.2 × 10 × 4 cm"
  },
  {
   "label": "Weight",
   "value": "about 378 g"
  },
  {
   "label": "In the box",
   "value": "gateway ×1, region-matched antenna ×1, region-matched power adapter ×1, 64 GB MicroSD card ×1, quick start guide ×1"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "This is an indoor gateway (IP20) and is not weather-sealed; outdoor use requires a suitable separate enclosure. The regional version matters: the frequency band, antenna, and power adapter must match the regulations and the network plan for the country where it is installed, and some countries or regions may not support the network it is built for at all, so check coverage and legality for your exact location before ordering. It needs a continuous internet connection (Ethernet or Wi-Fi) and continuous power to provide coverage. Coverage range in practice depends heavily on placement, building materials, and surrounding obstructions — an elevated position near a window gives the best result indoors."
  }
 ]
},
"helium-hotspot-indoor": {
 "what": [
  {
   "type": "p",
   "text": "An indoor Wi-Fi access point that provides local mobile coverage for subscribers of the mobile network it is built for, inside public and commercial venues. When a subscriber's phone is in range and set up for the network, it can connect through this hotspot for mobile service instead of relying only on the wider cellular signal. The hotspot does not create its own internet connection: it uses the venue's existing internet connection as backhaul and extends that connectivity to subscribers nearby. It is optimized for indoor performance and intended for busy shared spaces — it is a venue coverage point, not a general-purpose home router."
  }
 ],
 "steps": [
  "Unbox the hotspot and keep the QR code and network details supplied with it to hand — they are needed during registration.",
  "Choose a central indoor location in the venue, where the most visitors pass or gather, such as in a cafe, shop, restaurant, gym, or shopping centre.",
  "Mount the unit on a ceiling or a wall, as directed for this model.",
  "Connect it to the venue's internet connection by Ethernet, and connect power — Power over Ethernet is supported, so a compatible network connection can supply both data and power over the one cable.",
  "Complete registration through its companion app's onboarding flow, scanning the supplied QR code when prompted and confirming the hotspot's location.",
  "Confirm the hotspot shows as online, then leave it powered on."
 ],
 "howParas": [
  "Everyday use: once registered, the hotspot runs continuously with no day-to-day input. Subscribers in range whose phones carry the correct network Wi-Fi profile connect through it automatically when nearby. The venue's own internet connection carries the traffic, so the hotspot should be left powered and connected at all times to provide coverage."
 ],
 "specs": [
  {
   "label": "Type",
   "value": "indoor Wi-Fi coverage hotspot for the mobile network it is built for"
  },
  {
   "label": "Range",
   "value": "up to 150 ft indoors"
  },
  {
   "label": "Coverage area",
   "value": "approximately 3,305 sq ft"
  },
  {
   "label": "Best placed",
   "value": "cafes, shops, restaurants, and shopping centres (also suited to gyms and similar venues)"
  },
  {
   "label": "Mounting",
   "value": "ceiling or wall"
  },
  {
   "label": "Power",
   "value": "Power over Ethernet supported"
  },
  {
   "label": "Backhaul",
   "value": "requires an existing internet connection (supplied by the venue)"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "An existing internet connection at the venue is required; the hotspot provides no connectivity without one. The stated range and coverage area are maximums for favourable indoor layouts — walls, shelving, and other obstructions reduce real-world coverage, so central, elevated placement matters. It is designed for indoor venues only and is not weather-resistant. Only subscribers of the mobile network it serves, with the correct Wi-Fi profile on their phone, can use the coverage it provides."
  }
 ]
},
"helium-hotspot-outdoor": {
 "what": [
  {
   "type": "p",
   "text": "An outdoor Wi-Fi access point that provides local mobile coverage for subscribers of the mobile network it is built for, in outdoor public areas where people gather. It works the same way as the indoor version — a subscriber's phone in range and set up for the network can connect through the hotspot for mobile service — but the hardware is built to live outside: it is fully weather-resistant and designed for external mounting, with a longer, line-of-sight range. Like the indoor model, it creates no internet connection of its own and uses an existing internet connection as backhaul."
  }
 ],
 "steps": [
  "Unbox the hotspot and keep the QR code and network details supplied with it to hand for registration.",
  "Choose an outdoor position with a clear line of sight over the area you want to cover — a rooftop, an external wall, or a pole overlooking a park, beach, street, or venue entrance.",
  "Mount the unit externally on a pole, as directed for this model, fixed securely and facing the area to be covered.",
  "Run an outdoor-rated Ethernet cable to the unit. Power over Ethernet is required — the same cable carries both the internet connection and power.",
  "Connect the other end of the run to the site's existing internet connection.",
  "Complete registration through its companion app's onboarding flow, scanning the supplied QR code when prompted and confirming the hotspot's location and installation details.",
  "Confirm the hotspot shows as online, then leave it in place and powered on."
 ],
 "howParas": [
  "Everyday use: after registration the hotspot operates continuously outdoors with no routine input. Subscribers in range whose phones carry the correct network Wi-Fi profile connect through it automatically. Because it is weather-resistant, it is left installed through normal outdoor conditions; the main ongoing requirement is that its Ethernet/PoE connection and the site's internet service stay up."
 ],
 "specs": [
  {
   "label": "Type",
   "value": "outdoor Wi-Fi coverage hotspot for the mobile network it is built for"
  },
  {
   "label": "Construction",
   "value": "fully weather-resistant, designed for outdoor installation"
  },
  {
   "label": "Range",
   "value": "up to 800 ft with line of sight"
  },
  {
   "label": "Best placed",
   "value": "parks, beaches, streets, and rooftops (also suited to outdoor venue and cafe areas)"
  },
  {
   "label": "Mounting",
   "value": "external pole mounting"
  },
  {
   "label": "Power",
   "value": "Power over Ethernet required"
  },
  {
   "label": "Backhaul",
   "value": "requires an existing internet connection (supplied by the site)"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "The headline range is a line-of-sight figure; trees, buildings, and terrain between the hotspot and users reduce it substantially, so height and an unobstructed outlook are the main placement priorities. An existing internet connection is required, and because Power over Ethernet is required (not merely supported), the installation needs a PoE supply at the end of the Ethernet run. Only subscribers of the mobile network it serves, with the correct Wi-Fi profile on their phone, can use the coverage it provides."
  }
 ]
},
"ledger-nano-s-plus": {
 "what": [
  {
   "type": "p",
   "text": "A compact, wired hardware wallet for self-custody. Your private keys are generated and kept offline on a certified secure chip inside the device, isolated from your computer and phone, so a transaction is only signed after you review and confirm it on the device screen."
  },
  {
   "type": "p",
   "text": "It is the straightforward, stay-at-home model in its line:"
  },
  {
   "type": "ul",
   "items": [
    "Manages a wide range of assets — 500+ coins directly in its companion app, thousands more coins, tokens and NFTs through compatible third-party wallets, with up to 100 coin apps installed on the device at once.",
    "Clear Signing support, so supported transactions are shown in readable terms on screen rather than as raw code.",
    "Transaction Check support, which flags common scam patterns before you sign.",
    "Can also work as a hardware security key for passkey and two-factor logins on supported platforms.",
    "If the device is lost or broken, the accounts are not: access is restored on a replacement device with the recovery phrase."
   ]
  }
 ],
 "steps": [
  "Unbox the device and install its companion app on your computer or Android phone.",
  "Connect the device with the included USB-C cable, choose create a new wallet, and follow the on-screen setup.",
  "Set a PIN — entering the wrong PIN three times in a row resets the device, so the phrase backup matters.",
  "Write down the recovery phrase exactly as shown, on the included recovery sheets or on a metal backup, and store it offline, away from the device.",
  "Add accounts in the companion app and install the coin apps for the assets you want to manage."
 ],
 "howParas": [
  "Everyday use: connect by USB-C whenever you want to transact. To receive, generate an address in the app and check it matches on the device screen before sharing it. To send or swap, start the transaction in the app, then read the amount and destination on the device screen and confirm on the device — nothing is signed without that confirmation."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "USB-C, for desktop and Android use — no Bluetooth, no NFC"
  },
  {
   "label": "Screen",
   "value": "1.1-inch monochrome OLED display, 128 x 64 px, button-operated"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+, running the maker's own secure operating system"
  },
  {
   "label": "Finish",
   "value": "brushed stainless steel and plastic"
  },
  {
   "label": "Size",
   "value": "62.4 x 17.4 x 8.2 mm"
  },
  {
   "label": "Weight",
   "value": "20.7 g"
  },
  {
   "label": "Battery",
   "value": "none — powered over USB-C"
  },
  {
   "label": "Supported systems",
   "value": "64-bit Windows 10/11, macOS (Monterey/Ventura), Ubuntu LTS 20.04/22.04 (excluding ARM processors), Android 10+"
  },
  {
   "label": "Asset support",
   "value": "500+ coins in the companion app; thousands of coins, tokens and NFTs via third-party wallets; up to 100 apps installed"
  },
  {
   "label": "In the box",
   "value": "1 device, 1 USB-C to USB-A cable, 3 recovery sheets, 1 keychain strap, 1 safety and regulatory leaflet"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "A wired model: it works with desktop computers and Android phones, but not with iPhones, and it is not compatible with Chromebook laptops or suitable for mining. Keep the recovery phrase offline and private — anyone who has it can restore the wallet, and if you lose both the device and the phrase, access cannot be recovered. Only install the companion app from a trusted source and check addresses on the device screen, not only on the computer screen."
  }
 ]
},
"ledger-nano-x": {
 "what": [
  {
   "type": "p",
   "text": "A pocket-size hardware wallet for self-custody on the move. As with the wired model above, private keys stay offline on a certified secure chip, isolated from your phone and computer, and every transaction must be reviewed and confirmed on the device itself. The difference is mobility: Bluetooth lets it pair with phones, including iPhones, as well as computers."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "Manages 500+ coins directly in its companion app, and thousands more coins, tokens and NFTs through compatible third-party wallets, with up to 100 coin apps installed at once.",
    "Clear Signing support, so supported transactions appear in readable terms on the device screen.",
    "Transaction Check support, which flags common scam patterns before signing.",
    "Can also work as a hardware security key for passkey and two-factor logins on supported platforms.",
    "Losing the device does not lose the assets — a replacement device plus the recovery phrase restores access."
   ]
  }
 ],
 "steps": [
  "Unbox the device and install its companion app on your phone or computer.",
  "Connect by USB-C or pair by Bluetooth, choose create a new wallet, and follow the on-screen setup.",
  "Set a PIN — three wrong PIN entries in a row reset the device.",
  "Write down the recovery phrase exactly as shown, on the included recovery sheets or on a metal backup, and store it offline.",
  "Add accounts in the companion app and install the coin apps for the assets you want to manage."
 ],
 "howParas": [
  "Everyday use: to receive, generate an address in the app and verify it on the device screen. To send or swap, start in the app, then check the amount and destination on the device and confirm there. Charge the built-in battery by USB-C as needed, and note that operating-system updates over Bluetooth require a recent device software version — older versions update over a wired connection instead."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "Bluetooth (BLE 5.2) for iOS and Android phones, plus USB-C for desktop and Android use"
  },
  {
   "label": "Screen",
   "value": "1.1-inch monochrome OLED display, 128 x 64 px, button-operated"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL5+, running the maker's own secure operating system"
  },
  {
   "label": "Finish",
   "value": "brushed stainless steel and plastic"
  },
  {
   "label": "Size",
   "value": "72 x 18.6 x 11.7 mm"
  },
  {
   "label": "Weight",
   "value": "35.8 g"
  },
  {
   "label": "Battery",
   "value": "built-in rechargeable battery, charged by USB-C"
  },
  {
   "label": "Supported systems",
   "value": "64-bit Windows 10/11, macOS (Monterey/Ventura), Ubuntu LTS 20.04/22.04 (excluding ARM processors), iOS 14+, Android 10+"
  },
  {
   "label": "Asset support",
   "value": "500+ coins in the companion app; thousands of coins, tokens and NFTs via third-party wallets; up to 100 apps installed"
  },
  {
   "label": "In the box",
   "value": "1 device, 1 USB-C to USB-A cable, 3 recovery sheets, 1 keychain strap, 1 safety and regulatory leaflet"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Bluetooth is for connection only — signing still happens on the device after on-screen review. The device is not compatible with Chromebook laptops and is not suitable for mining. Keep the recovery phrase offline and never enter it into a phone, computer or website; it is typed only into a replacement device during a restore. If the device and the phrase are both lost, access cannot be recovered."
  }
 ]
},
"ledger-nano-gen5": {
 "what": [
  {
   "type": "p",
   "text": "The newest model in this line, launched in 2025, and the most accessible model with a secure touchscreen. Private keys stay offline on a certified secure chip, and the large touchscreen is driven securely so what you review on screen is what you sign. It brings the touchscreen experience — clearer signing, easier navigation — to the familiar compact Nano form."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "A 2.8-inch secure E Ink touchscreen for reviewing and confirming transactions by touch instead of buttons.",
    "Clear Signing, so supported transactions are presented in plain, readable language, plus Transaction Check, which flags common scam patterns.",
    "Full companion-app integration for monitoring markets, comparing service providers across chains, and sending, receiving, buying, selling, swapping and staking where those services are offered by third parties.",
    "A PIN-protected backup key card is included in the box, giving an optional second restore method alongside the written recovery phrase.",
    "Can also act as a passkey and two-factor hardware login key through a security-key feature in its companion app.",
    "Customisable lock screens and optional interchangeable decorative badges (sold separately) for personalisation.",
    "Supports 500+ coins in the companion app and thousands more coins, tokens and NFTs via compatible third-party wallets."
   ]
  }
 ],
 "steps": [
  "Unbox the device and install its companion app on your phone or computer.",
  "Connect by USB-C, Bluetooth or NFC, choose create a new wallet, and follow the touchscreen setup.",
  "Set a PIN — three wrong PIN entries in a row reset the device to factory settings.",
  "Write down the recovery phrase exactly as shown, on paper or a metal backup, and store it offline. Set up the included backup key card if you want that extra restore option, and keep it somewhere separate and private.",
  "Add accounts in the companion app for the assets you want to manage."
 ],
 "howParas": [
  "Everyday use: to receive, generate an address in the app and check it on the touchscreen. To send or interact with an app or service, review the full transaction details on the touchscreen and confirm there. Recharge by USB-C as needed."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "USB-C, Bluetooth and NFC"
  },
  {
   "label": "Screen",
   "value": "2.8-inch monochrome E Ink touchscreen, 300 x 400 px, scratch-resistant glass with anti-glare coating"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+, running the maker's own secure operating system"
  },
  {
   "label": "Battery",
   "value": "rechargeable, up to 10 hours of normal use or up to 150 transactions per charge; charged by USB-C, no wireless charging"
  },
  {
   "label": "Body",
   "value": "plastic frame and plastic back"
  },
  {
   "label": "Size",
   "value": "79.4 x 53.3 x 8.6 mm"
  },
  {
   "label": "Weight",
   "value": "46 g"
  },
  {
   "label": "Supported systems",
   "value": "Windows 10+, macOS 13+, Ubuntu LTS 20.04+ on desktop; Android 10+ and iOS 15+ on mobile"
  },
  {
   "label": "Asset support",
   "value": "500+ coins in the companion app; thousands via third-party wallets"
  },
  {
   "label": "Included backup",
   "value": "PIN-protected backup key card and recovery sheets included"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "The backup key card is optional, PIN-protected and private — treat it like the written phrase and never share either. Losing the device is recoverable with the phrase or the backup key card; losing all backups is not. Screen resolution and accessories sit below the maker's larger touchscreen models — there is no wireless charging and no magnetic case system on this model. Decorative badges are sold separately."
  }
 ]
},
"tangem-2-card": {
 "what": [
  {
   "type": "p",
   "text": "A hardware wallet that lives on two bank-style cards instead of a screened device. Each card contains a secure chip that generates and stores the same private key, and the key never leaves the chip. There is no screen, battery, cable or charging: the card is powered by your phone's NFC field, and tapping the card to the phone is how you approve and sign in the companion mobile app."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "Seedless by design — by default there is no recovery phrase to write down or store. The backup is the second card. On current cards, a seed phrase is available as an optional alternative for users who prefer one, including generating one or importing an existing wallet.",
    "Full self-custody — no company, bank or exchange can access, freeze or restrict the assets, and no servers run your transactions: it is the card, the phone and the blockchain.",
    "Genuine-card checking — the app authenticates each card and warns if a card was already activated.",
    "Independently audited firmware, verified by external security labs.",
    "Built to last in a wallet or purse — a single chip with an antenna, no fragile parts, resistant to water, dust, X-rays, electromagnetic pulses and electrostatic discharge.",
    "Manages a very wide range of assets in the app, with portfolio tracking, and access to decentralised apps and services through a standard wallet-connection protocol, where offered."
   ]
  }
 ],
 "steps": [
  "Install the companion app on an NFC-enabled phone.",
  "Open the app, tap the first card to the back of the phone, and create a new wallet — the chip generates the private key inside the card.",
  "Set an access code to protect the wallet against unauthorised use.",
  "Link the second card during the same setup, when the app asks you to connect the backup card — the key is copied between cards over an encrypted connection at this stage.",
  "If you want the optional seed-phrase method instead, choose it during setup and store any phrase written down offline and privately.",
  "Store the two cards in separate safe places — keeping both together defeats the purpose of the backup."
 ],
 "howParas": [
  "Everyday use: open the app to check balances and activity without the card. To receive, show the address from the app. To send, swap or change wallet settings, start in the app and tap a card to the phone to confirm and sign — either card works, because both hold the same key."
 ],
 "specs": [
  {
   "label": "Contents",
   "value": "2 cards holding the same wallet (1 primary, 1 backup)"
  },
  {
   "label": "Form",
   "value": "credit-card-sized card, chip with antenna — no screen, buttons or ports"
  },
  {
   "label": "Connectivity",
   "value": "NFC only — no Bluetooth, Wi-Fi or USB"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+"
  },
  {
   "label": "Battery",
   "value": "none — powered by the phone's NFC module, nothing to charge"
  },
  {
   "label": "Protection",
   "value": "IP69K dust and water rating"
  },
  {
   "label": "Operating range",
   "value": "-25°C to +50°C"
  },
  {
   "label": "Hazard resistance",
   "value": "X-rays, electromagnetic pulses and electrostatic discharge, per the relevant card standard"
  },
  {
   "label": "Systems",
   "value": "mobile only — a phone with full NFC support, running a recent version of iOS or Android 6.0 or higher (some very old phone models are excluded)"
  },
  {
   "label": "Asset support",
   "value": "14,100+ tokens across 90+ networks"
  },
  {
   "label": "Warranty",
   "value": "25-year warranty, based on the chip's rated lifetime"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "There is no desktop or web version: a compatible NFC phone is required for setup and signing. Backup cards must be linked during the original setup — you cannot add another card to the set afterwards, so do not skip that step. The access code matters: with only two cards, losing one card and forgetting the access code can leave you unable to reset it or recover the wallet. And if every card is lost or destroyed and you chose not to create a seed phrase, the funds cannot be recovered by anyone. A card shows no transaction details itself, so always read the transaction carefully in the app before tapping to sign."
  }
 ]
},
"tangem-3-card": {
 "what": [
  {
   "type": "p",
   "text": "The same card-based hardware wallet as the 2-card set, with a third card for stronger recovery options. All three cards hold the same private key inside a secure chip, work interchangeably, and sign by tapping to your phone over NFC in the companion mobile app. No screen, no battery, no cable, and no seed phrase by default — the card set itself is the backup system."
  },
  {
   "type": "p",
   "text": "Why the third card matters, factually:"
  },
  {
   "type": "ul",
   "items": [
    "Any one card gives full access, so losing one card still leaves two working backups.",
    "If one card is lost and you forget your access code, the remaining cards let you reset the access code and recover the wallet — with a 2-card set, losing a card plus forgetting the code can lock you out.",
    "Three cards can be split across three locations, so a single theft, fire or loss at one location does not endanger access.",
    "The same optional seed-phrase alternative is available on current cards for users who prefer it, including importing an existing wallet."
   ]
  },
  {
   "type": "p",
   "text": "It shares the rest of the card wallet's feature set: genuine-card checking in the app, independently audited firmware, no servers involved in transactions, and resistance to water, dust and electrical hazards."
  }
 ],
 "steps": [
  "Install the companion app on an NFC-enabled phone.",
  "Open the app, tap the first card to the back of the phone, and create a new wallet — the key is generated inside the card's chip.",
  "Set an access code for the wallet.",
  "Link the second and third cards during the same setup, when the app asks you to connect the backup cards — the key is transferred between cards over an encrypted connection at this stage, and cards cannot be added to the set later.",
  "If you choose the optional seed-phrase method, select it at setup and store the phrase offline and privately.",
  "Split the cards up: for example one with you, one in a secure place at home, and one with a trusted person or in a safe deposit box — never all three together."
 ],
 "howParas": [
  "Everyday use: check balances in the app without a card. To receive, show the address from the app. To send, swap or change settings, start in the app and tap any one of the three cards to the phone to confirm and sign."
 ],
 "specs": [
  {
   "label": "Contents",
   "value": "3 cards holding the same wallet (1 primary, 2 backups)"
  },
  {
   "label": "Form",
   "value": "credit-card-sized card, chip with antenna — no screen, buttons or ports"
  },
  {
   "label": "Connectivity",
   "value": "NFC only — no Bluetooth, Wi-Fi or USB"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+"
  },
  {
   "label": "Battery",
   "value": "none — powered by the phone's NFC module, nothing to charge"
  },
  {
   "label": "Protection",
   "value": "IP69K dust and water rating"
  },
  {
   "label": "Operating range",
   "value": "-25°C to +50°C"
  },
  {
   "label": "Hazard resistance",
   "value": "X-rays, electromagnetic pulses and electrostatic discharge, per the relevant card standard"
  },
  {
   "label": "Systems",
   "value": "mobile only — a phone with full NFC support, running a recent version of iOS or Android 6.0 or higher (some very old phone models are excluded)"
  },
  {
   "label": "Asset support",
   "value": "14,100+ tokens across 90+ networks"
  },
  {
   "label": "Warranty",
   "value": "25-year warranty, based on the chip's rated lifetime"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "All three cards must be linked during the original setup; a replacement or extra card cannot be added to a finished set. Mobile only — there is no desktop or web interface, and an NFC phone is required. Even with three cards, total loss still matters: if all three cards are lost or destroyed and no seed phrase was created, the funds cannot be recovered by anyone, including the maker. Read every transaction in the app before tapping, because the card itself has no display to show you what you are signing."
  }
 ]
},
"safepal-s1": {
 "what": [
  {
   "type": "p",
   "text": "An air-gapped hardware wallet about the size of a credit card. Air-gapped means it has no data connection at all for signing — no Bluetooth, no Wi-Fi, no NFC and no USB data link. Instead it talks to its companion app only through QR codes: the app displays a QR code, the device scans it with its built-in camera and signs offline, then the device displays a signed QR code for the app to scan and broadcast. Private keys stay inside the device, on a certified secure chip."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "Fully offline signing by QR code in both directions.",
    "A true random number generator and multiple layers of security sensors.",
    "An anti-tampering self-destruct mechanism, plus device authentication, PIN and passphrase protection.",
    "The essential code for private-key generation and other core security functions is published for independent review.",
    "Manages an unlimited number of tokens across 200+ blockchains in one device, through the companion app and a browser extension, where transactions are authorised on the hardware device.",
    "In-app services such as cross-chain swaps and a gateway to decentralised apps are available through the companion app, where offered."
   ]
  }
 ],
 "steps": [
  "Unbox the device and install its companion app on your phone from a trusted source.",
  "Power on the device, choose create a new wallet, and follow the on-screen setup.",
  "Set a PIN, and add a passphrase only if you understand that a forgotten passphrase cannot be recovered.",
  "Write down the recovery phrase exactly as shown, on the supplied phrase cards or a metal backup, and store it offline.",
  "Pair the device with the app by scanning the pairing QR code as prompted."
 ],
 "howParas": [
  "Everyday use: to receive, generate an address in the app and check it on the device. To send, build the transaction in the app, let the device scan the app's QR code with its camera, review and confirm on the device, then hold the device's signed QR code up for the app to scan. Recharge the battery with the USB cable as needed — the cable is for charging and updates, not for signing data."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "QR codes only — no Bluetooth, Wi-Fi, NFC or USB data connection; fully air-gapped signing"
  },
  {
   "label": "Screen",
   "value": "1.3-inch full-colour display, 320 x 320 px"
  },
  {
   "label": "Camera",
   "value": "built-in, for high-speed QR code scanning"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+, with true random number generator"
  },
  {
   "label": "Protection",
   "value": "PIN and passphrase, anti-tamper self-destruct mechanism, device authentication, multiple security sensors"
  },
  {
   "label": "Battery",
   "value": "400 mAh rechargeable"
  },
  {
   "label": "Body",
   "value": "ABS and PVC"
  },
  {
   "label": "Controls",
   "value": "D-pad"
  },
  {
   "label": "Firmware",
   "value": "supports firmware upgrades"
  },
  {
   "label": "Asset support",
   "value": "200+ blockchains, unlimited tokens, via its companion app and browser extension"
  },
  {
   "label": "In the box",
   "value": "not itemised for this model"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Signing is deliberately slower than a cable or Bluetooth wallet, because every transaction moves by QR codes scanned in both directions — that trade-off is the point of an air-gapped design. The hardware line carries a one-year warranty from the date the device is activated. Only part of the device code is published, not the complete code — buyers who require fully open-source firmware should weigh that. Keep the recovery phrase offline; the self-destruct mechanism means tampering attempts can wipe the device, after which the phrase is the only way back in."
  }
 ]
},
"safepal-s1-pro": {
 "what": [
  {
   "type": "p",
   "text": "The premium version of the air-gapped model above: the same fully offline, QR-only signing model, rebuilt in a metal and glass body with a larger battery and a repositioned camera for easier scanning. Private keys stay on a certified secure chip inside the device, and no Bluetooth, Wi-Fi, NFC or USB data connection is ever used to sign."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "Fully offline signing by QR code in both directions, with a high-speed camera for scanning.",
    "A true random number generator, multiple layers of security sensors, an anti-tampering self-destruct mechanism and device authentication.",
    "PIN and passphrase protection.",
    "The essential code for private-key generation and other core security functions is published for independent review.",
    "A premium build — aluminium alloy body with a tempered glass panel — for durability and a clearer display surface.",
    "Manages an unlimited number of tokens across 200+ blockchains, through the companion app and browser extension, with every transaction authorised on the hardware device.",
    "Companion-app services include cross-chain swaps and trading features, a gateway to decentralised apps, and fiat on- and off-ramp services through a banking gateway, where offered."
   ]
  }
 ],
 "steps": [
  "Unbox the device and install its companion app on your phone from a trusted source.",
  "Power on the device, choose create a new wallet, and follow the on-screen setup.",
  "Set a PIN, and add a passphrase only if you understand the recovery consequences of forgetting it.",
  "Write down the recovery phrase exactly as shown, on the supplied phrase cards or a metal backup, and store it offline.",
  "Pair the device with the app by scanning the pairing QR code as prompted."
 ],
 "howParas": [
  "Everyday use: to receive, generate an address in the app and verify it on the device. To send, build the transaction in the app, scan its QR code with the device camera, review and confirm on the device screen, then let the app scan the signed QR code the device displays. Recharge by USB-C as needed."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "QR codes only — no Bluetooth, Wi-Fi or NFC; fully air-gapped signing"
  },
  {
   "label": "Screen",
   "value": "1.3-inch IPS full-colour display, 320 x 320 px"
  },
  {
   "label": "Camera",
   "value": "built-in, for high-speed QR code scanning"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+, with true random number generator"
  },
  {
   "label": "Protection",
   "value": "PIN and passphrase, anti-tamper self-destruct mechanism, device authentication, multiple security sensors"
  },
  {
   "label": "Battery",
   "value": "500 mAh rechargeable — up to 25 days at 15 minutes of daily use; charged by USB-C cable"
  },
  {
   "label": "Body",
   "value": "aluminium alloy with tempered glass panel"
  },
  {
   "label": "Controls",
   "value": "D-pad"
  },
  {
   "label": "Operating temperature",
   "value": "-20°C to 70°C"
  },
  {
   "label": "Firmware",
   "value": "supports firmware upgrades"
  },
  {
   "label": "Asset support",
   "value": "200+ blockchains, unlimited tokens, via its companion app and browser extension"
  },
  {
   "label": "In the box",
   "value": "1 device, 1 cleaning cloth, 2 stickers, 1 USB cable, 3 mnemonic phrase cards, 1 user manual, 1 app download card"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "The difference from the standard model is build and battery, not the security model: same chip certification, same QR-only signing, larger 500 mAh battery and a metal-and-glass body. QR signing takes longer than a connected wallet by design. The hardware line carries a one-year warranty from activation. Only the essential parts of the code are published rather than the complete code. If the anti-tamper mechanism wipes the device, the written recovery phrase is the only way to restore access — store it offline and separately."
  }
 ]
},
"cryptosteel-seed24": {
 "what": [
  {
   "type": "p",
   "text": "This is not a wallet, and it holds no coins and signs nothing. It is a metal backup system for a wallet you already own: a stainless steel capsule and core, loaded with loose character tiles, that records a 24-word recovery phrase in metal instead of on paper. Because the standard word list lets each word be identified from its first four letters, the tiles record those letters word by word. The same tile set also covers passwords, passphrases, private keys and other character-based secrets, up to 128 characters."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "Built on a proven capsule design, updated as the current generation of this metal backup line.",
    "Full character flexibility: the tile set covers letters, numbers and symbols (the full ASCII set), not just phrase letters.",
    "Stainless steel construction, made to resist fire, water and corrosion far beyond what a paper backup can survive.",
    "Tamper evidence: the capsule closes with cotter pins and can be sealed with the included security seals on composite wire, so an opened capsule is visible.",
    "No electronics at all — nothing to charge, update, break down or connect, and nothing stored digitally."
   ]
  }
 ],
 "steps": [
  "First create your wallet on your hardware wallet or wallet app, and have its 24-word recovery phrase in front of you, offline and in private.",
  "Lay out the tiles for the first four letters of each word, in the exact order of the phrase.",
  "Thread the tiles onto the core in order, placing a separator between words, following the setup instructions supplied with the set.",
  "Read the assembled phrase back and compare it word by word against the original before closing anything — a mistake locked in metal is still a mistake.",
  "Slide the loaded core into the shell capsule, close it with the cotter pins, and apply a security seal for tamper evidence.",
  "Store the sealed capsule offline in a secure place, separate from the wallet itself."
 ],
 "howParas": [
  "Everyday use: there is none, by design — this is a set-and-store backup. Open it only when you need to recover a wallet on a new device, then re-check the phrase, restore, and re-seal and re-store the capsule. Never photograph the opened core or type the phrase into a phone or computer."
 ],
 "specs": [
  {
   "label": "Product type",
   "value": "metal recovery-phrase and password backup — not a wallet, no electronics"
  },
  {
   "label": "Capacity",
   "value": "one 24-word recovery phrase (recorded by first four letters per word), or other character-based secrets up to 128 characters"
  },
  {
   "label": "Material",
   "value": "stainless steel capsule, shell and core"
  },
  {
   "label": "Character tiles",
   "value": "over 800 tiles, full ASCII character set (letters, numbers and symbols)"
  },
  {
   "label": "In the box",
   "value": "1 shell capsule, over 800 character tiles, 1 core, 12 separators, 3 cotter pins, 4 security seals with composite wire"
  },
  {
   "label": "Packaging",
   "value": "278 x 181 x 25 mm"
  },
  {
   "label": "Packaging weight",
   "value": "540 g"
  },
  {
   "label": "Connectivity",
   "value": "none"
  },
  {
   "label": "Battery",
   "value": "none"
  },
  {
   "label": "Screen",
   "value": "none"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "This product does not create a wallet or a recovery phrase — it only records one that a wallet generated. Anyone who opens the capsule can read the phrase and take the funds, so a security seal shows tampering but does not stop access: where you store it matters as much as what it is made of. Keep it somewhere private, separate from the wallet, and tell only the people you trust with recovery where it is. Assembly takes care and time — check every word twice before sealing, because correcting tiles after the capsule is sealed means opening it and breaking the seal."
  }
 ]
},
"trezor-safe-3": {
 "what": [
  {
   "type": "p",
   "text": "An entry-level hardware wallet built on an open-source design, so the way it works can be inspected publicly. Private keys stay on the device, transactions are confirmed physically on the device, and a certified secure element adds a separate layer of protection for the device itself. PIN protection guards everyday access, and an optional passphrase can create an additional hidden wallet layer."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "On-device confirmation for every transaction, checked on its monochrome screen with two-button control.",
    "Secure element protection alongside the open-source firmware and hardware design.",
    "PIN and optional passphrase protection.",
    "A modern wallet backup for recovery, designed to be clearer and more flexible than a single written word list.",
    "Tamper-evident casing and packaging and device security seals, so interference is easier to spot before first use.",
    "Manages thousands of coins and tokens through its companion app, including coin management features on desktop and mobile.",
    "A Bitcoin-only firmware edition exists for buyers who want a device dedicated to Bitcoin; this listing is the universal model."
   ]
  }
 ],
 "steps": [
  "Unbox the device and check the packaging and device security seals before use.",
  "Install its companion app on your computer or phone from a trusted source.",
  "Connect the device with the included USB-C cable and follow the setup — devices in this line are set up and have their firmware installed through the companion app.",
  "Create a new wallet and set a PIN. Add a passphrase only if you fully understand that a forgotten passphrase means that hidden wallet cannot be recovered.",
  "Write down the wallet backup exactly as shown, on paper or a metal backup, and store it offline."
 ],
 "howParas": [
  "Everyday use: open the companion app with the device connected by USB-C. To receive, generate an address in the app and verify it on the device screen. To send, start in the app, then read the amount and address on the device screen and confirm with the physical buttons — the physical press is what approves the transaction."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "USB-C (USB-C to USB-C cable included in the box)"
  },
  {
   "label": "Screen",
   "value": "0.96-inch monochrome OLED display, 128 x 64 px"
  },
  {
   "label": "Controls",
   "value": "two-button pad, physical confirmation required"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+"
  },
  {
   "label": "Processor",
   "value": "180 MHz ARM Cortex-M4"
  },
  {
   "label": "Body",
   "value": "durable plastic with tamper-evident casing and anodised aluminium backplate"
  },
  {
   "label": "Size",
   "value": "59 x 32 x 7.4 mm"
  },
  {
   "label": "Weight",
   "value": "14 g"
  },
  {
   "label": "Battery",
   "value": "none — powered over USB-C"
  },
  {
   "label": "Operating temperature",
   "value": "-20°C to +60°C"
  },
  {
   "label": "Certifications",
   "value": "CE and RoHS; X-rays do not harm the device"
  },
  {
   "label": "Asset support",
   "value": "thousands of coins and tokens via its companion app"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "This is a wired, USB-powered model with no Bluetooth and no battery, so it must be plugged in to use. Phone use is more limited than desktop use on some platforms — check the companion app's current support for your phone before relying on it as a phone-only setup. The passphrase is never stored anywhere for you: if you use one and forget it, that wallet layer is lost even if you still have the main backup. Keep the backup offline and separate from the device."
  }
 ]
},
"trezor-safe-5": {
 "what": [
  {
   "type": "p",
   "text": "A hardware wallet centred on a colour touchscreen, for a more comfortable version of the same self-custody model: keys stay on the device, and every transaction is reviewed and confirmed on the device. It combines an open-source design with a certified secure element, PIN and passphrase entry directly on the touchscreen, and tactile feedback so each tap and confirmation is physically felt."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "A vibrant colour touchscreen with haptic feedback for navigation, PIN and passphrase entry, recovery and confirmations.",
    "Reinforced glass screen protection for scratch and damage resistance.",
    "Secure element protection alongside open-source firmware and hardware design.",
    "A modern wallet backup for recovery, clearer and more flexible than a single written word list.",
    "Tamper-evident casing and packaging and device security seals.",
    "A microSD card slot, used by supported device features such as encrypted storage functions.",
    "Manages thousands of coins and tokens through its companion app on desktop and mobile.",
    "A Bitcoin-only firmware edition exists; this listing is the universal model."
   ]
  }
 ],
 "steps": [
  "Unbox the device and check the packaging and device security seals before use.",
  "Install its companion app on your computer or phone from a trusted source.",
  "Connect the device with the included USB-C cable and follow the setup, installing firmware through the companion app when prompted.",
  "Create a new wallet and set a PIN on the touchscreen. Add a passphrase only if you understand the recovery consequences of forgetting it.",
  "Write down the wallet backup exactly as shown, on paper or a metal backup, and store it offline."
 ],
 "howParas": [
  "Everyday use: connect by USB-C and open the companion app. To receive, generate an address in the app and verify it on the touchscreen. To send, start in the app, then review the full details on the colour touchscreen and confirm by touch — the haptic feedback confirms each interaction as you go."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "USB-C (USB-C to USB-C cable included in the box), plus a microSD card slot"
  },
  {
   "label": "Screen",
   "value": "1.54-inch colour touchscreen, 240 x 240 px, reinforced glass, with haptic feedback"
  },
  {
   "label": "Secure element",
   "value": "certified CC EAL6+"
  },
  {
   "label": "Processor",
   "value": "160 MHz ARM Cortex-M33"
  },
  {
   "label": "Body",
   "value": "durable PC-ABS plastic with tamper-evident casing and anodised aluminium backplate"
  },
  {
   "label": "Size",
   "value": "65.9 x 40 x 8 mm"
  },
  {
   "label": "Weight",
   "value": "23 g"
  },
  {
   "label": "Battery",
   "value": "none — powered over USB-C"
  },
  {
   "label": "Operating temperature",
   "value": "-20°C to +60°C"
  },
  {
   "label": "Certifications",
   "value": "CE and RoHS; X-rays do not harm the device"
  },
  {
   "label": "Asset support",
   "value": "thousands of coins and tokens via its companion app"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Wired only: no Bluetooth, no Wi-Fi and no battery, so the device must be plugged in over USB-C to sign. Phone support is more limited than desktop support on some platforms — confirm the companion app's current phone support for your device before buying for phone-only use. A forgotten passphrase cannot be recovered by anyone, even with the main backup. Keep the backup offline, and do not use a device whose seals were already broken when it arrived."
  }
 ]
},
"trezor-safe-7": {
 "what": [
  {
   "type": "p",
   "text": "The flagship hardware wallet in its line. It keeps private keys offline behind three separate hardware security chips from three different suppliers, so protection does not rest on a single component. One of those chips is a fully auditable secure element — its design can be inspected rather than taken on trust — working alongside a second, certified secure element that enforces PIN verification, and a hardened main processor. It is also built to be quantum-ready: post-quantum cryptography protects its firmware updates, device authentication and boot process against future threats."
  },
  {
   "type": "p",
   "text": "Feature coverage:"
  },
  {
   "type": "ul",
   "items": [
    "The largest, brightest screen in the line — a high-resolution colour touchscreen with haptic feedback for reviewing and signing.",
    "Encrypted Bluetooth for wireless use with phones, tablets and computers, using an open-source encrypted connection protocol with secure pairing — it can also be used wired over USB-C.",
    "Wireless charging and a long-life battery type chosen for many more charge cycles than standard lithium batteries.",
    "A machined aluminium unibody with reinforced glass and dust and splash protection for everyday durability.",
    "PIN and passphrase protection, a modern wallet backup, and support for buying, selling, swapping and staking services and third-party wallet apps and services through its companion app, where offered.",
    "Manages thousands of coins and tokens across major networks including Bitcoin, Ethereum, Solana, Base and Arbitrum.",
    "A Bitcoin-only edition exists; this listing is the universal model."
   ]
  }
 ],
 "steps": [
  "Unbox the device and check the packaging and seals before use.",
  "Install its companion app on your phone, tablet or computer from a trusted source.",
  "Pair by encrypted Bluetooth or connect by USB-C, and follow the setup, installing firmware through the companion app when prompted.",
  "Create a new wallet and set a PIN on the touchscreen. Add a passphrase only if you understand that a forgotten passphrase cannot be recovered.",
  "Write down the wallet backup exactly as shown, on paper or a metal backup, and store it offline."
 ],
 "howParas": [
  "Everyday use: open the companion app and connect wirelessly or by cable. To receive, generate an address in the app and verify it on the touchscreen. To send, review every detail on the large colour display and confirm by touch. Recharge wirelessly on a compatible charger or by USB-C as needed."
 ],
 "specs": [
  {
   "label": "Connectivity",
   "value": "USB-C and encrypted Bluetooth 5.0+, with an encrypted host protocol securing both connections"
  },
  {
   "label": "Charging",
   "value": "Qi2-compatible wireless charging, plus USB-C"
  },
  {
   "label": "Battery",
   "value": "330 mAh LiFePO4 battery"
  },
  {
   "label": "Screen",
   "value": "2.5-inch high-resolution colour touchscreen, 520 x 380 px, 700 nits brightness, reinforced glass, haptic feedback"
  },
  {
   "label": "Security chips",
   "value": "three layers — an auditable secure element, a second secure element certified CC EAL6+, and a hardened 160 MHz ARM Cortex-M33 microcontroller"
  },
  {
   "label": "Quantum readiness",
   "value": "post-quantum cryptography for firmware updates, device authentication and boot"
  },
  {
   "label": "Body",
   "value": "anodised aluminium unibody, reinforced glass front, coated glass backplate"
  },
  {
   "label": "Protection rating",
   "value": "IP54 — dust-protected and splash-resistant"
  },
  {
   "label": "Size",
   "value": "75.4 x 44.5 x 8.3 mm"
  },
  {
   "label": "Weight",
   "value": "45 g"
  },
  {
   "label": "Operating temperature",
   "value": "0°C to +45°C"
  },
  {
   "label": "Certifications",
   "value": "CE, RoHS, REACH and WEEE, plus EMC and wireless compliance; X-rays do not harm the device"
  },
  {
   "label": "Asset support",
   "value": "thousands of coins and tokens via its companion app and third-party apps"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Quantum-ready describes the device's own updates, authentication and boot process — it does not make the blockchains themselves quantum-resistant. Wireless use is optional: the wallet also works fully wired over USB-C. It is splash-resistant, not waterproof, and the maker notes it is not unbreakable — avoid extreme temperatures, fire, humidity and chemicals. Keep the backup offline and separate from the device; a forgotten passphrase cannot be recovered."
  }
 ]
},
"deeper-connect-air": {
 "what": [
  {
   "type": "p",
   "text": "A small, portable travel router that provides decentralized private network (DPN) connectivity for all the devices connected through it. Instead of sending your traffic through a single central server, it routes traffic through a peer-to-peer network of similar devices and residential connections, using encrypted tunnels. Because it works at the network level, every phone, laptop, smart TV, or other internet-connected device that joins its Wi-Fi is covered without installing separate software on each device. Routing is handled in two ways: smart routing, which configures routes automatically based on the characteristics of each data stream and tunnel, and multi-routing, which can switch tunnels as needed and use different routes for different destinations at the same time. The design is serverless, with no central point of control, and the maker designs it so that browsing activity is not collected in a central log store — traffic data is fragmented and encrypted across the network paths it travels. Built-in functions include a 7-layer firewall intended to shield against viruses and malicious tracking and to detect intrusions, ad blocking, and parental controls, all running on the device's own network operating system, which is designed for speed and includes an interface that visualizes activity on the network. More than 80 app and web features are accessible through the device. There is no monthly subscription and no recurring fee for the private network service — once bought, the device is used without ongoing service charges. It is suited to homes, offices, cafes, airports, and travel, or anywhere with Wi-Fi access."
  }
 ],
 "steps": [
  "Unbox the contents: the device itself (×1), a USB-C to USB-A adapter (×1), and an instruction guide (×1).",
  "Plug the device into a power source using its USB connection.",
  "Connect it to an available Wi-Fi network or host connection where you are — at home, in an office, in a hotel, or while travelling.",
  "Join the device's own Wi-Fi network from your phone, laptop, or other device.",
  "Open the local interface if you want to adjust routing preferences, ad blocking, parental controls, or firewall settings; otherwise the defaults apply — the device is described as plug-and-play with zero configuration required.",
  "Confirm your connected devices are passing traffic through the device before relying on it."
 ],
 "howParas": [
  "Everyday use: leave the device powered and connected, and simply join its Wi-Fi network on each device you want covered — no per-device app install is needed. Connected devices share the connection at the same time; the device supports simultaneous 4K video playback on up to five separate devices. Its dual-antenna design is intended to give wider wireless coverage at home or on the go, and its very small, light body is made to be carried in a pocket or bag between locations."
 ],
 "specs": [
  {
   "label": "Processor",
   "value": "ARM64 quad-core"
  },
  {
   "label": "Memory",
   "value": "1 GB"
  },
  {
   "label": "Maximum local speed",
   "value": "300 Mbps"
  },
  {
   "label": "Simultaneous use",
   "value": "supports 4K video playback on up to five devices at once"
  },
  {
   "label": "Antennas",
   "value": "dual-antenna design"
  },
  {
   "label": "Private network type",
   "value": "decentralized, peer-to-peer, using residential connections and encrypted tunnels"
  },
  {
   "label": "Routing",
   "value": "smart routing and multi-routing (different routes usable simultaneously)"
  },
  {
   "label": "Firewall",
   "value": "7-layer firewall with intrusion detection"
  },
  {
   "label": "Additional functions",
   "value": "ad blocking, parental controls, network activity visualization, 80+ app and web features"
  },
  {
   "label": "Subscription",
   "value": "none — no monthly or annual fee for the service"
  },
  {
   "label": "Size",
   "value": "7.5 × 4.6 × 0.8 cm"
  },
  {
   "label": "Weight",
   "value": "listed two ways: 0.9 oz (about 26 g) in the headline description and 32 g in the comparison table"
  },
  {
   "label": "In the box",
   "value": "device ×1, USB-C to USB-A adapter ×1, instruction guide ×1"
  },
  {
   "label": "Warranty",
   "value": "1-year warranty"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "The device requires an active internet connection to work; it adds private routing and filtering to an existing connection and does not replace your internet service provider. It works in countries around the world, but available routes depend on other users' residential connections being online in those countries, rather than on fixed server locations, so a specific country route cannot be relied on at all times. Because routes are residential and can change, it is not suited to uses that require a fixed IP address in a guaranteed location, and it is not a corporate-managed compliance tool. Users remain responsible for complying with the laws and regulations that apply where they use it."
  }
 ]
},
"mntd-fi-pro": {
 "what": [
  {
   "type": "p",
   "text": "An outdoor Wi-Fi access point that provides local mobile coverage for subscribers of the mobile network it is built for, in outdoor locations. Installed outside a home or commercial site overlooking a public area, it broadcasts the network's Wi-Fi service so subscribers in range can connect through it, using your wired internet connection as backhaul. It is a dual-band, 2×2 MU-MIMO Wi-Fi 6 (802.11ax) access point designed for high-density outdoor deployments — residential streets, parks, and commercial areas. Coverage is directional: it radiates outward from the unit's front face through its two integrated dual-band directional antennas, rather than equally in all directions. Bluetooth 5.0 and a built-in GPS module support straightforward deployment and positioning during setup, and a purpose-built companion app is used for onboarding and for monitoring the hotspot's status afterwards. A single Ethernet cable carries both power and data (Power over Ethernet), and the all-in-one, IP67-rated weatherproof design is intended for quick, simple outdoor deployment in a range of weather conditions."
  }
 ],
 "steps": [
  "Unbox the contents: the outdoor hotspot, an IEEE 802.3at PoE injector with a 1.5 m Ethernet cable, and mounting brackets and screws.",
  "Photograph or keep the box: its QR code carries the network credentials needed later in setup (the same code is on the back of the unit, where it may be hard to reach after mounting).",
  "Gather what the installation needs: a smartphone running iOS 14.0 or higher, or Android 11 or higher; a Cat5e (or higher) Ethernet cable to connect the injector to your router; a Cat5e (or higher) outdoor-rated Ethernet cable, up to 300 ft, to connect the injector to the hotspot; and a mounting pole if your location needs one.",
  "Connect the outdoor Ethernet cable between the hotspot and the PoE port of the injector, connect a standard Ethernet cable between your router's LAN port and the injector's LAN port, and plug the injector's power adapter into a wall outlet. Power reaches the hotspot through the Ethernet cable. A solid blue LED on the unit indicates it is connected correctly.",
  "Allow time for an automatic firmware update if one is pending: the LED changes from solid blue to blinking blue during the update, turns off for an automatic reboot, and returns to solid blue when the unit is ready. Do not proceed until the LED is solid blue.",
  "Mount the hotspot on a pole or wall outdoors using the included mount, as high as practical, with its front face aimed at the area and people you want to cover; tilt it downward the higher it is placed. Signals can pass through glass, but trees, buildings, and other solid objects block or reflect them and reduce coverage.",
  "Install its companion app on your phone, create an account or sign in, and enable Wi-Fi on the phone.",
  "In the app, scan the QR code from the box or the back of the unit (or enter the network credential from the QR sticker manually), keeping the phone in direct line of sight of the hotspot if it has trouble connecting.",
  "Wait for the GPS lock step to complete — it can take up to 20 minutes and needs the hotspot to have an unobstructed view of the sky.",
  "Confirm, in the app, the installation location shown, the installation height (measured above the surrounding ground, not above sea level), and the direction the front of the hotspot is pointing — the location details must be accurate.",
  "Review the details and complete registration in the app; registration normally takes a few moments but can take up to 10 minutes.",
  "Allow a further 3–10 minutes after registration for the hotspot to begin broadcasting the network's Wi-Fi service, and check in the app that the hotspot appears in your device list (this can also take up to 10 minutes)."
 ],
 "howParas": [
  "Everyday use: once registered, the hotspot is left mounted, powered, and connected, and it provides coverage continuously without routine input. Its status can be checked in its companion app. Subscribers with the network's enhanced coverage feature activated on their phones connect to it automatically when in range. The wired backhaul connection should be gigabit-rated between the router and the hotspot: the setup guidance notes that backhaul speed is measured, that a 100 Mbps-rated link will measure slightly under 100 Mbps, and that an internet connection above 100 Mbps with gigabit-rated local cabling gives the best measured performance."
 ],
 "specs": [
  {
   "label": "Type",
   "value": "outdoor Wi-Fi access point / coverage hotspot for the mobile network it is built for"
  },
  {
   "label": "Wi-Fi standard",
   "value": "dual-band 802.11ax (Wi-Fi 6), 2×2 MU-MIMO"
  },
  {
   "label": "2.4 GHz band",
   "value": "802.11b/g/n/ac/ax, 2×2, 40 MHz, up to 574 Mbps link rate; supported range 2.4000–2.4835 GHz"
  },
  {
   "label": "5 GHz band",
   "value": "802.11a/n/ac/ax, 2×2, 80 MHz, up to 1.2 Gbps link rate; supported ranges 5.150–5.250 GHz, 5.250–5.350 GHz, 5.470–5.725 GHz, 5.725–5.850 GHz"
  },
  {
   "label": "Combined maximum link rate",
   "value": "up to 1,774 Mbps across both bands"
  },
  {
   "label": "Data rates",
   "value": "802.11b up to 11 Mbps; 802.11g/a up to 54 Mbps; 802.11n MCS0–MCS7; 802.11ac MCS0–MCS9; 802.11ax MCS0–MCS11"
  },
  {
   "label": "Maximum transmit power",
   "value": "up to 24 dBm on 2.4 GHz; up to 24 dBm on 5 GHz"
  },
  {
   "label": "Maximum EIRP",
   "value": "32 dBm on 2.4 GHz; 34 dBm on 5 GHz"
  },
  {
   "label": "Receive sensitivity (selected)",
   "value": "-90 dBm at the lowest rates on both bands, down to -54 dBm at the highest 802.11ax rate (HE80, MCS11)"
  },
  {
   "label": "Antennas",
   "value": "2 × integrated dual-band directional antennas, 120° beam; gain 5 dBi at 2.4 GHz, 7 dBi at 5 GHz"
  },
  {
   "label": "Antenna pattern",
   "value": "horizontal/vertical polarization; horizontal beam width 120°; vertical beam width 60°; efficiency over 70% (2.4 GHz) and over 75% (5 GHz)"
  },
  {
   "label": "Bluetooth",
   "value": "BLE 5.0 supported, with integrated Bluetooth antenna"
  },
  {
   "label": "Positioning",
   "value": "built-in GPS module"
  },
  {
   "label": "Interface",
   "value": "1 × 2.5 GbE WAN port with 802.3af/at PoE (powered device); 1 × reset button"
  },
  {
   "label": "Input",
   "value": "57 V DC via 802.3af/at PoE"
  },
  {
   "label": "Power consumption",
   "value": "under 15 W"
  },
  {
   "label": "Indicator",
   "value": "1 × RGB LED (software-defined; solid blue indicates ready during setup)"
  },
  {
   "label": "Size",
   "value": "260 × 140 × 71 mm, without bracket"
  },
  {
   "label": "Weight",
   "value": "1,500 g, without bracket"
  },
  {
   "label": "Installation",
   "value": "pole and wall mounting"
  },
  {
   "label": "Operating temperature",
   "value": "-40 °C to +65 °C"
  },
  {
   "label": "Storage temperature",
   "value": "-40 °C to +85 °C"
  },
  {
   "label": "Operating humidity",
   "value": "5%–95% (non-condensing)"
  },
  {
   "label": "Enclosure rating",
   "value": "IP67 (dustproof and waterproof)"
  },
  {
   "label": "Compliance listed",
   "value": "NRTL Listed 62368-1 (US & CA); CB with IEC/EN 62368-1; IEC 60950-22; FCC Part 15 Class B, Part 15 Subpart C 15.247, and Part 15 Subpart E 15.407 (US); EN 55032, EN 55035, and related EN 61000 immunity standards"
  },
  {
   "label": "In the box",
   "value": "outdoor hotspot ×1, IEEE 802.3at PoE injector with 1.5 m Ethernet cable ×1, mounting brackets and screws"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "This is a directional hotspot: coverage projects from its front face, so aiming and height decide the useful coverage area far more than the raw radio figures. It is outdoor-only equipment (IP67) and needs a wired internet connection — there is no Wi-Fi backhaul option; the Ethernet run from the injector to the hotspot can be up to 300 ft and should use outdoor-rated Cat5e or better cable. A gigabit-capable PoE injector and gigabit-rated cabling are recommended so backhaul speed measures above 100 Mbps; a connection that measures at 100 Mbps through 100 Mbps-rated hardware will read slightly below that mark. Setup requires a phone on iOS 14.0+ or Android 11+, and the GPS step requires a clear view of the sky and can take up to 20 minutes. The installation location entered during setup must be accurate — an incorrect location can lead to the hotspot being removed from the network. Only subscribers of the mobile network it serves can connect to the coverage it provides."
  }
 ]
},
"weatherxm-h2-network": {
 "what": [
  {
   "type": "p",
   "text": "The H2 (WS2001) is a solar-powered, all-in-one outdoor weather station that measures local conditions and reports them over long-range LoRaWAN radio, so it needs no Wi-Fi, cable or SIM card at the station site. Any compatible gateway in range receives its readings and forwards them onward. It is built for sites where running power or Wi-Fi outdoors is impractical: farms, campuses, rural properties and other open locations. Each reading frame is compact and is periodically signed by the station's built-in secure element, and the hardware provides cryptographic protection for its data. In this Network Edition, the station arrives pre-configured and pre-onboarded for a public LoRaWAN IoT network, with its network data credits covered for you, so there is nothing to register on a network server yourself. Its quality-checked data is served in its companion app and network explorer, with forecasts and history available through the app and data services. The hardware is identical to the Open Edition."
  }
 ],
 "steps": [
  "Check public LoRaWAN IoT coverage for your exact installation site before ordering or installing. Coverage maps are indicative only; terrain, gateway height and obstructions decide the real signal.",
  "Unpack the station and its external battery pack and metal ties.",
  "Assemble the station following the assembly guide, including fitting the battery arrangement: 3 AA batteries in the station, or 6 AA using the external battery pack. Use 1.5 V non-rechargeable batteries only (not included).",
  "Set the solar panel tilt for your latitude using the stepped angles provided on the station (keep the panel flat in the southern hemisphere, per the assembly guide).",
  "Mount the station outdoors on a firmly secured metal pole, 30–40 mm (about 1.1–1.5 in) in diameter and at least 2 m (6.56 ft) high, clear of obstacles, heat sources and shade.",
  "Align the north marker on top of the station to true north with a compass, and use the built-in bubble level to make sure the station is completely level before tightening the clamp, so wind direction, rain, UV and light readings are correct.",
  "Download its companion app and claim the station over Bluetooth, confirming the correct regional frequency plan for your location.",
  "Check the app to confirm the first LoRaWAN readings have arrived via a nearby gateway, and check the signal strength from the final mounted position, since the antenna is inside the station."
 ],
 "howParas": [
  "Everyday use: The station runs on its own outdoors, powered by its solar panel in daylight and by its batteries at other times, sampling conditions about every 12 seconds and submitting readings about every 3 minutes, adapting to signal conditions. There is no cable to run and nothing to recharge by hand under normal use. You follow live conditions, history and forecasts in the companion app and network explorer. Battery life is typically 1–2 years with the external battery pack fitted, depending on sunlight and signal conditions; replace all batteries together with fresh 1.5 V non-rechargeable cells when needed, using lithium cells where temperatures often drop below freezing."
 ],
 "specs": [
  {
   "label": "Model",
   "value": "WS2001 standalone station (no separate gateway in the box)"
  },
  {
   "label": "Measurements (8-in-1)",
   "value": "temperature, relative humidity, barometric pressure, wind speed, wind direction (including gust information), rainfall (including accumulated total and maximum rain rate), light, UV index / solar radiation"
  },
  {
   "label": "Temperature",
   "value": "-40 to +80 °C range; accuracy ±0.5 °C (0 to 80 °C), ±0.6 °C (-40 to 0 °C); resolution 0.1 °C"
  },
  {
   "label": "Relative humidity",
   "value": "1% to 99% range; accuracy ±3% (1–90% RH), ±4% (90–99% RH); resolution 1% RH"
  },
  {
   "label": "Rain",
   "value": "0 to 450 mm/h range; accuracy ±7%; resolution 0.254 mm/h"
  },
  {
   "label": "Wind speed",
   "value": "0 to 50 m/s range; accuracy ±0.5 m/s at 5 m/s; resolution 0.1 m/s"
  },
  {
   "label": "Wind direction",
   "value": "0 to 360 degrees; accuracy ±8 degrees; resolution 1 degree"
  },
  {
   "label": "Light",
   "value": "0 to 200,000 lux range; accuracy ±15%; resolution 1 lux"
  },
  {
   "label": "Pressure",
   "value": "540 to 1100 hPa range; accuracy ±5 hPa (700–1100 hPa), ±8 hPa (540–699 hPa); resolution 1 hPa"
  },
  {
   "label": "Radio",
   "value": "LoRaWAN, Class A, over-the-air activation (OTAA); global regional support based on its long-range radio chipset; regional plans include EU868 / US915 / AU915 (wider plan list in the full datasheet, including AS923 variants, CN470, IN865, RU864 and KR920)"
  },
  {
   "label": "Network (this edition)",
   "value": "pre-configured and onboarded on a public LoRaWAN IoT network; network data credits covered for you"
  },
  {
   "label": "Range to gateway",
   "value": "typically 2–10 km depending on terrain, obstructions and gateway height"
  },
  {
   "label": "Sampling / submission",
   "value": "sampling about every 12 seconds; submission about every 3 minutes, adaptive to signal conditions"
  },
  {
   "label": "Configuration",
   "value": "Bluetooth Low Energy"
  },
  {
   "label": "Location and security",
   "value": "built-in GPS; secure element signing of data frames; LoRaWAN payload encryption; cryptographic hardware encryption"
  },
  {
   "label": "Power",
   "value": "integrated solar panel (supports the batteries; it does not recharge disposable cells) with 3 × AA, or 6 × AA with the external battery pack; 1.5 V non-rechargeable batteries only, not included"
  },
  {
   "label": "Battery life",
   "value": "about 1 year on solar support alone; 1–2 years with the external battery pack, depending on conditions"
  },
  {
   "label": "Operating conditions",
   "value": "-20 to +60 °C with alkaline batteries; -40 to +60 °C with lithium batteries; operating humidity 0–99% RH"
  },
  {
   "label": "Weather resistance",
   "value": "IP66 rating listed for this station model in the full datasheet"
  },
  {
   "label": "Firmware",
   "value": "upgradable over Bluetooth"
  },
  {
   "label": "In the box",
   "value": "weather station, external battery pack, metal zip ties"
  },
  {
   "label": "Size and weight (boxed kit)",
   "value": "44 × 17 × 27 cm; 2 kg"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "Coverage is the deciding factor for this edition: confirm that the public LoRaWAN IoT network it is pre-onboarded to actually covers your exact site before buying, and note that a similarly named mobile 5G network is a different network and does not count. Coverage maps show measured or expected coverage, not a guarantee; test from the final position if you can. You will also need 1.5 V non-rechargeable AA batteries (3, or 6 with the external pack), a metal mounting pole (30–40 mm diameter, at least 2 m high) and the tools and parts to secure it; these are not included. Lithium AA cells are recommended where temperatures often drop below 0 °C. Correct north alignment and levelling matter: a tilted or misaligned station gives wrong wind direction, rain and light readings. The station has no Wi-Fi and no display; all viewing is through its companion app or network explorer, which need an internet connection and a phone or computer. Keep the station's identifier sticker (device identifier, key, Bluetooth ID and serial number) safe; you may need the serial number for support."
  }
 ]
},
"weatherxm-h2-open": {
 "what": [
  {
   "type": "p",
   "text": "This is the same H2 hardware as the Network Edition: a solar-powered, 8-in-1 outdoor station (WS2001) sending weather readings over LoRaWAN, with built-in GPS, a secure element that periodically signs its data frames, and Bluetooth configuration. The difference is the network it joins and who controls the data path. The Open Edition runs independently on compatible third-party or private LoRaWAN infrastructure, using credentials you choose and control. You register the station yourself on your chosen network server, decode its compact weather frame with the supplied decoder, and route the decoded data to your own application stack, for example by MQTT, webhooks or your own integrations, with no participation commitment to the network the hardware is built for. Its firmware frame carries more than a basic weather payload, including wind gust, a lifetime rain total and maximum rain rate alongside the standard measurements."
  }
 ],
 "steps": [
  "Check coverage on your chosen LoRaWAN network at the installation site, or plan to install your own compatible gateway with an internet connection in range of the site.",
  "Keep the station's identifier sticker safe: it shows the device identifier (DevEUI), key, Bluetooth ID and serial number. You register the station with its DevEUI; for your own network you choose your own join identifier and application key and write them to the station yourself.",
  "Unpack the station and external battery pack, assemble the station, and insert 6 AA 1.5 V non-rechargeable batteries into the external battery box, observing polarity, then fit the supplied dummy battery and battery door to the bottom of the station. Check that the red LED at the bottom lights when power is connected; it breathes slowly while the station tries to join a network and turns off once joined.",
  "Prepare a computer or Android phone with Bluetooth and a Chromium-based desktop-class browser (Chrome or Edge) for the web-based configuration and firmware tool. Browsers without Web Bluetooth, including Safari, Firefox and iPhone/iPad browsers, cannot run this step.",
  "Connect to the station over Bluetooth with the configuration tool within the first 5 minutes after the station starts (restart it with one short press of the bottom button if the pairing window has closed; do not hold the button for 10 seconds, as that is a factory reset), and let the tool update the station to the latest firmware if offered. Settings, keys and the rain counter are kept through an update.",
  "Register the station manually on your network server as an over-the-air activation (OTAA), Class A device, entering its DevEUI and your chosen join identifier and application key, and selecting the frequency plan for your region and gateway.",
  "In the configuration tool, enter exactly the same frequency region, join identifier and application key, choose an upload interval (5 minutes is the default; use 10 minutes or more if the station is far from the gateway), and apply the settings so the station switches to your network profile and restarts to join.",
  "Add the supplied payload decoder as the uplink formatter on your network server (the same decoder script works across the common server versions), then confirm uplinks are arriving on the data port used for weather frames and that decoded values look correct.",
  "Mount the station outdoors on a firmly secured pole at least 2 m high, aligned to north using the marker on top, levelled with its bubble level, with the solar panel tilt set for your latitude, and check the signal strength of a few uplinks from the final position."
 ],
 "howParas": [
  "Everyday use: Once joined, the station runs unattended outdoors on solar power with battery backup and sends a weather frame at your chosen upload interval to your own network server. You work with the data in your own systems: subscribe to the decoded data feed your server publishes, forward it by MQTT or webhooks, or pull it into home-automation, logging or analysis tools. The station's original network settings are retained on the device when you move it to your own network, so it can potentially be switched back later using the same configuration tool. Public shared networks apply fair-use airtime limits; a short frame every 5 minutes stays within the common daily airtime allowance at the fastest data rate, while slower data rates need longer intervals, so keep the interval at 5 minutes or more on shared public infrastructure."
 ],
 "specs": [
  {
   "label": "Model",
   "value": "WS2001 standalone station (no separate gateway in the box)"
  },
  {
   "label": "Measurements (8-in-1)",
   "value": "temperature, relative humidity, barometric pressure, wind speed, wind direction (including gust information and direction spread on current firmware), rainfall (including lifetime accumulated total and maximum rain rate), light, UV index / solar radiation"
  },
  {
   "label": "Temperature",
   "value": "-40 to +80 °C range; accuracy ±0.5 °C (0 to 80 °C), ±0.6 °C (-40 to 0 °C); resolution 0.1 °C"
  },
  {
   "label": "Relative humidity",
   "value": "1% to 99% range; accuracy ±3% (1–90% RH), ±4% (90–99% RH); resolution 1% RH"
  },
  {
   "label": "Rain",
   "value": "0 to 450 mm/h range; accuracy ±7%; resolution 0.254 mm/h"
  },
  {
   "label": "Wind speed",
   "value": "0 to 50 m/s range; accuracy ±0.5 m/s at 5 m/s; resolution 0.1 m/s"
  },
  {
   "label": "Wind direction",
   "value": "0 to 360 degrees; accuracy ±8 degrees; resolution 1 degree"
  },
  {
   "label": "Light",
   "value": "0 to 200,000 lux range; accuracy ±15%; resolution 1 lux"
  },
  {
   "label": "Pressure",
   "value": "540 to 1100 hPa range; accuracy ±5 hPa (700–1100 hPa), ±8 hPa (540–699 hPa); resolution 1 hPa"
  },
  {
   "label": "Radio",
   "value": "LoRaWAN Specification 1.0.4, regional parameters RP002 1.0.3, Class A, over-the-air activation (OTAA); weather frames sent on FPort 99; frame size 20 bytes on current firmware (24 bytes on older firmware, 16 bytes on some earlier versions)"
  },
  {
   "label": "Regional plans",
   "value": "EU868 / US915 / AU915 and other global plans supported by the hardware (wider plan list in the full datasheet, including AS923 variants, CN470, IN865, RU864 and KR920); sub-band selection applies on US915 / AU915"
  },
  {
   "label": "Configuration",
   "value": "Bluetooth Low Energy, via a web-based flasher / configuration tool requiring Web Bluetooth (Chrome or Edge on a computer or Android phone)"
  },
  {
   "label": "Location and security",
   "value": "built-in GPS; secure element signing of data frames; LoRaWAN payload encryption; cryptographic hardware encryption"
  },
  {
   "label": "Power",
   "value": "integrated solar panel (supports the batteries; it does not recharge disposable cells) with 3 × AA, or 6 × AA with the external battery pack; 1.5 V non-rechargeable batteries only, not included"
  },
  {
   "label": "Battery life",
   "value": "about 1 year on solar support alone; 1–2 years with the external battery pack, depending on conditions"
  },
  {
   "label": "Sampling",
   "value": "about every 12 seconds; submission interval configurable (5 minutes default for own-network use)"
  },
  {
   "label": "Operating conditions",
   "value": "-20 to +60 °C with alkaline batteries; -40 to +60 °C with lithium batteries; operating humidity 0–99% RH"
  },
  {
   "label": "Weather resistance",
   "value": "IP66 rating listed for this station model in the full datasheet"
  },
  {
   "label": "Firmware",
   "value": "upgradable over Bluetooth; decoder script supplied for common network servers"
  },
  {
   "label": "In the box",
   "value": "weather station, external battery pack, metal zip ties"
  },
  {
   "label": "Size and weight (boxed kit)",
   "value": "44 × 17 × 27 cm; 2 kg"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "This edition needs technical setup: you must have an account on a compatible LoRaWAN network server (or run your own), register the device manually, write matching credentials to the station, and install the correct decoder. Do not use a decoder written for a different station model with similar hardware; it will not decode this station's frame correctly. You will also need 1.5 V non-rechargeable AA batteries (3, or 6 with the external pack; lithium recommended below 0 °C), a metal mounting pole (30–40 mm diameter, at least 2 m high) and securing tools; these are not included. There must be a compatible gateway in range of the site, either a public shared gateway or your own. Respect your network's fair-use airtime policy: very frequent uplinks or slow data rates can exceed daily limits, so 5-minute or longer intervals are the practical floor on shared public networks. Initial Bluetooth pairing is only possible in the first 5 minutes after the station starts. North alignment, levelling and panel tilt affect accuracy, and the internal antenna means final-position signal checks are worthwhile before you finish the install."
  }
 ]
},
"dimo-lte-r1": {
 "what": [
  {
   "type": "p",
   "text": "The LTE R1 is a small OBD-II plug-in device that adds always-on cellular connectivity to a car's diagnostic port. Unlike a LoRa-based device, it reports over built-in 4G LTE wherever cellular coverage reaches, so trips are recorded whenever the car is driven, including outside metro LoRa coverage. In its companion app it provides engine diagnostics explained in plain language, including what a check-engine code means, why it is likely happening and what you can do about it, plus real-time driving insights and smart alerts. It tracks every trip with mileage and distance, shows location history and a location heat map of your most visited routes, records historical speed trends and breakdowns, and reports fuel and battery / charging usage statistics. Multiple vehicles can be viewed together in the same app, with an overview of which vehicles need fuel, maintenance or attention. The point is practical: catch small problems while they are still small, and arrive at a repair shop already knowing what the car is reporting. One free month of the premium tier of its companion app is included, then a paid monthly renewal applies."
  }
 ],
 "steps": [
  "Check that your vehicle is compatible: almost any vehicle from 2008 or newer, with newer minimum years for some makers (see Good to know). One maker's vehicles do not need this device and connect through the app alone.",
  "Download its companion mobile app and create or sign in to your account. The app requires Android 9.0 or iOS 16 or above.",
  "Locate the OBD-II port under the steering wheel / dashboard area and plug the LTE R1 in.",
  "Start the car and follow the app's pairing flow to connect the device to your vehicle.",
  "Confirm the device LEDs show power / ignition, network and satellite-positioning status, and allow the first sync and auto-configuration to complete.",
  "Open the app to view your first trip, diagnostics and location data, and confirm trips are being recorded."
 ],
 "howParas": [
  "Everyday use: Leave the device plugged in. It connects over cellular LTE on its own, so trip, mileage, speed and diagnostic data appear in the app without needing your phone nearby in the car. Use the app to check diagnostic explanations when a warning light appears, review trip and mileage history, look at speed trends, and monitor fuel and battery usage over time. If you run more than one vehicle with a device in each, all of them appear in the same app overview. The premium app tier is free for the first month and then renews monthly for a fee; check the current renewal terms in the app before the free month ends if you do not want to continue it."
 ],
 "specs": [
  {
   "label": "Compatibility",
   "value": "almost any vehicle from 2008 or newer (see Good to know for maker-specific minimum years and exclusions)"
  },
  {
   "label": "Connection to vehicle",
   "value": "OBD-II port under the steering wheel; CAN 1 and CAN 2 interfaces, K-line interface and J1708 interface listed in the spec sheet; ignition detection input"
  },
  {
   "label": "Cellular connectivity",
   "value": "4G CAT-M1 with 2G fallback; North America variant bands B2 / B4 / B12; separate EMEA variant bands B1 / B3 / B5 / B8 / B18 / B19 / B20 / B28"
  },
  {
   "label": "SIM",
   "value": "Nano SIM (4FF)"
  },
  {
   "label": "Short-range connectivity",
   "value": "Bluetooth 5.1 (BLE)"
  },
  {
   "label": "Positioning",
   "value": "built-in GNSS receiver (M10 module per spec sheet)"
  },
  {
   "label": "Sensors",
   "value": "3-axis auto-calibrating accelerometer; temperature and humidity ranges listed in the spec sheet for operating conditions"
  },
  {
   "label": "Status LEDs",
   "value": "red for power / ignition, orange for network, green for GNSS, blue for auto-configuration"
  },
  {
   "label": "Power supply",
   "value": "12 / 24 V from the vehicle via the OBD-II port; USB port listed in the spec sheet"
  },
  {
   "label": "Size",
   "value": "75 × 51 × 27 mm"
  },
  {
   "label": "Weight",
   "value": "65 g (± 2 g)"
  },
  {
   "label": "Housing",
   "value": "black plastic"
  },
  {
   "label": "Operating temperature",
   "value": "-20 to +60 °C; storage: -20 to +45 °C; battery charging 0 to +45 °C and discharging -20 to +60 °C per spec sheet"
  },
  {
   "label": "Humidity",
   "value": "5% to 95%, non-condensing"
  },
  {
   "label": "Certifications",
   "value": "North America variant FCC / IC / PTCRB; EMEA variant CE / E-mark"
  },
  {
   "label": "Companion app requirement",
   "value": "Android 9.0 or iOS 16 and above"
  },
  {
   "label": "Included app access",
   "value": "1 free month of the premium app tier, then $8.99/month renewal"
  }
 ],
 "good": [
  {
   "type": "p",
   "text": "No formal in-the-box contents list is published for this device. Compatibility has exceptions: while almost any 2008-or-newer vehicle is supported, some makers require newer model years (examples include certain makers from 2014, 2015, 2017, 2019 or 2020 onward), electric models from two makers are listed as not to be used with this device, and one maker's owners do not need the device at all and connect through the app alone; check your exact model and year before ordering. Buy the correct regional variant (North America or EMEA), as the cellular bands differ. Cellular reporting needs LTE CAT-M1 coverage where you drive; the 2G fallback only helps where that network still operates. The premium app tier renews for a monthly fee after the free first month, so the ongoing cost is the subscription, not just the hardware. The device is powered by the vehicle and is designed to stay plugged into the OBD-II port."
  }
 ]
}
};
