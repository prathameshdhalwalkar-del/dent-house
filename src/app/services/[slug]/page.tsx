'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft, HiCalendar, HiShieldCheck, HiStar, HiChip, HiEmojiHappy, HiCheck } from 'react-icons/hi'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'
import BookAppointmentBtn from '@/components/BookAppointmentBtn'

const services = [
  { slug: 'root-canal-treatment', title: 'Root Canal Treatment', desc: 'Save your natural teeth with our painless and precise root canal procedures. Advanced techniques ensure minimal discomfort and long-lasting results.', color: 'from-accent-500 to-yellow-400' },
  { slug: 'smile-makeover', title: 'Smile Makeover', desc: 'A customized combination of cosmetic dental treatments designed to enhance the overall appearance of your smile.', color: 'from-accent-500 to-primary-500' },
  { slug: 'teeth-whitening', title: 'Teeth Whitening', desc: 'Brighten your teeth with safe, professional whitening treatments that remove stains and restore your natural sparkle in just one session.', color: 'from-blue-400 to-cyan-300' },
  { slug: 'dental-crowns-bridges', title: 'Dental Crowns & Bridges', desc: 'Restore strength and beauty to damaged or missing teeth with custom-made crowns and bridges designed for a perfect fit.', color: 'from-primary-600 to-primary-400' },
  { slug: 'dental-veneers', title: 'Dental Veneers', desc: 'Cover imperfections like chips, gaps, and discoloration with thin, durable veneers that create a flawless smile.', color: 'from-primary-500 to-secondary-500' },
  { slug: 'dental-implants', title: 'Dental Implants', desc: 'Permanent solutions for missing teeth using strong, natural-looking implants that restore function and aesthetics.', color: 'from-primary-500 to-secondary-500' },
  { slug: 'braces-aligners', title: 'Braces & Aligners', desc: 'A confident smile begins with perfectly aligned teeth. We specialize in advanced orthodontic treatments for children, teens, and adults.', color: 'from-purple-500 to-pink-500' },
  { slug: 'childrens-dentistry', title: "Children's Dentistry", desc: 'Gentle, friendly dental care for kids to make dental visits positive and stress-free while protecting their growing smiles.', color: 'from-pink-500 to-rose-400' },
  { slug: 'preventive-dentistry', title: 'Preventive Dentistry', desc: 'Protect your oral health with routine checkups, cleanings, and preventive care to stop dental problems before they start.', color: 'from-green-400 to-emerald-400' },
  { slug: 'dental-fillings', title: 'Dental Fillings', desc: 'Repair cavities and restore tooth structure with durable, tooth-colored fillings that blend seamlessly with your smile.', color: 'from-teal-400 to-emerald-400' },
  { slug: 'dental-tourism', title: 'Dental Tourism', desc: 'World-class dental care for international patients at affordable costs, with assistance in travel, stay, and local sightseeing.', color: 'from-blue-500 to-indigo-500' },
  { slug: 'tooth-extraction', title: 'Tooth Extraction', desc: 'Safe and smooth removal of decayed, damaged, or impacted teeth using gentle techniques to ensure faster healing.', color: 'from-red-400 to-orange-400' },
  { slug: 'dentures', title: 'Dentures', desc: 'A reliable and affordable way to replace missing teeth. Custom-made to fit comfortably, they improve chewing, speaking, and facial appearance.', color: 'from-purple-400 to-indigo-400' },
  { slug: 'gum-treatment', title: 'Gum Treatment', desc: 'Specialized care for gum infections and periodontal disease to maintain healthy gums and prevent tooth loss.', color: 'from-teal-400 to-cyan-400' },
]

