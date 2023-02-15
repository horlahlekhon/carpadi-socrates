export const Cars = [
    {id: 1, model: 'Mercedes-Benz E350', description: 'Bariga, Abuja Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 2, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 3, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 4, model: 'Toyota Corolla GQ', description: 'Bariga, Abuja Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 5, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 6, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 7, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 8, model: 'Toyota Corolla GF', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 9, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 10, model: 'Mercedes-Benz E350', description: 'Bariga, Jos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 11, model: 'Toyota Corolla GQ', description: 'Bariga, Jos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 12, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 13, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 14, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 15, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 16, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'new', date: 'Jun 13 | 2022' },
    {id: 17, model: 'Toyota Corolla GQ', description: 'Bariga, Jos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 18, model: 'Toyota Corolla GQ', description: 'Bariga, Jos Nigeria', image: '/images/sample/car-1.png', type: 'old', date: 'Jun 13 | 2022' },
    {id: 19, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
    {id: 20, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
    {id: 21, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
    {id: 22, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
    {id: 23, model: 'Toyota Corolla GQ', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
    {id: 24, model: 'Mercedes-Benz E350', description: 'Bariga, Lagos Nigeria', image: '/images/sample/car-1.png', type: 'inspected', date: 'Jun 13 | 2022' },
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
        name: 'Hood',
        rating: null
    },
    {
        id:2,
        name: 'Front',
        rating: null
    },
    {
        id:3,
        name: 'Front Bumber',
        rating: null
    },
    {
        id:4,
        name: 'Fenders',
        rating: null
    },
    {
        id:5,
        name: 'Doors',
        rating: null
    },
    {
        id:6,
        name: 'Roof',
        rating: null
    },
    {
        id:7,
        name: 'Rear',
        rating: null
    },
    {
        id:8,
        name: 'Rear Bumber',
        rating: null
    },
    {
        id:9,
        name: 'Trunk',
        rating: null
    },
    {
        id:10,
        name: 'Trim',
        rating: null
    },
    {
        id:11,
        name: 'Fuel Door',
        rating: null
    },
    {
        id:12,
        name: 'Paint Condition',
        rating: null
    },
]


export const glass = [
    {
        id:1,
        name: 'Windshield',
        rating: null
    },
    {
        id:2,
        name: 'Windows',
        rating: null
    },
    {
        id:3,
        name: 'Mirrors',
        rating: null
    },
    {
        id:4,
        name: 'Rear windows',
        rating: null
    },
]


export const tyres_and_wheels = [
    {
        id:1,
        name: 'Condition of Tyers',
        rating: null
    },
    {
        id:2,
        name: 'Condition of Wheels',
        rating: null
    },
    {
        id:3,
        name: 'Spare Tyer',
        rating: null
    },
    {
        id:4,
        name: 'Rear windows',
        rating: null
    },
]

export const under_body = [
    {
        id:1,
        name: 'Frame',
        rating: null
    },
    {
        id:2,
        name: 'Exhaust System',
        rating: null
    },
    {
        id:3,
        name: 'Transmission',
        rating: null
    },
    {
        id:4,
        name: 'Drive Axle',
        rating: null
    },
    {
        id:5,
        name: 'Suspension',
        rating: null
    },
    {
        id:6,
        name: 'Brake System',
        rating: null
    },
]

export const under_hood = [
    {
        id:1,
        name: 'Engine Compartment',
        rating: null
    },
    {
        id:2,
        name: 'Battery',
        rating: null
    },
    {
        id:3,
        name: 'Oil',
        rating: null
    },
    {
        id:4,
        name: 'Fluids',
        rating: null
    },
    {
        id:5,
        name: 'Belts',
        rating: null
    },
    {
        id:6,
        name: 'Hoses',
        rating: null
    },
    {
        id:7,
        name: 'Any Non-stock Modifications',
        rating: null
    },
    {
        id:8,
        name: 'Drive Axle',
        rating: null
    },
    {
        id:9,
        name: 'Suspension',
        rating: null
    },
    {
        id:10,
        name: 'Brake System',
        rating: null
    },
]



export const interior = [
    {
        id:1,
        name: 'Seats',
        rating: null
    },
    {
        id:2,
        name: 'Headlinder',
        rating: null
    },
    {
        id:3,
        name: 'Carpet',
        rating: null
    },
    {
        id:4,
        name: 'Door Panels',
        rating: null
    },
    {
        id:5,
        name: 'Glove Box',
        rating: null
    },
    {
        id:6,
        name: 'Vanity mirror',
        rating: null
    },
    {
        id:7,
        name: 'Interior Trim',
        rating: null
    },
    {
        id:8,
        name: 'Dashboard',
        rating: null
    },
    {
        id:9,
        name: 'Dashboard Gauges',
        rating: null
    },
    {
        id:10,
        name: 'Air Conditioning',
        rating: null
    },
    {
        id:11,
        name: 'Heater',
        rating: null
    },
    {
        id:12,
        name: 'Defroster',
        rating: null
    },

]



export const electrical_system = [
    {
        id:1,
        name: 'Power locks',
        rating: null
    },
    {
        id:2,
        name: 'Power seats',
        rating: null
    },
    {
        id:3,
        name: 'Power steering',
        rating: null
    },
    {
        id:4,
        name: 'Power Windows',
        rating: null
    },
    {
        id:5,
        name: 'Power Mirrors',
        rating: null
    },
    {
        id:6,
        name: 'Audio System',
        rating: null
    },
    {
        id:7,
        name: 'Onboard Computer',
        rating: null
    },
    {
        id:8,
        name: 'Headlights',
        rating: null
    },
    {
        id:9,
        name: 'Tail lights',
        rating: null
    },
    {
        id:10,
        name: 'Signal lights',
        rating: null
    },
    {
        id:11,
        name: 'Breaklights',
        rating: null
    },
    {
        id:12,
        name: 'Parking lights',
        rating: null
    },

]



export const road_test_findings = [
    {
        id:1,
        name: 'Starting',
        rating: null
    },
    {
        id:2,
        name: 'Idling',
        rating: null
    },
    {
        id:3,
        name: 'Engine Performance',
        rating: null
    },
    {
        id:4,
        name: 'Acceleration',
        rating: null
    },
    {
        id:5,
        name: 'Transmission shift Quality',
        rating: null
    },
    {
        id:6,
        name: 'Steering',
        rating: null
    },
    {
        id:7,
        name: 'Suspension Performance',
        rating: null
    },


]

