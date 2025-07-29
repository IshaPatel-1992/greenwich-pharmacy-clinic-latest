import React from 'react';

const team = [
  { name: 'Dr. Amy Patel', role: 'Pharmacist', img: '/assets/team1.jpg' },
  { name: 'John Lee', role: 'Pharmacy Assistant', img: '/assets/team2.jpg' },
  { name: 'Sarah Wong', role: 'Customer Care', img: '/assets/team3.jpg' },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold text-teal-700 mb-10">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="w-60">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover rounded-xl mb-4 shadow"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
      <a href="/about" className="text-teal-600 font-medium mt-6 inline-block hover:underline">
        Meet the full team →
      </a>
    </section>
  );
}
