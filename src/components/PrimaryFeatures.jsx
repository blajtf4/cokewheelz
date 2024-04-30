import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from '@/components/Container';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function PrimaryFeatures() {
  const cars = [
    [
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 15000,
        mileage: 50000,
        fuel: "Benzin",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 2,
        brand: "BMW",
        model: "320",
        year: 2019,
        price: 25000,
        mileage: 30000,
        fuel: "Dizel",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 3,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 18000,
        mileage: 10000,
        fuel: "Hibrid",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 15000,
        mileage: 50000,
        fuel: "Benzin",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 2,
        brand: "BMW",
        model: "320",
        year: 2019,
        price: 25000,
        mileage: 30000,
        fuel: "Dizel",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 3,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 18000,
        mileage: 10000,
        fuel: "Hibrid",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 15000,
        mileage: 50000,
        fuel: "Benzin",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 2,
        brand: "BMW",
        model: "320",
        year: 2019,
        price: 25000,
        mileage: 30000,
        fuel: "Dizel",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 3,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 18000,
        mileage: 10000,
        fuel: "Hibrid",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 15000,
        mileage: 50000,
        fuel: "Benzin",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-318d-sportline-lci-top-stanje-slika-216247468.jpg"
      },
      {
        id: 2,
        brand: "BMW",
        model: "320",
        year: 2019,
        price: 25000,
        mileage: 30000,
        fuel: "Dizel",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-318d-sportline-lci-top-stanje-slika-216247455.jpg"
      },
      {
        id: 3,
        brand: "Honda",
        model: "Civic",
        year: 2021,
        price: 18000,
        mileage: 10000,
        fuel: "Hibrid",
        image: "https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-318d-m-paket-slika-217443983.jpg"
      },
      // Dodajte dodatne automobile kako je potrebno
    ],
    // Dodajte ostale setove automobila
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            IZDVOJENO IZ PONUDE
          </h2>
          <br /><br /><br />
        </div>

        <div className=" bg-lime-300 rounded-lg p-4">
          <Tab.Group>
            <Tab.Panels>
              {cars.map((group, idx) => (
                <Tab.Panel key={idx} className="  p-4">
                  <Slider {...settings}>
                    {group.map(car => (
                      <div key={car.id} className=" p-4">
                        <a href={car.image} target="_blank" rel="noopener noreferrer">
                          <img src={car.image} alt={`${car.brand} ${car.model}`} width={500} height={300} />
                        </a>
                        <h3>{car.brand} {car.model}</h3>
                        <p>Cijena: {car.price}</p>
                        <button className="mt-4 bg-blue-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
                          Više informacija
                        </button>
                      </div>
                    ))}
                  </Slider>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Container>
    </section>
  )
}