const serviceDetails: Record<string, { intro: string; sections: { title?: string; items?: string[]; text?: string }[] }> = {
  'root-canal-treatment': {
    intro: 'Save your natural teeth with our painless and precise root canal procedures. Advanced techniques ensure minimal discomfort and long-lasting results.',
    sections: [
      {
        title: 'Root Canal Treatment in Matunga East',
        text: 'At Khushboo Dent House Clinic, Dr Khushboo is a Rootcanal specialist done from Bangalore AAE (Advanced Academy of Endodontics), helping patients save their natural teeth while restoring their oral health. Led by Dr. Khushboo Doshi Gandhi, a trusted root canal specialist near me in Matunga, our clinic uses the latest endodontic techniques and modern dental technology to ensure precision, comfort, and long-lasting results. Save your tooth, relieve pain, and restore your smile. A root canal is a safe and effective way to treat infection inside a tooth without removing it. At Denthouse Dental Clinic, we use advanced technology and gentle techniques to make the procedure painless, precise, and comfortable — so you can get back to chewing, smiling, and living pain-free.',
      },
      {
        title: 'Why You Might Need a Root Canal',
        text: 'A root canal is recommended when the inner pulp of a tooth becomes infected or inflamed. Common causes include:',
        items: [
          'Deep cavities or tooth decay',
          'Cracked or chipped teeth',
          'Injury to the tooth',
          'Repeated dental procedures on the same tooth',
        ],
      },
      {
        text: 'If left untreated, an infected tooth can lead to severe pain, swelling, and even tooth loss. Early diagnosis and timely treatment prevent complications.',
      },
      {
        title: 'What We Treat',
        items: [
          'Severe toothache or sensitivity to hot/cold',
          'Pain while chewing or biting',
          'Swelling or tenderness in the gums',
          'Darkening or discoloration of a tooth',
          'Infections or abscesses near the tooth root',
        ],
      },
      {
        title: 'Root Canal at Denthouse Dental Clinic, Matunga East',
        text: 'Led by Dr. Khushboo Doshi Gandhi, our clinic combines the latest endodontic techniques with modern dental technology to ensure:',
        items: [
          'Painless treatment with local anesthesia',
          'Precision and accuracy for long-lasting results',
          'Comfortable experience from start to finish',
          'Preservation of your natural tooth whenever possible',
        ],
      },
      {
        text: 'With expert care, you can expect fast recovery, minimal discomfort, and a healthier, stronger smile.',
      },
    ],
  },
  'smile-makeover': {
    intro: 'A smile makeover is a customized combination of cosmetic dental treatments designed to enhance the overall appearance of your smile. Depending on your needs, it may include teeth whitening, veneers, bonding, orthodontics, or gum reshaping. At Denthouse, we focus on creating a smile that suits your face, personality, and lifestyle — natural, confident, and uniquely you.',
    sections: [
      {
        title: 'Conditions Treated',
        items: [
          'Chipped or Broken Teeth — Restoring damaged teeth for a smooth, natural look.',
          'Tooth Discoloration — Brightening and evening out tooth shades for a uniform smile.',
          'Misaligned or Uneven Teeth — Correcting alignment issues through orthodontic or cosmetic solutions.',
          'Gaps Between Teeth — Closing spaces for a balanced and harmonious appearance.',
          'Worn or Short Teeth — Reshaping teeth to improve symmetry and proportion.',
        ],
      },
      {
        title: 'Smile Makeover Process',
        items: [
          'Comprehensive Smile Assessment — We evaluate your teeth, gums, and facial features along with your expectations.',
          'Digital Smile Design — We create a digital preview of your new smile so you can see the results before treatment begins.',
          'Custom-Tailored Treatment Plan — A unique combination of procedures designed specifically for your needs.',
          'Expert Execution — Each procedure is performed by our experienced cosmetic dentistry team.',
          'Final Reveal & Follow-Up — We unveil your transformed smile and ensure everything is perfect.',
        ],
      },
      {
        text: 'A smile makeover is an investment in yourself. Whether you\'re looking to enhance your appearance for personal satisfaction or professional reasons, our dental clinic in Matunga East offers world-class cosmetic dentistry tailored to you.',
      },
    ],
  },
  'teeth-whitening': {
    intro: 'Brighten your teeth with safe, professional whitening treatments that remove stains and restore your natural sparkle in just one session.',
    sections: [
      {
        title: 'Teeth Whitening – Restore Your Brightest Smile',
        text: '"Over time, teeth can become stained from coffee, tea, wine, smoking, or simply aging. Professional teeth whitening at Denthouse gently removes these stains and brightens your smile by several shades in just one session. Safe, effective, and long-lasting — it\'s the quickest way to restore a radiant, confident smile."',
      },
      {
        title: 'Conditions Treated',
        items: [
          'Surface Stains — Yellowing or dullness caused by coffee, tea, tobacco, or certain foods.',
          'Aging Discoloration — Teeth darkening naturally over time due to enamel wear.',
          'Medication-Related Stains — Intrinsic stains resulting from medications or medical conditions.',
          'Uneven Tooth Color — Addressing inconsistencies in shade across teeth for a balanced appearance.',
        ],
      },
      {
        title: 'Approach To Care',
        text: 'Our teeth whitening treatments are customized to your specific needs and tooth sensitivity level. We begin with a detailed oral examination to determine the cause of discoloration and recommend the most suitable in-office or take-home whitening option.',
      },
      {
        title: 'Why Choose Us?',
        items: [
          'Professional Expertise — Skilled dental professionals ensuring safe and long-lasting whitening results.',
          'Personalized Treatment — Tailored whitening solutions based on your goals and enamel health.',
          'Comfort & Safety — Use of clinically tested whitening systems for minimal sensitivity and optimal comfort.',
          'Visible Results — Noticeable improvement in tooth shade, often after just one session.',
        ],
      },
    ],
  },
  'dental-crowns-bridges': {
    intro: 'Restore strength and beauty to damaged or missing teeth with custom-made crowns and bridges designed for a perfect fit.',
    sections: [
      {
        title: 'Dental Crowns & Bridges',
        text: '"Crowns and bridges are custom-made restorations that repair and replace damaged or missing teeth. A dental crown strengthens a weakened tooth, while a bridge fills the gap left by one or more missing teeth. At Denthouse, we use high-quality, natural-looking materials to restore function, protect your teeth, and give you a seamless, confident smile."',
      },
      {
        text: 'Zirconia and DMLS are the most preferred crowns by Dr. Khushboo.',
      },
      {
        title: 'Why Choose Our Dental Crowns & Bridges?',
        items: [
          'Custom-designed for a perfect fit and natural appearance',
          'Made from durable, high-quality materials for long-lasting results',
          'Ideal for restoring broken, worn, or severely decayed teeth',
          'Bridges effectively fill gaps caused by missing teeth',
          'Improve chewing function and prevent shifting of surrounding teeth',
          'Crafted with precision by a root canal specialist near me Matunga for post-treatment protection',
          'Enhance smile aesthetics through expert cosmetic dentistry in Matunga East',
        ],
      },
      {
        title: 'Bring Back Your Confident Smile!',
        text: 'Whether it\'s a single crown or a full bridge, trust the best dentist in Matunga to restore your oral health and give you a smile you\'ll love to show off.',
      },
    ],
  },
  'dental-veneers': {
    intro: 'Transform your smile with premium dental veneers at our dental clinic in Matunga East. Designed to conceal imperfections such as chips, gaps, uneven teeth, and stubborn discoloration, veneers are thin, custom-made shells crafted from high-quality porcelain or composite resin. Our cosmetic dentist in Matunga ensures each veneer is shaped and shaded to match your natural teeth for a seamless, radiant look.',
    sections: [
      {
        title: 'Why Choose Our Veneers Treatment?',
        items: [
          'Flawless Smile Makeover — Instantly enhance the symmetry, color, and overall appearance of your teeth.',
          'Long-Lasting Results — Made from durable, stain-resistant materials that can last for years with proper care.',
          'Minimally Invasive Procedure — Requires minimal tooth preparation for maximum preservation of your natural enamel.',
          'Customized for You — Each veneer is tailored to your facial structure, ensuring a natural, beautiful smile.',
          'Boosted Confidence — Enjoy the freedom to smile wide without worrying about imperfections.',
        ],
      },
      {
        text: 'Whether you want a subtle enhancement or a complete smile transformation, our cosmetic dentistry in Matunga East offers personalized veneer solutions to suit your needs. From consultation to placement, we ensure a comfortable, pain-free process handled by our experienced dental specialist in Matunga. Get your dream smile with custom veneers — Book a consultation with our cosmetic dentist in Matunga today!',
      },
    ],
  },
  'preventive-dentistry': {
    intro: 'Preventive dentistry focuses on keeping your teeth and gums healthy before problems arise. Regular dental check-ups, cleanings, fluoride treatments, and sealants help protect against cavities, gum disease, and other issues. At Denthouse, we believe prevention is the key to lifelong oral health — saving you time, discomfort, and costly treatments in the future.',
    sections: [
      {
        title: 'Conditions Treated',
        items: [
          'Tooth Decay Prevention — Identifying and managing early signs of cavities through cleanings and fluoride treatments.',
          'Gum Disease Prevention — Maintaining healthy gums with scaling, polishing, and personalized oral hygiene guidance.',
          'Plaque & Tartar Control — Removing buildup that can lead to tooth decay or gum issues.',
          'Tooth Sensitivity — Preventing enamel erosion and managing sensitivity with protective treatments.',
          "Children's Oral Health — Educating young patients and applying sealants to prevent cavities from an early age.",
        ],
      },
      {
        title: 'Approach To Care',
        text: 'Preventive dentistry at Denthouse is centered on early detection and proactive care. We combine professional cleanings, detailed dental exams, and patient education to maintain your oral health. Our team emphasizes personalized guidance so you can take the right steps at home to keep your smile strong and healthy.',
      },
      {
        title: 'Why Choose Us?',
        items: [
          'Comprehensive Prevention — Regular exams, cleanings, and fluoride treatments for long-term protection.',
          'Patient Education — Guidance on daily care routines for better oral hygiene and prevention.',
          'Gentle & Thorough Care — Comfortable, pain-free treatments tailored to your needs.',
          'Focus on Early Detection — Identifying problems before they require complex treatment.',
        ],
      },
    ],
  },
  'dental-fillings': {
    intro: 'When a tooth is damaged by decay, wear, or fracture, fillings and restorations help bring back its strength and natural look. At Denthouse, we use advanced, tooth-colored materials that blend seamlessly with your smile, ensuring durability and aesthetics. Our minimally invasive approach restores function while keeping as much of your natural tooth as possible.',
    sections: [
      {
        title: 'Conditions Treated',
        items: [
          'Tooth Decay — Filling cavities caused by bacterial infection to prevent further damage.',
          'Chipped or Cracked Teeth — Restoring minor fractures and chips for improved function and aesthetics.',
          'Worn Teeth — Repairing teeth eroded by grinding or acid wear to restore shape and comfort.',
          'Old or Damaged Fillings — Replacing outdated or failing fillings with modern, durable materials.',
        ],
      },
      {
        title: 'Approach To Care',
        text: 'At Denthouse, we focus on preserving your natural tooth structure through minimally invasive techniques. Our dentists carefully remove decay and restore your tooth using high-quality composite resin materials that match your natural enamel. The result is a strong, comfortable, and aesthetically pleasing restoration that supports long-term oral health.',
      },
      {
        title: 'Why Choose Us?',
        items: [
          'Natural Aesthetics — Tooth-colored materials that perfectly blend with your smile.',
          'Durable Restorations — High-quality composites designed for strength and longevity.',
          'Minimally Invasive — Conservative techniques that preserve maximum healthy tooth structure.',
          'Comfort-Focused Care — Gentle and precise treatment for a smooth, pain-free experience.',
        ],
      },
    ],
  },
  'dental-tourism': {
    intro: 'Discover world-class dental care while experiencing the charm of Mumbai. Denthouse Dental Clinic offers international and outstation patients high-quality treatments at affordable costs, along with assistance in travel, stay, and local sightseeing. From smile makeovers and implants to routine care, we combine expert dentistry with personalized hospitality — making your dental journey comfortable, memorable, and truly worth the trip.',
    sections: [
      {
        title: 'How It Works',
        items: [
          'Send us your dental query / X-rays online',
          'Get a personalized treatment + travel plan',
          'Book your trip with our guidance',
          'Receive high-quality care at Denthouse',
          'Return home with a confident smile',
        ],
      },
      {
        title: 'Travel Assistance',
        items: [
          'Help with airport pickup & drop',
          'Hotel & stay recommendations nearby',
          'Sightseeing guidance — Gateway of India, Marine Drive, Elephanta Caves, Bollywood tours, etc.',
        ],
      },
      {
        title: 'Our Dental Tourism Packages',
        items: [
          'Smile Makeover Package — Veneers, Whitening, Aligners',
          'Implant Package — Single or multiple implants with crowns',
          'Full Mouth Rehabilitation — Complete functional and aesthetic restoration',
          'General Dentistry — Preventive and routine care',
        ],
      },
      {
        title: 'Why India & Why Our Clinic',
        items: [
          'Affordable, world-class dental treatments in Mumbai.',
          'Comfort, hygiene, and advanced equipment meeting international standards.',
          'Step-by-Step Guide: Travel → Consultation → Treatment → Recovery → Sightseeing.',
          'Gallery showcasing our clinic and patient transformations.',
          'Patient testimonials from international clients.',
          'Dedicated contact form for overseas patients.',
        ],
      },
      {
        title: 'SEO Keywords',
        items: [
          '"Dental tourism in Mumbai"',
          '"Affordable dental implants India"',
          '"Best dental clinic for tourists"',
        ],
      },
    ],
  },
  'tooth-extraction': {
    intro: 'Our tooth extraction services provide safe, gentle, and effective removal of decayed, damaged, or impacted teeth to protect your oral health. Whether it\'s a simple extraction or a surgical one, our dental specialist in Matunga ensures a stress-free experience with faster healing times.',
    sections: [
      {
        title: 'When You May Need a Tooth Extraction',
        items: [
          'Severe tooth decay that cannot be restored',
          'Advanced gum disease affecting tooth stability',
          'Impacted wisdom teeth causing pain or infection',
          'Broken or fractured teeth beyond repair',
          'Preparation for orthodontic treatments',
        ],
      },
      {
        title: 'Our Approach to Tooth Extraction',
        items: [
          'Comprehensive Examination — We first explore every possible way to save the tooth before extraction.',
          'Painless Procedure — Advanced anesthesia techniques for a completely pain-free experience.',
          'Surgical Expertise — For complex extractions, our specialists ensure precision and safety.',
          'Aftercare Guidance — Detailed post-treatment instructions to ensure smooth and quick recovery.',
        ],
      },
      {
        title: 'Why Choose Our Dental Clinic in Matunga East',
        items: [
          'Experienced team including cosmetic dentists for post-extraction smile restoration.',
          'Modern facilities and strict sterilization protocols.',
          'Easy accessibility for patients searching for a dentist near me Matunga.',
          'Personalized care and follow-ups to monitor healing.',
        ],
      },
      {
        text: 'Tooth extraction, when necessary, helps prevent the spread of infection, alleviates pain, and preserves your oral health. Our goal is to make the process as comfortable and seamless as possible. If you\'re experiencing tooth pain or discomfort, visit the best dentist in Matunga today.',
      },
    ],
  },
  'dentures': {
    intro: 'Dentures are a reliable and affordable way to replace missing teeth and restore your smile. Custom-made to fit comfortably, they improve chewing, speaking, and facial appearance. At Denthouse, we provide both complete and partial dentures that look natural and feel secure, helping you regain confidence in your daily life.',
    sections: [
      {
        title: 'Conditions Treated',
        items: [
          'Complete Tooth Loss — Full dentures to replace all missing teeth in the upper or lower jaw.',
          'Partial Tooth Loss — Partial dentures designed to fill gaps while preserving remaining natural teeth.',
          'Worn or Loose Dentures — Replacement or adjustment of existing dentures for improved comfort and stability.',
          'Jawbone Resorption — Denture options that help maintain facial structure and prevent sagging appearance.',
        ],
      },
      {
        title: 'Approach To Care',
        text: 'At Denthouse, every denture is custom-made for your unique mouth structure, ensuring a comfortable fit and natural appearance. We use advanced materials and precise measurements to create dentures that restore proper bite alignment and facial balance. Our team focuses on both functionality and aesthetics to help you regain a confident, natural smile.',
      },
      {
        title: 'Why Choose Us?',
        items: [
          'Customized Fit — Personalized dentures tailored for comfort, stability, and a natural look.',
          'High-Quality Materials — Durable, lightweight, and lifelike materials for lasting performance.',
          'Comprehensive Care — From impressions to final fitting and aftercare, all handled with precision and care.',
          'Enhanced Confidence — Restored smile and functionality to improve quality of life.',
        ],
      },
    ],
  },
  'childrens-dentistry': {
    intro: 'At our dental clinic in Matunga East, we believe that a child\'s dental experience shapes their attitude toward oral care for life. Our children\'s dentistry services focus on creating a safe, friendly, and engaging environment where young patients feel comfortable and confident. We understand that early dental visits are key to developing strong, healthy teeth and a lifetime of good habits.',
    sections: [
      {
        title: 'What We Offer in Children\'s Dentistry',
        items: [
          'Preventive Care & Education — Fluoride treatments, dental sealants, and cleaning sessions to protect your child\'s teeth from cavities.',
          'Gentle Cavity Treatments — Pain-free, tooth-colored fillings to restore decayed teeth while blending naturally with your child\'s smile.',
          'Orthodontic Assessments — Early detection of bite alignment issues, with referrals to orthodontic solutions if needed.',
          'Habit Counseling — Guidance on managing thumb sucking, tongue thrusting, and other oral habits that may affect dental growth.',
          'Emergency Dental Care — Quick treatment for accidents, chipped teeth, or sudden pain, ensuring your child\'s comfort.',
          'Fun & Stress-Free Visits — Kid-friendly tools, colorful décor, and a patient, caring approach that helps your child enjoy dental visits.',
        ],
      },
      {
        title: 'Why Parents Choose Us',
        items: [
          'Skilled dentist near me Matunga with extensive pediatric dentistry experience.',
          'Child-friendly, relaxing atmosphere designed to ease dental anxiety.',
          'Focus on preventive care to avoid major treatments later.',
          'Advanced equipment and modern techniques for safe, precise results.',
          'Flexible scheduling to suit busy families.',
        ],
      },
      {
        text: 'We also specialize in educating children about the importance of oral hygiene through fun demonstrations, interactive sessions, and positive reinforcement. By instilling good habits early, we help ensure your child enjoys a lifetime of healthy smiles. Give your child the gift of healthy teeth and gums — book their first appointment at the best dental clinic in Matunga East today!',
      },
    ],
  },
  'gum-treatment': {
    intro: 'Healthy gums are the foundation of a healthy smile. At our dental clinic in Matunga East, we specialize in diagnosing and treating gum diseases like gingivitis and periodontitis, helping you prevent tooth loss and maintain long-term oral health. Our gentle yet effective treatments are designed to heal infection, reduce inflammation, and promote healthy gum tissue.',
    sections: [
      {
        title: 'Why Choose Us for Gum Care?',
        items: [
          'Expert dental specialist in Matunga with years of experience in advanced periodontal care.',
          'Use of pain-free techniques to ensure maximum comfort during treatment.',
          'Comprehensive gum health evaluation with modern diagnostic tools.',
          'Personalized treatment plans for mild to severe gum issues.',
        ],
      },
      {
        title: 'Our Gum Treatment Services Include',
        items: [
          'Scaling & Root Planing (Deep Cleaning) — Removes plaque and tartar buildup below the gumline to halt gum disease progression.',
          'Laser Gum Therapy — Minimally invasive, faster healing, and reduced discomfort.',
          'Antibiotic Therapy — Targets bacteria causing gum infections for faster recovery.',
          'Gum Surgery — For advanced cases to restore gum structure and save teeth.',
          'Preventive Gum Care — Routine cleanings and home care guidance to prevent recurrence.',
        ],
      },
      {
        title: 'Benefits of Our Gum Treatments',
        items: [
          'Stops gum bleeding, swelling, and pain.',
          'Prevents tooth loss by strengthening gum attachment.',
          'Freshens breath by removing infection-causing bacteria.',
          'Improves the appearance of your smile by restoring healthy gums.',
        ],
      },
      {
        text: 'Whether you\'re looking for a dentist near me in Matunga, a cosmetic dentist in Matunga to enhance your gum line, or a root canal specialist near me in Matunga who also provides periodontal care, our clinic offers complete solutions to keep your smile healthy and beautiful.',
      },
    ],
  },
  'dental-implants': {
    intro: 'Dental implants are the most advanced and long-lasting solution for missing teeth. They act as artificial roots, securely anchored into the jawbone, and are topped with natural-looking crowns. Implants restore your ability to chew, speak, and smile with confidence — while protecting your jawbone and preserving facial structure. At Denthouse, we use the latest techniques to provide strong, safe, and permanent results that look and feel just like your natural teeth.',
    sections: [
      {
        title: 'Conditions Treated',
        items: [
          'Missing Teeth — Replacing single or multiple missing teeth with durable, fixed implants.',
          'Tooth Loss Due to Decay or Trauma — Providing long-term restoration for teeth lost to injury or infection.',
          'Unstable Dentures — Offering secure implant-supported options to improve comfort and chewing ability.',
          'Bone Loss Prevention — Preserving jawbone structure by replacing the tooth root with an implant post.',
        ],
      },
      {
        title: 'Approach To Care',
        text: 'At Denthouse, we follow a comprehensive approach to implant dentistry — beginning with detailed 3D imaging and evaluation of bone health. Each implant is precisely placed using advanced technology to ensure long-term success and natural aesthetics. From the initial consultation to final restoration, our team ensures your comfort and confidence throughout the process.',
      },
      {
        title: 'Why Choose Us?',
        items: [
          'Expert Precision — Experienced implant specialists using advanced planning and placement techniques.',
          'Natural Look & Feel — Custom crowns designed to match your existing teeth for seamless results.',
          'Long-Term Durability — High-quality titanium implants built for strength and longevity.',
          'Comprehensive Care — Full-service implant treatment from planning to restoration, all under one roof.',
        ],
      },
    ],
  },
  'braces-aligners': {
    intro: 'A confident smile begins with perfectly aligned teeth, and at our dental clinic in Matunga, we specialize in advanced orthodontic treatments to give you a healthy, beautiful smile. We provide customized solutions for children, teens, and adults seeking straighter teeth and improved oral health. Our experienced dentists use modern techniques and state-of-the-art technology to correct crooked teeth, gaps, bite issues, and jaw alignment problems.',
    sections: [
      {
        title: 'Our Orthodontic & Braces Services',
        items: [
          'Metal Braces — Time-tested, durable, and highly effective for correcting complex orthodontic cases.',
          'Ceramic Braces — Tooth-colored braces that blend with your natural teeth for a more aesthetic look.',
          'Self-Ligating Braces — Advanced braces that reduce treatment time and improve comfort.',
          'Lingual Braces — Hidden behind your teeth, offering a discreet way to straighten your smile.',
          'Clear Aligners (Invisalign) — Virtually invisible, removable aligners for a flexible and comfortable treatment.',
          'Preventive Orthodontics for Kids — Early detection and treatment of jaw and bite problems to guide proper dental development.',
        ],
      },
      {
        text: 'As the best dentist in Matunga, our goal is not just to straighten teeth but also to enhance oral health, improve function, and boost self-confidence. We offer personalized treatment plans based on your lifestyle, age, and dental needs. With a patient-first approach, we ensure a smooth treatment journey supported by regular follow-ups and expert guidance.',
      },
    ],
  },
}

