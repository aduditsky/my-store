const INITIAL_STATE = {
    sections: [
        {
            title: 'Футболки',
            imageUrl: 'https://sun4-10.userapi.com/IVKEGRYVJDRxTcaIXSrLBFug_ZqvzCo9uR8PNQ/9bAStcfb22I.jpg',
            id: 1,
            linkUrl: 'shop/футболки'
        },
        {
            title: 'Свитшоты',
            imageUrl: 'https://sun4-16.userapi.com/-NgBN_PtoWeGIKmQgBhxxy3jCPsmMm2mr9_xcw/YVzSW91nDEI.jpg',
            id: 2,
            linkUrl: 'shop/свитшоты'
        },
        {
            title: 'Худи',
            imageUrl: 'https://sun4-10.userapi.com/Nrip3gsMZIqgdnDWon7KmnGVMjoEvPQXp5mN3g/WdaS0ALZr_s.jpg',
            id: 3,
            linkUrl: 'shop/худи'
        },
        {
            title: 'Сумки',
            imageUrl: 'https://sun4-16.userapi.com/21Kvua7IwOE0OtcSjxNkFaREKfLYKsKp3_V44g/Hcq7Kb991BI.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/сумки'
        },
        {
            title: 'Аксессуары',
            imageUrl: 'https://sun4-16.userapi.com/-NgBN_PtoWeGIKmQgBhxxy3jCPsmMm2mr9_xcw/YVzSW91nDEI.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/аксесуары'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;