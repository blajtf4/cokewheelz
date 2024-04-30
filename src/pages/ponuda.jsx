import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import Head from 'next/head';
import backgroundImage from '@/images/background-faqs.jpg';

const carsData = [
  { id: 1, brand: "Hyundai", model: "i30", year: 2019, price: 130100, mileage: 40000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "/details" },
  { id: 2, brand: "Mazda", model: "CX-5", year: 2022, price: 250300, mileage: 5000, fuel: "Dizel", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/mazda-cx5" },
  { id: 16, brand: "Chevrolet", model: "Cruze", year: 2017, price: 11000, mileage: 60000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/chevrolet-cruze" },
  { id: 41, brand: "Hyundai", model: "i30", year: 2019, price: 13000, mileage: 40000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "/details" },
  { id: 51, brand: "Mazda", model: "CX-5", year: 2022, price: 25000, mileage: 5000, fuel: "Dizel", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/mazda-cx5" },
  { id: 116, brand: "Chevrolet", model: "Cruze", year: 2017, price: 11000, mileage: 60000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/chevrolet-cruze" },
  { id: 41, brand: "maserati", model: "i30", year: 2019, price: 13000, mileage: 40000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "/details" },
  { id: 51, brand: "Mazda", model: "CX-5", year: 2022, price: 25000, mileage: 5000, fuel: "Dizel", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/mazda-cx5" },
  { id: 61, brand: "Chevrolet", model: "Cruze", year: 2017, price: 11000, mileage: 60000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/chevrolet-cruze" },
  { id: 411, brand: "Hyundai", model: "i30", year: 2019, price: 13000, mileage: 40000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "/details" },
  { id: 511, brand: "Mazda", model: "CX-5", year: 2022, price: 25000, mileage: 5000, fuel: "Dizel", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/mazda-cx5" },
  { id: 6222, brand: "Chevrolet", model: "Cruze", year: 2017, price: 11000, mileage: 60000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/chevrolet-cruze" },
  { id: 41, brand: "Hyundai", model: "i30", year: 2019, price: 13000, mileage: 40000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "/details" },
  { id: 52, brand: "Mazda", model: "CX-5", year: 2022, price: 25000, mileage: 5000, fuel: "Dizel", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/mazda-cx5" },
  { id: 61, brand: "Chevrolet", model: "Cruze", year: 2017, price: 11000, mileage: 60000, fuel: "Benzin", image: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-incentives-specials-offers-avon-29.png", infoUrl: "https://moreinfo.com/chevrolet-cruze" },














];

export default function CarAds() {
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [filter, setFilter] = useState({ brand: '', year: '', priceMin: '', priceMax: '', fuel: '' });
  const [sortBy, setSortBy] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    let filtered = carsData.filter(car =>
      (filter.brand ? car.brand.toLowerCase().includes(filter.brand.toLowerCase()) : true) &&
      (filter.year ? car.year === Number(filter.year) : true) &&
      (filter.priceMin ? car.price >= Number(filter.priceMin) : true) &&
      (filter.priceMax ? car.price <= Number(filter.priceMax) : true) &&
      (filter.fuel ? car.fuel === filter.fuel : true)
    );

    if (sortBy) {
      filtered = filtered.sort((a, b) => (sortBy === 'price' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]));
    }

    setFilteredCars(filtered);
  }, [filter, sortBy]);

  return (
    <>
      <div className='bg-slate-900'>
        <Head>
          <title>AUTO-OGLASI</title>
        </Head>
        <Header />
        <div className="container mx-auto px-4">
          <br />
          <br />
          <br />
          <div className="flex flex-wrap gap-6 mb-4">
            <input type="text" placeholder="Marka" name="brand" value={filter.brand} onChange={handleFilterChange} className="input input-bordered w-full rounded-full max-w-xs" />
            <input type="number" placeholder="Godina" name="year" value={filter.year} onChange={handleFilterChange} className="input input-bordered w-full rounded-full max-w-xs" />
            <input type="number" placeholder="Min cijena" name="priceMin" value={filter.priceMin} onChange={handleFilterChange} className="input input-bordered w-full rounded-full max-w-xs" />
            <input type="number" placeholder="Max cijena" name="priceMax" value={filter.priceMax} onChange={handleFilterChange} className="input input-bordered w-full rounded-full max-w-xs" />
            <select name="fuel" value={filter.fuel} onChange={handleFilterChange} className="select select-bordered rounded-full w-full max-w-xs">
              <option value="">Vrsta goriva</option>
              <option value="Benzin">Benzin</option>
              <option value="Dizel">Dizel</option>
              <option value="Hibrid">Hibrid</option>
              <option value="Električni">Električni</option>
            </select>
            <select name="sort" value={sortBy} onChange={handleSortChange} className="select select-bordered rounded-full w-full max-w-xs">
              <option value="">Sortiraj po</option>
              <option value="price">Cijeni</option>
              <option value="year">Godini</option>
              <option value="mileage">Kilometraži</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="card bg-slate-800 bg-opacity-60 rounded-lg text-slate-50 bold shadow-2xl p-4">
                <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-60 rounded-lg object-cover"/>
                <p><strong>Marka:</strong> {car.brand}</p>
                <p><strong>Model:</strong> {car.model}</p>
                <p><strong>Godina:</strong> {car.year}</p>
                <p><strong>Cijena:</strong> ${car.price}</p>
                <p><strong>Kilometraža:</strong> {car.mileage} km</p>
                <p><strong>Gorivo:</strong> {car.fuel}</p>
                <button className="btn btn-primary w-full" onClick={() => window.open(car.infoUrl, '_blank')}>Više informacija</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}