// Style reminder: RTL-first Arabic product site for دفتر الامتياز. Use deep burgundy, warm ivory, authentic product screenshots, restrained metallic accents, asymmetric editorial composition, and concise trustworthy product language.

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArchiveRestore,
  BadgeCheck,
  BellRing,
  ChevronDown,
  Cloud,
  Download,
  Github,
  Menu,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";

const productAssets = {
  logo: "/manus-storage/app-logo_1023511e.png",
  icon: "/manus-storage/app-icon_292093af.png",
  signIn: "/manus-storage/sign-in_80fc7c0f.webp",
  about: "/manus-storage/about-app_5e0c33f1.webp",
  summary: "/manus-storage/today-summary_d9e0378b.webp",
  settings: "/manus-storage/settings_d2f48cca.webp",
};

const features = [
  { icon: UsersRound, title: "العملاء والديون", body: "تابع بيانات العملاء وحركاتهم ورصيدهم في شاشة واضحة وسريعة." },
  { icon: WalletCards, title: "الصندوق والمصروفات", body: "سجّل العمليات اليومية واطّلع على ملخص الحركة في مكان واحد." },
  { icon: BadgeCheck, title: "كشف الحساب", body: "اعرض الحركات والمدفوعات بطريقة تساعدك على مراجعة الحسابات." },
  { icon: Cloud, title: "نسخ احتياطي واستعادة", body: "أنشئ نسخة لبياناتك أو استعد آخر نسخة محفوظة عندما تحتاج إليها." },
  { icon: BellRing, title: "إعدادات مرنة", body: "تحكّم بالمظهر والعملة والتنبيهات بما يناسب طريقة عملك." },
  { icon: Smartphone, title: "تجربة عربية للهاتف", body: "تصميم عملي يدعم العربية ويجعل الوصول للأدوات اليومية مباشراً." },
];

const screens = [
  { src: productAssets.signIn, title: "تسجيل الدخول", caption: "بدء منظّم عبر خيارات الدخول المتاحة." },
  { src: productAssets.summary, title: "ملخص اليوم", caption: "نظرة سريعة على عمليات اليوم وإدارة المصروفات." },
  { src: productAssets.settings, title: "الإعدادات العامة", caption: "المظهر والعملة والتنبيهات من مكان واحد." },
  { src: productAssets.about, title: "عن التطبيق", caption: "تعريف مختصر بالتطبيق ووسائل التواصل." },
];

