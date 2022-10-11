import React from 'react';
import { VictoryAxis, VictoryBar,VictoryChart} from 'victory';

const Statistics = () => {
    const sampleData = [
        { language: 1, use: 15 },
        { language: 2, use: 5},
        { language: 3, use: 72 },
        { language: 4, use: 15 }
    ];
    return (
        <div className='container mx-auto mt-5 py-3'>
            <div className='border-bottom'>
                <h3 className='text-center pb-3'>The language used in this project is.</h3>
            </div>
            <VictoryChart
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["HTML", "CSS", "React", "Bootstrap"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 10}%`)}
                />
                <VictoryBar
                    data={sampleData}
                    x="language"
                    y="use"
                />
            </VictoryChart>
        </div>
    )
};

export default Statistics;