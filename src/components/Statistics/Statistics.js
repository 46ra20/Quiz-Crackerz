import React from 'react';
import { VictoryAxis, VictoryBar,VictoryChart} from 'victory';

const Statistics = () => {
    const sampleData = [
        { language: 1, use: 11 },
        { language: 2, use: 8 },
        { language: 3, use: 8 },
        { language: 4, use: 9 }
    ];
    return (
        <div className='container mx-auto mt-5 py-3'>
            <div className='border-bottom'>
                <h3 className='text-center pb-3'>Total Question about this Language.</h3>
            </div>
            <VictoryChart
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Git", "CSS", "React", "JavaScript"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 1}`)}
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