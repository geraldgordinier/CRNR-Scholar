import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { ArthurEasterEgg } from './ArthurEasterEgg';

const ARTHUR_PHOTOS = [
  '/arthur-1.png',
  '/arthur-2.png',
  '/arthur-3.png',
  '/arthur-4.png',
  '/arthur-5.png',
  '/arthur-6.png',
];

const ENCOURAGING_WORDS = [
  "You're doing amazing, Annie!",
  "Keep up the great work!",
  "I believe in you!",
  "You're going to crush this exam!",
  "Another question down, you've got this!",
  "Take a deep breath, you're smart!",
  "Neuro nursing superstar in the making!",
  "I'm cheering you on!",
  "You are so ready for this!",
  "Trust your knowledge, Annie!"
];

const CNRN_FUN_FACTS = [
  "Pediatric abusive head trauma (shaken baby syndrome) often presents with retinal hemorrhages and subdural hematomas.",
  "The anterior fontanelle typically closes between 12 and 18 months of age.",
  "In infants, a bulging fontanelle or prominent scalp veins can be early signs of increased ICP.",
  "Spina bifida occulta is often marked by a dimple, hair tuft, or hemangioma at the sacral area.",
  "Chiari II malformation is almost always associated with myelomeningocele.",
  "The pediatric Glasgow Coma Scale uses modified verbal responses, assessing babbling and crying.",
  "Cerebral palsy is a non-progressive motor disorder, often associated with prematurity or low birth weight.",
  "Medulloblastoma is the most common malignant brain tumor in children, often arising in the cerebellum.",
  "Febrile seizures are the most common type of childhood seizure, usually occurring between 6 months and 5 years.",
  "Hydrocephalus in children under 2 often presents with a rapidly increasing head circumference."
];

interface ArthurWidgetProps {
  viewToggle: string; // Pass the current view so we can change photos/quotes when tabs change
}

export function ArthurWidget({ viewToggle }: ArthurWidgetProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    // Randomly cycle when the view changes
    setPhotoIndex(Math.floor(Math.random() * ARTHUR_PHOTOS.length));
    setQuoteIndex(Math.floor(Math.random() * ENCOURAGING_WORDS.length));
    setFactIndex(Math.floor(Math.random() * CNRN_FUN_FACTS.length));
  }, [viewToggle]);

  return (
    <>
      <div className="flex flex-col items-center w-full md:min-h-[300px]">
        <div 
          onClick={() => setShowEasterEgg(true)}
          className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden mb-2 md:mb-4 shadow-sm relative bg-white shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
          title="Click Arthur for a surprise!"
        >
          <img 
            src={ARTHUR_PHOTOS[photoIndex]} 
            alt="Arthur the dog" 
            className="w-full h-full object-cover"
            onError={(e) => {
               // Fallback if images aren't uploaded yet
               e.currentTarget.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop";
            }}
          />
        </div>
        
        <div className="w-full">
          <p className="font-sans font-bold text-base md:text-lg mb-2 text-center">Arthur Says</p>
          <div className="text-left w-full h-auto md:h-32 mb-4 md:mb-0">
            <p className="text-sm md:text-base text-ink opacity-90 leading-relaxed font-medium">
              {ENCOURAGING_WORDS[quoteIndex]} {CNRN_FUN_FACTS[factIndex]}
            </p>
          </div>
        </div>
      </div>
      
      {showEasterEgg && (
        <ArthurEasterEgg 
          initialImgSrc={ARTHUR_PHOTOS[photoIndex]} 
          onStop={() => setShowEasterEgg(false)} 
        />
      )}
    </>
  );
}
