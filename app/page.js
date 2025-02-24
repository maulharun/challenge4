'use client';
import Image from 'next/image';


const friendsData = [
  {
    className: 'Kelas SI',
    friends: [
      { name: 'Ali', image: '/images/ali.jpg' },
      { name: 'Budi', image: '/images/budi.jpg' },
      { name: 'Citra', image: '/images/citra.jpg' },
      { name: 'Dina', image: '/images/dina.jpg' },
      { name: 'Eko', image: '/images/eko.jpg' },
    ],
  },
  {
    className: 'Kelas KA',
    friends: [
      { name: 'Farhan', image: '/images/farhan.jpg' },
      { name: 'Gita', image: '/images/gita.jpg' },
      { name: 'Hadi', image: '/images/hadi.jpg' },
      { name: 'Indah', image: '/images/indah.jpg' },
      { name: 'Joko', image: '/images/joko.jpg' },
    ],
  },
  {
    className: 'Kelas BD',
    friends: [
      { name: 'Kiki', image: '/images/kiki.jpg' },
      { name: 'Lina', image: '/images/lina.jpg' },
      { name: 'Maman', image: '/images/maman.jpg' },
      { name: 'Nina', image: '/images/nina.jpg' },
      { name: 'Omar', image: '/images/omar.jpg' },
    ],
  },
];

const ProfilePicture = ({ name, image }) => (
  <div className="profile-container">
    <Image
      src={image}
      alt={name}
      width={100}
      height={100}
      className="profile-image"
    />
    <p className="profile-name">{name}</p>
  </div>
);

const ClassCard = ({ className, friends }) => (
  <div className="class-card wider-card max-w-7xl w-full shadow-lg p-8 rounded-xl bg-white">
    <h2 className="class-title text-4xl font-bold text-gray-700 mb-6 text-center">{className}</h2>
    <div className="class-body flex justify-center gap-8 flex-wrap">
      {friends.map((friend, index) => (
        <ProfilePicture key={index} {...friend} />
      ))}
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="home-container flex flex-col items-center gap-8 p-6 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      {friendsData.map((classItem, index) => (
        <ClassCard key={index} {...classItem} />
      ))}
    </div>
  );
}
