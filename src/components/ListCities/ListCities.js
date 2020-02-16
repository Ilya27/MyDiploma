import React, { Component } from 'react'
import classes from './ListCities.module.css'
import List from './List';

class ListCities extends Component {
    state = {
        cities1: [
            { id: 1, content: 'Aleksandriia' },
            { id: 2, content: 'Aleshki' },
            { id: 3, content: 'Balakleya' },
            { id: 4, content: 'Balta' },
            { id: 5, content: 'Bar' },
            { id: 6, content: 'Baranivka' },
            { id: 7, content: 'Barvenkovo' },
            { id: 8, content: 'Baturyn' },
            { id: 9, content: 'Bakhmach' },
            { id: 10, content: 'Bashtanka' },
            { id: 11, content: 'Belaya Tserkov' }
        ], 
        
        cities2: [
            { id: 12, content: 'Bilhorod-Dnistrovskyi' },
            { id: 13, content: 'Valky' },
            { id: 14, content: 'Varash' },
            { id: 15, content: 'Vasylkiv' },
            { id: 16, content: 'Vatutine' },
            { id: 17, content: 'Velyki Mosty' },
            { id: 18, content: 'Verkhnodniprovsk' },
            { id: 19, content: 'Vyzhnytsia' },
            { id: 20, content: 'Vylkove' },
            { id: 21, content: 'Vynohradiv' },
            { id: 22, content: 'Voznesensk' }
        ],

        cities3: [
            { id: 23, content: 'Hadiach' },
            { id: 24, content: 'Haivoron' },
            { id: 25, content: 'Halych' },
            { id: 26, content: 'Henichesk' },
            { id: 27, content: 'Hlobyne' },
            { id: 28, content: 'Hlyniany' },
            { id: 29, content: 'Horodyshche' },
            { id: 30, content: 'Derazhnia' },
            { id: 31, content: 'Dniprorudne' },
            { id: 32, content: 'Dobromyl' },
            { id: 33, content: 'Dolyna' }

        ],
        
        cities4: [
            { id: 34, content: 'Zhashkiv' },
            { id: 35, content: 'Zhovti Vody' },
            { id: 36, content: 'Zhydachiv' },
            { id: 37, content: 'Zhmerynka' },
            { id: 38, content: 'Zavodske' },
            { id: 39, content: 'Zalishchyky' },
            { id: 40, content: 'Zastavna' },
            { id: 41, content: 'Izmail' },
            { id: 42, content: 'Izium' },
            { id: 43, content: 'Iziaslav' },
            { id: 44, content: 'Illintsi' }
        ],

        cities5: [
            { id: 45, content: 'Kaharlyk' },
            { id: 46, content: 'Kamianets-Podilsky' },
            { id: 47, content: 'Kamianka-Buzka' },
            { id: 48, content: 'Kamianka-Dniprovska' },
            { id: 49, content: 'Ladyzhyn' },
            { id: 50, content: 'Lanivtsi' },
            { id: 51, content: 'Lozovaya' },
            { id: 52, content: 'Lubny' },
            { id: 53, content: 'Malyn' },
            { id: 54, content: 'Merefa' },
            { id: 55, content: 'Myrhorod' }
        ],

        cities6: [
            { id: 56, content: 'Myronovka' },
            { id: 57, content: 'Novhorod-Siverskyi' },
            { id: 58, content: 'Novomyrhorod' },
            { id: 59, content: 'Obukhiv' },
            { id: 60, content: 'Pavlohrad' },
            { id: 61, content: 'Pervomaisk' },
            { id: 62, content: 'Pereshchepyne' },
            { id: 63, content: 'Pidvolochysk' },
            { id: 64, content: 'Podolsk' },
            { id: 65, content: 'Radekhiv' },
            { id: 66, content: 'Rovenky' }
        ]
    }
    render() {
        return (
            <div className={classes.centerBlockListCities}>
                <h3 className={classes.headerListCities}>Thousands of pet sitters in cities and neighborhoods, including:</h3>
                <div className={classes.ListCities}>
                    <List list={this.state.cities1} />
                    <List list={this.state.cities2} />
                    <List list={this.state.cities3} />
                    <List list={this.state.cities4} />
                    <List list={this.state.cities5} />
                    <List list={this.state.cities6} />
                </div>
            </div>
        );
    }
}


export default ListCities