import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { ReachAndClients } from "@/components/sections/ReachAndClients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HomeContact } from "@/components/sections/HomeContact";
import {
  SealClose,
  SealIntro,
  SealPractice,
} from "@/components/home/seal/SealSections";
import type { HomeData } from "@/components/home/HomeData";

// Quiet and image-led: a full-bleed hero, one sentence, the practice areas
// as a plain index, three posts, and a single call to action.
export default function SealHome({ articles, clients, testimonials }: HomeData) {
  return (
    <div data-design="seal">
      <Hero />
      <SealIntro />
      <SealPractice />
      <ReachAndClients />
      <Testimonials testimonials={testimonials} />
      <WhyChooseUs />
      <BlogTeaser articles={articles} />
      <ClientLogos clients={[...clients, {_id:"demo0",name:"Northfield Capital",demoLogo:"/demo-logos/1.svg"},{_id:"demo1",name:"Kilima Holdings",demoLogo:"/demo-logos/2.svg"},{_id:"demo2",name:"Baobab Foundation",demoLogo:"/demo-logos/3.svg"},{_id:"demo3",name:"Meridian Partners",demoLogo:"/demo-logos/4.svg"},{_id:"demo4",name:"Tembo Energy",demoLogo:"/demo-logos/5.svg"},{_id:"demo5",name:"Rift Valley Co-op",demoLogo:"/demo-logos/6.svg"},{_id:"demo6",name:"Sable Group",demoLogo:"/demo-logos/7.svg"}]} /> {/* TEMP PREVIEW: fake clients */}
      <HomeContact testimonials={testimonials} />
      <SealClose />
    </div>
  );
}
