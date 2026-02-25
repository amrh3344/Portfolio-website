$(document).ready(function() {

    // ===== Dark / Light Mode with localStorage =====
    if(localStorage.getItem("theme") === "light") {
        $("body").addClass("light-mode");
        $("#theme-toggle i").removeClass("fa-moon").addClass("fa-sun");
    }

    $("#theme-toggle").click(function() {
        $("body").toggleClass("light-mode");
        $(this).find("i").toggleClass("fa-moon fa-sun");

        if($("body").hasClass("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    // ===== Language Toggle with localStorage =====
    const texts = {
        en: {
            heroH1: "Abdullah Mohammed Rifaat",
            heroH2: "And I'm a Frontend Developer",
            heroP: "I'm a Computer Engineering student passionate about web development. I have experience in Java, C++, HTML, CSS, and JavaScript. I enjoy building responsive and modern websites.",
            aboutP: "Hi! I am Abdullah Mohammed Rifaat, a third-year Computer Engineering student at Al-Baha University. I enjoy learning modern programming technologies such as Java and C++, and I have a special interest in cybersecurity. I always strive to apply what I learn in practical projects and continuously improve my skills. I love teamwork and contributing to useful projects.",
            projectsP: "Car Wash App is a service app for ordering car washing remotely. We worked on this app in the Software Engineering course for 3 months, implementing most of the concepts."
        },
        ar: {
            heroH1: "عبد الله محمد رفعت",
            heroH2: "أنا مطور واجهات أمامية",
            heroP: "أنا طالب هندسة حاسبات شغوف بتطوير الويب. لدي خبرة في Java و C++ و HTML و CSS و JavaScript. أحب بناء مواقع حديثة ومتجاوبة.",
            aboutP: "مرحباً! أنا عبد الله محمد رفعت، طالب هندسة حاسبات في السنة الثالثة بجامعة الباحة. أحب تعلم التقنيات الحديثة مثل Java و C++، ولدي اهتمام خاص بالأمن السيبراني. أسعى دائماً لتطبيق ما أتعلمه في مشاريع عملية وتحسين مهاراتي باستمرار. أحب العمل الجماعي والمساهمة في مشاريع مفيدة.",
            projectsP: "تطبيق كار واش هو تطبيق يقدم خدمة طلب الغسيل عن بعد وقد اشتغلنا على هذا التطبيق في مقرر هندسة البرمجيات خلال 3 أشهر عمل وقمنا بتطبيق أغلب مفاهيم المادة."
        }
    };

    let lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);

    $("#lang-toggle").click(function() {
        lang = (lang === "en") ? "ar" : "en";
        localStorage.setItem("lang", lang);
        setLanguage(lang);
    });

    function setLanguage(lang) {
        $("#hero-h1").text(texts[lang].heroH1);
        $("#hero-h2").text(texts[lang].heroH2);
        $("#hero-p").text(texts[lang].heroP);
        $("#about-p").text(texts[lang].aboutP);
        $("#projects-p").text(texts[lang].projectsP);
    }

    // ===== Smooth Scroll for Navbar and Back-to-Top =====
    $(".navbar-nav .nav-link, .footer-iconTop a").on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 800);
    });

    // ===== Progress Bars Animation =====
    const skillsProgress = [
        {selector: "#skills .progress-bar:nth-of-type(1)", percent: 80},
        {selector: "#skills .progress-bar:nth-of-type(2)", percent: 60},
        {selector: "#skills .progress-bar:nth-of-type(3)", percent: 45}
    ];

    skillsProgress.forEach(skill => {
        $(skill.selector).css('width', skill.percent + '%').text(skill.percent + '%');
    });

    // ===== Dynamic Projects Array (optional future use) =====
    const projects = [
        {img: "Imges/pro1.png", live: "#", code: "#"},
        {img: "Imges/pro2.png", live: "#", code: "#"},
        {img: "Imges/pro3.png", live: "#", code: "#"},
        {img: "Imges/pro4.png", live: "#", code: "#"},
        {img: "Imges/pro5.png", live: "#", code: "#"},
        {img: "Imges/pro6.png", live: "#", code: "#"},
        {img: "Imges/pro7.png", live: "#", code: "#"},
        {img: "Imges/pro8.png", live: "#", code: "#"},
        {img: "Imges/pro9.png", live: "#", code: "#"},
        {img: "Imges/pro10.png", live: "#", code: "#"}
    ];

    // يمكن إضافة كود لتوليد المشاريع ديناميكيًا من هنا إذا حبيت

});