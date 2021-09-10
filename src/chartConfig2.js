export const chartConfig2 = {
    "data": [
        {
            "startTimeMs": 907560,
            "speakingTime": "4:44",
            "value": 284080,
            "speaker": "Speaker A",
            "color": "#faad14",
            "index": 1
        },
        {
            "startTimeMs": 339460,
            "speakingTime": "2:33",
            "value": 153290,
            "speaker": "Speaker A",
            "color": "#faad14",
            "index": 2
        },
        {
            "startTimeMs": 684120,
            "speakingTime": "1:37",
            "value": 97030,
            "speaker": "Speaker A",
            "color": "#faad14",
            "index": 3
        },
        {
            "startTimeMs": 792840,
            "speakingTime": "1:18",
            "value": 78590,
            "speaker": "Speaker A",
            "color": "#faad14",
            "index": 4
        },
        {
            "startTimeMs": 1556840,
            "speakingTime": "0:54",
            "value": 54860,
            "speaker": "Speaker B",
            "color": "#1890ff",
            "index": 5
        }
    ],
    "leftAxesContainer": {
        "reverseOrder": true
    },
    "xAxes": [
        {
            "type": "ValueAxis",
            "renderer": {
                "grid": {
                    "disabled": true
                },
                "maxLabelPosition": -1
            }
        }
    ],
    "yAxes": [
        {
            "type": "CategoryAxis",
            "dataFields": {
                "category": "speakingTime"
            },
            "renderer": {
                "grid": {
                    "disabled": true
                },
                "inversed": true,
                "labels": {
                    "events": {}
                }
            }
        },
        {
            "type": "CategoryAxis",
            "dataFields": {
                "category": "index"
            },
            "renderer": {
                "grid": {
                    "disabled": true
                },
                "inversed": true
            },
            "fontWeight": "bold"
        }
    ],
    "series": [
        {
            "type": "ColumnSeries",
            "dataFields": {
                "valueX": "value",
                "categoryY": "speakingTime"
            },
            "bullets": [
                {
                    "type": "LabelBullet",
                    "label": {
                        "text": "{speaker}",
                        "truncate": false,
                        "hideOversized": false,
                        "horizontalCenter": "left",
                        "dx": 12
                    }
                }
            ],
            "columns": {
                "cursorOverStyle": [
                    {
                        "property": "cursor",
                        "value": "pointer"
                    }
                ],
                "adapter": {},
                "events": {}
            }
        }
    ]
}