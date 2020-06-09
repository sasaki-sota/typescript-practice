export {};

type Pitchar1 = {
    thorwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const Daimiajin: Pitchar1 = {
    thorwingSpeed: 154
};

const IchiaiHIromitu: Batter1 = {
    battingAverage: 0.367
};

// type TwowayPlayer = {
//     thorwingSpeed: number;
//     battingAverage: number;
// };

// この一行の型で上と同じものになる
type TwowayPlayer = Pitchar1 & Batter1;

const OtaniShohei: TwowayPlayer = {
    thorwingSpeed: 165,
    battingAverage: 0.546
};