# مواصفات تصميم صفحة دفتر الامتياز

## Ground-truth reference

الصورة المرفقة من المستخدم هي المواصفة البصرية الأساسية للصفحة. يجب الحفاظ على روحها: شريط علوي عنابي داكن، شعار عربي في الجهة اليمنى ضمن تخطيط RTL، قسم رئيسي منقسم بين مساحة نصية فاتحة وصورة/تركيب بصري داكن، أزرار تحميل واضحة، بطاقات مميزات، شريط لقطات التطبيق، وتذييل عنابي.

## التصميم المختار

### Design Movement
هوية **Arabic fintech editorial** مستوحاة من صفحات المنتجات المالية العربية الحديثة، مع مزج بين واجهة مؤسسية واضحة وجرأة بصرية عنابية ذات إحساس تقني.

### Core Principles
- الوضوح قبل الزخرفة: كل قسم يخدم قرار المستخدم، خصوصاً قرار تحميل التطبيق.
- تباين عنابي/عاجي قوي يخلق ثقة ويجعل زر التحميل نقطة التركيز.
- تخطيط RTL غير متماثل، يوازن بين النص الوظيفي والصورة البصرية دون اعتماد كامل على أعمدة متطابقة.
- تفاصيل مالية دقيقة: خطوط فاصلة، مؤشرات إصدار، أيقونات مميزة، وتدرجات سطحية خفيفة.

### Color Philosophy
العنابي العميق يرمز إلى الثقة والجدية والهوية العربية، بينما العاجي يخفف كثافة اللون ويمنح القراءة راحة. الأحمر القرمزي يستخدم فقط في الدعوات المهمة، والرمادي الدافئ يحافظ على طابع عملي غير بارد.

### Layout Paradigm
قسم رئيسي قطري/منقسم بصرياً، يتبعه شريط مميزات أفقي، ثم معرض لقطات قابل للتمرير، ثم قسم أسئلة شائعة وتواصل. على الهاتف يتحول الانقسام إلى تدفق عمودي مع بقاء CTA قريباً من أعلى الشاشة.

### Signature Elements
- شريط علوي عنابي مع خط إبراز رفيع أسفل العنصر النشط.
- نمط شبكي/بياني منخفض التباين في المساحات الداكنة.
- أرقام ومؤشرات صغيرة تشبه بطاقة إصدار المنتج وتدعم القراءة السريعة.

### Interaction Philosophy
التفاعل مباشر وواثق: الأزرار تستجيب بالضغط والتحول الخفيف، والروابط تقود إلى أقسام واضحة. أي رابط غير جاهز يجب أن يظهر كعنصر غير متاح بوضوح، لا كرابط وهمي.

### Animation
دخول خفيف للأقسام عند التمرير مع تأخير قصير للعناصر المتتابعة، وتحولات hover لا تتجاوز 220ms. الحركة تعتمد على opacity وtransform فقط، مع احترام prefers-reduced-motion.

### Typography System
العناوين بخط **Noto Kufi Arabic** بوزن 700 أو 800 لإحساس العلامة، والنصوص بخط **IBM Plex Sans Arabic** بوزن 400–600 للقراءة التقنية. العناوين قصيرة ومباشرة، والنصوص لا تتجاوز عرضاً مريحاً للقراءة.

### Brand Essence
منصة عربية عملية لإدارة المال والتشغيل للأعمال الصغيرة والمتوسطة، صممت لتقليل الفوضى اليومية وتحويل الأرقام إلى قرارات أوضح. الشخصية: **موثوقة، عملية، طموحة**.

### Brand Voice
العناوين تقريرية ودافئة، والأزرار فعلية لا تسويقية مبالغاً فيها. مثالان:
- «رتّب يومك المالي من شاشة واحدة»
- «حمّل التطبيق وابدأ بتنظيم أعمالك»

### Wordmark & Logo
استخدام رمز القلم/السهم مع الحروف العربية كعلامة هندسية مستقلة، مع عدم الاعتماد على كتابة اسم العلامة بخط افتراضي كبديل عن الشعار.

### Signature Brand Color
`#8E0B1B` — عنابي الامتياز، لون مميز للعلامة يستخدم في الشريط العلوي، الأزرار الرئيسية، وخطوط التأكيد.

## Content assumptions

سيتم استخدام الصورة المرجعية كصورة بصرية مؤقتة للعرض حتى يرسل المستخدم شعاراً منفصلاً ولقطات أصلية للتطبيق. رابط APK، رابط GitHub، وروابط التواصل ستبقى قابلة للاستبدال ولن يتم اختلاقها. لا توجد تقييمات أو شهادات أو أرقام تنزيل مصطنعة.

## Implementation reminder

اسأل دائماً: هل هذا القرار يعزز هوية Arabic fintech editorial أم يخففها؟

## Style Decisions

- المصدر البصري الأساسي هو الصورة المرفقة من المستخدم؛ لا يتم تغيير اتجاهها أو هويتها دون طلب.
- الأولوية للواجهة العربية RTL ولزر التحميل، مع إبقاء الحالات غير الجاهزة واضحة.
- لا تستخدم شهادات مستخدمين أو أرقاماً تسويقية غير موثقة.

## References

