import GradualGallery from "@/components/GradualGallery";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Item from "@/components/Item";
import Test from "@/components/Test";

export default function Home() {
  return (

    <div className="overflow-hidden select-none">
      <Header />
      <Info />
      <Item />
      <GradualGallery />
      <Test />
    </div>
  );
}
