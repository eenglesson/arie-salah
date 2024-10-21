import React from 'react';

const services = [
  {
    id: '01',
    title: 'Corporate Law',
    description:
      'From entity formation to mergers and acquisitions, we provide strategic guidance and transactional support to businesses of all sizes.',
  },
  {
    id: '02',
    title: 'Intellectual Property Rights',
    description:
      'Our expertise in intellectual property law ensures your rights are safeguarded through patents, trademarks, and copyrights.',
  },
  {
    id: '03',
    title: 'Employment Law',
    description:
      'We provide guidance on matters such as employee contracts, discrimination claims, and compliance with labor regulations.',
  },
  {
    id: '04',
    title: 'Real Estate Law',
    description:
      "Whether you're buying, selling, or leasing property, we offer comprehensive legal services to ensure smooth transactions and mitigate risks.",
  },
  {
    id: '05',
    title: 'Litigation and Dispute Resolution',
    description:
      'When conflicts arise, our seasoned litigators are here to advocate for your interests in negotiations, mediation, arbitration, and courtroom litigation.',
  },
  {
    id: '06',
    title: 'Mergers and Acquisitions',
    description:
      'Our team assists clients throughout the entire M&A process, from due diligence to negotiation, helping you achieve your strategic.',
  },
];

export default function WeDo() {
  return (
    <>
      <section className='p-8 sm:p-12  bg-secondaryBeige rounded-2xl h-full'>
        <aside className='w-full flex flex-col gap-24 h-full'>
          {/* Top section with title */}
          <div className='flex flex-col xl:flex-row xl:justify-between gap-2'>
            <h2 className='text-bodyDefault font-normal tracking-wide shrink-0'>
              What we do
            </h2>
            <div className='flex flex-col xl:max-w-[800px] gap-2'>
              <h3 className='text-h3 font-normal xl:text-h2'>
                We offer a comprehensive array of legal services tailored to
                meet the diverse needs of our clients.
              </h3>
            </div>
          </div>

          {/* Services grid that stretches to fill space */}
          <div className='w-full flex flex-col sm:flex-row flex-wrap items-stretch gap-6 h-full'>
            {services.map((service) => (
              <div
                key={service.id}
                className='flex flex-col w-full sm:w-1/2 lg:w-1/4 py-6 sm:py-8 gap-2 border-b hover:border-black transition-colors duration-300 border-grey30 flex-grow'
              >
                <div>
                  <h4 className='text-h3'>{service.id}</h4>
                  <h5 className='text-h3'>{service.title}</h5>
                </div>
                <p className='text-bodyMedium'>{service.description}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
