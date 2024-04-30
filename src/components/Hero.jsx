import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import Counter from '@/components/counter'

const stats = [


  // { Counter({300, 'Vozila prodano'}) },
  // { id: 2, name: 'Vozila Dodano svaki dan', value: '100+' },
  // { id: 3, name: 'Dnevnih Posjeta', value: '46,000' },
  
    { id: 1, name: 'Vozila prodano', value: 300 },
    { id: 2, name: 'Vozila Dodano svaki dan', value: 100 },
    { id: 3, name: 'Dnevnih Posjeta', value: 46000 }
  
]



export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center  lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-poppins text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">  
        Najbolji auti <br /> po <br />{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-lime-400/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">najboljim</span>
        </span>{' '}
cijenama...      </h1>

      <div className="mt-40 flex justify-center space-x-6">
      <Button href="/ponuda" className="px-10 py-4 text-lg">POGLEDAJ OGLASE</Button>
  <Button href="/ponuda" className="px-10 py-4 text-lg">PREDAJ OGLAS</Button>
      </div>
      <div>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            // <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            //   <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
            //   <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            //     {stat.value}
            //   </dd>
            // </div>
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <Counter number={stat.value} title={stat.name} /> {/* Koristimo Counter komponentu */}
          </div>
          ))}
        </dl>
      </div>
    </div>
      </div>
      
    </Container>
  )
}


