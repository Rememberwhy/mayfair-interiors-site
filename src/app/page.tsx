// app/page.tsx
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import BrandStatement from '@/components/home/BrandStatement';
import SignatureStatement from '@/components/home/SignatureStatement';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureStatement />
      <BrandStatement />
      
     
    </>
  );
}