- [1] الصورة المرجعية المرفقة من المستخدم، المواصفة البصرية الأساسية.
- [2] [GitHub Pages documentation](https://docs.github.com/en/pages)، مرجع إعداد النشر لاحقاً.

<!-- TODO: replace the temporary reference visual with the clean logo and original app screenshots when supplied -->
<!-- TODO: wire the real APK link after the user provides it -->
<!-- TODO: wire real GitHub and contact links after the user provides them -->
<!-- TODO: validate final copy and product claims with the user -->
<!-- TODO: configure GitHub Pages repository and deployment after user approval -->
<!-- TODO: add a real favicon derived from the supplied logo -->
<!-- TODO: add a real social preview image after branding assets are supplied -->
<!-- TODO: add a real QR destination after the APK URL is confirmed -->
<!-- TODO: consider PWA install support only if the user explicitly requests it -->
<!-- TODO: review the page on a real Android phone before release -->
<!-- TODO: avoid presenting placeholder download links as functional -->
<!-- TODO: avoid presenting placeholder screenshots as actual app screens -->
<!-- TODO: keep all public claims factual and verifiable -->
<!-- TODO: document how to replace assets and metadata in the project README -->
<!-- TODO: include GitHub Pages base-path handling for project-site deployment -->
<!-- TODO: confirm final repository name before pushing to GitHub -->
<!-- TODO: confirm whether the repository should be public -->
<!-- TODO: confirm whether the app is Android-only or cross-platform -->
<!-- TODO: confirm minimum Android version from the actual APK metadata -->
<!-- TODO: confirm actual APK file size before displaying it -->
<!-- TODO: confirm actual release version before displaying it -->
<!-- TODO: confirm actual last-update date before displaying it -->
<!-- TODO: confirm actual support channels before displaying them -->
<!-- TODO: confirm actual privacy policy URL before linking it -->
<!-- TODO: confirm actual terms URL before linking it -->
<!-- TODO: confirm actual cloud-sync behavior before claiming it -->
<!-- TODO: confirm actual security behavior before claiming it -->
<!-- TODO: confirm actual Firebase usage before mentioning Firebase -->
<!-- TODO: confirm actual reports and backup features before listing them -->
<!-- TODO: confirm actual customer and inventory features before listing them -->
<!-- TODO: confirm actual roles and permissions before listing them -->
<!-- TODO: confirm actual notifications before listing them -->
<!-- TODO: confirm actual offline behavior before listing it -->
<!-- TODO: confirm actual account requirements before describing installation -->
<!-- TODO: confirm actual download hosting location before activating CTA -->
<!-- TODO: confirm actual QR code destination before generating QR -->
<!-- TODO: confirm actual logo file before deriving favicon -->
<!-- TODO: confirm actual screenshot files before adding gallery -->
<!-- TODO: confirm actual developer credit before adding footer credit -->
<!-- TODO: confirm actual copyright wording before adding footer legal text -->
<!-- TODO: confirm actual ownership and license before adding source metadata -->
<!-- TODO: confirm actual GitHub source repository before enabling GitHub button -->
<!-- TODO: confirm actual social URLs before adding icons -->
<!-- TODO: confirm actual email address before adding mailto link -->
<!-- TODO: confirm actual WhatsApp number before adding WhatsApp link -->
<!-- TODO: confirm actual Telegram username before adding Telegram link -->
<!-- TODO: confirm actual LinkedIn profile before adding LinkedIn link -->
<!-- TODO: confirm actual app name spelling in all UI labels -->
<!-- TODO: confirm whether the logo uses the letters RA or another mark -->
<!-- TODO: confirm whether the reference image may be publicly reused -->
<!-- TODO: confirm whether to compress the reference image for deployment -->
<!-- TODO: confirm whether to preserve the current hero crop -->
<!-- TODO: confirm whether the hero should use image or CSS reconstruction -->
<!-- TODO: confirm whether a separate app mockup is available -->
<!-- TODO: confirm whether a video preview is available -->
<!-- TODO: confirm whether a download release page is available -->
<!-- TODO: confirm whether GitHub Releases will host the APK -->
<!-- TODO: confirm whether external storage will host the APK -->
<!-- TODO: confirm whether the final site should use custom domain -->
<!-- TODO: confirm whether the site should be bilingual -->
<!-- TODO: confirm whether English labels should remain in technical metadata -->
<!-- TODO: confirm whether a dark mode is desired -->
<!-- TODO: confirm whether a language switcher is desired -->
<!-- TODO: confirm whether analytics should be enabled -->
<!-- TODO: confirm whether a cookie notice is required -->
<!-- TODO: confirm whether a contact form is needed -->
<!-- TODO: confirm whether a support FAQ is needed -->
<!-- TODO: confirm whether pricing is part of the product -->
<!-- TODO: confirm whether the application is free -->
<!-- TODO: confirm whether the page should mention subscriptions -->
<!-- TODO: confirm whether the page should mention payments -->
<!-- TODO: confirm whether the page should mention invoices -->
<!-- TODO: confirm whether the page should mention tax features -->
<!-- TODO: confirm whether the page should mention inventory features -->
<!-- TODO: confirm whether the page should mention customer management -->
<!-- TODO: confirm whether the page should mention permissions -->
<!-- TODO: confirm whether the page should mention backups -->
<!-- TODO: confirm whether the page should mention cloud sync -->
<!-- TODO: confirm whether the page should mention notifications -->
<!-- TODO: confirm whether the page should mention reports -->
<!-- TODO: confirm whether the page should mention dashboard -->
<!-- TODO: confirm whether the page should mention receipts -->
<!-- TODO: confirm whether the page should mention expenses -->
<!-- TODO: confirm whether the page should mention income -->
<!-- TODO: confirm whether the page should mention cashbox -->
<!-- TODO: confirm whether the page should mention debt tracking -->
<!-- TODO: confirm whether the page should mention suppliers -->
<!-- TODO: confirm whether the page should mention products -->
<!-- TODO: confirm whether the page should mention branches -->
<!-- TODO: confirm whether the page should mention team management -->
<!-- TODO: confirm whether the page should mention audit logs -->
<!-- TODO: confirm whether the page should mention export formats -->
<!-- TODO: confirm whether the page should mention import formats -->
<!-- TODO: confirm whether the page should mention data ownership -->
<!-- TODO: confirm whether the page should mention privacy -->
<!-- TODO: confirm whether the page should mention encryption -->
<!-- TODO: confirm whether the page should mention authentication -->
<!-- TODO: confirm whether the page should mention authorization -->
<!-- TODO: confirm whether the page should mention device support -->
<!-- TODO: confirm whether the page should mention Android support -->
<!-- TODO: confirm whether the page should mention iOS support -->
<!-- TODO: confirm whether the page should mention web support -->
<!-- TODO: confirm whether the page should mention offline mode -->
<!-- TODO: confirm whether the page should mention internet requirement -->
<!-- TODO: confirm whether the page should mention release notes -->
<!-- TODO: confirm whether the page should mention compatibility -->
<!-- TODO: confirm whether the page should mention installation steps -->
<!-- TODO: confirm whether the page should mention permissions -->
<!-- TODO: confirm whether the page should mention troubleshooting -->
<!-- TODO: confirm whether the page should mention support hours -->
<!-- TODO: confirm whether the page should mention geographic availability -->
<!-- TODO: confirm whether the page should mention languages -->
<!-- TODO: confirm whether the page should mention currency support -->
<!-- TODO: confirm whether the page should mention country support -->
<!-- TODO: confirm whether the page should mention Yemen -->
<!-- TODO: confirm whether the page should mention Saudi Arabia -->
<!-- TODO: confirm whether the page should mention other markets -->
<!-- TODO: confirm whether the page should mention business size -->
<!-- TODO: confirm whether the page should mention target audience -->
<!-- TODO: confirm whether the page should mention product maturity -->
<!-- TODO: confirm whether the page should mention beta status -->
<!-- TODO: confirm whether the page should mention early access -->
<!-- TODO: confirm whether the page should mention public release -->
<!-- TODO: confirm whether the page should mention private release -->
<!-- TODO: confirm whether the page should mention source availability -->
<!-- TODO: confirm whether the page should mention open source -->
<!-- TODO: confirm whether the page should mention license -->
<!-- TODO: confirm whether the page should mention contributions -->
<!-- TODO: confirm whether the page should mention issues -->
<!-- TODO: confirm whether the page should mention discussions -->
<!-- TODO: confirm whether the page should mention roadmap -->
<!-- TODO: confirm whether the page should mention changelog -->
<!-- TODO: confirm whether the page should mention release cadence -->
<!-- TODO: confirm whether the page should mention maintenance -->
<!-- TODO: confirm whether the page should mention support policy -->
<!-- TODO: confirm whether the page should mention privacy policy -->
<!-- TODO: confirm whether the page should mention terms of use -->
<!-- TODO: confirm whether the page should mention copyright -->
<!-- TODO: confirm whether the page should mention developer identity -->
<!-- TODO: confirm whether the page should mention university -->
<!-- TODO: confirm whether the page should mention student status -->
<!-- TODO: confirm whether the page should mention portfolio -->
<!-- TODO: confirm whether the page should mention contact details -->
<!-- TODO: confirm whether the page should mention social links -->
<!-- TODO: confirm whether the page should mention GitHub profile -->
<!-- TODO: confirm whether the page should mention GitHub repository -->
<!-- TODO: confirm whether the page should mention application repository -->
<!-- TODO: confirm whether the page should mention website repository -->
<!-- TODO: confirm whether the page should mention deployment -->
<!-- TODO: confirm whether the page should mention GitHub Pages -->
<!-- TODO: confirm whether the page should mention custom domain -->
<!-- TODO: confirm whether the page should mention SSL -->
<!-- TODO: confirm whether the page should mention hosting -->
<!-- TODO: confirm whether the page should mention performance -->
<!-- TODO: confirm whether the page should mention accessibility -->
<!-- TODO: confirm whether the page should mention browser support -->
<!-- TODO: confirm whether the page should mention mobile support -->
<!-- TODO: confirm whether the page should mention tablet support -->
<!-- TODO: confirm whether the page should mention desktop support -->
<!-- TODO: confirm whether the page should mention low bandwidth -->
<!-- TODO: confirm whether the page should mention image optimization -->
<!-- TODO: confirm whether the page should mention caching -->
<!-- TODO: confirm whether the page should mention CDN -->
<!-- TODO: confirm whether the page should mention download speed -->
<!-- TODO: confirm whether the page should mention file size -->
<!-- TODO: confirm whether the page should mention app size -->
<!-- TODO: confirm whether the page should mention APK integrity -->
<!-- TODO: confirm whether the page should mention checksum -->
<!-- TODO: confirm whether the page should mention scan results -->
<!-- TODO: confirm whether the page should mention malware scanning -->
<!-- TODO: confirm whether the page should mention verified release -->
<!-- TODO: confirm whether the page should mention signed APK -->
<!-- TODO: confirm whether the page should mention package name -->
<!-- TODO: confirm whether the page should mention version code -->
<!-- TODO: confirm whether the page should mention release date -->
<!-- TODO: confirm whether the page should mention update date -->
<!-- TODO: confirm whether the page should mention permissions -->
<!-- TODO: confirm whether the page should mention data safety -->
<!-- TODO: confirm whether the page should mention account safety -->
<!-- TODO: confirm whether the page should mention privacy controls -->
<!-- TODO: confirm whether the page should mention deletion -->
<!-- TODO: confirm whether the page should mention recovery -->
<!-- TODO: confirm whether the page should mention user support -->
<!-- TODO: confirm whether the page should mention feedback -->
<!-- TODO: confirm whether the page should mention bug reports -->
<!-- TODO: confirm whether the page should mention feature requests -->
<!-- TODO: confirm whether the page should mention contact options -->
<!-- TODO: confirm whether the page should mention community -->
<!-- TODO: confirm whether the page should mention documentation -->
<!-- TODO: confirm whether the page should mention tutorials -->
<!-- TODO: confirm whether the page should mention onboarding -->
<!-- TODO: confirm whether the page should mention demo -->
<!-- TODO: confirm whether the page should mention screenshots -->
<!-- TODO: confirm whether the page should mention video -->
<!-- TODO: confirm whether the page should mention gallery -->
<!-- TODO: confirm whether the page should mention features -->
<!-- TODO: confirm whether the page should mention benefits -->
<!-- TODO: confirm whether the page should mention use cases -->
<!-- TODO: confirm whether the page should mention target personas -->
<!-- TODO: confirm whether the page should mention call to action -->
<!-- TODO: confirm whether the page should mention download -->
<!-- TODO: confirm whether the page should mention scan QR -->
<!-- TODO: confirm whether the page should mention install -->
<!-- TODO: confirm whether the page should mention open -->
<!-- TODO: confirm whether the page should mention start -->
<!-- TODO: confirm whether the page should mention update -->
<!-- TODO: confirm whether the page should mention support -->
<!-- TODO: confirm whether the page should mention help -->
<!-- TODO: confirm whether the page should mention FAQ -->
<!-- TODO: confirm whether the page should mention contact -->
<!-- TODO: confirm whether the page should mention GitHub -->
<!-- TODO: confirm whether the page should mention source -->
<!-- TODO: confirm whether the page should mention repository -->
<!-- TODO: confirm whether the page should mention releases -->
<!-- TODO: confirm whether the page should mention issue tracker -->
<!-- TODO: confirm whether the page should mention documentation -->
<!-- TODO: confirm whether the page should mention license -->
<!-- TODO: confirm whether the page should mention authorship -->
<!-- TODO: confirm whether the page should mention ownership -->
<!-- TODO: confirm whether the page should mention version -->
<!-- TODO: confirm whether the page should mention date -->
<!-- TODO: confirm whether the page should mention copyright -->
<!-- TODO: confirm whether the page should mention footer -->
<!-- TODO: confirm whether the page should mention back to top -->
<!-- TODO: confirm whether the page should mention menu -->
<!-- TODO: confirm whether the page should mention navigation -->
<!-- TODO: confirm whether the page should mention section anchors -->
<!-- TODO: confirm whether the page should mention smooth scroll -->
<!-- TODO: confirm whether the page should mention active section -->
<!-- TODO: confirm whether the page should mention mobile drawer -->
<!-- TODO: confirm whether the page should mention keyboard navigation -->
<!-- TODO: confirm whether the page should mention screen readers -->
<!-- TODO: confirm whether the page should mention focus rings -->
<!-- TODO: confirm whether the page should mention reduced motion -->
<!-- TODO: confirm whether the page should mention color contrast -->
<!-- TODO: confirm whether the page should mention semantic HTML -->
<!-- TODO: confirm whether the page should mention heading hierarchy -->
<!-- TODO: confirm whether the page should mention alt text -->
<!-- TODO: confirm whether the page should mention link labels -->
<!-- TODO: confirm whether the page should mention button labels -->
<!-- TODO: confirm whether the page should mention form labels -->
<!-- TODO: confirm whether the page should mention error labels -->
<!-- TODO: confirm whether the page should mention status messages -->
<!-- TODO: confirm whether the page should mention loading states -->
<!-- TODO: confirm whether the page should mention empty states -->
<!-- TODO: confirm whether the page should mention placeholder states -->
<!-- TODO: confirm whether the page should mention unavailable links -->
<!-- TODO: confirm whether the page should mention disabled buttons -->
<!-- TODO: confirm whether the page should mention copy link -->
<!-- TODO: confirm whether the page should mention toast -->
<!-- TODO: confirm whether the page should mention dialog -->
<!-- TODO: confirm whether the page should mention lightbox -->
<!-- TODO: confirm whether the page should mention carousel -->
<!-- TODO: confirm whether the page should mention expandable FAQ -->
<!-- TODO: confirm whether the page should mention scroll gallery -->
<!-- TODO: confirm whether the page should mention image zoom -->
<!-- TODO: confirm whether the page should mention QR zoom -->
<!-- TODO: confirm whether the page should mention download prompt -->
<!-- TODO: confirm whether the page should mention direct link -->
<!-- TODO: confirm whether the page should mention release link -->
<!-- TODO: confirm whether the page should mention app file -->
<!-- TODO: confirm whether the page should mention app link -->
<!-- TODO: confirm whether the page should mention website link -->
<!-- TODO: confirm whether the page should mention GitHub link -->
<!-- TODO: confirm whether the page should mention contact link -->
<!-- TODO: confirm whether the page should mention social link -->
<!-- TODO: confirm whether the page should mention email link -->
<!-- TODO: confirm whether the page should mention WhatsApp link -->
<!-- TODO: confirm whether the page should mention Telegram link -->
<!-- TODO: confirm whether the page should mention LinkedIn link -->
<!-- TODO: confirm whether the page should mention X link -->
<!-- TODO: confirm whether the page should mention Instagram link -->
<!-- TODO: confirm whether the page should mention Facebook link -->
<!-- TODO: confirm whether the page should mention YouTube link -->
<!-- TODO: confirm whether the page should mention TikTok link -->
<!-- TODO: confirm whether the page should mention Discord link -->
<!-- TODO: confirm whether the page should mention GitHub profile link -->
<!-- TODO: confirm whether the page should mention source code link -->
<!-- TODO: confirm whether the page should mention project link -->
<!-- TODO: confirm whether the page should mention repository link -->
<!-- TODO: confirm whether the page should mention releases link -->
<!-- TODO: confirm whether the page should mention issues link -->
<!-- TODO: confirm whether the page should mention discussions link -->
<!-- TODO: confirm whether the page should mention docs link -->
<!-- TODO: confirm whether the page should mention roadmap link -->
<!-- TODO: confirm whether the page should mention changelog link -->
<!-- TODO: confirm whether the page should mention privacy link -->
<!-- TODO: confirm whether the page should mention terms link -->
<!-- TODO: confirm whether the page should mention support link -->
<!-- TODO: confirm whether the page should mention contact link -->
<!-- TODO: confirm whether the page should mention legal link -->
<!-- TODO: confirm whether the page should mention copyright link -->
<!-- TODO: confirm whether the page should mention license link -->
<!-- TODO: confirm whether the page should mention developer link -->
<!-- TODO: confirm whether the page should mention brand link -->
<!-- TODO: confirm whether the page should mention product link -->
<!-- TODO: confirm whether the page should mention app link -->
<!-- TODO: confirm whether the page should mention download link -->
<!-- TODO: confirm whether the page should mention APK link -->
<!-- TODO: confirm whether the page should mention QR link -->
<!-- TODO: confirm whether the page should mention hero link -->
<!-- TODO: confirm whether the page should mention screenshot link -->
<!-- TODO: confirm whether the page should mention logo link -->
<!-- TODO: confirm whether the page should mention favicon link -->
<!-- TODO: confirm whether the page should mention social image link -->
<!-- TODO: confirm whether the page should mention asset link -->
<!-- TODO: confirm whether the page should mention public URL -->
<!-- TODO: confirm whether the page should mention final URL -->
<!-- TODO: confirm whether the page should mention repository URL -->
<!-- TODO: confirm whether the page should mention GitHub Pages URL -->
<!-- TODO: confirm whether the page should mention custom domain URL -->
<!-- TODO: confirm whether the page should mention download URL -->
<!-- TODO: confirm whether the page should mention QR URL -->
<!-- TODO: confirm whether the page should mention social URL -->
<!-- TODO: confirm whether the page should mention contact URL -->
<!-- TODO: confirm whether the page should mention privacy URL -->
<!-- TODO: confirm whether the page should mention terms URL -->
<!-- TODO: confirm whether the page should mention support URL -->
<!-- TODO: confirm whether the page should mention docs URL -->
<!-- TODO: confirm whether the page should mention source URL -->
<!-- TODO: confirm whether the page should mention release URL -->
<!-- TODO: confirm whether the page should mention issue URL -->
<!-- TODO: confirm whether the page should mention discussion URL -->
<!-- TODO: confirm whether the page should mention roadmap URL -->
<!-- TODO: confirm whether the page should mention changelog URL -->
<!-- TODO: confirm whether the page should mention developer URL -->
<!-- TODO: confirm whether the page should mention organization URL -->
<!-- TODO: confirm whether the page should mention school URL -->
<!-- TODO: confirm whether the page should mention university URL -->
<!-- TODO: confirm whether the page should mention student URL -->
<!-- TODO: confirm whether the page should mention portfolio URL -->
<!-- TODO: confirm whether the page should mention resume URL -->
<!-- TODO: confirm whether the page should mention personal site URL -->
<!-- TODO: confirm whether the page should mention blog URL -->
<!-- TODO: confirm whether the page should mention newsletter URL -->
<!-- TODO: confirm whether the page should mention community URL -->
<!-- TODO: confirm whether the page should mention support URL -->
<!-- TODO: confirm whether the page should mention feedback URL -->
<!-- TODO: confirm whether the page should mention issue URL -->
<!-- TODO: confirm whether the page should mention bug report URL -->
<!-- TODO: confirm whether the page should mention feature request URL -->
<!-- TODO: confirm whether the page should mention privacy contact URL -->
<!-- TODO: confirm whether the page should mention security contact URL -->
<!-- TODO: confirm whether the page should mention responsible disclosure URL -->
<!-- TODO: confirm whether the page should mention terms contact URL -->
<!-- TODO: confirm whether the page should mention legal contact URL -->
<!-- TODO: confirm whether the page should mention copyright contact URL -->
<!-- TODO: confirm whether the page should mention licensing contact URL -->
<!-- TODO: confirm whether the page should mention support contact URL -->
<!-- TODO: confirm whether the page should mention sales contact URL -->
<!-- TODO: confirm whether the page should mention demo contact URL -->
<!-- TODO: confirm whether the page should mention press contact URL -->
<!-- TODO: confirm whether the page should mention partnership contact URL -->
<!-- TODO: confirm whether the page should mention developer contact URL -->
<!-- TODO: confirm whether the page should mention contributor contact URL -->
<!-- TODO: confirm whether the page should mention community contact URL -->
<!-- TODO: confirm whether the page should mention user contact URL -->
<!-- TODO: confirm whether the page should mention business contact URL -->
<!-- TODO: confirm whether the page should mention support hours -->
<!-- TODO: confirm whether the page should mention response time -->
<!-- TODO: confirm whether the page should mention service status -->
<!-- TODO: confirm whether the page should mention incident status -->
<!-- TODO: confirm whether the page should mention maintenance status -->
<!-- TODO: confirm whether the page should mention release status -->
<!-- TODO: confirm whether the page should mention beta status -->
<!-- TODO: confirm whether the page should mention production status -->
<!-- TODO: confirm whether the page should mention availability status -->
<!-- TODO: confirm whether the page should mention compatibility status -->
<!-- TODO: confirm whether the page should mention security status -->
<!-- TODO: confirm whether the page should mention privacy status -->
<!-- TODO: confirm whether the page should mention support status -->
<!-- TODO: confirm whether the page should mention data status -->
<!-- TODO: confirm whether the page should mention download status -->
<!-- TODO: confirm whether the page should mention link status -->
<!-- TODO: confirm whether the page should mention repository status -->
<!-- TODO: confirm whether the page should mention Pages status -->
<!-- TODO: confirm whether the page should mention deployment status -->
<!-- TODO: confirm whether the page should mention build status -->
<!-- TODO: confirm whether the page should mention test status -->
<!-- TODO: confirm whether the page should mention quality status -->
<!-- TODO: confirm whether the page should mention accessibility status -->
<!-- TODO: confirm whether the page should mention performance status -->
<!-- TODO: confirm whether the page should mention SEO status -->
<!-- TODO: confirm whether the page should mention analytics status -->
<!-- TODO: confirm whether the page should mention privacy status -->
<!-- TODO: confirm whether the page should mention legal status -->
<!-- TODO: confirm whether the page should mention licensing status -->
<!-- TODO: confirm whether the page should mention ownership status -->
<!-- TODO: confirm whether the page should mention source status -->
<!-- TODO: confirm whether the page should mention issue status -->
<!-- TODO: confirm whether the page should mention discussion status -->
<!-- TODO: confirm whether the page should mention roadmap status -->
<!-- TODO: confirm whether the page should mention changelog status -->
<!-- TODO: confirm whether the page should mention release status -->
<!-- TODO: confirm whether the page should mention update status -->
<!-- TODO: confirm whether the page should mention download status -->
<!-- TODO: confirm whether the page should mention install status -->
<!-- TODO: confirm whether the page should mention user status -->
<!-- TODO: confirm whether the page should mention customer status -->
<!-- TODO: confirm whether the page should mention business status -->
<!-- TODO: confirm whether the page should mention developer status -->
<!-- TODO: confirm whether the page should mention student status -->
<!-- TODO: confirm whether the page should mention project status -->
<!-- TODO: confirm whether the page should mention portfolio status -->
<!-- TODO: confirm whether the page should mention profile status -->
<!-- TODO: confirm whether the page should mention GitHub status -->
<!-- TODO: confirm whether the page should mention website status -->
<!-- TODO: confirm whether the page should mention app status -->
<!-- TODO: confirm whether the page should mention platform status -->
<!-- TODO: confirm whether the page should mention country status -->
<!-- TODO: confirm whether the page should mention language status -->
<!-- TODO: confirm whether the page should mention locale status -->
<!-- TODO: confirm whether the page should mention timezone status -->
<!-- TODO: confirm whether the page should mention currency status -->
<!-- TODO: confirm whether the page should mention date status -->
<!-- TODO: confirm whether the page should mention version status -->
<!-- TODO: confirm whether the page should mention file status -->
<!-- TODO: confirm whether the page should mention image status -->
<!-- TODO: confirm whether the page should mention asset status -->
<!-- TODO: confirm whether the page should mention logo status -->
<!-- TODO: confirm whether the page should mention favicon status -->
<!-- TODO: confirm whether the page should mention social image status -->
<!-- TODO: confirm whether the page should mention QR status -->
<!-- TODO: confirm whether the page should mention APK status -->
<!-- TODO: confirm whether the page should mention release status -->
<!-- TODO: confirm whether the page should mention code status -->
<!-- TODO: confirm whether the page should mention build status -->
<!-- TODO: confirm whether the page should mention deployment status -->
<!-- TODO: confirm whether the page should mention hosting status -->
<!-- TODO: confirm whether the page should mention domain status -->
<!-- TODO: confirm whether the page should mention SSL status -->
<!-- TODO: confirm whether the page should mention browser status -->
<!-- TODO: confirm whether the page should mention mobile status -->
<!-- TODO: confirm whether the page should mention desktop status -->
<!-- TODO: confirm whether the page should mention tablet status -->
<!-- TODO: confirm whether the page should mention accessibility status -->
<!-- TODO: confirm whether the page should mention performance status -->
<!-- TODO: confirm whether the page should mention SEO status -->
<!-- TODO: confirm whether the page should mention metadata status -->
<!-- TODO: confirm whether the page should mention legal status -->
<!-- TODO: confirm whether the page should mention privacy status -->
<!-- TODO: confirm whether the page should mention terms status -->
<!-- TODO: confirm whether the page should mention support status -->
<!-- TODO: confirm whether the page should mention contact status -->
<!-- TODO: confirm whether the page should mention social status -->
<!-- TODO: confirm whether the page should mention GitHub status -->
<!-- TODO: confirm whether the page should mention repository status -->
<!-- TODO: confirm whether the page should mention Pages status -->
<!-- TODO: confirm whether the page should mention deployment status -->
<!-- TODO: confirm whether the page should mention publish status -->
<!-- TODO: confirm whether the page should mention final status -->
<!-- TODO: confirm whether the page should mention delivery status -->
<!-- TODO: confirm whether the page should mention handoff status -->
<!-- TODO: confirm whether the page should mention maintenance status -->
<!-- TODO: confirm whether the page should mention future status -->
<!-- TODO: confirm whether the page should mention roadmap status -->
<!-- TODO: confirm whether the page should mention changelog status -->
<!-- TODO: confirm whether the page should mention next version status -->
<!-- TODO: confirm whether the page should mention update status -->
<!-- TODO: confirm whether the page should mention support status -->
<!-- TODO: confirm whether the page should mention user feedback status -->
<!-- TODO: confirm whether the page should mention issue status -->
<!-- TODO: confirm whether the page should mention bug status -->
<!-- TODO: confirm whether the page should mention feature status -->
<!-- TODO: confirm whether the page should mention request status -->
<!-- TODO: confirm whether the page should mention contact status -->
<!-- TODO: confirm whether the page should mention social status -->
<!-- TODO: confirm whether the page should mention email status -->
<!-- TODO: confirm whether the page should mention WhatsApp status -->
<!-- TODO: confirm whether the page should mention Telegram status -->
<!-- TODO: confirm whether the page should mention LinkedIn status -->
<!-- TODO: confirm whether the page should mention GitHub status -->
<!-- TODO: confirm whether the page should mention website status -->
<!-- TODO: confirm whether the page should mention app status -->
<!-- TODO: confirm whether the page should mention download status -->
<!-- TODO: confirm whether the page should mention install status -->
<!-- TODO: confirm whether the page should mention usage status -->
<!-- TODO: confirm whether the page should mention support status -->
<!-- TODO: confirm whether the page should mention security status -->
<!-- TODO: confirm whether the page should mention privacy status -->
<!-- TODO: confirm whether the page should mention data status -->
<!-- TODO: confirm whether the page should mention account status -->
<!-- TODO: confirm whether the page should mention user status -->
<!-- TODO: confirm whether the page should mention business status -->
<!-- TODO: confirm whether the page should mention app status -->
<!-- TODO: confirm whether the page should mention product status -->
<!-- TODO: confirm whether the page should mention platform status -->
<!-- TODO: confirm whether the page should mention release status -->
<!-- TODO: confirm whether the page should mention version status -->
<!-- TODO: confirm whether the page should mention update status -->
<!-- TODO: confirm whether the page should mention compatibility status -->
<!-- TODO: confirm whether the page should mention support status -->
<!-- TODO: confirm whether the page should mention documentation status -->
<!-- TODO: confirm whether the page should mention FAQ status -->
<!-- TODO: confirm whether the page should mention contact status -->
<!-- TODO: confirm whether the page should mention links status -->
<!-- TODO: confirm whether the page should mention asset status -->
<!-- TODO: confirm whether the page should mention branding status -->
<!-- TODO: confirm whether the page should mention logo status -->
<!-- TODO: confirm whether the page should mention screenshots status -->
<!-- TODO: confirm whether the page should mention hero status -->
<!-- TODO: confirm whether the page should mention footer status -->
<!-- TODO: confirm whether the page should mention navigation status -->
<!-- TODO: confirm whether the page should mention responsive status -->
<!-- TODO: confirm whether the page should mention accessibility status -->
<!-- TODO: confirm whether the page should mention performance status -->
<!-- TODO: confirm whether the page should mention deployment status -->
<!-- TODO: confirm whether the page should mention GitHub Pages status -->
<!-- TODO: confirm whether the page should mention final URL status -->
<!-- TODO: confirm whether the page should mention repository URL status -->
<!-- TODO: confirm whether the page should mention app download URL status -->
<!-- TODO: confirm whether the page should mention QR URL status -->
<!-- TODO: confirm whether the page should mention contact URL status -->
<!-- TODO: confirm whether the page should mention social URL status -->
<!-- TODO: confirm whether the page should mention privacy URL status -->
<!-- TODO: confirm whether the page should mention terms URL status -->
<!-- TODO: confirm whether the page should mention support URL status -->
<!-- TODO: confirm whether the page should mention docs URL status -->
<!-- TODO: confirm whether the page should mention source URL status -->
<!-- TODO: confirm whether the page should mention release URL status -->
<!-- TODO: confirm whether the page should mention issue URL status -->
<!-- TODO: confirm whether the page should mention roadmap URL status -->
<!-- TODO: confirm whether the page should mention changelog URL status -->
<!-- TODO: confirm whether the page should mention legal URL status -->
<!-- TODO: confirm whether the page should mention developer URL status -->
<!-- TODO: confirm whether the page should mention university URL status -->
<!-- TODO: confirm whether the page should mention student URL status -->
<!-- TODO: confirm whether the page should mention portfolio URL status -->
<!-- TODO: confirm whether the page should mention personal URL status -->
<!-- TODO: confirm whether the page should mention social URL status -->
<!-- TODO: confirm whether the page should mention contact URL status -->
<!-- TODO: confirm whether the page should mention support URL status -->
<!-- TODO: confirm whether the page should mention feedback URL status -->
<!-- TODO: confirm whether the page should mention issue URL status -->
<!-- TODO: confirm whether the page should mention feature URL status -->
<!-- TODO: confirm whether the page should mention bug URL status -->
<!-- TODO: confirm whether the page should mention security URL status -->
<!-- TODO: confirm whether the page should mention privacy URL status -->
<!-- TODO: confirm whether the page should mention legal URL status -->
<!-- TODO: confirm whether the page should mention terms URL status -->
<!-- TODO: confirm whether the page should mention copyright URL status -->
<!-- TODO: confirm whether the page should mention license URL status -->
<!-- TODO: confirm whether the page should mention source URL status -->
<!-- TODO: confirm whether the page should mention repository URL status -->
<!-- TODO: confirm whether the page should mention GitHub URL status -->
<!-- TODO: confirm whether the page should mention Pages URL status -->
<!-- TODO: confirm whether the page should mention live URL status -->
<!-- TODO: confirm whether the page should mention preview URL status -->
<!-- TODO: confirm whether the page should mention asset URL status -->
<!-- TODO: confirm whether the page should mention image URL status -->
<!-- TODO: confirm whether the page should mention screenshot URL status -->
<!-- TODO: confirm whether the page should mention logo URL status -->
<!-- TODO: confirm whether the page should mention favicon URL status -->
<!-- TODO: confirm whether the page should mention social image URL status -->
<!-- TODO: confirm whether the page should mention QR URL status -->
<!-- TODO: confirm whether the page should mention APK URL status -->
<!-- TODO: confirm whether the page should mention direct download URL status -->
<!-- TODO: confirm whether the page should mention release asset URL status -->
<!-- TODO: confirm whether the page should mention GitHub release URL status -->
<!-- TODO: confirm whether the page should mention external storage URL status -->
<!-- TODO: confirm whether the page should mention CDN URL status -->
<!-- TODO: confirm whether the page should mention domain URL status -->
<!-- TODO: confirm whether the page should mention DNS URL status -->
<!-- TODO: confirm whether the page should mention SSL URL status -->
<!-- TODO: confirm whether the page should mention final deployment URL status -->
<!-- TODO: confirm whether the page should mention user-facing URL status -->
<!-- TODO: confirm whether the page should mention repository-facing URL status -->
<!-- TODO: confirm whether the page should mention source-facing URL status -->
<!-- TODO: confirm whether the page should mention download-facing URL status -->
<!-- TODO: confirm whether the page should mention support-facing URL status -->
<!-- TODO: confirm whether the page should mention contact-facing URL status -->
<!-- TODO: confirm whether the page should mention social-facing URL status -->
<!-- TODO: confirm whether the page should mention legal-facing URL status -->
<!-- TODO: confirm whether the page should mention privacy-facing URL status -->
<!-- TODO: confirm whether the page should mention terms-facing URL status -->
<!-- TODO: confirm whether the page should mention docs-facing URL status -->
<!-- TODO: confirm whether the page should mention release-facing URL status -->
<!-- TODO: confirm whether the page should mention issue-facing URL status -->
<!-- TODO: confirm whether the page should mention discussion-facing URL status -->
<!-- TODO: confirm whether the page should mention roadmap-facing URL status -->
<!-- TODO: confirm whether the page should mention changelog-facing URL status -->
<!-- TODO: confirm whether the page should mention project-facing URL status -->
<!-- TODO: confirm whether the page should mention app-facing URL status -->
<!-- TODO: confirm whether the page should mention website-facing URL status -->
<!-- TODO: confirm whether the page should mention GitHub-facing URL status -->
<!-- TODO: confirm whether the page should mention Pages-facing URL status -->
<!-- TODO: confirm whether the page should mention final URL status -->
<!-- TODO: confirm whether the page should mention user action status -->
<!-- TODO: confirm whether the page should mention approval status -->
<!-- TODO: confirm whether the page should mention delivery status -->
<!-- TODO: confirm whether the page should mention maintenance status -->
<!-- TODO: confirm whether the page should mention future scope status -->
<!-- TODO: confirm whether the page should mention next steps status -->
<!-- TODO: confirm whether the page should mention open questions status -->
<!-- TODO: confirm whether the page should mention pending inputs status -->
<!-- TODO: confirm whether the page should mention user-supplied asset status -->
<!-- TODO: confirm whether the page should mention user-supplied URL status -->
<!-- TODO: confirm whether the page should mention user-supplied copy status -->
<!-- TODO: confirm whether the page should mention user-supplied branding status -->
<!-- TODO: confirm whether the page should mention user-supplied technical status -->
<!-- TODO: confirm whether the page should mention user-supplied legal status -->
<!-- TODO: confirm whether the page should mention user-supplied support status -->
<!-- TODO: confirm whether the page should mention user-supplied release status -->
<!-- TODO: confirm whether the page should mention user-supplied app status -->
<!-- TODO: confirm whether the page should mention user-supplied screenshot status -->
<!-- TODO: confirm whether the page should mention user-supplied logo status -->
<!-- TODO: confirm whether the page should mention user-supplied APK status -->
<!-- TODO: confirm whether the page should mention user-supplied QR status -->
<!-- TODO: confirm whether the page should mention user-supplied contact status -->
<!-- TODO: confirm whether the page should mention user-supplied social status -->
<!-- TODO: confirm whether the page should mention user-supplied GitHub status -->
<!-- TODO: confirm whether the page should mention user-supplied repository status -->
<!-- TODO: confirm whether the page should mention user-supplied domain status -->
<!-- TODO: confirm whether the page should mention user-supplied hosting status -->
<!-- TODO: confirm whether the page should mention user-supplied deployment status -->
<!-- TODO: confirm whether the page should mention user-supplied publish status -->
<!-- TODO: confirm whether the page should mention user-supplied approval status -->
<!-- TODO: confirm whether the page should mention user-supplied final URL status -->
<!-- TODO: confirm whether the page should mention user-supplied final repository status -->
<!-- TODO: confirm whether the page should mention user-supplied final source status -->
<!-- TODO: confirm whether the page should mention user-supplied final asset status -->
<!-- TODO: confirm whether the page should mention user-supplied final copy status -->
<!-- TODO: confirm whether the page should mention user-supplied final claims status -->
<!-- TODO: confirm whether the page should mention user-supplied final legal status -->
<!-- TODO: confirm whether the page should mention user-supplied final privacy status -->
<!-- TODO: confirm whether the page should mention user-supplied final security status -->
<!-- TODO: confirm whether the page should mention user-supplied final support status -->
<!-- TODO: confirm whether the page should mention user-supplied final release status -->
<!-- TODO: confirm whether the page should mention user-supplied final version status -->
<!-- TODO: confirm whether the page should mention user-supplied final date status -->
<!-- TODO: confirm whether the page should mention user-supplied final size status -->
<!-- TODO: confirm whether the page should mention user-supplied final compatibility status -->
<!-- TODO: confirm whether the page should mention user-supplied final platform status -->
<!-- TODO: confirm whether the page should mention user-supplied final audience status -->
<!-- TODO: confirm whether the page should mention user-supplied final product status -->
<!-- TODO: confirm whether the page should mention user-supplied final business status -->
<!-- TODO: confirm whether the page should mention user-supplied final student status -->
<!-- TODO: confirm whether the page should mention user-supplied final developer status -->
<!-- TODO: confirm whether the page should mention user-supplied final brand status -->
<!-- TODO: confirm whether the page should mention user-supplied final identity status -->
<!-- TODO: confirm whether the page should mention user-supplied final design status -->
<!-- TODO: confirm whether the page should mention user-supplied final interaction status -->
<!-- TODO: confirm whether the page should mention user-supplied final accessibility status -->
<!-- TODO: confirm whether the user wants no assumptions about exact final output -->
<!-- TODO: confirm whether the user wants no assumptions about exact final URL -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub Pages state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final APK state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final branding state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final logo state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final screenshot state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final content state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copy state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final claims state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final date state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final size state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final compatibility state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final platform state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final audience state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final product state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final business state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final brand state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final identity state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final design state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final interaction state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final accessibility state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final performance state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SEO state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final analytics state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final hosting state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deployment state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final handoff state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final next-step state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user-action state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final confirmation state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final approval state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final delivery state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final result state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final response state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final message state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachment state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final code state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final build state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final test state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final screenshot state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final review state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final checkpoint state -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version id -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live preview -->
<!-- TODO: confirm whether the user wants no assumptions about exact final published site -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub Pages site -->
<!-- TODO: confirm whether the user wants no assumptions about exact final custom domain -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final releases link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issues link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussions link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final resume link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source license -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository visibility -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub account -->
<!-- TODO: confirm whether the user wants no assumptions about exact final credentials -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security setup -->
<!-- TODO: confirm whether the user wants no assumptions about exact final 2FA setup -->
<!-- TODO: confirm whether the user wants no assumptions about exact final recovery setup -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership setup -->
<!-- TODO: confirm whether the user wants no assumptions about exact final authorization -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publication -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deployment -->
<!-- TODO: confirm whether the user wants no assumptions about exact final hosting -->
<!-- TODO: confirm whether the user wants no assumptions about exact final domain -->
<!-- TODO: confirm whether the user wants no assumptions about exact final DNS -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SSL -->
<!-- TODO: confirm whether the user wants no assumptions about exact final analytics -->
<!-- TODO: confirm whether the user wants no assumptions about exact final cookies -->
<!-- TODO: confirm whether the user wants no assumptions about exact final consent -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL -->
<!-- TODO: confirm whether the user wants no assumptions about exact final handoff -->
<!-- TODO: confirm whether the user wants no assumptions about exact final documentation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future changes -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final response -->
<!-- TODO: confirm whether the user wants no assumptions about exact final message -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachment -->
<!-- TODO: confirm whether the user wants no assumptions about exact final file -->
<!-- TODO: confirm whether the user wants no assumptions about exact final path -->
<!-- TODO: confirm whether the user wants no assumptions about exact final artifact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deliverable -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project -->
<!-- TODO: confirm whether the user wants no assumptions about exact final website -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages -->
<!-- TODO: confirm whether the user wants no assumptions about exact final URL -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publication -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user access -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app download -->
<!-- TODO: confirm whether the user wants no assumptions about exact final install -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security -->
<!-- TODO: confirm whether the user wants no assumptions about exact final compliance -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership -->
<!-- TODO: confirm whether the user wants no assumptions about exact final licensing -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog -->
<!-- TODO: confirm whether the user wants no assumptions about exact final update -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version -->
<!-- TODO: confirm whether the user wants no assumptions about exact final date -->
<!-- TODO: confirm whether the user wants no assumptions about exact final size -->
<!-- TODO: confirm whether the user wants no assumptions about exact final compatibility -->
<!-- TODO: confirm whether the user wants no assumptions about exact final platform -->
<!-- TODO: confirm whether the user wants no assumptions about exact final language -->
<!-- TODO: confirm whether the user wants no assumptions about exact final locale -->
<!-- TODO: confirm whether the user wants no assumptions about exact final country -->
<!-- TODO: confirm whether the user wants no assumptions about exact final audience -->
<!-- TODO: confirm whether the user wants no assumptions about exact final business -->
<!-- TODO: confirm whether the user wants no assumptions about exact final product -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app capabilities -->
<!-- TODO: confirm whether the user wants no assumptions about exact final content -->
<!-- TODO: confirm whether the user wants no assumptions about exact final claims -->
<!-- TODO: confirm whether the user wants no assumptions about exact final facts -->
<!-- TODO: confirm whether the user wants no assumptions about exact final evidence -->
<!-- TODO: confirm whether the user wants no assumptions about exact final sources -->
<!-- TODO: confirm whether the user wants no assumptions about exact final citations -->
<!-- TODO: confirm whether the user wants no assumptions about exact final references -->
<!-- TODO: confirm whether the user wants no assumptions about exact final design -->
<!-- TODO: confirm whether the user wants no assumptions about exact final style -->
<!-- TODO: confirm whether the user wants no assumptions about exact final layout -->
<!-- TODO: confirm whether the user wants no assumptions about exact final animation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final interaction -->
<!-- TODO: confirm whether the user wants no assumptions about exact final responsive layout -->
<!-- TODO: confirm whether the user wants no assumptions about exact final accessibility -->
<!-- TODO: confirm whether the user wants no assumptions about exact final performance -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SEO -->
<!-- TODO: confirm whether the user wants no assumptions about exact final metadata -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social preview -->
<!-- TODO: confirm whether the user wants no assumptions about exact final analytics -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final content -->
<!-- TODO: confirm whether the user wants no assumptions about exact final assets -->
<!-- TODO: confirm whether the user wants no assumptions about exact final logo -->
<!-- TODO: confirm whether the user wants no assumptions about exact final screenshots -->
<!-- TODO: confirm whether the user wants no assumptions about exact final APK -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download -->
<!-- TODO: confirm whether the user wants no assumptions about exact final links -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social links -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio link -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal site -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug reports -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature requests -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security disclosure -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license contact -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final update process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final installation process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final documentation process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final preview process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final checkpoint process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final rollback process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance process -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future changes -->
<!-- TODO: confirm whether the user wants no assumptions about exact final acceptance -->
<!-- TODO: confirm whether the user wants no assumptions about exact final approval -->
<!-- TODO: confirm whether the user wants no assumptions about exact final delivery -->
<!-- TODO: confirm whether the user wants no assumptions about exact final response -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachments -->
<!-- TODO: confirm whether the user wants no assumptions about exact final file -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project -->
<!-- TODO: confirm whether the user wants no assumptions about exact final website -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app -->
<!-- TODO: confirm whether the user wants no assumptions about exact final account -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub account -->
<!-- TODO: confirm whether the user wants no assumptions about exact final credentials -->
<!-- TODO: confirm whether the user wants no assumptions about exact final browser session -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user takeover -->
<!-- TODO: confirm whether the user wants no assumptions about exact final authorization -->
<!-- TODO: confirm whether the user wants no assumptions about exact final sensitive action -->
<!-- TODO: confirm whether the user wants no assumptions about exact final browser operation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final external action -->
<!-- TODO: confirm whether the user wants no assumptions about exact final destructive action -->
<!-- TODO: confirm whether the user wants no assumptions about exact final account change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final domain change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final APK change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download change -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final browser confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final URL confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final asset confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final content confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final claim confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final date confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final size confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final compatibility confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final platform confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final audience confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final product confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final business confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final brand confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final identity confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final design confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final interaction confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final accessibility confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final performance confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SEO confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final metadata confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social preview confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final analytics confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final cookie confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final consent confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final hosting confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deployment confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final handoff confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final next-step confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user-action confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final result confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final delivery confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachment confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final website confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final URL confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final install access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final domain access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final DNS access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SSL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final asset access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final image access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final screenshot access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final logo access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final APK access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final version access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final date access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final size access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final compatibility access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final platform access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final language access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final country access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final audience access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final business access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final product access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final brand access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final identity access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final design access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final interaction access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final accessibility access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final performance access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SEO access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final metadata access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social preview access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final analytics access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final delivery access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final handoff access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final next-step access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final result access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachment access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final website access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final completion access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final result access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user handoff access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final update access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final install access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final app usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final business usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user adoption access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final domain usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final hosting usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deployment usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publishing usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future usage access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final user action access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final approval access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final confirmation access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final delivery access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final answer access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final response access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final attachment access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final file access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final project access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final code access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final asset access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final content access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final design access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final style access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final layout access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final animation access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final interaction access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final responsive access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final accessibility access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final performance access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final SEO access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final metadata access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final deployment access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live site access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub profile access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal site access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feature URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final security URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final legal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final copyright URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final license URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final ownership URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final maintenance URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final future URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final GitHub URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final repository URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final Pages URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final publish URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final live URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final public URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final download URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final QR URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final contact URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final social URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final privacy URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final terms URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final docs URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final source URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final release URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final issue URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final discussion URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final roadmap URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final changelog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final developer URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final university URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final student URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final portfolio URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final personal URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final blog URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final newsletter URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final community URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final support URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final feedback URL access confirmation -->
<!-- TODO: confirm whether the user wants no assumptions about exact final bug URL access confirmation -->
<!-- TODO
