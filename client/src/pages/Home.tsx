import { useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Utensils, Star, Flame, Coffee, Crown, Sparkles } from "lucide-react";
import { SpecCard } from "@/components/SpecCard";

// Static Image Imports
import img1 from '@assets/Screenshot_٢٠٢٦_٠٢٢٦_٢٢١٧١٥_com.instagram.android_1772138194597.png';
import img2 from '@assets/Screenshot_٢٠٢٦_٠٢٢٦_٢٢١٦٣٨_com.instagram.android_1772138194668.png';
import img3 from '@assets/Screenshot_٢٠٢٦_٠٢٢٦_٢٢١٦٣٠_com.instagram.android_1772138194691.png';
import img4 from '@assets/Screenshot_٢٠٢٦_٠٢٢٦_٢٢١٥٣٨_com.instagram.android_1772138194713.png';

export default function Home() {
  // Randomly select one image for the hero, and the rest for the gallery
  const { heroImage, galleryImages } = useMemo(() => {
    const images = [img1, img2, img3, img4];
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return {
      heroImage: shuffled[0],
      galleryImages: shuffled.slice(1)
    };
  }, []);

  return (
    <div className="min-h-screen relative pb-10">
      
      {/* Background ambient light effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-md animate-pulse-glow" />
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full p-1 bg-card relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Profile Avatar" 
                className="w-full h-full object-cover rounded-full border-4 border-card/50"
              />
            </div>
            
            <motion.div 
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 15, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-2 -right-4 bg-accent text-white p-3 rounded-full shadow-lg shadow-accent/50"
            >
              <Crown className="w-8 h-8" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-7xl font-display mb-4 text-gradient drop-shadow-sm">
              الأسطورة الطرابلسية
            </h1>
            
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-muted-foreground bg-secondary/50 border border-white/5 rounded-full px-6 py-3 shadow-inner max-w-fit mx-auto backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-sans text-lg md:text-xl font-medium">
                لبنان، طرابلس، القبة، البقار، بالضبط أمام الطبابة العسكرية
              </span>
            </div>
          </motion.div>
        </section>

        {/* THE JOKE BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-600/20 to-amber-500/20 p-1 border border-amber-500/30 shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
            <div className="bg-card/80 backdrop-blur-xl rounded-[1.4rem] py-10 px-6 text-center relative z-10 flex flex-col items-center">
              <Flame className="w-12 h-12 text-orange-500 mb-4 animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                هذا التمساح يحب كرشه كثيراً
              </h2>
            </div>
          </div>
        </motion.div>

        {/* DESCRIPTION SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            <Sparkles className="absolute top-6 right-6 w-6 h-6 text-accent/50" />
            <Sparkles className="absolute bottom-6 left-6 w-6 h-6 text-primary/50" />
            
            <h3 className="text-3xl font-display text-white mb-6">من هو هذا الكائن؟</h3>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-sans font-medium">
              شخصية فريدة من نوعها، يجمع بين الكاريزما المرعبة وحب الطعام الاستثنائي. 
              يمكن العثور عليه غالباً يتجول في الأرجاء باحثاً عن الوجبة التالية أو يخطط للسيطرة على العالم... 
              ولكن طبعاً، بعد أن يأخذ قيلولته المقدسة ويشرب قهوته.
            </p>
          </div>
        </motion.section>

        {/* SPECS GRID */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display inline-block relative">
              المواصفات التقنية
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full opacity-70" />
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpecCard 
              icon={Utensils} 
              title="الوزن" 
              value="قابل للزيادة بعد كل وجبة شاورما" 
              delay={0.1}
              colorClass="text-orange-400"
            />
            <SpecCard 
              icon={Star} 
              title="الطول" 
              value="ناطحة سحاب... عند الوقوف على كرسي" 
              delay={0.2}
              colorClass="text-yellow-400"
            />
            <SpecCard 
              icon={Coffee} 
              title="القدرة الخارقة" 
              value="إخفاء صحن الحمص في ٣ ثوانٍ" 
              delay={0.3}
              colorClass="text-emerald-400"
            />
            <SpecCard 
              icon={Crown} 
              title="الهوايات" 
              value="التهام الأخضر واليابس والنوم العميق" 
              delay={0.4}
              colorClass="text-purple-400"
            />
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display inline-block relative">
              معرض الأناقة
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent rounded-full opacity-70" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-3xl overflow-hidden glass-card group aspect-[4/5] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full text-center py-10 mt-auto border-t border-white/5 bg-background/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-xl font-display text-muted-foreground/80 cursor-default">
            صنع بواسطة <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse">بيبرس النشار</span>
          </span>
        </motion.div>
      </footer>
    </div>
  );
}
