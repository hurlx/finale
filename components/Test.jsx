import { abilities } from "@/constants";
import GlowCard from "./GlowCard";

const Test = () => {
  return (
    <div
			dir="rtl"
			className="min-h-screen px-6 py-16 text-gray-800 relative z-10"
		>
			{/* Hero Section */}
			<section className="text-center mb-20">
				<h1 className="text-5xl font-bold mb-4">من نحن</h1>
				<p className="text-lg text-gray-500 max-w-2xl mx-auto">
					وجهتك المميزة للحصول على حقائب عالية الجودة، مصممة بشغف ومقدمة بعناية.
				</p>
			</section>

			{/* Our Story */}
			<section className="max-w-4xl mx-auto mb-16">
				<h2 className="text-3xl font-semibold mb-4">قصتنا</h2>
				<p className="text-gray-500 leading-relaxed">
					بدأنا برؤية بسيطة — تقديم حقائب أنيقة، متينة وعملية للجميع. من متجر
					صغير، تطورنا إلى علامة تجارية موثوقة معروفة بالجودة والاهتمام
					بالعملاء.
				</p>
			</section>

			{/* Services */}
			<section className="max-w-4xl mx-auto mb-16">
				<h2 className="text-3xl font-semibold mb-4">خدماتنا</h2>
				<ul className="list-disc list-inside text-gray-500 space-y-2">
					<li>شحن سريع وموثوق لجميع أنحاء المنطقة</li>
					<li>دعم عملاء عالي الجودة على مدار الساعة</li>
					<li>سهولة في الاستبدال والإرجاع</li>
					<li>تشكيلات حصرية وطلبات مخصصة</li>
				</ul>
			</section>

			{/* Why Us */}
			<section className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-semibold mb-4">لماذا نحن؟</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-xl bg-white shadow">
						<h3 className="font-bold text-xl mb-2">جودة التصنيع</h3>
						<p>نقوم بفحص وتصنيع كل حقيبة بعناية لضمان الجودة والمتانة.</p>
					</div>
					<div className="p-6 rounded-xl bg-white shadow">
						<h3 className="font-bold text-xl mb-2">العميل أولاً</h3>
						<p>نحن هنا لجعل تجربتك سلسة، مريحة وموثوقة في كل الأوقات.</p>
					</div>
				</div>
			</section>
			<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {abilities.map((abilities, index) => (
            <GlowCard card={abilities} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold">{abilities.title}</p>
                  <p className="text-white-50">{abilities.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
		</div>
  );
};

export default Test;
