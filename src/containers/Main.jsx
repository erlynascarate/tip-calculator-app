import React from 'react';
import '../styles/Main.scss';
import Bill from '../components/Bill';
import Info from '../components/Info';
import NumberOfPeople from '../components/NumberOfPeople';
import SelectTip from '../components/SelectTip';

const Main = () => {
    return (
        <main>
            <form className="form">
                <section className="form-container">
                    <Bill />
                    <SelectTip />
                    <NumberOfPeople />
                </section>
                <Info />
            </form>
        </main>
    );
};

export default Main;
