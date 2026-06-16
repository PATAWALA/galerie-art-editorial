import Hero from "@/components/sections/hero";
import GalleryPreview from "@/components/sections/GalleryPreview";
import EditorialPreview from "@/components/sections/EditorialPreview";
import AboutPreview from "@/components/sections/AboutPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GalleryPreview />
      <EditorialPreview />
      <AboutPreview />
    </>
  );
}