import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link href="/about" className="text-4xl font-bold text-blue-600">
        Hello World!
      </Link>
    </div>
  );
}
