export const getChartConfig = (data, onCurrentTimeChange, showSearch) => ({
    type: 'XYChart',
    data,
    leftAxesContainer: {
        reverseOrder: true,
    },
    xAxes: [
        {
            type: 'ValueAxis',
            renderer: {
                grid: {
                    disabled: true,
                },
                maxLabelPosition: -1,
            },
        },
    ],
    yAxes: [
        {
            type: 'CategoryAxis',
            dataFields: {
                category: 'speakingTime',
            },
            renderer: {
                grid: {
                    disabled: true,
                },
                inversed: true,
                labels: {
                    events: {
                        hit(e) {
                            const { startTimeMs } =
                                e.target.dataItem.dataContext;

                            onCurrentTimeChange(startTimeMs);
                        },
                    },
                },
            },
        },
        {
            type: 'CategoryAxis',
            dataFields: {
                category: 'index',
            },
            renderer: {
                grid: {
                    disabled: true,
                },
                inversed: true,
            },
            fontWeight: 'bold',
        },
    ],
    series: [
        {
            type: 'ColumnSeries',
            dataFields: {
                valueX: 'value',
                categoryY: 'speakingTime',
            },
            bullets: [
                {
                    type: 'LabelBullet',
                    label: {
                        text: '{speaker}',
                        truncate: false,
                        hideOversized: false,
                        horizontalCenter: 'left',
                        dx: 12,
                    },
                },
            ],
        },
    ],
});
