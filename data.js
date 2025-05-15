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
        "yaw": -0.07105748945016188,
        "pitch": 0.11578999769085918,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.15975130036983742,
          "pitch": 0.24881775593772382,
          "rotation": 0,
          "target": "1-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gang",
      "name": "Gang",
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
        "yaw": 0.16618513037786364,
        "pitch": 0.2613098596536947,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -2.6638039103640327,
          "pitch": 0.16497291726405372,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": 0.5734433328132766,
          "pitch": 0.30068914903502986,
          "rotation": 0,
          "target": "3-wohnzimmer"
        },
        {
          "yaw": 0.9250152744359514,
          "pitch": 0.29823405070129105,
          "rotation": 0,
          "target": "4-schlafzimmer"
        },
        {
          "yaw": -0.4819260444453697,
          "pitch": 0.2938673654512609,
          "rotation": 0,
          "target": "2-kche"
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
        "yaw": -0.16847501530928177,
        "pitch": 0.19402648261711875,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.3579709210133917,
          "pitch": 0.25397621985885266,
          "rotation": 0,
          "target": "1-gang"
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
        "yaw": 0.31861261398625196,
        "pitch": 0.18307337472743512,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 0.5813824466655113,
          "pitch": 0.27034789603775167,
          "rotation": 0,
          "target": "1-gang"
        },
        {
          "yaw": -0.017593102099832336,
          "pitch": 0.347915564695775,
          "rotation": 0,
          "target": "4-schlafzimmer"
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
        "yaw": 0.8034080662027137,
        "pitch": 0.4099591810135852,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 1.5914988839921804,
          "pitch": 0.3844470699682567,
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