const benefits = [
  { icon: HiShieldCheck, text: '10+ Years Experience' },
  { icon: HiChip, text: 'Advanced Technology' },
  { icon: HiEmojiHappy, text: 'Painless Procedures' },
  { icon: HiStar, text: 'Expert Care' },
]

export default function ServiceDetail() {
  const params = useParams()
  const service = services.find(s => s.slug === params.slug)
  const details = params.slug ? serviceDetails[params.slug as string] : undefined

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Dr. Khushboo's Dent House`
    }
  }, [service])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-900 mb-4">Service Not Found</h1>
          <Link href="/#services" className="btn-primary">Back to Services</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC]">
        <div className="container-custom pt-28 pb-12">
          <Link href="/#services" className="inline-flex items-center gap-2 text-dark-500 hover:text-primary-500 font-alt font-medium transition-colors mb-8 group">
            <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 leading-tight mb-6">{service.title}</h1>

                {details ? (
                  <div className="space-y-6">
                    <p className="text-lg text-dark-500 font-alt leading-relaxed">{details.intro}</p>
                    {details.sections.map((section, i) => (
                      <div key={i}>
                        {section.title && (
                          <h2 className="text-2xl font-heading font-bold text-dark-900 mb-4 mt-8">{section.title}</h2>
                        )}
                        {section.items && (
                          <ul className="space-y-3">
                            {section.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <HiCheck className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                                <span className="text-dark-500 font-alt leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.text && (
                          <p className="text-dark-500 font-alt leading-relaxed">{section.text}</p>
                        )}
                      </div>
                    ))}
                    <p className="text-dark-500 font-alt leading-relaxed pt-4 font-medium">
                      Transform your smile with precision orthodontics at our Matunga dental clinic. Book your consultation today!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-lg text-dark-500 font-alt leading-relaxed">{service.desc}</p>
                    <p className="text-dark-500 font-alt leading-relaxed">
                      At Dr. Khushboo's Dent House, we provide specialized {service.title.toLowerCase()} using the
                      latest techniques and technology. Our experienced team ensures your comfort throughout
                      the treatment process.
                    </p>
                    <p className="text-dark-500 font-alt leading-relaxed">
                      We believe in personalized care tailored to your unique needs. Every treatment plan is
                      designed with your comfort, health, and desired outcome in mind.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="bg-white rounded-3xl shadow-card p-8 border border-dark-50/50 sticky top-28">
                  <h2 className="font-heading font-bold text-2xl text-dark-900 mb-6">Why Choose Us</h2>
                  <div className="space-y-4 mb-8">
                    {benefits.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <span className="text-dark-700 font-alt font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                  <BookAppointmentBtn className="btn-primary w-full justify-center text-sm">
                    <HiCalendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </BookAppointmentBtn>
                  <div className="mt-4 bg-primary-50/50 rounded-2xl p-5 border border-primary-100">
                    <p className="font-heading font-semibold text-dark-900 text-sm mb-1">📍 Clinic Address</p>
                    <p className="text-dark-500 font-alt text-sm leading-relaxed">Shop 3, Vasant Breezy Chambers, Kings Cir, Matunga East, Mumbai - 400019</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-primary-50/30 to-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-heading font-bold text-dark-900 mb-4">Ready to Get Started?</h2>
            <p className="text-dark-500 font-alt text-lg mb-8 max-w-xl mx-auto">Book your consultation today and take the first step towards a healthier smile.</p>
            <BookAppointmentBtn className="btn-primary">Book Appointment</BookAppointmentBtn>
          </div>
        </div>

        <Footer />
      </div>
      <FloatingActions />
    </>
  )
}
