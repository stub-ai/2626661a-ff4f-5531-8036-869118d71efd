import Image from 'next/image';
import { Inter } from 'next/font/google';
import BilingualWord from '../components/BilingualWord';

const inter = Inter({ subsets: ['latin'] });

const wordPairs = [
  { word1: 'sky', word2: 'cielo' },
  // Add more word pairs here
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {wordPairs.map((pair, index) => (
        <BilingualWord key={index} word1={pair.word1} word2={pair.word2} />
      ))}
    </main>
  );
}