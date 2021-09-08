export const typeExpense = [
    {
        value: "MANDATORY",
    },
    {
        value: "FOR FUN"
    },
    {
        value: "OUTFITS"
    },
]

export const getItemExpenseDetail = {
    id: Math.random().toString(12).substring(0),
    amount: 170009,
    device: "HTG",
    type: "MANDATORY",
    date: "14/03/2021",
    activity: "Health care",
    reason: "Headache, nose blood"
};

export const getItemExpense = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    amount: 1500 + (index + 1) * 1500 / 10,
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    type: (index + 1) % 2 === 0 ? "MANDATORY" :(index + 1) % 3 === 0 ?"FOR FUN" : "OUTFIT",
    date: "14/03/2021"
});

export const getItemLoan = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    amount: 8900 + (index + 1) * 1500 / 10,
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    borrower: (index + 1) % 2 === 0 ? "Fenley Menelas" :(index + 1) % 3 === 0 ?"Wendy Joseph" : "Jolie Joseph",
    email: (index + 1) % 2 === 0 ? "fley@outlook.com" :(index + 1) % 3 === 0 ?"wenjoe@gmail.com" : "joliej@hotmail.com",
    phone: (index + 1) % 2 === 0 ? "809-614-3463" :(index + 1) % 3 === 0 ?"829-004-8980" : "849-798-9090",
    date: "14/08/2021",
    expectedDate: "31/08/2021",
    status: false,
    subStatus: true,
    paidAt: ""
});

export const getItemCredit = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    amount: 8900 + (index + 1) * 1500 / 10,
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    lender: (index + 1) % 2 === 0 ? "Fenley Menelas" :(index + 1) % 3 === 0 ?"Wendy Joseph" : "Jolie Joseph",
    email: (index + 1) % 2 === 0 ? "fley@outlook.com" :(index + 1) % 3 === 0 ?"wenjoe@gmail.com" : "joliej@hotmail.com",
    phone: (index + 1) % 2 === 0 ? "809-614-3463" :(index + 1) % 3 === 0 ?"829-004-8980" : "849-798-9090",
    date: "14/08/2021",
    expectedDate: "31/08/2021",
    status: true,
    subStatus: false,
    paidAt: "30/08/2021"
});

const index = 1;

export const getItemCreditDetail = {
    id: 1,
    amount: "8900.00",
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    lender: (index + 1) % 2 === 0 ? "Fenley Menelas" :(index + 1) % 3 === 0 ?"Wendy Joseph" : "Jolie Joseph",
    email: (index + 1) % 2 === 0 ? "fley@outlook.com" :(index + 1) % 3 === 0 ?"wenjoe@gmail.com" : "joliej@hotmail.com",
    phone: (index + 1) % 2 === 0 ? "809-614-3463" :(index + 1) % 3 === 0 ?"829-004-8980" : "849-798-9090",
    date: "14/08/2021",
    expectedDate: "31/08/2021",
    status: true,
    subStatus: false,
    paidAt: "30/08/2021"
};

export const getItemLoanDetail = {
    id: 1,
    amount: "18900.00",
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    borrower: (index + 1) % 2 === 0 ? "Fenley Menelas" :(index + 1) % 3 === 0 ?"Wendy Joseph" : "Jolie Joseph",
    email: (index + 1) % 2 === 0 ? "fley@outlook.com" :(index + 1) % 3 === 0 ?"wenjoe@gmail.com" : "joliej@hotmail.com",
    phone: (index + 1) % 2 === 0 ? "809-614-3463" :(index + 1) % 3 === 0 ?"829-004-8980" : "849-798-9090",
    date: "14/08/2021",
    expectedDate: "17/08/2021",
    status: false,
    subStatus: true,
    paidAt: "21/08/2021"
};

export const getItemNotification = {
    id: Math.random().toString(12).substring(0),
    department: "EX",
    alert: "El jugador de la selección argentina salió del partido luego de una caída sobre su hombro, y hacía gestos de dolor al dirigirse al vestuario. PSG ganó 4-2.",
    date: "21/08/2021"
};

export const typeIncome = [
    {
        value: "GIFT",
    },
    {
        value: "WORK PAID"
    }
]

export const device = [
    {
        value: "USD",
    },
    {
        value: "HTG"
    },
    {
        value: "DOP"
    }
]

export const getItemIncome = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    amount: 1500 + (index + 1) * 1500 / 10,
    device: (index + 1) % 3 === 0 ? "DOP" : (index + 1) % 2 === 0 ? "USD" : "HTG",
    type: (index + 1) % 2 !== 0 ? "WORK PAID" : "GIFT",
    date: "14/03/2021"
});

export const getItemIncomeDetail = {
    id: Math.random().toString(12).substring(0),
    amount: 170009,
    device: "HTG",
    type: "GIFT",
    date: "14/03/2021",
    source: "Fenley J. Viky Menelas"
};

export const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [2000, 4500, 12000, 8000, 9900, 4300],
            color: (opacity = 1) => `rgba(255,99,71, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ]
};

export const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#FFF",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: true, 
};

export const sex = [
    {
        value: "Male",
    },
    {
        value: "Female"
    },
    {
        value: "None"
    }
]

export const boxes = [
    {
        id: "Incomes",
        data: [
            {
                amount: "4,244.00",
                device: "USD"
            },
            {
                amount: "79,000.00",
                device: "DOP"
            },
            {
                amount: "345,789.00",
                device: "HTG"
            }
        ]
    },
    {
        id: "Expenses",
        data: [
            {
                amount: "3,244.00",
                device: "USD"
            },
            {
                amount: "80,000.00",
                device: "DOP"
            },
            {
                amount: "200,789.00",
                device: "HTG"
            }
        ]
    },
    {
        id: "Credits",
        data: [
            {
                amount: "4,244.00",
                device: "USD"
            },
            {
                amount: "170,000.00",
                device: "DOP"
            },
            {
                amount: "209,789.00",
                device: "HTG"
            }
        ]
    },
    {
        id: "Loans",
        data: [
            {
                amount: "9,244.00",
                device: "USD"
            },
            {
                amount: "100,000.00",
                device: "DOP"
            },
            {
                amount: "270,789.00",
                device: "HTG"
            }
        ]
    }
]