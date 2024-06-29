// import React from 'react'
import { vitals } from "../../data/vitals";

function VitalsSection() {
    return (
        <div className="flex items-center gap-5">
            {vitals.map(
                ({ id, Icon, vital, latestReading, units, cardColor }) => {
                    return (
                        <div
                            key={id}
                            style={{ backgroundColor: `${ cardColor }` }}
                            className="p-3 rounded-lg w-52"
                        >
                            <div className="bg-white rounded-lg p-2 mb-5 w-fit">
                                <Icon size={20} />
                            </div>
                            <p>{vital}</p>
                            <p>
                                <span className="font-bold">
                                    {latestReading}{" "}
                                </span>
                                {units}
                            </p>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default VitalsSection;
