import { Award, Check, ChevronDown, Facebook, Globe, Handshake, Instagram, Leaf, Link, Linkedin, Navigation, Scale, Twitter, Wheat, } from "lucide-react";
import JsonLd from "./components/seo/JsonLd";
import Image from "next/image";
import BrandLogo from "@/modules/landing/presentation/components/shared/brand-logo/brand-logo";
import DownloadCatalogButton from "@/components/DownloadCatalogButton";
import { title } from "process";
import Hero from "./Hero";
import AnchorLink from "@/components/ui/AnchorLink";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Grupo AYR | Agroindustry with Purpose",
  "description": "From our fields to your table. Sustainably grown and processed tropical roots, delivered as premium ingredients worldwide.",
  "url": "https://www.example.com/",
  "publisher": {
    "@type": "Organization",
    "name": "Grupo AYR",
    "url": "https://www.example.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.example.com/android-chrome-512x512.png"
    }
  }
};

const flourImages: { [key: string]: string } = {
  "Sweet Potato Flour": "/varieties/harina de camote.png",
  "Purple Sweet Potato Flour": "/varieties/Purple sweet potato.png",
  "Cassava Flour": "/varieties/harina de yuca.png",
  "Taro Flour": "/varieties/Taro flour.png",
  "Green Banana Flour": "/varieties/harina de banano.png",
  "Turmeric Flour": "/varieties/Tumeric flour.png",
  "Yucca Flour": "/varieties/harina de yuca.png", // fallback to cassava/yuca
  "Plantain Flour": "/varieties/Plantain flour.png",
};

