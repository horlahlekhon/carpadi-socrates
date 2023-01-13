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