const faqs = [
  { q: "لمن صُمم تطبيق دفتر الامتياز؟", a: "لمن يريد تنظيم العمل اليومي في مكان واحد، من متابعة العملاء والموردين إلى الصندوق والمصروفات وكشف الحساب." },
  { q: "هل يمكن استخدام التطبيق دون اتصال؟", a: "تظهر واجهات التطبيق حفظ العمليات محلياً، مع وجود خيارات للنسخ الاحتياطي والاستعادة من داخل التطبيق." },
  { q: "متى سيتاح ملف التحميل؟", a: "سيُفعّل زر التحميل ورمز QR بعد رفع ملف APK الرسمي إلى صفحة الإصدار، حتى يصل المستخدم دائماً إلى النسخة الصحيحة." },
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
            <img className="brand-logo" src={productAssets.icon} alt="شعار دفتر الامتياز" />
            <span className="brand-copy"><strong>دفتر الامتياز</strong><small>إدارة مالية وتشغيلية متكاملة</small></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#screens" onClick={() => setMenuOpen(false)}>لقطات التطبيق</a>
            <a href="#security" onClick={() => setMenuOpen(false)}>الخصوصية</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>تحميل التطبيق</a>
            <a href="#guide" onClick={() => setMenuOpen(false)}>دليل الاستخدام</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
          </nav>
          <a className="github-link" href="https://github.com/eng-saqr-nabil" target="_blank" rel="noreferrer"><Github size={17} /> <span>GitHub</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="release-pill"><span className="pulse-dot" /> الإصدار الأول قيد التجهيز <b>APK</b></div>
              <h1>دفتر <em>الامتياز</em></h1>
              <p className="hero-subtitle">إدارة مالية وتشغيلية متكاملة</p>
              <p className="hero-description">نظّم العملاء والموردين والمصروفات والصندوق، وتابع الحركات اليومية والتقارير من واجهة عربية واضحة مصممة للهاتف.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#download"><Download size={20} /> تنزيل التطبيق عند الإتاحة <ArrowLeft size={17} /></a>
                <a className="quiet-button" href="#screens">شاهد التطبيق من الداخل</a>
              </div>
              <div className="hero-trust"><ShieldCheck size={18} /><span>نسخ احتياطي واستعادة من داخل التطبيق</span></div>
            </div>
            <div className="hero-visual" aria-label="هوية تطبيق دفتر الامتياز">
              <div className="visual-halo" />
              <img src={productAssets.logo} alt="هوية تطبيق دفتر الامتياز ومجالات الإدارة المالية" />
              <div className="floating-note note-top"><BadgeCheck size={18} /><span>واجهة عملية</span><small>لإدارة يومك بثقة</small></div>
              <div className="floating-note note-bottom"><ArchiveRestore size={18} /><span>نسخ احتياطي</span></div>
            </div>
          </div>
          <div className="hero-strip">
            <div><span className="strip-icon">◌</span><strong>عملاء وديون</strong><small>متابعة أوضح للأرصدة</small></div>
            <div><span className="strip-icon">◷</span><strong>صندوق ومصروفات</strong><small>تسجيل العمليات اليومية</small></div>
            <div><span className="strip-icon">◈</span><strong>نسخ احتياطي</strong><small>حفظ واستعادة البيانات</small></div>
            <div><span className="strip-icon">⌁</span><strong>إعدادات مرنة</strong><small>مظهر وعملة وتنبيهات</small></div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading"><div><SectionLabel>أدواتك اليومية</SectionLabel><h2>كل ما تحتاجه لتدير يومك <span>بوضوح.</span></h2></div><p>مزايا مستندة إلى واجهات التطبيق الفعلية، من إدارة العملاء والمصروفات إلى الإعدادات والنسخ الاحتياطي.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, body }, index) => <article className="feature-card" key={title}><b className="feature-index">0{index + 1}</b><div className="feature-icon"><Icon size={22} /></div><h3>{title}</h3><p>{body}</p><ArrowUpLeft className="feature-arrow" size={18} /></article>)}</div>
        </section>

        <section className="screens-section" id="screens">
          <div className="screens-heading"><div><SectionLabel>لقطات من التطبيق</SectionLabel><h2>شاهد التجربة<br /><span>من الداخل.</span></h2></div><p>لقطات أصلية من واجهات التطبيق توضح التوجه البصري العربي ومسارات الاستخدام الأساسية.</p></div>
          <div className="screen-rail">{screens.map((screen, index) => <figure className={index === 1 ? "screen-card screen-card-featured" : "screen-card"} key={screen.title}><div className="phone-frame"><img src={screen.src} alt={`واجهة ${screen.title} في تطبيق دفتر الامتياز`} loading="lazy" /></div><figcaption><span>0{index + 1}</span><div><strong>{screen.title}</strong><small>{screen.caption}</small></div></figcaption></figure>)}</div>
        </section>

        <section className="security-section" id="security">
          <div className="security-intro"><SectionLabel>الخصوصية واستمرارية البيانات</SectionLabel><h2>إدارة واعية<br /><span>لبياناتك.</span></h2><p>يوفر التطبيق واجهة مخصصة للنسخ الاحتياطي والاستعادة، إضافة إلى إعدادات الحساب والتطبيق. لا نعرض ادعاءات أمنية تقنية غير معلنة؛ وتُنشر التفاصيل الرسمية مع الإصدار.</p></div>
          <div className="security-ledger">
            <article><Cloud size={21} /><div><b>النسخ الاحتياطي</b><p>واجهة مخصصة لإنشاء نسخة من البيانات أو استعادتها.</p></div><span>01</span></article>
            <article><ShieldCheck size={21} /><div><b>إعدادات الحساب</b><p>التحكم في معلومات الحساب والإعدادات الظاهرة داخل التطبيق.</p></div><span>02</span></article>
            <article><ArchiveRestore size={21} /><div><b>تفاصيل الإصدار</b><p>تُعلن سياسة الخصوصية والتفاصيل التقنية مع النسخة الرسمية.</p></div><span>03</span></article>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-card">
            <div className="download-copy"><SectionLabel>تحميل التطبيق</SectionLabel><h2>الإصدار الرسمي<br /><span>قريباً.</span></h2><p>سيظهر رابط ملف APK الرسمي هنا فور اعتماده. سنربط رمز QR بصفحة الموقع الرسمية، لتبقى طريق الوصول إلى أحدث إصدار ثابتة وآمنة.</p><div className="download-meta"><span>Android APK</span><span>تحديث عبر صفحة الإصدار</span><span>الرابط قيد الإضافة</span></div><button className="primary-button disabled-button" disabled><Download size={19} /> انتظار الإصدار الرسمي</button></div>
            <div className="qr-panel"><div className="qr-placeholder" aria-label="رمز QR سيُنشأ بعد اعتماد عنوان الموقع الرسمي"><div className="qr-corner tl" /><div className="qr-corner tr" /><div className="qr-corner bl" /><div className="qr-noise">···<br />· ·<br />···</div></div><p>سيشير الرمز إلى<br />صفحة الموقع الرسمية</p></div>
          </div>
          <div className="release-ledger" aria-label="معلومات الإصدار الرسمية"><span><b>النظام</b><em>Android APK</em></span><span><b>الإصدار</b><em>سيُعلن مع النسخة الرسمية</em></span><span><b>الحجم والتاريخ</b><em>لم يُعلن عنهما بعد</em></span></div>
        </section>

        <section className="guide-section" id="guide"><div className="guide-aside"><SectionLabel>دليل سريع</SectionLabel><h2>ابدأ بطريقة<br /><span>أوضح.</span></h2><p>تسلسل مباشر لتثبيت التطبيق وتهيئته ثم متابعة عملياتك اليومية.</p></div><div className="steps">{[["01", "ثبّت التطبيق", "حمّل ملف APK الرسمي من صفحة الإصدار عند توفره."], ["02", "أضف بيانات عملك", "عرّف العملاء والموردين وسجّل العمليات التي تهمك."], ["03", "تابع وقرّر", "راجع الصندوق والحسابات والتقارير لتتابع يومك بوضوح."]].map(([num, title, body]) => <div className="step" key={num}><b>{num}</b><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></section>

        <section className="faq-section" id="faq"><div className="faq-heading"><SectionLabel>الأسئلة الشائعة</SectionLabel><h2>هل لديك سؤال<br /><span>في بالك؟</span></h2><p>معلومات واضحة قبل التحميل، على أن تُحدّث تفاصيل الإصدار فور إطلاقه.</p></div><div className="faq-list">{faqs.map((item, index) => <div className={openFaq === index ? "faq-item active" : "faq-item"} key={item.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{item.q}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{item.a}</p>}</div>)}</div></section>
      </main>

      <footer className="footer" id="contact"><div className="footer-top"><a className="brand" href="#top"><img className="brand-logo" src={productAssets.icon} alt="شعار دفتر الامتياز" /><span className="brand-copy"><strong>دفتر الامتياز</strong><small>إدارة مالية وتشغيلية متكاملة</small></span></a><p>صفحة رسمية قيد التجهيز للإصدار الأول من التطبيق.</p><div className="footer-links"><a href="https://github.com/eng-saqr-nabil" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div></div><div className="footer-bottom"><span>© 2026 دفتر الامتياز. جميع الحقوق محفوظة.</span><span>صمّم بواجهة عربية تراعي الاستخدام اليومي.</span></div></footer>
    </div>
  );
}

// The download CTA is intentionally disabled until the owner supplies the official APK or GitHub Release URL.
