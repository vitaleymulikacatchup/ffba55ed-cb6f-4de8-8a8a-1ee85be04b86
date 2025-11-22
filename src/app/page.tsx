"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Prestige Auto"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791703139-hrpxbgqh.jpg"
          logoAlt="Prestige Auto Logo"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
          className="py-4 px-6"
          buttonClassName="px-6 py-3"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Discover Your Dream Car"
          description="Explore our curated collection of premium luxury vehicles. Find the perfect car that matches your style and aspirations."
          tag="Premium Automotive"
          tagIcon={Sparkles}
          imagePosition="right"
          stackedVariant="card"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791704494-ifxc5oa9.jpg",
              imageAlt: "Luxury sports car"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791705341-d4ezkq3r.jpg",
              imageAlt: "Premium sedan"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791706251-z29wz567.jpg",
              imageAlt: "High-end vehicle"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791707240-m6kn0mla.png",
              imageAlt: "Luxury showroom"
            }
          ]}
          buttons={[
            {
              text: "Browse Inventory",
              href: "featured-cars"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg md:text-xl opacity-90"
          containerClassName="space-y-6"
        />
      </div>

      <div id="featured-cars" data-section="featured-cars">
        <ProductCardOne
          title="Featured Inventory"
          description="Browse our latest collection of premium vehicles in stock today"
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "2024 Mercedes-Benz S-Class",
              price: "$95,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791707744-rydizim7.jpg",
              imageAlt: "Mercedes-Benz S-Class luxury sedan"
            },
            {
              id: "2",
              name: "2023 Ferrari F8 Tributo",
              price: "$285,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791708765-u01zgtwy.jpg",
              imageAlt: "Ferrari F8 Tributo sports car"
            },
            {
              id: "3",
              name: "2024 BMW X7 M Sport",
              price: "$120,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791709310-iz23eyr0.jpg",
              imageAlt: "BMW X7 M Sport luxury SUV"
            },
            {
              id: "4",
              name: "2023 Porsche 911 Turbo",
              price: "$175,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791710118-ckzd3yv6.jpg",
              imageAlt: "Porsche 911 Turbo convertible"
            }
          ]}
          cardNameClassName="text-sm opacity-75 mt-2"
          cardPriceClassName="text-2xl font-bold mt-1"
        />
      </div>

      <div id="categories" data-section="categories">
        <FeatureCardFour
          title="Browse by Category"
          description="Find the perfect vehicle for your lifestyle and needs"
          tag="Vehicle Types"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Luxury Sedans",
              description: "Experience sophisticated comfort with our collection of premium sedans featuring cutting-edge technology and elegant design",
              icon: Zap
            },
            {
              title: "Sports Cars",
              description: "Feel the thrill of high-performance vehicles engineered for speed, precision, and exhilarating driving experiences",
              icon: Zap
            },
            {
              title: "SUVs & Crossovers",
              description: "Spacious and versatile vehicles perfect for families and adventurers seeking comfort and capability",
              icon: Zap
            },
            {
              title: "Convertibles",
              description: "Open-air freedom combined with luxury and style for those who love the perfect drive",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Why Choose Prestige Auto"
          description="Leading premium automotive dealer with proven track record of excellence"
          tag="Achievements"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Happy Customers"
            },
            {
              id: "2",
              value: "15+",
              description: "Years Experience"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction"
            },
            {
              id: "4",
              value: "50+",
              description: "Brands Available"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Clients Say"
          description="Real experiences from satisfied customers who found their dream cars with us"
          tag="Client Reviews"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "CEO",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791712431-0ibqtizl.jpg",
              imageAlt: "Michael Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Design Studios Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791713200-ibi4bvz5.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Business Owner",
              company: "Premium Logistics",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791714172-4v9qpgdf.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Executive",
              company: "Global Finance Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791715123-c1zhfsqp.png",
              imageAlt: "Emily Rodriguez"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch with Our Specialists"
          description="Schedule a test drive, ask about specific vehicles, or inquire about financing options. Our expert team is ready to help you find the perfect car."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791711132-af4ngqnt.jpg"
          imageAlt="Prestige Auto showroom"
          mediaPosition="right"
          buttonText="Send Inquiry"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "vehicle",
              type: "text",
              placeholder: "Vehicle of Interest",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your automotive needs and preferences...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763791703139-hrpxbgqh.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2024 Prestige Auto. All rights reserved."
          columns={[
            {
              title: "Browse",
              items: [
                {
                  label: "Featured Inventory",
                  href: "featured-cars"
                },
                {
                  label: "Car Categories",
                  href: "categories"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "Our Story",
                  href: "#"
                },
                {
                  label: "Financing",
                  href: "#"
                },
                {
                  label: "Trade-In",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "#"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Contact Support",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}