export default function HomePage() {
  // Pet Treats array for the grid
  const petTreats = [
    { name: "Sweet Potato Chews", img: "/treats/Sweet-Potato-Chews.webp" }, // Image 1
    { name: "Cassava Biscuits", img: "/treats/Cassava-Biscuits.webp" },     // Image 3
    { name: "Banana Bites", img: "/treats/Banana-Bites.webp" },             // Placeholder
    { name: "Taro Treats", img: "/treats/Organic-Dental-Sticks.webp" },               // Image 2
    { name: "Mixed Root Crisps", img: "/treats/Mixed-Root-Crisps.webp" },   // Image 4
    { name: "Organic Dental Sticks", img: "/treats/Taro-Treats.webp" }, // Image 5
    { name: "Training Treats", img: "/treats/Training-Treats.webp" },       // Placeholder
    { name: "Hypoallergenic Snacks", img: "/treats/Hypoallergenic-Snacks.webp" } // Placeholder
  ];
  // Change this to 'prod' for actual images
  const mode: string = 'prod';
  // Helper for image src
  const getImage = (src: string) =>
    mode === 'placeholder' ? 'https://placehold.co/600x400' : src;
  // Helper for small icons
  const getIcon = (src: string, size = 24) =>
    mode === 'placeholder' ? `https://placehold.co/${size}x${size}` : src;
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <JsonLd data={jsonLdData} />
      {/* Hero Section */}
      
      {/* Hero Section */}
      <Hero
        title="Agroindustry with Purpose"
        highlightText="Purpose"
        description="From our fields to your table. Sustainably grown and processed tropical roots, delivered as premium ingredients worldwide."
        backgroundImage={mode === 'placeholder' ? 'https://placehold.co/1920x1080' : '/hero-background.webp'}
        primaryButtonText="Discover Our Products"
        primaryButtonLink="#products"
        secondaryButtonText="Learn About Our Process"
        secondaryButtonLink="#process"
        showScrollIndicator={true}
      />

      {/* Key Features Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Us Different</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Grupo AYR is a Honduran business group with over 12 years of experience 
              in the agro-industrial sector, focused on innovation and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
               {/* TODO : CHANGE ICON */}
                <Check className="text-green-600" size={28} /> 
              </div>
              <h3 className="text-xl font-bold mb-3">26+ Types of Flour</h3>
              <p className="text-gray-600">
                Single ingredient, non-gluten flour varieties made from tropical roots,
                perfect for diverse culinary applications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Vertically Integrated</h3>
              <p className="text-gray-600">
                From farm to table: complete control over planting, farming, harvesting, 
                and processing ensures premium quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">12+ Pet Treats</h3>
              <p className="text-gray-600">
                Natural and healthy pet treats made from 100% fresh raw materials, 
                with no additives or preservatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Grupo AYR</h2>
              <p className="text-gray-600 mb-6">
                From the heart of the Comayagua Valley in Honduras, we cultivate, process, 
                and export agricultural products that meet international quality standards, 
                driving sustainable economic development.
              </p>
              <p className="text-gray-600 mb-6">
                Our operation focuses on tropical roots such as sweet potato, cassava, and taro, 
                and their transformation for both human and animal consumption. With over 12 years 
                of experience, we've established ourselves as leaders in the agro-industrial sector.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>600+ Hectares Cultivated</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Organic Certification</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Export to Global Markets</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Sustainable Practices</span>
                </div>
              </div>
              
              <AnchorLink href="/#process" className="px-8 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
                Learn More About Us
              </AnchorLink>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64">
                <Image src={getImage('/farming-operations.webp')} alt="Farming operations" className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <Image src={getImage('/processing-facility.webp')} alt="Processing facility" className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <Image src={getImage('/farm-workers-2.webp')} alt="Products" className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <Image src={getImage('/farm-workers.webp')} alt="Farm workers" className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section id="companies" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">Our Companies</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Grupo AYR operates through three specialized companies, each focused on 
            different aspects of the agricultural value chain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* SEMIG */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-green-100 flex flex-col h-full">
            <div className="h-64 bg-gradient-to-br from-green-600 to-green-500 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 w-4/5">
                <Image 
                  src="/semig.webp" 
                  alt="SEMIG" 
                  width={280} 
                  height={120} 
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Sustainable and Organic Agriculture
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              SEMIG is the agricultural foundation of Grupo AYR. It manages over 600 hectares of tropical roots and functional crops such as sweet potato (orange, purple, and white), cassava, taro, green banana, papaya, and turmeric. All operations follow Good Agricultural Practices (GAP) and regenerative farming models.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-green-500 mr-3" size={18} />
                  </div>
                  <span>Certified organic farming</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-green-500 mr-3" size={18} />
                  </div>
                  <span>Good Agricultural Practices (GAP)</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-green-500 mr-3" size={18} />
                  </div>
                  <span>Responsible production</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* INTERBAI */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-orange-100 flex flex-col h-full">
            <div className="h-64 bg-gradient-to-br from-orange-600 to-orange-500 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
              <div className="relative z-10 bg-white rounded-xl p-6 w-4/5 shadow-lg">
                <Image 
                  src="/interbai.webp" 
                  alt="INTERBAI" 
                  width={280} 
                  height={120} 
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">Functional Ingredients for the Food Industry
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Interbai is Grupo AYR's unit dedicated to transforming tropical crops into innovative, healthy, and versatile food ingredients. The focus is on clean-label products, free of gluten and additives, designed for baking, pastry, snacks, and health-oriented formulations
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-orange-500 mr-3" size={18} />
                  </div>
                  <span>Food safety certifications</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-orange-500 mr-3" size={18} />
                  </div>
                  <span>Industrial processing with traceability</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-orange-500 mr-3" size={18} />
                  </div>
                  <span>Global exports</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* MELY FOODS */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-blue-100 flex flex-col h-full">
            <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-500 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 w-4/5">
                <Image 
                  src="/mely-foods.webp" 
                  alt="MELY FOODS" 
                  width={280} 
                  height={120} 
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Natural single ingridient pet treats for pet food and animal nutrition
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Mely Foods is Grupo AYR's division focused on pet food and animal nutrition. It produces functional ingredients and 100% natural dehydrated snacks made from tropical roots and fruits such as sweet potato, green banana, papaya, and pumpkin.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-blue-500 mr-3" size={18} />
                  </div>
                  <span>Functional and natural ingredients</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-blue-500 mr-3" size={18} />
                  </div>
                  <span>Products for premium pet food</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-blue-500 mr-3" size={18} />
                  </div>
                  <span>Sustainable and safe standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Premium Products</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        From single-ingredient flours to specialized pet treats, our products represent
        the highest quality standards in the industry.
      </p>
    </div>
    
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">Flour Varieties</h3>
      {(() => {
        // Must be in this scope for use in grid
        // Update this object if more flours/images are added
        // Images must exist in /public/varieties
        const flourImages: { [key: string]: string } = {
          "Sweet Potato Flour": "/varieties/harina de camote.png",
          "Purple Sweet Potato Flour": "/varieties/Purple sweet potato.png",
          "Cassava Flour": "/varieties/harina de yuca.png",
          "Taro Flour": "/varieties/Taro flour.png",
          "Green Banana Flour": "/varieties/harina de banano.png",
          "Turmeric Flour": "/varieties/Tumeric flour.png",
          "Yucca Flour": "/varieties/harina de yuca.png", // fallback to cassava/yuca
          "Plantain Flour": "/varieties/Plantain flour.png",
        };
        return null;
      })()}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Sweet Potato Flour", icon: "Potato" },
          { name: "Purple Sweet Potato Flour", icon: "Vegetable" },
          { name: "Cassava Flour", icon: "Wheat" },
          { name: "Taro Flour", icon: "CircleDot" },
          { name: "Green Banana Flour", icon: "Apple" },
          { name: "Turmeric Flour", icon: "Flower2" },
          { name: "Yucca Flour", icon: "Sprout" },
          { name: "Plantain Flour", icon: "Banana" }
        ].map((flour, index) => (
          <div key={index} className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition">
            <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mb-3 flex items-center justify-center overflow-hidden">
              <Image
                src={flourImages[flour.name]}
                alt={flour.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
                unoptimized={true}
              />
            </div>
            <p className="font-medium">{flour.name}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold mb-8 text-center">Pet Treats</h3>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {petTreats.map((treat, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition">
            <div className="w-20 h-20 rounded-full bg-blue-200 mx-auto mb-3 flex items-center justify-center overflow-hidden">
              <Image src={treat.img} alt={treat.name} width={80} height={80} className="object-cover w-full h-full" unoptimized={true} />
            </div>
            <p className="font-medium">{treat.name}</p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* Process Section */}
     
      <ProcessTimeline />

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Certifications</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We operate under the highest international quality standards, 
              ensuring food safety, sustainability, and ethical practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
  {
    title: "USDA Organic",
    desc: "US Department of Agriculture organic certification",
    img: "/RT_OrganicFourColorOrganicSeal.jpg"
  },
  {
    title: "EU Organic",
    desc: "European Union organic products certification",
    img: "/EU_Organic_Logo_Colour_rgb.jpg"
  },
  {
    title: "GAP",
    desc: "Good Agricultural Practices certification",
    img: "/toppng.com-certificazioni-global-gap-logo-aquaculture-stewardship-council-logo-1980x1167.png"
  },
  {
    title: "HACCP",
    desc: "Hazard Analysis Critical Control Points",
    img: "/HACCP-Certification-Logo-for-News-webpage.jpg"
  },
  {
    title: "ISO 22000",
    desc: "Food safety management system (in process)",
    img: "/Konsultan-ISO-22000.png"
  },
  {
    title: "Kosher",
    desc: "Compliant with Jewish dietary regulations",
    img: "/kosher-seal-seeklogo.png" // Placeholder, replace with real logo if available
  }
].map((cert, index) => (
  <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center">
    <div className="w-24 h-24 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
      <Image src={cert.img} alt={cert.title} className="w-16 h-16 object-contain" width={64} height={64} unoptimized={true} />
    </div>
    <h3 className="font-bold mb-1">{cert.title}</h3>
    <p className="text-xs text-gray-500">{cert.desc}</p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
<section id="sustainability" className="py-20 bg-green-800 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
      <p className="max-w-2xl mx-auto text-green-100">
        Grupo AYR is committed to environmental stewardship and social responsibility 
        in every aspect of our business model.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Leaf className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Regenerative Agriculture</h3>
        <p className="text-green-100">
          We implement cultivation practices that restore soil health, improve biodiversity, 
          and capture carbon, going beyond sustainability to regeneration.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Globe className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
        <p className="text-green-100">
          Through water conservation, renewable energy, and waste reduction initiatives, 
          we minimize our environmental footprint across all operations.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <Handshake className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Social Responsibility</h3>
        <p className="text-green-100">
          We create dignified rural employment opportunities, provide fair wages, and 
          invest in community development throughout the Comayagua Valley.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Scale className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Fair & Responsible Trade</h3>
        <p className="text-green-100">
          Our business relationships are built on transparency, ethical practices, and long-term 
          partnerships that benefit all stakeholders in the value chain.
        </p>
      </div>
    </div>
    
    {/* <div className="mt-16 text-center">
      <button className="px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-green-100 transition shadow-md">
        Learn About Our Sustainability Initiatives
      </button>
    </div> */}
  </div>
</section>

<section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Discover Premium Tropical Root Products?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-green-100">
            Join our global network of partners and experience the quality, sustainability, 
            and innovation that sets Grupo AYR apart.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AnchorLink href="/contact" className="px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-green-100 transition shadow-lg">
              Request a Sample
            </AnchorLink>
            <DownloadCatalogButton className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition">
              Download Our Catalog
            </DownloadCatalogButton>
          </div>
        </div>
      </section>

   


      </div>
  );
}


interface TimelineStep {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export  function ProcessTimeline() {
  // Helper for images based on environment
  const getImage = (src: string) => src;

  const timelineSteps: TimelineStep[] = [
    {
      number: 1,
      title: "Genetic Assurance",
      description: "At Grupo AYR, we ensure the genetic integrity of our crops through certified laboratory propagation. This guarantees not only vigorous and resilient plants in the field, but also consistently high-quality ingredients in the final product.",
      imageSrc: "/Genetics posicion 1 .webp",
      imageAlt: "Laboratory propagation of crops"
    },
    {
      number: 2,
      title: "Sustainable Soil Preparation",
      description: "Our commitment begins beneath the surface. Through sustainable soil preparation practices, we nurture healthy ecosystems that support robust, high-quality crops, preserving biodiversity and optimizing natural resources.",
      imageSrc: "/Soil preparation posicion 2.webp",
      imageAlt: "Sustainable soil preparation"
    },
    {
      number: 3,
      title: "Planting & Cultivation",
      description: "Using organic and sustainable practices, we carefully select and plant the highest quality seeds and cuttings in our 600+ hectare farm.",
      imageSrc: "/planting-process.webp",
      imageAlt: "Planting process"
    },
    {
      number: 4,
      title: "Growing & Monitoring",
      description: "Our crops are carefully monitored throughout their growth cycle, ensuring optimal development without synthetic pesticides or fertilizers.",
      imageSrc: "/growing-process.webp",
      imageAlt: "Growing process"
    },
    {
      number: 5,
      title: "Harvesting",
      description: "When our crops reach optimal maturity, they are harvested by hand to ensure the highest quality and minimize damage to the delicate roots.",
      imageSrc: "/harvesting-process.webp",
      imageAlt: "Harvesting process"
    },
    {
      number: 6,
      title: "Processing & Manufacturing",
      description: "In our state-of-the-art facilities, crops are washed, processed, and transformed into flours, pet treats, and other products under strict quality controls.",
      imageSrc: "/processing.webp",
      imageAlt: "Processing"
    },
    {
      number: 7,
      title: "Quality Control & Packaging",
      description: "Every product undergoes rigorous testing before being carefully packaged to preserve freshness and ensure it meets our high quality standards.",
      imageSrc: "/quality-control.webp",
      imageAlt: "Quality control"
    },
    {
      number: 8,
      title: "Global Distribution",
      description: "Our products are shipped worldwide, reaching customers who value quality, sustainability, and the unique properties of our tropical root derivatives.",
      imageSrc: "/global-distribution.webp",
      imageAlt: "Global distribution"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Farm-to-Table Process</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            We control every step of the process, ensuring quality, sustainability, and traceability.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {timelineSteps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center">
                {/* Content on left side for even-numbered steps */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2">
                    <div className="rounded-lg overflow-hidden h-48">
                      <Image src={getImage(step.imageSrc)} alt={step.imageAlt} className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
                    </div>
                  </div>
                )}
                
                {/* Timeline circle */}
                <div className="hidden md:flex items-center justify-center z-10 order-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content on right side for even-numbered steps */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <div className="rounded-lg overflow-hidden h-48">
                      <Image src={getImage(step.imageSrc)} alt={step.imageAlt} className="w-full h-full object-cover" height={256} width={256} unoptimized={true} />
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3 md:order-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}