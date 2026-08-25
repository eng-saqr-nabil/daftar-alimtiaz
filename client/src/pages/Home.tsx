// Style reminder: RTL-first Arabic landing page for دفتر الامتياز. Use deep burgundy, warm ivory, restrained metallic accents, asymmetric editorial composition, and concise trustworthy product language.

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Check,
  ChevronDown,
  Cloud,
  Download,
  Github,
  Landmark,
  Menu,
  ShieldCheck,
  Smartphone,
  Users,
  X,
} from "lucide-react";

const features = [
  { icon: Users, title: "إدارة العملاء والديون", body: "ملف واضح لكل عميل مع متابعة الرصيد والحركة اليومية دون تعقيد." },
  { icon: Landmark, title: "الصندوق والمصروفات", body: "سجّل المقبوضات والمصروفات واعرف وضع صندوقك في لحظته." },
  { icon: BarChart3, title: "تقارير عملية", body: "حوّل البيانات اليومية إلى ملخصات تساعدك على اتخاذ قرار أفضل." },
  { icon: ShieldCheck, title: "صلاحيات وتحكم", body: "نظّم الوصول إلى البيانات بما يناسب طريقة عمل فريقك." },
  { icon: Cloud, title: "نسخ احتياطي", body: "احتفظ بنسخة آمنة من بياناتك لتعمل بثقة أكبر." },
  { icon: Smartphone, title: "مصمم للهاتف", body: "واجهة عربية مباشرة تناسب الاستخدام السريع أثناء يوم العمل." },
];

