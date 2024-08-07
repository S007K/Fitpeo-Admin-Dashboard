import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
    return (
        <div className='p-2 pr-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100px', height: '100px' }}>
                <CircularProgressbarWithChildren 
                    value={70}
                    text="70%"
                    styles={buildStyles({
                        pathColor: '#7293ff', // Blue color for the bar
                        textColor: '#ffffff', // White color for the text inside the bar
                        trailColor: '#2d3266', // Light gray color for the background trail
                        textSize: '20px', // Adjust text size if needed
                        strokeWidth: '5px',
                    })}
                >
                    <div style={{ fontSize: 10, marginTop: 40, color:'#d4d4d4' }}>Goal </div>
                    <div style={{ fontSize: 10, marginTop: -5, color:'#d4d4d4' }}>Completed </div>
                </CircularProgressbarWithChildren>
            </div>
            <p style={{ marginTop: '10px', fontSize: '9px', color: '#d4d4d4' }}>
                *The values here has been rounded off
            </p>
        </div>
    )
}

export default ProgressBar;



<CircularProgressbarWithChildren value={70}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                      <strong>70%</strong>
                  </div>
                  <div style={{ fontSize: 12, marginTop: -5 }}>Goal Completed</div>
              </CircularProgressbarWithChildren>