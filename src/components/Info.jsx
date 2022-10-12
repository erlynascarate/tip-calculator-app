import React from 'react';
import '../styles/Info.scss';
import InfoBox from './InfoBox';

const infoBoxData = [
    { title: 'Tip Amount', tip: '0.00' },
    { title: 'Total', tip: '0.00' },
];

const Info = () => {
    return (
        <section className="info">
            {infoBoxData.map((box) => (
                <InfoBox key={box.title} {...box} />
            ))}
            <input className="info__reset" type="reset" value="Reset" />
        </section>
    );
};

export default Info;