const faqs = [
  { q: "لمن صُمم تطبيق دفتر الامتياز؟", a: "صُمم للمحلات والأعمال الصغيرة والمتوسطة التي تحتاج إلى طريقة أوضح لمتابعة الحسابات والعملاء والمصروفات." },
  { q: "هل رابط تحميل التطبيق متاح الآن؟", a: "سيتم تفعيل زر التحميل ورمز QR فور إضافة رابط الإصدار الرسمي للتطبيق. لا تستخدم أي ملف غير موثوق." },
  { q: "هل يمكنني مشاهدة الكود المصدري؟", a: "نعم، ستجد رابط مستودع GitHub في أعلى الصفحة وفي قسم التواصل بعد ربطه بالمستودع النهائي." },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div dir="rtl" className="site-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="دفتر الامتياز - الصفحة الرئيسية">
            <span className="brand-mark"><span>R</span><i>A</i></span>
            <span className="brand-copy"><strong>دفتر الامتياز</strong><small>إدارة مالية وتشغيلية متكاملة</small></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>تحميل التطبيق</a>
            <a href="#guide" onClick={() => setMenuOpen(false)}>دليل الاستخدام</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <a className="github-link" href="https://github.com/eng-saqr-nabil" target="_blank" rel="noreferrer"><Github size={17} /> <span>شاهد على GitHub</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="release-pill"><span className="pulse-dot" /> الإصدار الجديد قيد التجهيز <b>v1.0.0</b></div>
              <h1>دفتر <em>الامتياز</em></h1>
              <p className="hero-subtitle">إدارة مالية وتشغيلية متكاملة</p>
              <p className="hero-description">تطبيق محاسبي ودفتر ديون متكامل يساعدك على إدارة عملك بوضوح، من الصندوق والعملاء إلى التقارير والنسخ الاحتياطي.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#download"><Download size={20} /> تحميل التطبيق <ArrowLeft size={17} /></a>
                <a className="quiet-button" href="#features">اكتشف المميزات</a>
              </div>
              <div className="hero-trust"><ShieldCheck size={18} /><span>واجهة عربية واضحة، ومعلوماتك تحت سيطرتك</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-halo" />
              <img src="/manus-storage/daftar-alimtiaz-device_eb42b006.png" alt="معاينة تطبيق دفتر الامتياز على الهاتف" />
              <div className="floating-note note-top"><span>+24%</span><small>وضوح أكبر في التقارير</small></div>
              <div className="floating-note note-bottom"><Check size={18} /><span>بيانات منظمة</span></div>
            </div>
          </div>
          <div className="hero-strip">
            <div><span className="strip-icon">◌</span><strong>مجاني</strong><small>بدون أي رسوم</small></div>
            <div><span className="strip-icon">◷</span><strong>تحديثات دورية</strong><small>تطوير وتحسين مستمر</small></div>
            <div><span className="strip-icon">◈</span><strong>دعم فني</strong><small>نحن هنا لمساعدتك</small></div>
            <div><span className="strip-icon">⌁</span><strong>متجر موثوق</strong><small>تحميل مباشر وآمن</small></div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading"><div><SectionLabel>لماذا دفتر الامتياز؟</SectionLabel><h2>كل ما تحتاجه لتدير يومك <span>بثقة.</span></h2></div><p>أدوات بسيطة في مكان واحد، مصممة لتقليل الفوضى ومساعدتك على رؤية الصورة المالية كاملة.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, body }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={22} /></div><h3>{title}</h3><p>{body}</p><ArrowUpLeft className="feature-arrow" size={18} /></article>)}</div>
        </section>

        <section className="download-section" id="download">
          <div className="download-card">
            <div className="download-copy"><SectionLabel>حمّل التطبيق</SectionLabel><h2>خطوتك الأولى نحو <span>إدارة أذكى.</span></h2><p>سيتم وضع رابط الإصدار الرسمي هنا عند اعتماده. بعد الإضافة، سيتمكن المستخدم من تحميل التطبيق مباشرة أو مسح رمز QR من هاتفه.</p><div className="download-meta"><span>Android APK</span><span>الإصدار 1.0.0</span><span>الرابط قيد الإضافة</span></div><button className="primary-button disabled-button" disabled><Download size={19} /> رابط التحميل قريباً</button></div>
            <div className="qr-panel"><div className="qr-placeholder" aria-label="رمز QR سيضاف بعد اعتماد رابط التحميل"><div className="qr-corner tl" /><div className="qr-corner tr" /><div className="qr-corner bl" /><div className="qr-noise">···<br />· ·<br />···</div></div><p>سيُضاف رمز QR<br />عند اعتماد الرابط</p></div>
          </div>
        </section>

        <section className="guide-section" id="guide"><div className="guide-aside"><SectionLabel>دليل سريع</SectionLabel><h2>ابدأ بطريقة<br /><span>أوضح.</span></h2><p>ثلاث خطوات تفصل بينك وبين تنظيم العمل اليومي.</p></div><div className="steps">{[["01", "ثبّت التطبيق", "حمّل الإصدار الرسمي على هاتف Android عند توفر الرابط."], ["02", "أدخل بياناتك", "أنشئ سجلات العملاء والصندوق والمصروفات التي تهمك."], ["03", "تابع وقرّر", "استخدم التقارير لمعرفة ما يحدث واتخاذ الخطوة التالية."]].map(([num, title, body]) => <div className="step" key={num}><b>{num}</b><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></section>

        <section className="faq-section" id="faq"><div className="faq-heading"><SectionLabel>الأسئلة الشائعة</SectionLabel><h2>هل لديك سؤال<br /><span>في بالك؟</span></h2><p>هذه إجابات أولية، ويمكن تحديثها مع إطلاق الإصدار الرسمي.</p></div><div className="faq-list">{faqs.map((item, index) => <div className={openFaq === index ? "faq-item active" : "faq-item"} key={item.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{item.q}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{item.a}</p>}</div>)}</div></section>
      </main>

      <footer className="footer" id="contact"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><span>R</span><i>A</i></span><span className="brand-copy"><strong>دفتر الامتياز</strong><small>إدارة مالية وتشغيلية متكاملة</small></span></a><p>حلول رقمية أبسط لإدارة الأعمال اليومية.</p><div className="footer-links"><a href="https://github.com/eng-saqr-nabil" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="mailto:engsaqrnabil@gmail.com">تواصل معنا</a></div></div><div className="footer-bottom"><span>© 2026 دفتر الامتياز. جميع الحقوق محفوظة.</span><span>تطوير: صقر نبيل · طالب علوم حاسوب</span></div></footer>
    </div>
  );
}

// Core CTA remains intentionally disabled until the owner provides the official APK or release URL.
// This avoids presenting a placeholder download as a real product distribution link.
