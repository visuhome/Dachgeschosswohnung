var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08595664046391249,
        "pitch": 0.10483688980117734,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.16164797640313822,
          "pitch": 0.28777179943419995,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vorraum",
      "name": "Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.09894441014127509,
        "pitch": 0.37032146938875954,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.8396312130055019,
          "pitch": 0.35447255149961165,
          "rotation": 0,
          "target": "2-kche"
        },
        {
          "yaw": 0.4350527924566059,
          "pitch": 0.3498831301363676,
          "rotation": 0,
          "target": "3-wohnzimmer"
        },
        {
          "yaw": 0.7763956461950201,
          "pitch": 0.27759123491228976,
          "rotation": 0,
          "target": "4-schlafzimmer"
        },
        {
          "yaw": -2.7959300689380306,
          "pitch": 0.21314457408814746,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.4985381470537149,
        "pitch": 0.2378355013178517,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 0.6774493988119499,
          "pitch": 0.24417746579509725,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5793938192442791,
        "pitch": 0.290113379615784,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.031432043305937185,
          "pitch": 0.25943309463461794,
          "rotation": 0,
          "target": "4-schlafzimmer"
        },
        {
          "yaw": 0.5695522297512543,
          "pitch": 0.2421308561947182,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.16159848407218647,
        "pitch": 0.2894749942271364,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 1.562433151257829,
          "pitch": 0.3668730016367885,
          "rotation": 0,
          "target": "3-wohnzimmer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
