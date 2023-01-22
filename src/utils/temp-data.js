export const Cars = [
    {id: 1, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 2, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 3, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 4, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 5, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 6, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 7, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 8, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 9, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 10, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 11, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 12, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 13, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 14, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 15, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 16, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 17, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 18, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
];

export const features = [
    {name: 'Panoramic roof', url: '/cars/features/feature-1.png'},
    {name: 'Leather seats', url: '/cars/features/feature-2.png'},
    {name: 'Digital device', url: '/cars/features/feature-3.png'},
    {name: 'Seat heater', url: '/cars/features/feature-4.png'},
    {name: 'Panoramic roof', url: '/cars/features/feature-5.png'},
    {name: 'Durable seats', url: '/cars/features/feature-6.png'},
];

export const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
];

export const years = () => {
    let year = new Date().getFullYear();
    let lowerBoundary = year - 25;
    let array = [];
    for(let x = lowerBoundary; x <= year; x++) {
        array.push(x);
    }
    return array;
};

export const makes = [
   "Acura", "Honda", "Hyundai", "Land Rover", "Lexus", "Mazda", "Mercedes Benz", "Peugeot", "Toyota"
];

export const notifications = [
    {
        id: 1,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
    {
        id: 3,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
    {
        id: 4,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
    {
        id: 5,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
    {
        id: 6,
        date: "June \n 12",
        car: "Peugeot 2009",
        location: "Lorem ipsum dolor sit amet"
    },
]

export const exterior = [
    {
        id:1,
        name: 'Hood'
    },
    {
        id:2,
        name: 'Front'
    },
    {
        id:3,
        name: 'Front Bumber'
    },
    {
        id:4,
        name: 'Fenders'
    },
    {
        id:5,
        name: 'Doors'
    },
    {
        id:6,
        name: 'Roof'
    },
    {
        id:7,
        name: 'Rear'
    },
    {
        id:8,
        name: 'Rear Bumber'
    },
    {
        id:9,
        name: 'Trunk'
    },
    {
        id:10,
        name: 'Trim'
    },
    {
        id:11,
        name: 'Fuel Door'
    },
    {
        id:12,
        name: 'Paint Condition'
    },
]


export const glass = [
    {
        id:1,
        name: 'Windshield'
    },
    {
        id:2,
        name: 'Windows'
    },
    {
        id:3,
        name: 'Mirrors'
    },
    {
        id:4,
        name: 'Rear windows'
    },
]


export const tyres_and_wheels = [
    {
        id:1,
        name: 'Condition of Tyers'
    },
    {
        id:2,
        name: 'Condition of Wheels'
    },
    {
        id:3,
        name: 'Spare Tyer'
    },
    {
        id:4,
        name: 'Rear windows'
    },
]

export const under_body = [
    {
        id:1,
        name: 'Frame'
    },
    {
        id:2,
        name: 'Exhaust System'
    },
    {
        id:3,
        name: 'Transmission'
    },
    {
        id:4,
        name: 'Drive Axle'
    },
    {
        id:5,
        name: 'Suspension'
    },
    {
        id:6,
        name: 'Brake System'
    },
]

export const under_hood_one = [
    {
        id:1,
        name: 'Engine Compartment'
    },
    {
        id:2,
        name: 'Battery'
    },
    {
        id:3,
        name: 'Oil'
    },
    {
        id:4,
        name: 'Fluids'
    },
]

export const under_hood_two = [
    {
        id:1,
        name: 'Belts'
    },
    {
        id:2,
        name: 'Hoses'
    },
    {
        id:3,
        name: 'Any Non-stock Modifications'
    },
    {
        id:4,
        name: 'Drive Axle'
    },
    {
        id:5,
        name: 'Suspension'
    },
    {
        id:6,
        name: 'Brake System'
    },
]

export const interior_one = [
    {
        id:1,
        name: 'Seats'
    },
    {
        id:2,
        name: 'Headlinder'
    },
    {
        id:3,
        name: 'Carpet'
    },
    {
        id:4,
        name: 'Door Panels'
    },
    {
        id:5,
        name: 'Glove Box'
    },

]

export const interior_two = [
    {
        id:1,
        name: 'Vanity mirror'
    },
    {
        id:2,
        name: 'Interior Trim'
    },
    {
        id:3,
        name: 'Dashboard'
    },
    {
        id:4,
        name: 'Dashboard Gauges'
    },
    {
        id:5,
        name: 'Air Conditioning'
    },
    {
        id:6,
        name: 'Heater'
    },
    {
        id:7,
        name: 'Defroster'
    },

]



export const electrical_system_one = [
    {
        id:1,
        name: 'Power locks'
    },
    {
        id:2,
        name: 'Power seats'
    },
    {
        id:3,
        name: 'Power steering'
    },
    {
        id:4,
        name: 'Power Windows'
    },

]

export const electrical_system_two = [
    {
        id:1,
        name: 'Power Mirrors'
    },
    {
        id:2,
        name: 'Audio System'
    },
    {
        id:3,
        name: 'Onboard Computer'
    },
    {
        id:4,
        name: 'Headlights'
    },
    {
        id:5,
        name: 'Tail lights'
    },
    {
        id:6,
        name: 'Signal lights'
    },
    {
        id:7,
        name: 'Breaklights'
    },
    {
        id:8,
        name: 'Parking lights'
    },

]

export const road_test_findings_one = [
    {
        id:1,
        name: 'Starting'
    },
    {
        id:2,
        name: 'Idling'
    },
    {
        id:3,
        name: 'Engine Performance'
    },


]


export const road_test_findings_two = [
    {
        id:1,
        name: 'Acceleration'
    },
    {
        id:2,
        name: 'Transmission shift Quality'
    },
    {
        id:3,
        name: 'Steering'
    },
    {
        id:4,
        name: 'Suspension Performance'
    },


]