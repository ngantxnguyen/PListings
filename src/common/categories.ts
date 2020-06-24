export enum Categories {
  Vehicles = 'Vehicles',
  PropertyRentals = 'Property Rentals',
  HomeAndAppliances = 'Home & Appliances',
  Tools = 'Tools',
  Garden = 'Garden',
  Entertainment = 'Entertainment',
  SportsAndOutdoors = 'Sports & Outdoors',
  Electronics = 'Electronics',
  BabyAndKids = 'Baby & Kids',
  JobsAndServices = 'Jobs & Services',
  FashionAndAccessories = 'Fashion & Accessories',
  Other = 'Other',
}

export const Subcategories = {
  [Categories.Vehicles]: {
    Car: 'Car',
    Truck: 'Truck',
    Motorcycle: 'Motorcycle',
    Powersport: 'Powersport',
    ['RV & Camper']: 'RV & Camper',
    Boat: 'Boat',
    Trailer: 'Trailer',
    Other: 'Other',
  },
  [Categories.PropertyRentals]: {
    Apartment: 'Apartment',
    Condo: 'Condo',
    House: 'House',
    Townhouse: 'Townhouse',
    Room: 'Room',
  },
  [Categories.HomeAndAppliances]: {
    Furniture: 'Furniture',
    Appliances: 'Appliances',
    ['Cookware & Tableware']: 'Cookware & Tableware',
    ['Bedding & Rugs']: 'Bedding & Rugs',
    ['Home Improvement']: 'Home Improvement',
    Decor: 'Decor',
    Other: 'Other',
  },
  [Categories.Tools]: {
    ['Power Tools']: 'Power Tools',
    ['Hand Tools']: 'Hand Tools',
    Other: 'Other',
  },
  [Categories.Garden]: {
    Tools: 'Tools',
    Furniture: 'Furniture',
    Other: 'Other',
  },
  [Categories.Entertainment]: {
    ['Video Games']: 'Video Games',
    ['Board Games']: 'Board Games',
    Movies: 'Movies',
    Music: 'Music',
    Books: 'Books',
    ['Musical Instruments']: 'Musical Instruments',
    Other: 'Other',
  },
  [Categories.SportsAndOutdoors]: {
    Bicycle: 'Bicycle',
    ['Sport Gear']: 'Sport Gear',
    ['Exercise Equipment']: 'Exercise Equipment',
    ['Camping Gear']: 'Camping Gear',
    Other: 'Other',
  },
  [Categories.Electronics]: {
    Phones: 'Phones',
    TVs: 'TVs',
    Computers: 'Computers',
    Cameras: 'Cameras',
    ['Speakers & Headphones']: 'Speakers & Headphones',
    Other: 'Other',
  },
  [Categories.BabyAndKids]: {
    Toys: 'Toys',
    Clothing: 'Clothing',
    Essentials: 'Essentials',
    Other: 'Other',
  },
  [Categories.JobsAndServices]: {
    Jobs: 'Jobs',
    Services: 'Services',
  },
  [Categories.FashionAndAccessories]: {
    ['Health & Beauty']: 'Health & Beauty',
    ['Women Clothing']: 'Women Clothing',
    ['Women Footwear']: 'Women Footwear',
    ['Men Clothing']: 'Men Clothing',
    ['Men Footwear']: 'Men Footwear',
    Watches: 'Watches',
    ['Bags & Luggages']: 'Bags & Luggages',
    Other: 'Other',
  },
  [Categories.Other]: {
    ['Real Estates']: 'Real Estates',
    ['Office Supplies']: 'Office Supplies',
    ['Pet Supplies']: 'Pet Supplies',
    Other: 'Other',
  },
};
